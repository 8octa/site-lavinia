"use client";
import defaultCopy from "./copy.json";
import feeds from "./feeds.json";
import feedsEn from "./feeds.en.json";
import { useRef, useState } from "react";
import { GridEntrance } from "./HomeInteractions";

const feedTileClasses = {
  white:
    "na-tile-first bg-brand-white [border:1px_solid_var(--color-brand-border)]",
  mustard: "bg-brand-mustard",
  sky: "bg-brand-sky",
  ink: "bg-brand-ink text-brand-cream",
  purple: "bg-brand-purple",
  tomato: "bg-brand-tomato",
};

export default function HomeFeedTabs({ copy = defaultCopy, locale = "ro" }) {
  const feedData = locale === "en" ? feedsEn : feeds;
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef([]);

  const selectTab = (index, focus = false) => {
    setActiveTab(index);
    if (focus) tabRefs.current[index]?.focus();
  };

  const handleKeyDown = (event, index) => {
    let nextIndex;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % feedData.length;
    if (event.key === "ArrowLeft")
      nextIndex = (index + feedData.length - 1) % feedData.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = feedData.length - 1;
    if (nextIndex === undefined) return;
    event.preventDefault();
    selectTab(nextIndex, true);
  };

  return (
    <section
      className="max-w-[1080px] [margin:0_auto] p-[0_28px_96px]"
      aria-label={copy.feed_ui.postari_din_feed}
    >
      <div
        className="tabs tabs-border home-feed-tablist mb-[24px] text-[13px] font-semibold tracking-[1px] uppercase"
        role="tablist"
        aria-label={copy.feed_ui.tipul_de_postari}
      >
        {feedData.map((feed, index) => (
          <button
            key={feed.label}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            id={`feed-tab-${index}`}
            type="button"
            className={`tab${index === activeTab ? " tab-active" : ""}`}
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
      {feedData.map((feed, index) => (
        <div
          key={feed.label}
          id={`feed-panel-${index}`}
          role="tabpanel"
          aria-labelledby={`feed-tab-${index}`}
          hidden={index !== activeTab}
          tabIndex={0}
        >
          <GridEntrance className="na-grid flex flex-wrap gap-[6px]">
            {feed.posts.map(([title, description, surface], postIndex) => (
              <article
                key={title}
                className={`na-tile ${feedTileClasses[surface]} [flex:1_1_300px] aspect-[4/5] p-[28px] box-border flex flex-col justify-between`}
              >
                <span
                  className={
                    postIndex === 0
                      ? "[font-family:'Unbounded',_sans-serif] font-extrabold text-[76px] leading-[0.9] tracking-[-3px]"
                      : "[font-family:'Unbounded',_sans-serif] font-extrabold text-[38px] leading-[1]"
                  }
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
  );
}
