import "./style.css";
import defaultCopy from "./copy.json";
import localizedHref from "../localizedHref";
import { HighlightSlider, HomeInteractions } from "./HomeInteractions";
import HomeFeedTabs from "./HomeFeedTabs";

export default function HomePage({ copy = defaultCopy, locale = "ro" }) {
  return (
    <HomeInteractions copy={copy} locale={locale}>
      <div className={"view"}>
        {"\n"}
        <section
          className={
            "max-w-[1080px] [margin:0_auto] p-[64px_28px_40px] flex flex-wrap items-center gap-[48px] max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-7 max-[640px]:pt-8 max-[640px]:pb-8"
          }
          id={"s-top"}
        >
          {"\n"}
          <button
            type={"button"}
            className={"na-av-btn max-[640px]:w-[144px] max-[640px]:h-[144px]"}
            aria-label={copy.hero.deschide_fortune_cookie_ul_zilei}
          >
            <span className={"na-av-logo"} aria-hidden={"true"}>
              <svg
                focusable={"false"}
                xmlns={"http://www.w3.org/2000/svg"}
                viewBox={"0 0 512 512"}
              >
                {"\n"}
                <circle
                  cx={"256"}
                  cy={"256"}
                  r={"256"}
                  fill={"#C3A6F2"}
                ></circle>
                {"\n"}
                <path
                  transform={"translate(91.29 315.3)"}
                  fill={"#1E120C"}
                  d={
                    "M5.17 -118.6H52.57L56.51 -95.21Q56.92 -95.62 57.13 -96.25Q65.41 -109.08 77.2 -115.6Q89 -122.12 102.87 -122.12Q120.25 -122.12 132.26 -115.29Q144.26 -108.46 150.78 -95.93Q157.3 -83.41 157.3 -66.65V0H109.7V-59.82Q109.7 -71.41 103.59 -77.62Q97.49 -83.83 86.31 -83.83Q78.44 -83.83 72.65 -80.51Q66.85 -77.2 63.75 -71.2Q60.64 -65.2 60.64 -56.71V0H13.25V-76.79Z M274.98 0 272.08 -22.15Q264.42 -10.97 253.24 -4.35Q240 3.52 223.03 3.52Q205.85 3.52 192.6 -4.35Q179.35 -12.21 172 -26.39Q164.66 -40.57 164.66 -59.2Q164.66 -78.24 172 -92.42Q179.35 -106.59 192.6 -114.36Q205.85 -122.12 223.03 -122.12Q240 -122.12 253.24 -114.46Q264.42 -107.84 272.08 -96.66L274.98 -118.6H324.24L316.37 -59.4L324.24 0ZM212.47 -59.2Q212.47 -51.33 215.68 -45.33Q218.89 -39.33 224.68 -35.81Q230.48 -32.29 237.93 -32.29Q245.59 -32.29 252.62 -35.81Q259.66 -39.33 265.04 -45.33Q270.42 -51.33 272.91 -59.2Q270.42 -67.06 265.04 -73.17Q259.66 -79.27 252.62 -82.79Q245.59 -86.31 237.93 -86.31Q230.48 -86.31 224.68 -82.79Q218.89 -79.27 215.68 -73.17Q212.47 -67.06 212.47 -59.2Z"
                  }
                ></path>
                {"\n"}
              </svg>
            </span>
            <span className={"na-av-badge"}>{copy.hero.fortune_cookie}</span>
          </button>
          {"\n"}
          <div
            className={"[flex:1_1_480px] min-w-[0] flex flex-col gap-[18px] max-[640px]:w-full max-[640px]:gap-4"}
          >
            {"\n"}
            <h1
              className={
                "m-0 flex flex-wrap items-center gap-[16px] font-normal"
              }
            >
              <span
                className={
                  "[font-family:'Unbounded',_sans-serif] font-bold text-[34px] leading-[1.1] max-[640px]:text-[28px]"
                }
              >
                {copy.hero.na_digital}
              </span>{" "}
              <span
                className={
                  "[font-family:'Inter',_system-ui,_sans-serif] text-[13px] leading-[1.4] p-[6px_12px] [border:1px_solid_var(--color-brand-border-strong)] rounded-[999px] text-brand-muted"
                }
              >
                {copy.hero.studio_de_social_media_din_bucuresti}
              </span>
            </h1>
            {"\n"}
            <div className={"flex flex-wrap gap-[10px_32px] max-[640px]:grid max-[640px]:grid-cols-1 max-[640px]:gap-2"}>
              {"\n"}
              <span>
                <strong
                  className={
                    "[font-family:'Unbounded',_sans-serif] text-[22px]"
                  }
                >
                  {copy.hero.number_2}
                </strong>{" "}
                {copy.hero.fondatoare}
              </span>
              {"\n"}
              <span>
                <strong
                  className={
                    "[font-family:'Unbounded',_sans-serif] text-[22px]"
                  }
                >
                  {copy.hero.number_5}
                </strong>{" "}
                {copy.hero.serii_in_feed}
              </span>
              {"\n"}
              <span>
                <strong
                  className={
                    "[font-family:'Unbounded',_sans-serif] text-[22px]"
                  }
                >
                  {copy.hero.number_0}
                </strong>{" "}
                {copy.hero.deck_uri_de_80_de_slide_uri}
              </span>
              {"\n"}
            </div>
            {"\n"}
            <div className={"flex flex-col gap-[12px] max-w-[600px]"}>
              {"\n"}
              <strong
                className={
                  "[font-family:'Unbounded',_sans-serif] font-bold text-[clamp(26px,_3.4vw,_40px)] leading-[1.1]"
                }
              >
                {copy.hero.born_and_raised_in_the_feed}
              </strong>
              {"\n"}
              <span>
                {copy.hero.facem_continut_gandit_direct_pentru_feed_nu_adaptat}
              </span>
              {"\n"}
            </div>
            {"\n"}
            <div className={"flex flex-wrap gap-[10px] max-[640px]:grid max-[640px]:grid-cols-1 max-[640px]:w-full"}>
              {"\n"}
              <a
                className={
                  "inline-flex items-center justify-center min-h-[48px] p-[0_26px] bg-brand-tomato text-brand-ink rounded-[12px] no-underline font-bold max-[640px]:w-full"
                }
                href={localizedHref("/contact", locale)}
              >
                {copy.hero.hai_sa_vorbim}
              </a>
              {"\n"}
              <a
                className={
                  "inline-flex items-center justify-center min-h-[48px] p-[0_26px] bg-brand-white [border:1px_solid_var(--color-brand-border-strong)] rounded-[12px] no-underline font-semibold max-[640px]:w-full"
                }
                href={localizedHref("/ce-am-facut", locale)}
              >
                {copy.hero.vezi_ce_am_facut}
              </a>
              {"\n"}
            </div>
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n"}
        <HighlightSlider
          copy={copy}
          className={
            "max-w-[1080px] [margin:0_auto] p-[8px_28px_40px] box-border flex items-center gap-[12px]"
          }
        >
          <nav
            aria-label={copy.ui.sectiuni}
            className={
              "na-track [flex:1_1_auto] min-w-[0] flex gap-[20px] overflow-x-auto snap-x snap-mandatory scroll-smooth p-[4px_2px]"
            }
          >
            {"\n"}
            <a
              href={localizedHref("/pentru-cine", locale)}
              data-st={"pentru-cine"}
              className={
                "na-hl flex-none w-[96px] snap-start flex flex-col items-center gap-[10px] no-underline text-[14px] font-medium text-center"
              }
            >
              {"\n"}
              <span
                className={
                  "na-hl-c w-[84px] h-[84px] rounded-full [border:2px_solid_var(--color-brand-border-strong)] p-[4px] box-border flex"
                }
              >
                <span
                  className={
                    "flex-1 rounded-full bg-brand-white [border:1px_solid_var(--color-brand-border)] flex items-center justify-center"
                  }
                >
                  <svg
                    aria-hidden={"true"}
                    width={"30"}
                    height={"30"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"#1E120C"}
                    strokeWidth={"2"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  >
                    <circle cx={"12"} cy={"12"} r={"8"}></circle>
                    <circle cx={"12"} cy={"12"} r={"3"}></circle>
                  </svg>
                </span>
              </span>
              {copy.ui.pentru_cine}
            </a>
            {"\n"}
            <a
              href={localizedHref("/ce-facem", locale)}
              data-st={"ce-facem"}
              className={
                "na-hl flex-none w-[96px] snap-start flex flex-col items-center gap-[10px] no-underline text-[14px] font-medium text-center"
              }
            >
              {"\n"}
              <span
                className={
                  "na-hl-c w-[84px] h-[84px] rounded-full [border:2px_solid_var(--color-brand-border-strong)] p-[4px] box-border flex"
                }
              >
                <span
                  className={
                    "flex-1 rounded-full bg-brand-mustard flex items-center justify-center"
                  }
                >
                  <svg
                    aria-hidden={"true"}
                    width={"30"}
                    height={"30"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"#1E120C"}
                    strokeWidth={"2"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  >
                    <rect
                      x={"4"}
                      y={"4"}
                      width={"7"}
                      height={"7"}
                      rx={"1.5"}
                    ></rect>
                    <rect
                      x={"13"}
                      y={"4"}
                      width={"7"}
                      height={"7"}
                      rx={"1.5"}
                    ></rect>
                    <rect
                      x={"4"}
                      y={"13"}
                      width={"7"}
                      height={"7"}
                      rx={"1.5"}
                    ></rect>
                    <rect
                      x={"13"}
                      y={"13"}
                      width={"7"}
                      height={"7"}
                      rx={"1.5"}
                    ></rect>
                  </svg>
                </span>
              </span>
              {copy.ui.ce_facem}
            </a>
            {"\n"}
            <a
              href={localizedHref("/artisti", locale)}
              data-st={"artisti"}
              className={
                "na-hl flex-none w-[96px] snap-start flex flex-col items-center gap-[10px] no-underline text-[14px] font-medium text-center"
              }
            >
              {"\n"}
              <span
                className={
                  "na-hl-c w-[84px] h-[84px] rounded-full [border:2px_solid_var(--color-brand-border-strong)] p-[4px] box-border flex"
                }
              >
                <span
                  className={
                    "flex-1 rounded-full bg-brand-yellow flex items-center justify-center"
                  }
                >
                  <svg
                    aria-hidden={"true"}
                    width={"30"}
                    height={"30"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"#1E120C"}
                    strokeWidth={"2"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  >
                    <path
                      d={
                        "M12 3a9 9 0 1 0 0 18c1.1 0 1.5-.8 1.5-1.5 0-.9-.7-1.2-.7-2 0-.9.7-1.5 1.6-1.5H17a4 4 0 0 0 4-4c0-5-4-9-9-9z"
                      }
                    ></path>
                    <circle cx={"7.5"} cy={"11"} r={"1"}></circle>
                    <circle cx={"10"} cy={"7"} r={"1"}></circle>
                    <circle cx={"15"} cy={"7.5"} r={"1"}></circle>
                  </svg>
                </span>
              </span>
              {copy.ui.artisti}
            </a>
            {"\n"}
            <a
              href={localizedHref("/ce-am-facut", locale)}
              data-st={"ce-am-facut"}
              className={
                "na-hl flex-none w-[96px] snap-start flex flex-col items-center gap-[10px] no-underline text-[14px] font-medium text-center"
              }
            >
              {"\n"}
              <span
                className={
                  "na-hl-c w-[84px] h-[84px] rounded-full [border:2px_solid_var(--color-brand-border-strong)] p-[4px] box-border flex"
                }
              >
                <span
                  className={
                    "flex-1 rounded-full bg-brand-tomato flex items-center justify-center"
                  }
                >
                  <svg
                    aria-hidden={"true"}
                    width={"30"}
                    height={"30"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"#1E120C"}
                    strokeWidth={"2"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  >
                    <path
                      d={
                        "M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7z"
                      }
                    ></path>
                  </svg>
                </span>
              </span>
              {copy.ui.ce_am_facut}
            </a>
            {"\n"}
            <a
              href={localizedHref("/gratis", locale)}
              data-st={"gratis"}
              className={
                "na-hl flex-none w-[96px] snap-start flex flex-col items-center gap-[10px] no-underline text-[14px] font-medium text-center"
              }
            >
              {"\n"}
              <span
                className={
                  "na-hl-c w-[84px] h-[84px] rounded-full [border:2px_solid_var(--color-brand-border-strong)] p-[4px] box-border flex"
                }
              >
                <span
                  className={
                    "flex-1 rounded-full bg-brand-sky flex items-center justify-center"
                  }
                >
                  <svg
                    aria-hidden={"true"}
                    width={"30"}
                    height={"30"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"#1E120C"}
                    strokeWidth={"2"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  >
                    <rect
                      x={"4"}
                      y={"9"}
                      width={"16"}
                      height={"11"}
                      rx={"1.5"}
                    ></rect>
                    <path d={"M3 9h18M12 9v11"}></path>
                    <path
                      d={
                        "M12 9c-2-4-6-4-6-1.5S10 9 12 9c2 0 6 1 6-1.5S14 5 12 9z"
                      }
                    ></path>
                  </svg>
                </span>
              </span>
              {copy.ui.gratis}
            </a>
            {"\n"}
            <a
              href={localizedHref("/cine-suntem", locale)}
              data-st={"cine-suntem"}
              className={
                "na-hl flex-none w-[96px] snap-start flex flex-col items-center gap-[10px] no-underline text-[14px] font-medium text-center"
              }
            >
              {"\n"}
              <span
                className={
                  "na-hl-c w-[84px] h-[84px] rounded-full [border:2px_solid_var(--color-brand-border-strong)] p-[4px] box-border flex"
                }
              >
                <span
                  className={
                    "flex-1 rounded-full bg-brand-purple flex items-center justify-center"
                  }
                >
                  <svg
                    aria-hidden={"true"}
                    width={"30"}
                    height={"30"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"#1E120C"}
                    strokeWidth={"2"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  >
                    <circle cx={"8"} cy={"9"} r={"3"}></circle>
                    <circle cx={"16"} cy={"9"} r={"3"}></circle>
                    <path
                      d={
                        "M3 19c.8-3 2.8-4.5 5-4.5s4.2 1.5 5 4.5M11 19c.8-3 2.8-4.5 5-4.5s4.2 1.5 5 4.5"
                      }
                    ></path>
                  </svg>
                </span>
              </span>
              {copy.ui.cine_suntem}
            </a>
            {"\n"}
            <a
              href={localizedHref("/intrebari", locale)}
              data-st={"intrebari"}
              className={
                "na-hl flex-none w-[96px] snap-start flex flex-col items-center gap-[10px] no-underline text-[14px] font-medium text-center"
              }
            >
              {"\n"}
              <span
                className={
                  "na-hl-c w-[84px] h-[84px] rounded-full [border:2px_solid_var(--color-brand-border-strong)] p-[4px] box-border flex"
                }
              >
                <span
                  className={
                    "flex-1 rounded-full bg-brand-cream-muted flex items-center justify-center"
                  }
                >
                  <svg
                    aria-hidden={"true"}
                    width={"30"}
                    height={"30"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"#1E120C"}
                    strokeWidth={"2"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  >
                    <path
                      d={"M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14"}
                    ></path>
                    <path d={"M12 17.5v.5"}></path>
                    <circle cx={"12"} cy={"12"} r={"9"}></circle>
                  </svg>
                </span>
              </span>
              {copy.ui.intrebari}
            </a>
            {"\n"}
            <a
              href={localizedHref("/contact", locale)}
              data-st={"contact"}
              className={
                "na-hl flex-none w-[96px] snap-start flex flex-col items-center gap-[10px] no-underline text-[14px] font-medium text-center"
              }
            >
              {"\n"}
              <span
                className={
                  "na-hl-c w-[84px] h-[84px] rounded-full [border:2px_solid_var(--color-brand-border-strong)] p-[4px] box-border flex"
                }
              >
                <span
                  className={
                    "flex-1 rounded-full bg-brand-ink flex items-center justify-center"
                  }
                >
                  <svg
                    aria-hidden={"true"}
                    width={"30"}
                    height={"30"}
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"#FBF5EB"}
                    strokeWidth={"2"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  >
                    <path d={"M4 5h16v11H9l-5 4z"}></path>
                  </svg>
                </span>
              </span>
              {copy.ui.contact}
            </a>
            {"\n"}
          </nav>
        </HighlightSlider>
        {"\n"}
        <HomeFeedTabs copy={copy} locale={locale} />
        {"\n"}
        <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
          {"\n"}
          <div className={"mb-6 flex max-w-[760px] flex-col gap-2"}>
            <h2 className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1]"}>
              {
                copy.sections.digital_nativ_nu_digital_adaptat
                  .digital_nativ_nu_digital_adaptat
              }
            </h2>
            {"\n"}
            <p className={"m-0 text-brand-muted"}>
              {
                copy.sections.digital_nativ_nu_digital_adaptat
                  .multe_branduri_muta_in_feed_ce_au_facut_pentru_tv_sa
              }
            </p>
          </div>
          {"\n"}
          <div className={"flex flex-wrap items-start gap-8"}>
            {"\n"}
            <div className={"flex min-w-0 max-w-full flex-[1_1_420px] justify-center gap-6 max-[640px]:gap-[14px] max-[360px]:gap-[10px]"}>
              {"\n"}
              <figure className={"m-0 flex max-w-[210px] flex-col items-center gap-3 text-center max-[360px]:max-w-[140px] [&_figcaption]:flex [&_figcaption]:flex-col [&_figcaption]:items-center [&_figcaption]:gap-1.5 [&_figcaption]:text-[15px] [&_figcaption]:text-brand-text [&_figcaption_.chip]:self-center"}>
                {"\n"}
                <div className={"relative flex aspect-[9/19] w-[190px] flex-col overflow-hidden rounded-[30px] border-[6px] border-brand-ink max-[640px]:w-[150px] max-[360px]:w-[132px] max-[360px]:rounded-[24px] max-[360px]:border-[5px] justify-center bg-brand-black text-brand-white"} aria-hidden={"true"}>
                  {"\n"}
                  <span className={"absolute top-[14px] left-3 text-[9px] font-bold tracking-[1px] text-brand-stone"}>
                    {copy.sections.digital_nativ_nu_digital_adaptat.logo}
                  </span>
                  {"\n"}
                  <div className={"m-0 flex aspect-[16/9] items-center justify-center bg-brand-brown text-[11px] text-brand-border"}>
                    <span>
                      {
                        copy.sections.digital_nativ_nu_digital_adaptat
                          .spot_tv_16_9
                      }
                    </span>
                  </div>
                  {"\n"}
                  <span className={"absolute right-[10px] bottom-[14px] left-[10px] text-left text-[8px] leading-[1.3] text-brand-stone"}>
                    {
                      copy.sections.digital_nativ_nu_digital_adaptat
                        .descopera_noua_colectie_link_in_bio_brand_nou_colect
                    }
                  </span>
                  {"\n"}
                </div>
                {"\n"}
                <figcaption>
                  <span className={"inline-block self-start rounded-full bg-brand-cream-muted px-[10px] py-1 text-[13px] font-semibold"}>
                    {copy.sections.digital_nativ_nu_digital_adaptat.adaptat}
                  </span>
                  <span>
                    {
                      copy.sections.digital_nativ_nu_digital_adaptat
                        .spotul_de_tv_pus_pe_vertical_cu_benzi_negre
                    }
                  </span>
                </figcaption>
                {"\n"}
              </figure>
              {"\n"}
              <figure className={"m-0 flex max-w-[210px] flex-col items-center gap-3 text-center max-[360px]:max-w-[140px] [&_figcaption]:flex [&_figcaption]:flex-col [&_figcaption]:items-center [&_figcaption]:gap-1.5 [&_figcaption]:text-[15px] [&_figcaption]:text-brand-text [&_figcaption_.chip]:self-center"}>
                {"\n"}
                <div className={"relative flex aspect-[9/19] w-[190px] flex-col overflow-hidden rounded-[30px] border-[6px] border-brand-ink max-[640px]:w-[150px] max-[360px]:w-[132px] max-[360px]:rounded-[24px] max-[360px]:border-[5px] gap-2.5 bg-brand-mustard px-[14px] pt-[22px] pb-[14px] text-brand-ink phone native"} aria-hidden={"true"}>
                  {"\n"}
                  <span className={"text-left font-[Unbounded,sans-serif] text-[17px] font-extrabold leading-[1.1] max-[640px]:text-sm"}>
                    {
                      copy.sections.digital_nativ_nu_digital_adaptat
                        .postezi_rar_sau_postezi_pe_fuga
                    }
                  </span>
                  {"\n"}
                  <svg className={"mx-auto mt-auto mb-0 h-[120px] w-[120px] max-[640px]:h-[90px] max-[640px]:w-[90px] max-[360px]:h-[76px] max-[360px]:w-[76px]"} viewBox={"0 0 120 120"}>
                    <circle
                      cx={"60"}
                      cy={"42"}
                      r={"22"}
                      fill={"#1E120C"}
                    ></circle>
                    <path
                      d={"M18 120c4-30 22-44 42-44s38 14 42 44z"}
                      fill={"#1E120C"}
                    ></path>
                  </svg>
                  {"\n"}
                  <span className={"self-center rounded-md bg-brand-ink px-2 py-1 text-[10px] font-semibold text-brand-cream"}>
                    {
                      copy.sections.digital_nativ_nu_digital_adaptat
                        .hai_sa_vedem_in_30_de_secunde
                    }
                  </span>
                  {"\n"}
                  <div className={"absolute right-2 bottom-[70px] flex flex-col gap-[10px] [&_svg]:h-[18px] [&_svg]:w-[18px]"}>
                    <svg
                      width={"22"}
                      height={"22"}
                      viewBox={"0 0 24 24"}
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth={"2"}
                      strokeLinecap={"round"}
                      strokeLinejoin={"round"}
                    >
                      <path
                        d={
                          "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"
                        }
                      ></path>
                    </svg>
                    <svg
                      width={"22"}
                      height={"22"}
                      viewBox={"0 0 24 24"}
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth={"2"}
                      strokeLinecap={"round"}
                      strokeLinejoin={"round"}
                    >
                      <path d={"M4 5h16v11H9l-5 4z"}></path>
                    </svg>
                    <svg
                      width={"22"}
                      height={"22"}
                      viewBox={"0 0 24 24"}
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth={"2"}
                      strokeLinecap={"round"}
                      strokeLinejoin={"round"}
                    >
                      <path d={"M21 3 3 10l7 3 3 7z"}></path>
                    </svg>
                    <svg
                      width={"22"}
                      height={"22"}
                      viewBox={"0 0 24 24"}
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth={"2"}
                      strokeLinecap={"round"}
                      strokeLinejoin={"round"}
                    >
                      <path d={"M6 3h12v18l-6-4-6 4z"}></path>
                    </svg>
                  </div>
                  {"\n"}
                </div>
                {"\n"}
                <figcaption>
                  <span className={"inline-block self-start rounded-full bg-brand-cream-muted px-[10px] py-1 text-[13px] font-semibold bg-brand-tomato"}>
                    {copy.sections.digital_nativ_nu_digital_adaptat.nativ}
                  </span>
                  <span>
                    {
                      copy.sections.digital_nativ_nu_digital_adaptat
                        .gandit_pentru_telefon_din_prima_secunda
                    }
                  </span>
                </figcaption>
                {"\n"}
              </figure>
              {"\n"}
            </div>
            {"\n"}
            <div className={"flex flex-[1_1_420px] flex-col rounded-[20px] border border-brand-border bg-brand-white px-[22px] py-2"}>
              {"\n"}
              <div className={"grid grid-cols-2 gap-4 border-b border-brand-border-soft py-3 text-[15px] text-[13px] font-bold uppercase tracking-[1px] text-brand-muted"}>
                <span>
                  {copy.sections.digital_nativ_nu_digital_adaptat.adaptat_2}
                </span>
                <span>
                  {copy.sections.digital_nativ_nu_digital_adaptat.nativ_2}
                </span>
              </div>
              {"\n"}
              <div className={"grid grid-cols-2 gap-4 border-b border-brand-border-soft py-3 text-[15px]"}>
                <span className={"text-brand-muted-soft line-through decoration-brand-stone-light"}>
                  {
                    copy.sections.digital_nativ_nu_digital_adaptat
                      .logo_ul_in_primele_3_secunde
                  }
                </span>
                <span className={"font-semibold"}>
                  {
                    copy.sections.digital_nativ_nu_digital_adaptat
                      .prezenta_umana_reala_calda
                  }
                </span>
              </div>
              <div className={"grid grid-cols-2 gap-4 border-b border-brand-border-soft py-3 text-[15px]"}>
                <span className={"text-brand-muted-soft line-through decoration-brand-stone-light"}>
                  {
                    copy.sections.digital_nativ_nu_digital_adaptat
                      .textul_din_afis_mutat_in_descriere
                  }
                </span>
                <span className={"font-semibold"}>
                  {
                    copy.sections.digital_nativ_nu_digital_adaptat
                      .text_scris_pentru_cine_da_scroll
                  }
                </span>
              </div>
              <div className={"grid grid-cols-2 gap-4 border-b border-brand-border-soft py-3 text-[15px]"}>
                <span className={"text-brand-muted-soft line-through decoration-brand-stone-light"}>
                  {
                    copy.sections.digital_nativ_nu_digital_adaptat
                      .aceeasi_postare_pe_toate_platformele
                  }
                </span>
                <span className={"font-semibold"}>
                  {
                    copy.sections.digital_nativ_nu_digital_adaptat
                      .fiecare_platforma_cu_limba_ei
                  }
                </span>
              </div>
              <div className={"grid grid-cols-2 gap-4 border-b border-brand-border-soft py-3 text-[15px]"}>
                <span className={"text-brand-muted-soft line-through decoration-brand-stone-light"}>
                  {
                    copy.sections.digital_nativ_nu_digital_adaptat
                      .postezi_cand_e_campanie
                  }
                </span>
                <span className={"font-semibold"}>
                  {
                    copy.sections.digital_nativ_nu_digital_adaptat
                      .esti_acolo_in_fiecare_saptamana
                  }
                </span>
              </div>
              <div className={"grid grid-cols-2 gap-4 border-b border-brand-border-soft py-3 text-[15px]"}>
                <span className={"text-brand-muted-soft line-through decoration-brand-stone-light"}>
                  {
                    copy.sections.digital_nativ_nu_digital_adaptat
                      .raport_de_40_de_slide_uri
                  }
                </span>
                <span className={"font-semibold"}>
                  {
                    copy.sections.digital_nativ_nu_digital_adaptat
                      .concluzii_actionabile
                  }
                </span>
              </div>
              {"\n"}
              <p className={"m-0 pt-[14px] pb-2 font-semibold"}>
                {
                  copy.sections.digital_nativ_nu_digital_adaptat
                    .noi_facem_doar_a_doua_varianta
                }
                <a href={localizedHref("/ce-facem", locale)}>
                  {copy.sections.digital_nativ_nu_digital_adaptat.vezi_ce_facem}
                </a>
              </p>
              {"\n"}
            </div>
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n\n"}
        <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
          {"\n"}
          <div className={"mb-6 flex max-w-[760px] flex-col gap-2"}>
            <h2 className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1]"}>{copy.sections.ce_facem.ce_facem}</h2>
            <p className={"m-0 text-brand-muted"}>
              {
                copy.sections.ce_facem
                  .un_serviciu_vedeta_luna_de_luna_plus_cateva_pentru_c
              }
            </p>
          </div>
          {"\n"}
          <div className={"flex flex-wrap gap-4 [&>*]:[flex:1_1_300px] [&>*]:min-w-0"}>
            <a className={"relative flex flex-col gap-3 rounded-[20px] border border-brand-border bg-brand-white p-[26px] max-[640px]:p-5 [&_p]:m-0 na-card no-underline text-brand-ink transition-[transform,border-color] hover:-translate-y-0.5 hover:border-brand-ink hover:text-brand-ink"} href={localizedHref("/lunar", locale)}>
              {"\n"}
              <span className={"inline-block self-start rounded-full bg-brand-cream-muted px-[10px] py-1 text-[13px] font-semibold bg-brand-tomato"}>
                {copy.sections.ce_facem.serviciul_principal}
              </span>
              {"\n"}
              <h3 className={"m-0 [font-family:Unbounded,_sans-serif] text-[22px] font-bold leading-[1.2]"}>
                {copy.sections.ce_facem.na_social_media_lunar}
              </h3>
              {"\n"}
              <p className={"text-brand-muted"}>
                {
                  copy.sections.ce_facem
                    .conturile_tale_de_social_media_luna_de_luna_strategi
                }
              </p>
              {"\n"}
              <span className={"more"}>
                {copy.sections.ce_facem.vezi_ce_primesti_lunar}
              </span>
              {"\n"}
            </a>
            <a className={"relative flex flex-col gap-3 rounded-[20px] border border-brand-border bg-brand-white p-[26px] max-[640px]:p-5 [&_p]:m-0 na-card no-underline text-brand-ink transition-[transform,border-color] hover:-translate-y-0.5 hover:border-brand-ink hover:text-brand-ink"} href={localizedHref("/content-creation", locale)}>
              {"\n"}
              <span className={"inline-block self-start rounded-full bg-brand-cream-muted px-[10px] py-1 text-[13px] font-semibold bg-brand-sky"}>
                {copy.sections.ce_facem.filmam_si_editam}
              </span>
              {"\n"}
              <h3 className={"m-0 [font-family:Unbounded,_sans-serif] text-[22px] font-bold leading-[1.2]"}>
                {copy.sections.ce_facem.na_content_creation}
              </h3>
              {"\n"}
              <p className={"text-brand-muted"}>
                {
                  copy.sections.ce_facem
                    .filmam_editam_facem_continut_adevarat_clipuri_si_poz
                }
              </p>
              {"\n"}
              <span className={"more"}>
                {copy.sections.ce_facem.vezi_cum_filmam}
              </span>
              {"\n"}
            </a>
            <a className={"relative flex flex-col gap-3 rounded-[20px] border border-brand-border bg-brand-white p-[26px] max-[640px]:p-5 [&_p]:m-0 na-card no-underline text-brand-ink transition-[transform,border-color] hover:-translate-y-0.5 hover:border-brand-ink hover:text-brand-ink"} href={localizedHref("/audit", locale)}>
              {"\n"}
              <span className={"inline-block self-start rounded-full bg-brand-cream-muted px-[10px] py-1 text-[13px] font-semibold bg-brand-mustard"}>
                {copy.sections.ce_facem.cel_mai_simplu_inceput}
              </span>
              {"\n"}
              <h3 className={"m-0 [font-family:Unbounded,_sans-serif] text-[22px] font-bold leading-[1.2]"}>{copy.sections.ce_facem.na_audit}</h3>
              {"\n"}
              <p className={"text-brand-muted"}>
                {
                  copy.sections.ce_facem
                    .tot_ce_ai_online_radiografiat_plan_de_90_de_zile_pe
                }
              </p>
              {"\n"}
              <span className={"more"}>
                {copy.sections.ce_facem.vezi_ce_verificam}
              </span>
              {"\n"}
            </a>
            <a className={"relative flex flex-col gap-3 rounded-[20px] border border-brand-border bg-brand-white p-[26px] max-[640px]:p-5 [&_p]:m-0 na-card no-underline text-brand-ink transition-[transform,border-color] hover:-translate-y-0.5 hover:border-brand-ink hover:text-brand-ink"} href={localizedHref("/tiktok-start", locale)}>
              {"\n"}
              <span className={"inline-block self-start rounded-full bg-brand-cream-muted px-[10px] py-1 text-[13px] font-semibold bg-brand-sky"}>
                {copy.sections.ce_facem.pornim_apoi_predam}
              </span>
              {"\n"}
              <h3 className={"m-0 [font-family:Unbounded,_sans-serif] text-[22px] font-bold leading-[1.2]"}>{copy.sections.ce_facem.na_tiktok_start}</h3>
              {"\n"}
              <p className={"text-brand-muted"}>
                {
                  copy.sections.ce_facem
                    .cont_setat_directie_creativa_primele_8_clipuri_si_un
                }
              </p>
              {"\n"}
              <span className={"more"}>
                {copy.sections.ce_facem.vezi_cum_pornim_contul}
              </span>
              {"\n"}
            </a>
            <a className={"relative flex flex-col gap-3 rounded-[20px] border border-brand-border bg-brand-white p-[26px] max-[640px]:p-5 [&_p]:m-0 na-card no-underline text-brand-ink transition-[transform,border-color] hover:-translate-y-0.5 hover:border-brand-ink hover:text-brand-ink"} href={localizedHref("/email-marketing", locale)}>
              {"\n"}
              <span className={"inline-block self-start rounded-full bg-brand-cream-muted px-[10px] py-1 text-[13px] font-semibold bg-brand-purple"}>
                {copy.sections.ce_facem.pe_langa_lunar}
              </span>
              {"\n"}
              <h3 className={"m-0 [font-family:Unbounded,_sans-serif] text-[22px] font-bold leading-[1.2]"}>
                {copy.sections.ce_facem.na_email_marketing}
              </h3>
              {"\n"}
              <p className={"text-brand-muted"}>
                {
                  copy.sections.ce_facem
                    .emailuri_automate_campanii_si_o_lista_care_creste
                }
              </p>
              {"\n"}
              <span className={"more"}>
                {copy.sections.ce_facem.vezi_ce_face_emailul_pentru_tine}
              </span>
              {"\n"}
            </a>
            <a className={"relative flex flex-col gap-3 rounded-[20px] border border-brand-border bg-brand-white p-[26px] max-[640px]:p-5 [&_p]:m-0 na-card no-underline text-brand-ink transition-[transform,border-color] hover:-translate-y-0.5 hover:border-brand-ink hover:text-brand-ink"} href={localizedHref("/facut-de-mana", locale)}>
              {"\n"}
              <span className={"inline-block self-start rounded-full bg-brand-cream-muted px-[10px] py-1 text-[13px] font-semibold bg-brand-yellow"}>
                {copy.sections.ce_facem.cu_artistii_nostri}
              </span>
              {"\n"}
              <h3 className={"m-0 [font-family:Unbounded,_sans-serif] text-[22px] font-bold leading-[1.2]"}>
                {copy.sections.ce_facem.na_facut_de_mana}
              </h3>
              {"\n"}
              <p className={"text-brand-muted"}>
                {
                  copy.sections.ce_facem
                    .pachete_personalizate_cu_artistii_nostri_pictura_lut
                }
              </p>
              {"\n"}
              <span className={"more"}>
                {copy.sections.ce_facem.vezi_ce_fac_artistii}
              </span>
              {"\n"}
            </a>
            {"\n"}
            <a className={"relative flex flex-col gap-3 rounded-[20px] border border-brand-border bg-brand-white p-[26px] max-[640px]:p-5 [&_p]:m-0 dashed na-card no-underline text-brand-ink transition-[transform,border-color] hover:-translate-y-0.5 hover:border-brand-ink hover:text-brand-ink"} href={localizedHref("/ce-facem", locale)}>
              {"\n"}
              <span className={"inline-block self-start rounded-full bg-brand-cream-muted px-[10px] py-1 text-[13px] font-semibold"}>{copy.sections.ce_facem.in_curand}</span>
              {"\n"}
              <h3 className={"m-0 [font-family:Unbounded,_sans-serif] text-[22px] font-bold leading-[1.2]"}>
                {copy.sections.ce_facem.na_invata}
                <span aria-hidden={"true"}>
                  {copy.sections.ce_facem.separator}
                </span>
              </h3>
              {"\n"}
              <p className={"text-brand-muted"}>
                {copy.sections.ce_facem.cursuri_vin_cand_ni_le_ceri}
              </p>
              {"\n"}
              <span className={"more"}>
                {copy.sections.ce_facem.vezi_tot_meniul}
              </span>
              {"\n"}
            </a>
          </div>
          {"\n"}
        </section>
        {"\n"}
        <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
          {"\n"}
          <div className={"mb-6 flex max-w-[760px] flex-col gap-2"}>
            <h2 className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1]"}>
              {copy.sections.povesti_la_care_tinem.povesti_la_care_tinem}
            </h2>
            <p className={"m-0 text-brand-muted"}>
              {
                copy.sections.povesti_la_care_tinem
                  .de_unde_am_pornit_ce_am_facut_impreuna_si_ce_a_iesit
              }
            </p>
          </div>
          {"\n"}
          <div className={"flex flex-wrap gap-4 [&>*]:[flex:1_1_300px] [&>*]:min-w-0 [&>*]:[flex-basis:420px]"}>
            {"\n"}
            <a
              className={"relative flex flex-col gap-3 rounded-[20px] border border-brand-border bg-brand-white p-[26px] max-[640px]:p-5 [&_p]:m-0 !p-0 overflow-hidden na-card no-underline text-brand-ink transition-[transform,border-color] hover:-translate-y-0.5 hover:border-brand-ink hover:text-brand-ink"}
              href={localizedHref("/ce-am-facut", locale)}
            >
              {"\n"}
              <div
                className={
                  "bg-brand-tomato p-[26px] min-h-[180px] flex flex-col justify-between gap-[12px]"
                }
              >
                {"\n"}
                <span className={"text-[13px] font-bold"}>
                  {
                    copy.sections.povesti_la_care_tinem
                      .brand_personal_targoviste
                  }
                </span>
                {"\n"}
                <span className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1] text-[30px]"}>
                  {copy.sections.povesti_la_care_tinem.alexi_brows}
                </span>
                {"\n"}
              </div>
              {"\n"}
              <div className={"p-[22px_26px] flex flex-col gap-[10px]"}>
                {"\n"}
                <p className={"text-brand-muted"}>
                  {
                    copy.sections.povesti_la_care_tinem
                      .un_brand_de_sprancene_de_la_zero_audit_brand_guideli
                  }
                </p>
                {"\n"}
                <span className={"more"}>
                  {copy.sections.povesti_la_care_tinem.vezi_povestea}
                </span>
                {"\n"}
              </div>
              {"\n"}
            </a>
            {"\n"}
            <a
              className={"relative flex flex-col gap-3 rounded-[20px] border border-brand-border bg-brand-white p-[26px] max-[640px]:p-5 [&_p]:m-0 !p-0 overflow-hidden na-card no-underline text-brand-ink transition-[transform,border-color] hover:-translate-y-0.5 hover:border-brand-ink hover:text-brand-ink"}
              href={localizedHref("/ce-am-facut", locale)}
            >
              {"\n"}
              <div
                className={
                  "bg-brand-sky p-[26px] min-h-[180px] flex flex-col justify-between gap-[12px]"
                }
              >
                {"\n"}
                <span className={"text-[13px] font-bold"}>
                  {copy.sections.povesti_la_care_tinem.ong_patrimoniu_retainer}
                </span>
                {"\n"}
                <span className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1] text-[30px]"}>
                  {copy.sections.povesti_la_care_tinem.pro_patrimonio}
                </span>
                {"\n"}
              </div>
              {"\n"}
              <div className={"p-[22px_26px] flex flex-col gap-[10px]"}>
                {"\n"}
                <p className={"text-brand-muted"}>
                  {
                    copy.sections.povesti_la_care_tinem
                      .concerte_pe_siret_editia_a_vi_a_concept_creativ_stra
                  }
                </p>
                {"\n"}
                <span className={"more"}>
                  {copy.sections.povesti_la_care_tinem.vezi_povestea}
                </span>
                {"\n"}
              </div>
              {"\n"}
            </a>
            {"\n"}
          </div>
          {"\n"}
          <div className={"flex flex-wrap gap-4 [&>*]:[flex:1_1_300px] [&>*]:min-w-0 mt-[16px]"}>
            {"\n"}
            <a
              className={"relative flex flex-col gap-3 rounded-[20px] border border-brand-border bg-brand-white p-[26px] max-[640px]:p-5 [&_p]:m-0 !p-0 overflow-hidden na-card no-underline text-brand-ink transition-[transform,border-color] hover:-translate-y-0.5 hover:border-brand-ink hover:text-brand-ink"}
              href={localizedHref("/ce-am-facut", locale)}
            >
              {"\n"}
              <div
                className={
                  "bg-brand-mustard p-[22px_26px] min-h-[140px] flex flex-col justify-between gap-[12px]"
                }
              >
                {"\n"}
                <span className={"text-[13px] font-bold"}>
                  {copy.sections.povesti_la_care_tinem.trupa_metalcore}
                </span>
                {"\n"}
                <span className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1] text-[26px]"}>
                  {copy.sections.povesti_la_care_tinem.static_collapse}
                </span>
                {"\n"}
              </div>
              {"\n"}
              <div className={"p-[20px_26px] flex flex-col gap-[10px]"}>
                {"\n"}
                <p className={"text-brand-muted"}>
                  {copy.sections.povesti_la_care_tinem.ce_am_facut_intr_un_rand}
                </p>
                {"\n"}
                <span className={"more"}>
                  {copy.sections.povesti_la_care_tinem.vezi_povestea}
                </span>
                {"\n"}
              </div>
              {"\n"}
            </a>
            {"\n"}
            <a
              className={"relative flex flex-col gap-3 rounded-[20px] border border-brand-border bg-brand-white p-[26px] max-[640px]:p-5 [&_p]:m-0 !p-0 overflow-hidden na-card no-underline text-brand-ink transition-[transform,border-color] hover:-translate-y-0.5 hover:border-brand-ink hover:text-brand-ink"}
              href={localizedHref("/ce-am-facut", locale)}
            >
              {"\n"}
              <div
                className={
                  "bg-brand-purple p-[22px_26px] min-h-[140px] flex flex-col justify-between gap-[12px]"
                }
              >
                {"\n"}
                <span className={"text-[13px] font-bold"}>
                  {copy.sections.povesti_la_care_tinem.atelier_de_mobila}
                </span>
                {"\n"}
                <span className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1] text-[26px]"}>
                  {copy.sections.povesti_la_care_tinem.como_atelier}
                </span>
                {"\n"}
              </div>
              {"\n"}
              <div className={"p-[20px_26px] flex flex-col gap-[10px]"}>
                {"\n"}
                <p className={"text-brand-muted"}>
                  {copy.sections.povesti_la_care_tinem.ce_am_facut_intr_un_rand}
                </p>
                {"\n"}
                <span className={"more"}>
                  {copy.sections.povesti_la_care_tinem.vezi_povestea}
                </span>
                {"\n"}
              </div>
              {"\n"}
            </a>
            {"\n"}
            <a
              className={"relative flex flex-col gap-3 rounded-[20px] border border-brand-border bg-brand-white p-[26px] max-[640px]:p-5 [&_p]:m-0 !p-0 overflow-hidden na-card no-underline text-brand-ink transition-[transform,border-color] hover:-translate-y-0.5 hover:border-brand-ink hover:text-brand-ink"}
              href={localizedHref("/ce-am-facut", locale)}
            >
              {"\n"}
              <div
                className={
                  "bg-brand-ink text-brand-cream p-[22px_26px] min-h-[140px] flex flex-col justify-between gap-[12px]"
                }
              >
                {"\n"}
                <span className={"text-[13px] font-bold"}>
                  {copy.sections.povesti_la_care_tinem.domeniu}
                </span>
                {"\n"}
                <span className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1] text-[26px]"}>
                  {copy.sections.povesti_la_care_tinem.imprimax_solutions}
                </span>
                {"\n"}
              </div>
              {"\n"}
              <div className={"p-[20px_26px] flex flex-col gap-[10px]"}>
                {"\n"}
                <p className={"text-brand-muted"}>
                  {copy.sections.povesti_la_care_tinem.ce_am_facut_intr_un_rand}
                </p>
                {"\n"}
                <span className={"more"}>
                  {copy.sections.povesti_la_care_tinem.vezi_povestea}
                </span>
                {"\n"}
              </div>
              {"\n"}
            </a>
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n"}
        <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
          {"\n"}
          <div className={"mb-6 flex max-w-[760px] flex-col gap-2"}>
            <h2 className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1]"}>
              {copy.sections.pe_langa_social_media.pe_langa_social_media}
            </h2>
          </div>
          {"\n"}
          <div className={"flex flex-wrap gap-4 [&>*]:[flex:1_1_300px] [&>*]:min-w-0 [&>*]:[flex-basis:420px]"}>
            {"\n"}
            <a className={"relative flex flex-col gap-3 rounded-[20px] border border-brand-border bg-brand-white p-[26px] max-[640px]:p-5 [&_p]:m-0 border-0 bg-brand-purple na-card no-underline text-brand-ink transition-[transform,border-color] hover:-translate-y-0.5 hover:border-brand-ink hover:text-brand-ink fill-purple"} href={localizedHref("/artisti", locale)}>
              {"\n"}
              <span className={"inline-block self-start rounded-full bg-brand-cream-muted px-[10px] py-1 text-[13px] font-semibold bg-brand-ink text-brand-cream"}>
                {copy.sections.pe_langa_social_media.cu_artistii_nostri}
              </span>
              {"\n"}
              <h3 className={"m-0 [font-family:Unbounded,_sans-serif] text-[22px] font-bold leading-[1.2] text-[26px]"}>
                {copy.sections.pe_langa_social_media.facut_de_mana_nu_generat}
              </h3>
              {"\n"}
              <p>
                {
                  copy.sections.pe_langa_social_media
                    .lucram_cu_artisti_in_care_credem_si_pe_care_ii_promo
                }
              </p>
              {"\n"}
              <span className={"more"}>
                {copy.sections.pe_langa_social_media.vezi_artistii}
              </span>
              {"\n"}
            </a>
            {"\n"}
            <a className={"relative flex flex-col gap-3 rounded-[20px] border border-brand-border bg-brand-white p-[26px] max-[640px]:p-5 [&_p]:m-0 border-0 bg-brand-mustard na-card no-underline text-brand-ink transition-[transform,border-color] hover:-translate-y-0.5 hover:border-brand-ink hover:text-brand-ink fill-mustard"} href={localizedHref("/gratis", locale)}>
              {"\n"}
              <span className={"inline-block self-start rounded-full bg-brand-cream-muted px-[10px] py-1 text-[13px] font-semibold bg-brand-ink text-brand-cream"}>
                {copy.sections.pe_langa_social_media.na_moca}
              </span>
              {"\n"}
              <h3 className={"m-0 [font-family:Unbounded,_sans-serif] text-[22px] font-bold leading-[1.2] text-[26px]"}>
                {
                  copy.sections.pe_langa_social_media
                    .lista_pe_care_o_folosim_la_na_audit_acum_e_a_ta
                }
              </h3>
              {"\n"}
              <p>
                {
                  copy.sections.pe_langa_social_media
                    .number_40_de_intrebari_in_8_capitole_ca_sa_ti_verifici_sing
                }
              </p>
              {"\n"}
              <span className={"more"}>
                {copy.sections.pe_langa_social_media.vreau_lista_gratuita}
              </span>
              {"\n"}
            </a>
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n"}
        <section
          className={
            "max-w-[1080px] [margin:0_auto] p-[0_28px_96px] flex flex-col gap-[24px]"
          }
          id={"s-din-feed"}
        >
          {"\n"}
          <div
            className={"flex flex-wrap items-end justify-between gap-[16px]"}
          >
            {"\n"}
            <div className={"flex flex-col gap-[8px]"}>
              {"\n"}
              <h2
                className={
                  "m-0 [font-family:'Unbounded',_sans-serif] font-bold text-[clamp(30px,_4vw,_44px)] leading-[1.1]"
                }
              >
                {copy.sections.din_feed_ul_nostru.din_feed_ul_nostru}
              </h2>
              {"\n"}
              <p className={"m-0 text-brand-muted"}>
                {
                  copy.sections.din_feed_ul_nostru
                    .ultimele_noastre_postari_salveaza_ce_ti_foloseste
                }
              </p>
              {"\n"}
            </div>
            {"\n"}
            <div className={"flex flex-wrap gap-[10px]"}>
              {"\n"}
              <a
                className={
                  "inline-flex items-center min-h-[44px] p-[0_18px] bg-brand-white [border:1px_solid_var(--color-brand-border-strong)] rounded-[12px] no-underline font-semibold"
                }
                href={localizedHref("/", locale)}
              >
                {copy.sections.din_feed_ul_nostru.vezi_instagram}
              </a>
              {"\n"}
              <a
                className={
                  "inline-flex items-center min-h-[44px] p-[0_18px] bg-brand-white [border:1px_solid_var(--color-brand-border-strong)] rounded-[12px] no-underline font-semibold"
                }
                href={localizedHref("/", locale)}
              >
                {copy.sections.din_feed_ul_nostru.vezi_tiktok}
              </a>
              {"\n"}
            </div>
            {"\n"}
          </div>
          {"\n"}
          <div className={"na-reels flex flex-wrap gap-[10px]"}>
            {"\n"}
            <a
              className={
                "na-reel no-underline [flex:1_1_150px] aspect-[9/16] rounded-[14px] [border:2px_dashed_var(--color-brand-border-dashed)] bg-brand-white flex flex-col items-center justify-center gap-[10px]"
              }
              href={"https://www.instagram.com/"}
              target={"_blank"}
              rel={"noopener noreferrer"}
              aria-label={copy.sections.din_feed_ul_nostru.reel_1_pe_instagram}
            >
              <svg
                aria-hidden={"true"}
                width={"40"}
                height={"40"}
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"#6B5A4E"}
                strokeWidth={"1.8"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
              >
                <circle cx={"12"} cy={"12"} r={"9"}></circle>
                <path d={"M10 8.5v7l6-3.5z"}></path>
              </svg>
              <span className={"text-[13px] font-bold text-brand-muted"}>
                {copy.sections.din_feed_ul_nostru.reel_1}
              </span>
            </a>
            {"\n"}
            <a
              className={
                "na-reel no-underline [flex:1_1_150px] aspect-[9/16] rounded-[14px] [border:2px_dashed_var(--color-brand-border-dashed)] bg-brand-white flex flex-col items-center justify-center gap-[10px]"
              }
              href={"https://www.instagram.com/"}
              target={"_blank"}
              rel={"noopener noreferrer"}
              aria-label={copy.sections.din_feed_ul_nostru.reel_2_pe_instagram}
            >
              <svg
                aria-hidden={"true"}
                width={"40"}
                height={"40"}
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"#6B5A4E"}
                strokeWidth={"1.8"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
              >
                <circle cx={"12"} cy={"12"} r={"9"}></circle>
                <path d={"M10 8.5v7l6-3.5z"}></path>
              </svg>
              <span className={"text-[13px] font-bold text-brand-muted"}>
                {copy.sections.din_feed_ul_nostru.reel_2}
              </span>
            </a>
            {"\n"}
            <a
              className={
                "na-reel no-underline [flex:1_1_150px] aspect-[9/16] rounded-[14px] [border:2px_dashed_var(--color-brand-border-dashed)] bg-brand-white flex flex-col items-center justify-center gap-[10px]"
              }
              href={"https://www.instagram.com/"}
              target={"_blank"}
              rel={"noopener noreferrer"}
              aria-label={copy.sections.din_feed_ul_nostru.reel_3_pe_instagram}
            >
              <svg
                aria-hidden={"true"}
                width={"40"}
                height={"40"}
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"#6B5A4E"}
                strokeWidth={"1.8"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
              >
                <circle cx={"12"} cy={"12"} r={"9"}></circle>
                <path d={"M10 8.5v7l6-3.5z"}></path>
              </svg>
              <span className={"text-[13px] font-bold text-brand-muted"}>
                {copy.sections.din_feed_ul_nostru.reel_3}
              </span>
            </a>
            {"\n"}
            <a
              className={
                "na-reel no-underline [flex:1_1_150px] aspect-[9/16] rounded-[14px] [border:2px_dashed_var(--color-brand-border-dashed)] bg-brand-white flex flex-col items-center justify-center gap-[10px]"
              }
              href={"https://www.instagram.com/"}
              target={"_blank"}
              rel={"noopener noreferrer"}
              aria-label={copy.sections.din_feed_ul_nostru.reel_4_pe_instagram}
            >
              <svg
                aria-hidden={"true"}
                width={"40"}
                height={"40"}
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"#6B5A4E"}
                strokeWidth={"1.8"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
              >
                <circle cx={"12"} cy={"12"} r={"9"}></circle>
                <path d={"M10 8.5v7l6-3.5z"}></path>
              </svg>
              <span className={"text-[13px] font-bold text-brand-muted"}>
                {copy.sections.din_feed_ul_nostru.reel_4}
              </span>
            </a>
            {"\n"}
            <a
              className={
                "na-reel no-underline [flex:1_1_150px] aspect-[9/16] rounded-[14px] [border:2px_dashed_var(--color-brand-border-dashed)] bg-brand-white flex flex-col items-center justify-center gap-[10px]"
              }
              href={"https://www.instagram.com/"}
              target={"_blank"}
              rel={"noopener noreferrer"}
              aria-label={copy.sections.din_feed_ul_nostru.reel_5_pe_instagram}
            >
              <svg
                aria-hidden={"true"}
                width={"40"}
                height={"40"}
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"#6B5A4E"}
                strokeWidth={"1.8"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
              >
                <circle cx={"12"} cy={"12"} r={"9"}></circle>
                <path d={"M10 8.5v7l6-3.5z"}></path>
              </svg>
              <span className={"text-[13px] font-bold text-brand-muted"}>
                {copy.sections.din_feed_ul_nostru.reel_5}
              </span>
            </a>
            {"\n"}
            <a
              className={
                "na-reel no-underline [flex:1_1_150px] aspect-[9/16] rounded-[14px] [border:2px_dashed_var(--color-brand-border-dashed)] bg-brand-white flex flex-col items-center justify-center gap-[10px]"
              }
              href={"https://www.instagram.com/"}
              target={"_blank"}
              rel={"noopener noreferrer"}
              aria-label={copy.sections.din_feed_ul_nostru.reel_6_pe_instagram}
            >
              <svg
                aria-hidden={"true"}
                width={"40"}
                height={"40"}
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"#6B5A4E"}
                strokeWidth={"1.8"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
              >
                <circle cx={"12"} cy={"12"} r={"9"}></circle>
                <path d={"M10 8.5v7l6-3.5z"}></path>
              </svg>
              <span className={"text-[13px] font-bold text-brand-muted"}>
                {copy.sections.din_feed_ul_nostru.reel_6}
              </span>
            </a>
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n"}
        <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
          {"\n"}
          <div className={"relative flex flex-wrap items-center justify-between gap-6 rounded-[28px] bg-brand-ink p-10 text-brand-cream after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[image:var(--grain)] after:bg-[length:180px] after:opacity-[0.07] after:mix-blend-screen after:content-[''] max-[640px]:rounded-[22px] max-[640px]:p-7 [&_p]:mt-2 [&_p]:text-brand-text-light"}>
            {"\n"}
            <div>
              {"\n"}
              <h2 className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1]"}>
                {copy.sections.ne_vedem_la_cafea.ne_vedem_la_cafea}
              </h2>
              {"\n"}
              <p>
                {
                  copy.sections.ne_vedem_la_cafea
                    .vorbim_deschis_despre_ce_ai_nevoie_si_cat_costa_pe_b
                }
              </p>
              {"\n"}
            </div>
            {"\n"}
            <a className={"inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border-0 px-6 [font:inherit] font-bold no-underline bg-brand-tomato text-brand-ink hover:bg-brand-tomato-light hover:text-brand-ink"} href={localizedHref("/contact", locale)}>
              {copy.sections.ne_vedem_la_cafea.hai_la_cafea}
            </a>
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n"}
      </div>
    </HomeInteractions>
  );
}
