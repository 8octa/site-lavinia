"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import defaultCopy from "./copy.json";
import localizedHref from "../localizedHref";
import stories from "./stories.json";
import fortune from "./fortune.json";
import storiesEn from "./stories.en.json";
import fortuneEn from "./fortune.en.json";
const defaultStoryData = stories;
const defaultFortuneData = fortune;
const luckyNumbers = [2, 3, 5, 7, 8, 10, 12, 30, 40, 90];
const storyThemeClasses = {
  "#FFFFFF": "bg-brand-white text-brand-ink",
  "#E8B03A": "bg-brand-mustard text-brand-ink",
  "#FBE29A": "bg-brand-yellow text-brand-ink",
  "#E2432B": "bg-brand-tomato text-brand-ink",
  "#8CC8EA": "bg-brand-sky text-brand-ink",
  "#C3A6F2": "bg-brand-purple text-brand-ink",
  "#F3EADB": "bg-brand-cream-muted text-brand-ink",
  "#1E120C": "bg-brand-ink text-brand-cream",
};
const fortuneBorderClasses = {
  "#E8B03A": "border-l-brand-mustard",
  "#8CC8EA": "border-l-brand-sky",
  "#C3A6F2": "border-l-brand-purple",
  "#E2432B": "border-l-brand-tomato",
};
const progressClasses = [
  "w-0",
  "w-[10%]",
  "w-[20%]",
  "w-[30%]",
  "w-[40%]",
  "w-[50%]",
  "w-[60%]",
  "w-[70%]",
  "w-[80%]",
  "w-[90%]",
  "w-full",
];
const tileDelayClasses = [
  "[transition-delay:0ms]",
  "[transition-delay:90ms]",
  "[transition-delay:180ms]",
  "[transition-delay:270ms]",
  "[transition-delay:360ms]",
  "[transition-delay:450ms]",
  "[transition-delay:540ms]",
  "[transition-delay:630ms]",
  "[transition-delay:720ms]",
];

let seenInSessionFor = null;

function subscribeToFortuneSeen(callback) {
  window.addEventListener("storage", callback);
  window.addEventListener("na-fortune-seen", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("na-fortune-seen", callback);
  };
}

function getFortuneSeen() {
  const { key } = getDailyFortune();
  if (seenInSessionFor === key) return true;
  try {
    return window.localStorage.getItem("na-zi") === key;
  } catch {
    return false;
  }
}

function getServerFortuneSeen() {
  return false;
}

function hash(value) {
  let result = 0;
  for (let index = 0; index < value.length; index += 1) {
    result = (result * 31 + value.charCodeAt(index)) | 0;
  }
  return Math.abs(result);
}

function getDailyFortune() {
  const date = new Date();
  const key = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  return { key, index: hash(`na${key}`) % defaultFortuneData.items.length };
}

