'use client'

import { useRef, useState } from 'react'
import { GridEntrance } from './HomeInteractions'

const feeds = [
  {
    label: 'Postări',
    posts: [
      ['na', 'Cea mai folosită interjecție românească între noi două. Așa dăm mai departe ce știm.', 'na-tile-first bg-brand-white [border:1px_solid_var(--color-brand-border)]'],
      ['Cum se face', 'Tutoriale pe care le poți aplica singur, fără să ai nevoie de noi.', 'bg-brand-mustard'],
      ['Trendul', 'Ce merge acum pe Instagram și TikTok și dacă merită pentru tine.', 'bg-brand-sky'],
      ['Adevărul', 'Ce nu-ți spune nimeni despre industria asta.', 'bg-brand-ink text-brand-cream'],
      ['Întrebarea', 'Ne întrebi orice despre social media, îți răspundem într-o postare sau în DM.', 'bg-brand-purple'],
      ['Ce-am făcut', 'Proiectele noastre, cu tot cu proces.', 'bg-brand-tomato'],
    ],
  },
  {
    label: 'Fixate',
    posts: [
      ['na.digital', 'Două fondatoare. Cinci serii în feed. Zero deck-uri de 80 de slide-uri.', 'na-tile-first bg-brand-white [border:1px_solid_var(--color-brand-border)]'],
      ['Ce facem', 'Strategie, conținut și administrare social media, lună de lună.', 'bg-brand-mustard'],
      ['Cine suntem', 'Două prietene din publicitate, care dau mai departe ce știu.', 'bg-brand-purple'],
      ['Cum lucrăm', 'O zi de filmare. Conținut gândit direct pentru feed.', 'bg-brand-sky'],
      ['Ce-am făcut', 'Povești și proiecte la care ținem.', 'bg-brand-tomato'],
      ['Hai să vorbim', 'Spune-ne unde ești și unde vrei să ajungi.', 'bg-brand-ink text-brand-cream'],
    ],
  },
  {
    label: 'Carusele',
    posts: [
      ['Profilul', 'Ce vede cineva când intră prima dată pe contul tău?', 'na-tile-first bg-brand-white [border:1px_solid_var(--color-brand-border)]'],
      ['Conținutul', 'Idei pe care le poți transforma în postări utile.', 'bg-brand-mustard'],
      ['Trend sau idee?', 'Cum alegi ce merită să ajungă în feed.', 'bg-brand-sky'],
      ['Adevărul', 'Social media, fără promisiuni de viralitate.', 'bg-brand-ink text-brand-cream'],
      ['Întrebări bune', 'Răspunsuri scurte la întrebări pe care ni le pui des.', 'bg-brand-purple'],
      ['Din proiecte', 'Ce am făcut, ce am învățat și ce a ieșit.', 'bg-brand-tomato'],
    ],
  },
]

export default function HomeFeedTabs() {
  const [activeTab, setActiveTab] = useState(0)
  const tabRefs = useRef([])

  const selectTab = (index, focus = false) => {
    setActiveTab(index)
    if (focus) tabRefs.current[index]?.focus()
  }

  const handleKeyDown = (event, index) => {
    let nextIndex
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % feeds.length
    if (event.key === 'ArrowLeft') nextIndex = (index + feeds.length - 1) % feeds.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = feeds.length - 1
    if (nextIndex === undefined) return
    event.preventDefault()
    selectTab(nextIndex, true)
  }

  return (
    <section className="max-w-[1080px] [margin:0_auto] p-[0_28px_96px]" aria-label="Postări din feed">
      <div className="tabs tabs-border home-feed-tablist mb-[24px] text-[13px] font-semibold tracking-[1px] uppercase" role="tablist" aria-label="Tipul de postări">
        {feeds.map((feed, index) => (
          <button
            key={feed.label}
            ref={(element) => { tabRefs.current[index] = element }}
            id={`feed-tab-${index}`}
            type="button"
            className={`tab${index === activeTab ? ' tab-active' : ''}`}
            role="tab"
            aria-selected={index === activeTab}
            aria-controls={`feed-panel-${index}`}
            tabIndex={index === activeTab ? 0 : -1}
            onClick={() => selectTab(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            {feed.label}
          </button>
        ))}
      </div>
      {feeds.map((feed, index) => (
        <div
          key={feed.label}
          id={`feed-panel-${index}`}
          role="tabpanel"
          aria-labelledby={`feed-tab-${index}`}
          hidden={index !== activeTab}
          tabIndex={0}
        >
          <GridEntrance className="na-grid flex flex-wrap gap-[6px]">
            {feed.posts.map(([title, description, color], postIndex) => (
              <article
                key={title}
                className={`na-tile ${color} [flex:1_1_300px] aspect-[4/5] p-[28px] box-border flex flex-col justify-between`}
              >
                <span className={postIndex === 0
                  ? "[font-family:'Unbounded',_sans-serif] font-extrabold text-[76px] leading-[0.9] tracking-[-3px]"
                  : "[font-family:'Unbounded',_sans-serif] font-extrabold text-[38px] leading-[1]"}
                >
                  {title}
                </span>
                <span className="na-tile-d font-medium">{description}</span>
              </article>
            ))}
          </GridEntrance>
        </div>
      ))}
    </section>
  )
}
