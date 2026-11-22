'use client'

import {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react'
import homeData from '../_data/home-interactions.json'

const storyData = homeData.stories
const fortuneData = homeData.fortune
const luckyNumbers = [2, 3, 5, 7, 8, 10, 12, 30, 40, 90]
const months = [
  'ianuarie',
  'februarie',
  'martie',
  'aprilie',
  'mai',
  'iunie',
  'iulie',
  'august',
  'septembrie',
  'octombrie',
  'noiembrie',
  'decembrie',
]
let seenInSessionFor = null

function subscribeToFortuneSeen(callback) {
  window.addEventListener('storage', callback)
  window.addEventListener('na-fortune-seen', callback)
  return () => {
    window.removeEventListener('storage', callback)
    window.removeEventListener('na-fortune-seen', callback)
  }
}

function getFortuneSeen() {
  const { key } = getDailyFortune()
  if (seenInSessionFor === key) return true
  try {
    return window.localStorage.getItem('na-zi') === key
  } catch {
    return false
  }
}

function getServerFortuneSeen() {
  return false
}

function hash(value) {
  let result = 0
  for (let index = 0; index < value.length; index += 1) {
    result = (result * 31 + value.charCodeAt(index)) | 0
  }
  return Math.abs(result)
}

function getDailyFortune() {
  const date = new Date()
  const key = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  return { key, index: hash(`na${key}`) % fortuneData.items.length }
}

export function HomeInteractions({ children }) {
  const [storyKey, setStoryKey] = useState(null)
  const [storyIndex, setStoryIndex] = useState(0)
  const [storyProgress, setStoryProgress] = useState(0)
  const [storyTimerKey, setStoryTimerKey] = useState(0)
  const [storyPaused, setStoryPaused] = useState(false)
  const [fortuneOpen, setFortuneOpen] = useState(false)
  const [fortuneIndex, setFortuneIndex] = useState(0)
  const [fortuneRevealed, setFortuneRevealed] = useState(false)
  const [fortuneCracking, setFortuneCracking] = useState(false)
  const [fortuneBonus, setFortuneBonus] = useState(false)
  const [fortuneNote, setFortuneNote] = useState('')
  const [reduceMotion, setReduceMotion] = useState(false)
  const storyOpener = useRef(null)
  const storyCloseButton = useRef(null)
  const fortuneOpener = useRef(null)
  const fortuneCloseButton = useRef(null)
  const crackTimeout = useRef(null)
  const storyProgressRef = useRef(0)
  const seen = useSyncExternalStore(subscribeToFortuneSeen, getFortuneSeen, getServerFortuneSeen)
  const currentStory = storyKey ? storyData.stories[storyKey] : null
  const currentFortune = fortuneData.items[fortuneIndex]
  const currentFortuneType = fortuneData.types[currentFortune?.[1]]

  const closeStory = useCallback(() => {
    setStoryKey(null)
    setStoryPaused(false)
    window.requestAnimationFrame(() => storyOpener.current?.focus())
  }, [])

  const resetStoryProgress = useCallback(() => {
    storyProgressRef.current = 0
    setStoryProgress(0)
    setStoryTimerKey((key) => key + 1)
  }, [])

  const advanceStory = useCallback(() => {
    if (!currentStory) return
    resetStoryProgress()
    if (storyIndex < currentStory.slides.length) {
      setStoryIndex((index) => index + 1)
      return
    }
    const position = storyData.order.indexOf(storyKey)
    const nextKey = storyData.order[position + 1]
    if (nextKey) {
      setStoryKey(nextKey)
      setStoryIndex(0)
    } else {
      closeStory()
    }
  }, [closeStory, currentStory, resetStoryProgress, storyIndex, storyKey])

  const goToPreviousStory = useCallback(() => {
    if (!currentStory) return
    resetStoryProgress()
    if (storyIndex > 0) {
      setStoryIndex((index) => index - 1)
      return
    }
    const position = storyData.order.indexOf(storyKey)
    const previousKey = storyData.order[position - 1]
    if (previousKey) {
      setStoryKey(previousKey)
      setStoryIndex(storyData.stories[previousKey].slides.length)
    }
  }, [currentStory, resetStoryProgress, storyIndex, storyKey])

  const closeFortune = useCallback(() => {
    if (crackTimeout.current) window.clearTimeout(crackTimeout.current)
    crackTimeout.current = null
    setFortuneCracking(false)
    setFortuneOpen(false)
    window.requestAnimationFrame(() => fortuneOpener.current?.focus())
  }, [])

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReduceMotion(preference.matches)
    updatePreference()
    preference.addEventListener('change', updatePreference)
    return () => preference.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    document.body.style.overflow = storyKey || fortuneOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [storyKey, fortuneOpen])

  useEffect(() => {
    if (storyKey === null) return undefined

    storyCloseButton.current?.focus()
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeStory()
      if (event.key === 'ArrowRight') advanceStory()
      if (event.key === 'ArrowLeft') goToPreviousStory()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [storyKey, storyIndex, closeStory, advanceStory, goToPreviousStory])

  useEffect(() => {
    if (!storyKey || storyPaused || reduceMotion) {
      return undefined
    }

    let elapsed = storyProgressRef.current * 5000
    let lastUpdatedAt = Date.now()
    const timer = window.setInterval(() => {
      const now = Date.now()
      elapsed += now - lastUpdatedAt
      lastUpdatedAt = now
      const progress = Math.min(elapsed / 5000, 1)
      storyProgressRef.current = progress
      setStoryProgress(progress)
      if (progress >= 1) {
        window.clearInterval(timer)
        advanceStory()
      }
    }, 50)
    return () => window.clearInterval(timer)
  }, [storyKey, storyIndex, storyPaused, reduceMotion, storyTimerKey, advanceStory])

  useEffect(() => {
    if (!fortuneOpen) return undefined
    fortuneCloseButton.current?.focus()
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeFortune()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [fortuneOpen, closeFortune])

  useEffect(
    () => () => {
      if (crackTimeout.current) window.clearTimeout(crackTimeout.current)
    },
    [],
  )

  const handleClick = (event) => {
    const storyTrigger = event.target.closest('.na-hl')
    if (storyTrigger) {
      const key = storyTrigger.dataset.st || storyTrigger.getAttribute('href')?.replace(/^#/, '')
      if (storyData.stories[key]) {
        event.preventDefault()
        storyOpener.current = storyTrigger
        setFortuneOpen(false)
        setStoryKey(key)
        setStoryIndex(0)
        resetStoryProgress()
        return
      }
    }

    const fortuneTrigger = event.target.closest('.na-av-btn')
    if (fortuneTrigger) {
      fortuneOpener.current = fortuneTrigger
      const daily = getDailyFortune()
      setFortuneIndex(daily.index)
      setFortuneBonus(false)
      setFortuneRevealed(false)
      setFortuneCracking(false)
      setFortuneNote('')
      if (crackTimeout.current) window.clearTimeout(crackTimeout.current)
      crackTimeout.current = null
      setFortuneOpen(true)
    }
  }

  const openAnotherFortune = () => {
    let nextIndex = fortuneIndex
    while (nextIndex === fortuneIndex && fortuneData.items.length > 1) {
      nextIndex = Math.floor(Math.random() * fortuneData.items.length)
    }
    setFortuneIndex(nextIndex)
    setFortuneBonus(true)
    setFortuneRevealed(false)
    setFortuneCracking(false)
    setFortuneNote('')
  }

  const crackFortune = () => {
    if (fortuneCracking || fortuneRevealed) return
    setFortuneCracking(true)
    crackTimeout.current = window.setTimeout(() => {
      setFortuneCracking(false)
      setFortuneRevealed(true)
      setFortuneNote(fortuneIndex === getDailyFortune().index
        ? 'Mâine, alt fortune cookie.'
        : 'Ăsta a fost din noroc. Mai spargi unul?')
      seenInSessionFor = getDailyFortune().key
      try {
        window.localStorage.setItem('na-zi', getDailyFortune().key)
      } catch {
        // The cookie still works when storage is unavailable.
      }
      window.dispatchEvent(new Event('na-fortune-seen'))
      crackTimeout.current = null
    }, reduceMotion ? 0 : 450)
  }

  const date = new Date()
  const lucky = [
    luckyNumbers[(fortuneIndex * 7) % 10],
    luckyNumbers[(fortuneIndex * 7 + 3) % 10],
    luckyNumbers[(fortuneIndex * 7 + 6) % 10],
  ].sort((first, second) => first - second)
  const fortuneHref = currentFortune?.[3]
    ? currentFortune[3].startsWith('#')
      ? `/${currentFortune[3].slice(1)}`
      : currentFortune[3]
    : null
  const totalStorySlides = currentStory ? currentStory.slides.length + 1 : 0

  return (
    <div className={`home-interactions${seen ? ' fortune-seen' : ''}`} onClick={handleClick}>
      {children}
      {currentStory && (
        <div
          className="st"
          role="dialog"
          aria-modal="true"
          aria-label="Story"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeStory()
          }}
        >
          <div
            className="st-frame"
            style={{ background: currentStory.bg, color: currentStory.fg }}
            onPointerDown={() => setStoryPaused(true)}
            onPointerUp={() => setStoryPaused(false)}
            onPointerCancel={() => setStoryPaused(false)}
          >
            <div className="st-bars">
              {Array.from({ length: totalStorySlides }, (_, index) => (
                <span key={index}>
                  <i
                    style={{
                      width: `${index < storyIndex ? 100 : index === storyIndex ? storyProgress * 100 : 0}%`,
                    }}
                  />
                </span>
              ))}
            </div>
            <div className="st-head">
              <span className="st-av" aria-hidden="true">na</span>
              <strong>na.digital</strong>
              <span className="st-name">{currentStory.name}</span>
              <a className="st-page" href={`/${storyKey}`}>Pagina</a>
              <button
                ref={storyCloseButton}
                type="button"
                className="st-close"
                aria-label="Închide story-ul"
                onClick={closeStory}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <div className="st-slide" aria-live="polite">
              <span className="st-big">
                {storyIndex === currentStory.slides.length
                  ? `${currentStory.name}.`
                  : currentStory.slides[storyIndex][0]}
              </span>
              <span className="st-small">
                {storyIndex === currentStory.slides.length
                  ? 'Toată povestea e pe pagina ei.'
                  : currentStory.slides[storyIndex][1]}
              </span>
              {storyIndex === currentStory.slides.length && (
                <a
                  className={`st-cta btn${currentStory.bg === '#1E120C' ? ' inv' : ''}`}
                  href={`/${storyKey}`}
                >
                  {currentStory.cta}
                </a>
              )}
            </div>
            <button type="button" className="st-prev" aria-label="Slide-ul anterior" onClick={goToPreviousStory} />
            <button type="button" className="st-next" aria-label="Slide-ul următor" onClick={advanceStory} />
          </div>
        </div>
      )}
      {fortuneOpen && (
        <div
          className="st zi"
          role="dialog"
          aria-modal="true"
          aria-label="Fortune cookie"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeFortune()
          }}
        >
          <div className="st-frame">
            <div className="st-bars"><span><i style={{ width: '100%' }} /></span></div>
            <div className="st-head">
              <span className="st-av" aria-hidden="true">na</span>
              <strong>na.digital</strong>
              <span className="st-name">Fortune cookie</span>
              <button
                ref={fortuneCloseButton}
                type="button"
                className="st-close ml-auto"
                aria-label="Închide"
                onClick={closeFortune}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <div className="st-slide zi-slide" aria-live="polite">
              <span className="zi-date">
                {fortuneBonus ? 'Încă un fortune cookie · ' : 'Azi, '}
                {date.getDate()} {months[date.getMonth()]}
              </span>
              {!fortuneRevealed && (
                <>
                  <button
                    type="button"
                    className={`zi-cookie ${fortuneCracking ? 'crack' : 'wiggle'}`}
                    aria-label="Sparge fortune cookie-ul"
                    onClick={crackFortune}
                  >
                    <span aria-hidden="true">🥠</span>
                  </button>
                  <span className="zi-hint">
                    {fortuneBonus ? 'Încă unul. Atinge-l.' : 'Atinge fortune cookie-ul ca să-l spargi.'}
                  </span>
                </>
              )}
              {fortuneRevealed && (
                <>
                  <div className="zi-paper out" style={{ borderLeftColor: currentFortuneType[1] }}>
                    <div className="zi-row">
                      <span className="zi-emoji" aria-hidden="true">{currentFortune[0]}</span>
                      <span className="chip ink zi-type">{currentFortuneType[0]}</span>
                    </div>
                    <span className="zi-text">{currentFortune[2]}</span>
                    <span className="zi-nums">Numere norocoase: {lucky.join(' · ')}</span>
                  </div>
                  <div className="btns zi-btns">
                    <button type="button" className="btn btn-ink zi-lucky" onClick={openAnotherFortune}>
                      Mai sparge unul
                    </button>
                    {fortuneHref && (
                      <a className="btn zi-cta" href={fortuneHref} onClick={closeFortune}>
                        {currentFortune[4]}
                      </a>
                    )}
                  </div>
                  <span className="zi-note">{fortuneNote}</span>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export function HighlightSlider({ children, className }) {
  const trackRef = useRef(null)
  const drag = useRef({ active: false, moved: false, startX: 0, scrollLeft: 0 })
  const [fits, setFits] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)
  const [sliderDragging, setSliderDragging] = useState(false)
  const track = Children.only(children)

  const updateTrack = useCallback(() => {
    const element = trackRef.current
    if (!element) return
    const max = Math.max(0, element.scrollWidth - element.clientWidth - 2)
    setMaxScroll(max)
    setFits(max <= 0)
    setScrollPosition(element.scrollLeft)
  }, [])

  useEffect(() => {
    const element = trackRef.current
    if (!element) return undefined
    const frame = window.requestAnimationFrame(updateTrack)
    window.addEventListener('resize', updateTrack)
    const observer = new ResizeObserver(updateTrack)
    observer.observe(element)
    document.fonts?.ready.then(updateTrack)
    return () => {
      window.removeEventListener('resize', updateTrack)
      window.cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [updateTrack])

  const moveBy = (direction) => {
    const element = trackRef.current
    if (element) {
      element.scrollBy({ left: direction * Math.max(116, Math.floor(element.clientWidth * 0.8)), behavior: 'smooth' })
    }
  }

  const handlePointerDown = (event) => {
    const element = trackRef.current
    if (event.pointerType !== 'mouse' || fits || !element) return
    drag.current = {
      active: true,
      moved: false,
      startX: event.clientX,
      scrollLeft: element.scrollLeft,
    }
    setSliderDragging(false)
    element.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event) => {
    const element = trackRef.current
    if (!drag.current.active || !element) return
    const distance = event.clientX - drag.current.startX
    if (!drag.current.moved && Math.abs(distance) > 5) {
      drag.current.moved = true
      setSliderDragging(true)
    }
    if (drag.current.moved) element.scrollLeft = drag.current.scrollLeft - distance
  }

  const handlePointerUp = () => {
    const element = trackRef.current
    const wasMoved = drag.current.moved
    drag.current.active = false
    setSliderDragging(false)
    if (!wasMoved || !element) return

    const closestItem = Array.from(element.querySelectorAll('.na-hl')).reduce((closest, item) => {
      const distance = Math.abs(item.offsetLeft - element.offsetLeft - element.scrollLeft)
      return distance < closest.distance ? { item, distance } : closest
    }, { item: null, distance: Number.POSITIVE_INFINITY }).item

    if (closestItem) {
      element.scrollTo({ left: closestItem.offsetLeft - element.offsetLeft, behavior: 'smooth' })
    }
  }

  const trackProps = {
    ...track.props,
    ref: trackRef,
    className: `${track.props.className}${fits ? ' fits' : ''}${!fits && scrollPosition > 2 ? ' more-l' : ''}${!fits && scrollPosition < maxScroll ? ' more-r' : ''}${sliderDragging ? ' drag' : ''}`,
    onScroll: (event) => {
      track.props.onScroll?.(event)
      setScrollPosition(event.currentTarget.scrollLeft)
    },
    onPointerDown: handlePointerDown,
    onPointerMove: handlePointerMove,
    onPointerUp: handlePointerUp,
    onPointerCancel: handlePointerUp,
    onClickCapture: (event) => {
      if (drag.current.moved) {
        event.preventDefault()
        drag.current.moved = false
      }
    },
  }

  return (
    <div className={`na-slider${fits ? ' fits' : ''} ${className}`}>
      <button type="button" className="na-prev flex-none" aria-label="Înapoi" disabled={fits || scrollPosition <= 2} onClick={() => moveBy(-1)}>
        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 5l-7 7 7 7" />
        </svg>
      </button>
      {cloneElement(track, trackProps)}
      <button type="button" className="na-next flex-none" aria-label="Înainte" disabled={fits || scrollPosition >= maxScroll} onClick={() => moveBy(1)}>
        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export function GridEntrance({ children, className }) {
  const gridRef = useRef(null)
  const [entered, setEntered] = useState(false)
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    if (!('IntersectionObserver' in window)) return undefined

    let timeoutId
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      setEntered(true)
      observer.disconnect()
      timeoutId = window.setTimeout(() => setFinished(true), 1400)
    }, { threshold: 0.15 })
    observer.observe(grid)
    return () => {
      observer.disconnect()
      if (timeoutId) window.clearTimeout(timeoutId)
    }
  }, [])

  const childArray = Children.toArray(children)
  const tiles = childArray.map((child, index) => {
    if (!isValidElement(child) || !child.props.className?.includes('na-tile')) return child
    const tileIndex = childArray
      .slice(0, index)
      .filter((previous) => isValidElement(previous) && previous.props.className?.includes('na-tile'))
      .length
    return cloneElement(child, {
      style: { ...child.props.style, '--i': tileIndex },
    })
  })

  return (
    <div
      ref={gridRef}
      className={`${className} na-anim${entered ? ' in' : ''}${finished ? ' done' : ''}`}
    >
      {tiles}
    </div>
  )
}