export function HomeInteractions({ children, copy = defaultCopy, locale = "ro" }) {
  const storyData = locale === "en" ? storiesEn : defaultStoryData;
  const fortuneData = locale === "en" ? fortuneEn : defaultFortuneData;
  const [storyKey, setStoryKey] = useState(null);
  const [storyIndex, setStoryIndex] = useState(0);
  const [storyProgress, setStoryProgress] = useState(0);
  const [storyTimerKey, setStoryTimerKey] = useState(0);
  const [storyPaused, setStoryPaused] = useState(false);
  const [fortuneOpen, setFortuneOpen] = useState(false);
  const [fortuneIndex, setFortuneIndex] = useState(0);
  const [fortuneRevealed, setFortuneRevealed] = useState(false);
  const [fortuneCracking, setFortuneCracking] = useState(false);
  const [fortuneBonus, setFortuneBonus] = useState(false);
  const [fortuneNote, setFortuneNote] = useState("");
  const [reduceMotion, setReduceMotion] = useState(false);
  const storyOpener = useRef(null);
  const storyCloseButton = useRef(null);
  const fortuneOpener = useRef(null);
  const fortuneCloseButton = useRef(null);
  const crackTimeout = useRef(null);
  const storyProgressRef = useRef(0);
  const seen = useSyncExternalStore(
    subscribeToFortuneSeen,
    getFortuneSeen,
    getServerFortuneSeen,
  );
  const currentStory = storyKey ? storyData.stories[storyKey] : null;
  const currentFortune = fortuneData.items[fortuneIndex];
  const currentFortuneType = fortuneData.types[currentFortune?.[1]];

  const closeStory = useCallback(() => {
    setStoryKey(null);
    setStoryPaused(false);
    window.requestAnimationFrame(() => storyOpener.current?.focus());
  }, []);

  const resetStoryProgress = useCallback(() => {
    storyProgressRef.current = 0;
    setStoryProgress(0);
    setStoryTimerKey((key) => key + 1);
  }, []);

  const advanceStory = useCallback(() => {
    if (!currentStory) return;
    resetStoryProgress();
    if (storyIndex < currentStory.slides.length) {
      setStoryIndex((index) => index + 1);
      return;
    }
    const position = storyData.order.indexOf(storyKey);
    const nextKey = storyData.order[position + 1];
    if (nextKey) {
      setStoryKey(nextKey);
      setStoryIndex(0);
    } else {
      closeStory();
    }
  }, [
    closeStory,
    currentStory,
    resetStoryProgress,
    storyData.order,
    storyIndex,
    storyKey,
  ]);

  const goToPreviousStory = useCallback(() => {
    if (!currentStory) return;
    resetStoryProgress();
    if (storyIndex > 0) {
      setStoryIndex((index) => index - 1);
      return;
    }
    const position = storyData.order.indexOf(storyKey);
    const previousKey = storyData.order[position - 1];
    if (previousKey) {
      setStoryKey(previousKey);
      setStoryIndex(storyData.stories[previousKey].slides.length);
    }
  }, [
    currentStory,
    resetStoryProgress,
    storyData.order,
    storyData.stories,
    storyIndex,
    storyKey,
  ]);

  const closeFortune = useCallback(() => {
    if (crackTimeout.current) window.clearTimeout(crackTimeout.current);
    crackTimeout.current = null;
    setFortuneCracking(false);
    setFortuneOpen(false);
    window.requestAnimationFrame(() => fortuneOpener.current?.focus());
  }, []);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "overflow-hidden",
      Boolean(storyKey || fortuneOpen),
    );
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [storyKey, fortuneOpen]);

  useEffect(() => {
    if (storyKey === null) return undefined;

    storyCloseButton.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeStory();
      if (event.key === "ArrowRight") advanceStory();
      if (event.key === "ArrowLeft") goToPreviousStory();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [storyKey, storyIndex, closeStory, advanceStory, goToPreviousStory]);

  useEffect(() => {
    if (!storyKey || storyPaused || reduceMotion) {
      return undefined;
    }

    let elapsed = storyProgressRef.current * 5000;
    let lastUpdatedAt = Date.now();
    const timer = window.setInterval(() => {
      const now = Date.now();
      elapsed += now - lastUpdatedAt;
      lastUpdatedAt = now;
      const progress = Math.min(elapsed / 5000, 1);
      storyProgressRef.current = progress;
      setStoryProgress(progress);
      if (progress >= 1) {
        window.clearInterval(timer);
        advanceStory();
      }
    }, 50);
    return () => window.clearInterval(timer);
  }, [
    storyKey,
    storyIndex,
    storyPaused,
    reduceMotion,
    storyTimerKey,
    advanceStory,
  ]);

  useEffect(() => {
    if (!fortuneOpen) return undefined;
    fortuneCloseButton.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeFortune();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [fortuneOpen, closeFortune]);

  useEffect(
    () => () => {
      if (crackTimeout.current) window.clearTimeout(crackTimeout.current);
    },
    [],
  );

  const handleClick = (event) => {
    const storyTrigger = event.target.closest(".na-hl");
    if (storyTrigger) {
      const key =
        storyTrigger.dataset.st ||
        storyTrigger.getAttribute("href")?.replace(/^#/, "");
      if (storyData.stories[key]) {
        event.preventDefault();
        storyOpener.current = storyTrigger;
        setFortuneOpen(false);
        setStoryKey(key);
        setStoryIndex(0);
        resetStoryProgress();
        return;
      }
    }

    const fortuneTrigger = event.target.closest(".na-av-btn");
    if (fortuneTrigger) {
      fortuneOpener.current = fortuneTrigger;
      const daily = getDailyFortune();
      setFortuneIndex(daily.index);
      setFortuneBonus(false);
      setFortuneRevealed(false);
      setFortuneCracking(false);
      setFortuneNote("");
      if (crackTimeout.current) window.clearTimeout(crackTimeout.current);
      crackTimeout.current = null;
      setFortuneOpen(true);
    }
  };

  const openAnotherFortune = () => {
    let nextIndex = fortuneIndex;
    while (nextIndex === fortuneIndex && fortuneData.items.length > 1) {
      nextIndex = Math.floor(Math.random() * fortuneData.items.length);
    }
    setFortuneIndex(nextIndex);
    setFortuneBonus(true);
    setFortuneRevealed(false);
    setFortuneCracking(false);
    setFortuneNote("");
  };

  const crackFortune = () => {
    if (fortuneCracking || fortuneRevealed) return;
    setFortuneCracking(true);
    crackTimeout.current = window.setTimeout(
      () => {
        setFortuneCracking(false);
        setFortuneRevealed(true);
        setFortuneNote(
          fortuneIndex === getDailyFortune().index
            ? copy.grid_ui.maine_alt_fortune_cookie
            : copy.grid_ui.asta_a_fost_din_noroc_mai_spargi_unul,
        );
        seenInSessionFor = getDailyFortune().key;
        try {
          window.localStorage.setItem("na-zi", getDailyFortune().key);
        } catch {
          // The cookie still works when storage is unavailable.
        }
        window.dispatchEvent(new Event("na-fortune-seen"));
        crackTimeout.current = null;
      },
      reduceMotion ? 0 : 450,
    );
  };

  const date = new Date();
  const lucky = [
    luckyNumbers[(fortuneIndex * 7) % 10],
    luckyNumbers[(fortuneIndex * 7 + 3) % 10],
    luckyNumbers[(fortuneIndex * 7 + 6) % 10],
  ].sort((first, second) => first - second);
  const fortuneHref = currentFortune?.[3]
    ? currentFortune[3].startsWith("#")
      ? `/${currentFortune[3].slice(1)}`
      : currentFortune[3]
    : null;
  const totalStorySlides = currentStory ? currentStory.slides.length + 1 : 0;

  return (
    <div
      className={`home-interactions${seen ? " fortune-seen" : ""}`}
      onClick={handleClick}
    >
      {children}
      {currentStory && (
        <div
          className="st"
          role="dialog"
          aria-modal="true"
          aria-label={copy.story_ui.story}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeStory();
          }}
        >
          <div
            className={`st-frame ${storyThemeClasses[currentStory.bg] ?? "bg-brand-white text-brand-ink"}`}
            onPointerDown={() => setStoryPaused(true)}
            onPointerUp={() => setStoryPaused(false)}
            onPointerCancel={() => setStoryPaused(false)}
          >
            <div className="st-bars">
              {Array.from({ length: totalStorySlides }, (_, index) => (
                <span key={index}>
                  <i
                    className={
                      index < storyIndex
                        ? progressClasses[10]
                        : index === storyIndex
                          ? progressClasses[Math.round(storyProgress * 10)]
                          : progressClasses[0]
                    }
                  />
                </span>
              ))}
            </div>
            <div className="st-head">
              <span className="st-av" aria-hidden="true">
                {copy.story_ui.na}
              </span>
              <strong>{copy.story_ui.na_digital}</strong>
              <span className="st-name">{currentStory.name}</span>
              <a
                className="st-page"
                href={localizedHref(`/${storyKey}`, locale)}
              >
                {copy.story_ui.pagina}
              </a>
              <button
                ref={storyCloseButton}
                type="button"
                className="st-close"
                aria-label={copy.story_ui.inchide_story_ul}
                onClick={closeStory}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                >
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
                  ? copy.story_ui.toata_povestea_e_pe_pagina_ei
                  : currentStory.slides[storyIndex][1]}
              </span>
              {storyIndex === currentStory.slides.length && (
                <a
                  className={`st-cta btn${currentStory.bg === "#1E120C" ? " inv" : ""}`}
                  href={localizedHref(`/${storyKey}`, locale)}
                >
                  {currentStory.cta}
                </a>
              )}
            </div>
            <button
              type="button"
              className="st-prev"
              aria-label={copy.story_ui.slide_ul_anterior}
              onClick={goToPreviousStory}
            />
            <button
              type="button"
              className="st-next"
              aria-label={copy.story_ui.slide_ul_urmator}
              onClick={advanceStory}
            />
          </div>
        </div>
      )}
      {fortuneOpen && (
        <div
          className="st zi"
          role="dialog"
          aria-modal="true"
          aria-label={copy.fortune_ui.fortune_cookie}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeFortune();
          }}
        >
          <div className="st-frame">
            <div className="st-bars">
              <span>
                <i className="w-full" />
              </span>
            </div>
            <div className="st-head">
              <span className="st-av" aria-hidden="true">
                {copy.fortune_ui.na}
              </span>
              <strong>{copy.fortune_ui.na_digital}</strong>
              <span className="st-name">{copy.fortune_ui.fortune_cookie}</span>
              <button
                ref={fortuneCloseButton}
                type="button"
                className="st-close ml-auto"
                aria-label={copy.fortune_ui.inchide}
                onClick={closeFortune}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <div className="st-slide zi-slide" aria-live="polite">
              <span className="zi-date">
                {fortuneBonus
                  ? copy.fortune_ui.inca_un_fortune_cookie
                  : copy.fortune_ui.azi}
                {date.getDate()} {fortuneData.months[date.getMonth()]}
              </span>
              {!fortuneRevealed && (
                <>
                  <button
                    type="button"
                    className={`zi-cookie ${fortuneCracking ? "crack" : "wiggle"}`}
                    aria-label={copy.fortune_ui.sparge_fortune_cookie_ul}
                    onClick={crackFortune}
                  >
                    <span className="zi-cookie-art" aria-hidden="true">
                      <svg viewBox="0 0 220 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M19 65C19 52 30 42 43 42H104L98 111H44C31 111 21 102 21 89C21 81 25 74 31 69L19 65Z"
                          fill="#D9A536"
                        />
                        <path
                          d="M43 42C64 29 88 29 111 41C126 49 136 61 139 78L98 111C86 98 82 86 77 73C67 58 54 47 43 42Z"
                          fill="#EFCB65"
                        />
                        <path
                          d="M111 41C134 47 152 63 161 82L112 113C102 104 96 94 96 83C96 66 101 51 111 41Z"
                          fill="#F6E7A3"
                        />
                        <path
                          d="M112 113C94 121 74 129 57 125C42 121 32 105 43 88C51 76 62 65 74 55C83 47 95 43 111 41C101 51 96 66 96 83C96 94 102 104 112 113Z"
                          fill="#F19A52"
                        />
                        <path
                          d="M43 88C51 76 62 65 74 55C83 47 95 43 111 41C101 51 96 66 96 83C96 94 102 104 112 113C94 121 74 129 57 125C42 121 32 105 43 88Z"
                          fill="url(#cookieGlow)"
                        />
                        <path
                          d="M112 113L167 91L193 104L160 127L112 113Z"
                          fill="#FFFDF3"
                          stroke="#F4F0DD"
                          strokeWidth="3"
                          strokeLinejoin="round"
                        />
                        <defs>
                          <linearGradient id="cookieGlow" x1="53" y1="48" x2="92" y2="127" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#D8A347" />
                            <stop offset=".55" stopColor="#EBA85B" />
                            <stop offset="1" stopColor="#F48C7A" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </button>
                  <span className="zi-hint">
                    {fortuneBonus
                      ? copy.fortune_ui.inca_unul_atinge_l
                      : copy.fortune_ui.atinge_fortune_cookie_ul_ca_sa_l_spargi}
                  </span>
                </>
              )}
              {fortuneRevealed && (
                <>
                  <div
                    className={`zi-paper out border-l-[6px] ${fortuneBorderClasses[currentFortuneType[1]] ?? "border-l-brand-tomato"}`}
                  >
                    <div className="zi-row">
                      <span className="zi-emoji" aria-hidden="true">
                        {currentFortune[0]}
                      </span>
                      <span className="inline-block self-start rounded-full bg-brand-cream-muted px-[10px] py-1 text-[13px] font-semibold bg-brand-ink text-brand-cream zi-type">
                        {currentFortuneType[0]}
                      </span>
                    </div>
                    <span className="zi-text">{currentFortune[2]}</span>
                    <span className="zi-nums">
                      {copy.fortune_ui.numere_norocoase}
                      {lucky.join(" · ")}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-[10px] zi-btns">
                    <button
                      type="button"
                      className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border-0 px-6 [font:inherit] font-bold no-underline bg-brand-ink text-brand-cream hover:bg-brand-ink-hover hover:text-brand-cream zi-lucky"
                      onClick={openAnotherFortune}
                    >
                      {copy.fortune_ui.mai_sparge_unul}
                    </button>
                    {fortuneHref && (
                      <a
                        className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border-0 px-6 [font:inherit] font-bold no-underline zi-cta"
                        href={localizedHref(fortuneHref, locale)}
                        onClick={closeFortune}
                      >
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
  );
}

export function HighlightSlider({ children, className, copy = defaultCopy }) {
  const trackRef = useRef(null);
  const drag = useRef({
    active: false,
    moved: false,
    startX: 0,
    scrollLeft: 0,
  });
  const [fits, setFits] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [sliderDragging, setSliderDragging] = useState(false);
  const track = Children.only(children);

  const updateTrack = useCallback(() => {
    const element = trackRef.current;
    if (!element) return;
    const max = Math.max(0, element.scrollWidth - element.clientWidth - 2);
    setMaxScroll(max);
    setFits(max <= 0);
    setScrollPosition(element.scrollLeft);
  }, []);

  useEffect(() => {
    const element = trackRef.current;
    if (!element) return undefined;
    const frame = window.requestAnimationFrame(updateTrack);
    window.addEventListener("resize", updateTrack);
    const observer = new ResizeObserver(updateTrack);
    observer.observe(element);
    document.fonts?.ready.then(updateTrack);
    return () => {
      window.removeEventListener("resize", updateTrack);
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [updateTrack]);

  const moveBy = (direction) => {
    const element = trackRef.current;
    if (element) {
      element.scrollBy({
        left: direction * Math.max(116, Math.floor(element.clientWidth * 0.8)),
        behavior: "smooth",
      });
    }
  };

  const handlePointerDown = (event) => {
    const element = trackRef.current;
    if (event.pointerType !== "mouse" || fits || !element) return;
    drag.current = {
      active: true,
      moved: false,
      startX: event.clientX,
      scrollLeft: element.scrollLeft,
    };
    setSliderDragging(false);
    element.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    const element = trackRef.current;
    if (!drag.current.active || !element) return;
    const distance = event.clientX - drag.current.startX;
    if (!drag.current.moved && Math.abs(distance) > 5) {
      drag.current.moved = true;
      setSliderDragging(true);
    }
    if (drag.current.moved)
      element.scrollLeft = drag.current.scrollLeft - distance;
  };

  const handlePointerUp = () => {
    const element = trackRef.current;
    const wasMoved = drag.current.moved;
    drag.current.active = false;
    setSliderDragging(false);
    if (!wasMoved || !element) return;

    const closestItem = Array.from(element.querySelectorAll(".na-hl")).reduce(
      (closest, item) => {
        const distance = Math.abs(
          item.offsetLeft - element.offsetLeft - element.scrollLeft,
        );
        return distance < closest.distance ? { item, distance } : closest;
      },
      { item: null, distance: Number.POSITIVE_INFINITY },
    ).item;

    if (closestItem) {
      element.scrollTo({
        left: closestItem.offsetLeft - element.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  const trackProps = {
    ...track.props,
    ref: trackRef,
    className: `${track.props.className}${fits ? " fits" : ""}${!fits && scrollPosition > 2 ? " more-l" : ""}${!fits && scrollPosition < maxScroll ? " more-r" : ""}${sliderDragging ? " drag" : ""}`,
    onScroll: (event) => {
      track.props.onScroll?.(event);
      setScrollPosition(event.currentTarget.scrollLeft);
    },
    onPointerDown: handlePointerDown,
    onPointerMove: handlePointerMove,
    onPointerUp: handlePointerUp,
    onPointerCancel: handlePointerUp,
    onClickCapture: (event) => {
      if (drag.current.moved) {
        event.preventDefault();
        drag.current.moved = false;
      }
    },
  };

  return (
    <div className={`na-slider${fits ? " fits" : ""} ${className}`}>
      <button
        type="button"
        className="na-prev flex h-11 w-11 flex-none cursor-pointer items-center justify-center rounded-full border border-brand-border-strong bg-brand-white text-brand-ink transition-opacity hover:border-brand-ink disabled:cursor-default disabled:opacity-30 max-[640px]:hidden"
        aria-label={copy.slider_ui.inapoi}
        disabled={fits || scrollPosition <= 2}
        onClick={() => moveBy(-1)}
      >
        <svg
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 5l-7 7 7 7" />
        </svg>
      </button>
      {cloneElement(track, trackProps)}
      <button
        type="button"
        className="na-next flex h-11 w-11 flex-none cursor-pointer items-center justify-center rounded-full border border-brand-border-strong bg-brand-white text-brand-ink transition-opacity hover:border-brand-ink disabled:cursor-default disabled:opacity-30 max-[640px]:hidden"
        aria-label={copy.slider_ui.inainte}
        disabled={fits || scrollPosition >= maxScroll}
        onClick={() => moveBy(1)}
      >
        <svg
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export function GridEntrance({ children, className }) {
  const gridRef = useRef(null);
  const [entered, setEntered] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return undefined;
    if (!("IntersectionObserver" in window)) return undefined;

    let timeoutId;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setEntered(true);
        observer.disconnect();
        timeoutId = window.setTimeout(() => setFinished(true), 1400);
      },
      { threshold: 0.15 },
    );
    observer.observe(grid);
    return () => {
      observer.disconnect();
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  const childArray = Children.toArray(children);
  const tiles = childArray.map((child, index) => {
    if (!isValidElement(child) || !child.props.className?.includes("na-tile"))
      return child;
    const tileIndex = childArray
      .slice(0, index)
      .filter(
        (previous) =>
          isValidElement(previous) &&
          previous.props.className?.includes("na-tile"),
      ).length;
    return cloneElement(child, {
      className: `${child.props.className} ${tileDelayClasses[tileIndex] ?? "[transition-delay:720ms]"}`,
    });
  });

  return (
    <div
      ref={gridRef}
      className={`${className} na-anim${entered ? " in" : ""}${finished ? " done" : ""}`}
    >
      {tiles}
    </div>
  );
}
