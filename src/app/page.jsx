import { HighlightSlider, HomeInteractions } from './_components/HomeInteractions'
import HomeFeedTabs from './_components/HomeFeedTabs'

export const metadata = {
  title: 'na.digital \u00b7 Studio de social media \u00een Bucure\u0219ti',
}

export default function NaDigitalAcasa() {
  return (
    <HomeInteractions>
    <div className={"view"}>
          {"\n"}
          <section className={"max-w-[1080px] [margin:0_auto] p-[64px_28px_40px] flex flex-wrap items-center gap-[48px]"} id={"s-top"} >
            {"\n"}
            <button type={"button"} className={"na-av-btn"} aria-label={"Deschide fortune cookie-ul zilei"}>
              <span className={"na-av-logo"} aria-hidden={"true"}>
                <svg focusable={"false"} xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 512 512"}>
                  {"\n"}
                  <circle cx={"256"} cy={"256"} r={"256"} fill={"#C3A6F2"}>
                  </circle>
                  {"\n"}
                  <path transform={"translate(91.29 315.3)"} fill={"#1E120C"} d={"M5.17 -118.6H52.57L56.51 -95.21Q56.92 -95.62 57.13 -96.25Q65.41 -109.08 77.2 -115.6Q89 -122.12 102.87 -122.12Q120.25 -122.12 132.26 -115.29Q144.26 -108.46 150.78 -95.93Q157.3 -83.41 157.3 -66.65V0H109.7V-59.82Q109.7 -71.41 103.59 -77.62Q97.49 -83.83 86.31 -83.83Q78.44 -83.83 72.65 -80.51Q66.85 -77.2 63.75 -71.2Q60.64 -65.2 60.64 -56.71V0H13.25V-76.79Z M274.98 0 272.08 -22.15Q264.42 -10.97 253.24 -4.35Q240 3.52 223.03 3.52Q205.85 3.52 192.6 -4.35Q179.35 -12.21 172 -26.39Q164.66 -40.57 164.66 -59.2Q164.66 -78.24 172 -92.42Q179.35 -106.59 192.6 -114.36Q205.85 -122.12 223.03 -122.12Q240 -122.12 253.24 -114.46Q264.42 -107.84 272.08 -96.66L274.98 -118.6H324.24L316.37 -59.4L324.24 0ZM212.47 -59.2Q212.47 -51.33 215.68 -45.33Q218.89 -39.33 224.68 -35.81Q230.48 -32.29 237.93 -32.29Q245.59 -32.29 252.62 -35.81Q259.66 -39.33 265.04 -45.33Q270.42 -51.33 272.91 -59.2Q270.42 -67.06 265.04 -73.17Q259.66 -79.27 252.62 -82.79Q245.59 -86.31 237.93 -86.31Q230.48 -86.31 224.68 -82.79Q218.89 -79.27 215.68 -73.17Q212.47 -67.06 212.47 -59.2Z"}>
                  </path>
                  {"\n"}
                </svg>
              </span>
              <span className={"na-av-badge"}>
                {"fortune cookie"}
              </span>
            </button>
            {"\n"}
            <div className={"[flex:1_1_480px] min-w-[0] flex flex-col gap-[18px]"} >
              {"\n"}
              <h1 className={"m-0 flex flex-wrap items-center gap-[16px] font-normal"} >
                <span className={"[font-family:'Unbounded',_sans-serif] font-bold text-[34px] leading-[1.1]"} >
                  {"na.digital"}
                </span>
                {" "}
                <span className={"[font-family:'Inter',_system-ui,_sans-serif] text-[13px] leading-[1.4] p-[6px_12px] [border:1px_solid_var(--color-brand-border-strong)] rounded-[999px] text-brand-muted"} >
                  {"studio de social media din București"}
                </span>
              </h1>
              {"\n"}
              <div className={"flex flex-wrap gap-[10px_32px]"} >
                {"\n"}
                <span>
                  <strong className={"[font-family:'Unbounded',_sans-serif] text-[22px]"} >
                    {"2"}
                  </strong>
                  {" fondatoare"}
                </span>
                {"\n"}
                <span>
                  <strong className={"[font-family:'Unbounded',_sans-serif] text-[22px]"} >
                    {"5"}
                  </strong>
                  {" serii în feed"}
                </span>
                {"\n"}
                <span>
                  <strong className={"[font-family:'Unbounded',_sans-serif] text-[22px]"} >
                    {"0"}
                  </strong>
                  {" deck-uri de 80 de slide-uri"}
                </span>
                {"\n"}
              </div>
              {"\n"}
              <div className={"flex flex-col gap-[12px] max-w-[600px]"} >
                {"\n"}
                <strong className={"[font-family:'Unbounded',_sans-serif] font-bold text-[clamp(26px,_3.4vw,_40px)] leading-[1.1]"} >
                  {"Born and raised in the feed."}
                </strong>
                {"\n"}
                <span>
                  {"Facem conținut gândit direct pentru feed, nu adaptat din TV sau din print. Și dăm din ce știm înainte să-ți cerem ceva."}
                </span>
                {"\n"}
              </div>
              {"\n"}
              <div className={"flex flex-wrap gap-[10px]"} >
                {"\n"}
                <a className={"inline-flex items-center justify-center min-h-[48px] p-[0_26px] bg-brand-tomato text-brand-ink rounded-[12px] no-underline font-bold"} href={"/contact"} >
                  {"Hai să vorbim"}
                </a>
                {"\n"}
                <a className={"inline-flex items-center justify-center min-h-[48px] p-[0_26px] bg-brand-white [border:1px_solid_var(--color-brand-border-strong)] rounded-[12px] no-underline font-semibold"} href={"/ce-am-facut"} >
                  {"Vezi ce-am făcut"}
                </a>
                {"\n"}
              </div>
              {"\n"}
            </div>
            {"\n"}
          </section>
          {"\n"}
          <HighlightSlider className={"max-w-[1080px] [margin:0_auto] p-[8px_28px_40px] box-border flex items-center gap-[12px]"}>
            <nav aria-label={"Secțiuni"} className={"na-track [flex:1_1_auto] min-w-[0] flex gap-[20px] overflow-x-auto snap-x snap-mandatory scroll-smooth p-[4px_2px]"} >
              {"\n"}
              <a href={"/pentru-cine"} data-st={"pentru-cine"} className={"na-hl flex-none w-[96px] snap-start flex flex-col items-center gap-[10px] no-underline text-[14px] font-medium text-center"} >
                {"\n"}
                <span className={"na-hl-c w-[84px] h-[84px] rounded-full [border:2px_solid_var(--color-brand-border-strong)] p-[4px] box-border flex"} >
                  <span className={"flex-1 rounded-full bg-brand-white [border:1px_solid_var(--color-brand-border)] flex items-center justify-center"} >
                    <svg aria-hidden={"true"} width={"30"} height={"30"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E120C"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <circle cx={"12"} cy={"12"} r={"8"}>
                      </circle>
                      <circle cx={"12"} cy={"12"} r={"3"}>
                      </circle>
                    </svg>
                  </span>
                </span>
                {"\nPentru cine"}
              </a>
              {"\n"}
              <a href={"/ce-facem"} data-st={"ce-facem"} className={"na-hl flex-none w-[96px] snap-start flex flex-col items-center gap-[10px] no-underline text-[14px] font-medium text-center"} >
                {"\n"}
                <span className={"na-hl-c w-[84px] h-[84px] rounded-full [border:2px_solid_var(--color-brand-border-strong)] p-[4px] box-border flex"} >
                  <span className={"flex-1 rounded-full bg-brand-mustard flex items-center justify-center"} >
                    <svg aria-hidden={"true"} width={"30"} height={"30"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E120C"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <rect x={"4"} y={"4"} width={"7"} height={"7"} rx={"1.5"}>
                      </rect>
                      <rect x={"13"} y={"4"} width={"7"} height={"7"} rx={"1.5"}>
                      </rect>
                      <rect x={"4"} y={"13"} width={"7"} height={"7"} rx={"1.5"}>
                      </rect>
                      <rect x={"13"} y={"13"} width={"7"} height={"7"} rx={"1.5"}>
                      </rect>
                    </svg>
                  </span>
                </span>
                {"\nCe facem"}
              </a>
              {"\n"}
              <a href={"/artisti"} data-st={"artisti"} className={"na-hl flex-none w-[96px] snap-start flex flex-col items-center gap-[10px] no-underline text-[14px] font-medium text-center"} >
                {"\n"}
                <span className={"na-hl-c w-[84px] h-[84px] rounded-full [border:2px_solid_var(--color-brand-border-strong)] p-[4px] box-border flex"} >
                  <span className={"flex-1 rounded-full bg-brand-yellow flex items-center justify-center"} >
                    <svg aria-hidden={"true"} width={"30"} height={"30"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E120C"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M12 3a9 9 0 1 0 0 18c1.1 0 1.5-.8 1.5-1.5 0-.9-.7-1.2-.7-2 0-.9.7-1.5 1.6-1.5H17a4 4 0 0 0 4-4c0-5-4-9-9-9z"}>
                      </path>
                      <circle cx={"7.5"} cy={"11"} r={"1"}>
                      </circle>
                      <circle cx={"10"} cy={"7"} r={"1"}>
                      </circle>
                      <circle cx={"15"} cy={"7.5"} r={"1"}>
                      </circle>
                    </svg>
                  </span>
                </span>
                {"\nArtiști"}
              </a>
              {"\n"}
              <a href={"/ce-am-facut"} data-st={"ce-am-facut"} className={"na-hl flex-none w-[96px] snap-start flex flex-col items-center gap-[10px] no-underline text-[14px] font-medium text-center"} >
                {"\n"}
                <span className={"na-hl-c w-[84px] h-[84px] rounded-full [border:2px_solid_var(--color-brand-border-strong)] p-[4px] box-border flex"} >
                  <span className={"flex-1 rounded-full bg-brand-tomato flex items-center justify-center"} >
                    <svg aria-hidden={"true"} width={"30"} height={"30"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E120C"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7z"}>
                      </path>
                    </svg>
                  </span>
                </span>
                {"\nCe-am făcut"}
              </a>
              {"\n"}
              <a href={"/gratis"} data-st={"gratis"} className={"na-hl flex-none w-[96px] snap-start flex flex-col items-center gap-[10px] no-underline text-[14px] font-medium text-center"} >
                {"\n"}
                <span className={"na-hl-c w-[84px] h-[84px] rounded-full [border:2px_solid_var(--color-brand-border-strong)] p-[4px] box-border flex"} >
                  <span className={"flex-1 rounded-full bg-brand-sky flex items-center justify-center"} >
                    <svg aria-hidden={"true"} width={"30"} height={"30"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E120C"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <rect x={"4"} y={"9"} width={"16"} height={"11"} rx={"1.5"}>
                      </rect>
                      <path d={"M3 9h18M12 9v11"}>
                      </path>
                      <path d={"M12 9c-2-4-6-4-6-1.5S10 9 12 9c2 0 6 1 6-1.5S14 5 12 9z"}>
                      </path>
                    </svg>
                  </span>
                </span>
                {"\nGratis"}
              </a>
              {"\n"}
              <a href={"/cine-suntem"} data-st={"cine-suntem"} className={"na-hl flex-none w-[96px] snap-start flex flex-col items-center gap-[10px] no-underline text-[14px] font-medium text-center"} >
                {"\n"}
                <span className={"na-hl-c w-[84px] h-[84px] rounded-full [border:2px_solid_var(--color-brand-border-strong)] p-[4px] box-border flex"} >
                  <span className={"flex-1 rounded-full bg-brand-purple flex items-center justify-center"} >
                    <svg aria-hidden={"true"} width={"30"} height={"30"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E120C"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <circle cx={"8"} cy={"9"} r={"3"}>
                      </circle>
                      <circle cx={"16"} cy={"9"} r={"3"}>
                      </circle>
                      <path d={"M3 19c.8-3 2.8-4.5 5-4.5s4.2 1.5 5 4.5M11 19c.8-3 2.8-4.5 5-4.5s4.2 1.5 5 4.5"}>
                      </path>
                    </svg>
                  </span>
                </span>
                {"\nCine suntem"}
              </a>
              {"\n"}
              <a href={"/intrebari"} data-st={"intrebari"} className={"na-hl flex-none w-[96px] snap-start flex flex-col items-center gap-[10px] no-underline text-[14px] font-medium text-center"} >
                {"\n"}
                <span className={"na-hl-c w-[84px] h-[84px] rounded-full [border:2px_solid_var(--color-brand-border-strong)] p-[4px] box-border flex"} >
                  <span className={"flex-1 rounded-full bg-brand-cream-muted flex items-center justify-center"} >
                    <svg aria-hidden={"true"} width={"30"} height={"30"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E120C"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14"}>
                      </path>
                      <path d={"M12 17.5v.5"}>
                      </path>
                      <circle cx={"12"} cy={"12"} r={"9"}>
                      </circle>
                    </svg>
                  </span>
                </span>
                {"\nÎntrebări"}
              </a>
              {"\n"}
              <a href={"/contact"} data-st={"contact"} className={"na-hl flex-none w-[96px] snap-start flex flex-col items-center gap-[10px] no-underline text-[14px] font-medium text-center"} >
                {"\n"}
                <span className={"na-hl-c w-[84px] h-[84px] rounded-full [border:2px_solid_var(--color-brand-border-strong)] p-[4px] box-border flex"} >
                  <span className={"flex-1 rounded-full bg-brand-ink flex items-center justify-center"} >
                    <svg aria-hidden={"true"} width={"30"} height={"30"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FBF5EB"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                      <path d={"M4 5h16v11H9l-5 4z"}>
                      </path>
                    </svg>
                  </span>
                </span>
                {"\nContact"}
              </a>
              {"\n"}
            </nav>
          </HighlightSlider>
          {"\n"}
          <HomeFeedTabs />
          {"\n"}
          <section className={"wrap sec"}>
            {"\n"}
            <div className={"sec-head"}>
              <h2 className={"h2"}>
                {"Digital nativ, nu digital adaptat."}
              </h2>
              {"\n"}
              <p className={"lead"}>
                {"Multe branduri mută în feed ce au făcut pentru TV sau print. Se vede din prima secundă, iar degetul merge mai departe."}
              </p>
            </div>
            {"\n"}
            <div className={"nva"}>
              {"\n"}
              <div className={"nva-phones"}>
                {"\n"}
                <figure className={"nva-fig"}>
                  {"\n"}
                  <div className={"phone adapt"} aria-hidden={"true"}>
                    {"\n"}
                    <span className={"ph-logo"}>
                      {"LOGO"}
                    </span>
                    {"\n"}
                    <div className={"ph-letter"}>
                      <span>
                        {"spot TV 16:9"}
                      </span>
                    </div>
                    {"\n"}
                    <span className={"ph-cap"}>
                      {"Descoperă noua colecție! Link în bio. #brand #nou #colectie"}
                    </span>
                    {"\n"}
                  </div>
                  {"\n"}
                  <figcaption>
                    <span className={"chip"}>
                      {"adaptat"}
                    </span>
                    <span>
                      {"Spotul de TV, pus pe vertical, cu benzi negre."}
                    </span>
                  </figcaption>
                  {"\n"}
                </figure>
                {"\n"}
                <figure className={"nva-fig"}>
                  {"\n"}
                  <div className={"phone native"} aria-hidden={"true"}>
                    {"\n"}
                    <span className={"ph-hook"}>
                      {"Postezi rar sau postezi pe fugă?"}
                    </span>
                    {"\n"}
                    <svg className={"ph-person"} viewBox={"0 0 120 120"}>
                      <circle cx={"60"} cy={"42"} r={"22"} fill={"#1E120C"}>
                      </circle>
                      <path d={"M18 120c4-30 22-44 42-44s38 14 42 44z"} fill={"#1E120C"}>
                      </path>
                    </svg>
                    {"\n"}
                    <span className={"ph-sub"}>
                      {"„Hai să vedem, în 30 de secunde.”"}
                    </span>
                    {"\n"}
                    <div className={"ph-ui"}>
                      <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                        <path d={"M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"}>
                        </path>
                      </svg>
                      <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                        <path d={"M4 5h16v11H9l-5 4z"}>
                        </path>
                      </svg>
                      <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                        <path d={"M21 3 3 10l7 3 3 7z"}>
                        </path>
                      </svg>
                      <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                        <path d={"M6 3h12v18l-6-4-6 4z"}>
                        </path>
                      </svg>
                    </div>
                    {"\n"}
                  </div>
                  {"\n"}
                  <figcaption>
                    <span className={"chip tomato"}>
                      {"nativ"}
                    </span>
                    <span>
                      {"Gândit pentru telefon, din prima secundă."}
                    </span>
                  </figcaption>
                  {"\n"}
                </figure>
                {"\n"}
              </div>
              {"\n"}
              <div className={"nva-list"}>
                {"\n"}
                <div className={"nva-row nva-headrow"}>
                  <span>
                    {"Adaptat"}
                  </span>
                  <span>
                    {"Nativ"}
                  </span>
                </div>
                {"\n"}
                <div className={"nva-row"}>
                  <span className={"nva-a"}>
                    {"Logo-ul în primele 3 secunde."}
                  </span>
                  <span className={"nva-n"}>
                    {"Prezență umană, reală, caldă."}
                  </span>
                </div>
                <div className={"nva-row"}>
                  <span className={"nva-a"}>
                    {"Textul din afiș, mutat în descriere."}
                  </span>
                  <span className={"nva-n"}>
                    {"Text scris pentru cine dă scroll."}
                  </span>
                </div>
                <div className={"nva-row"}>
                  <span className={"nva-a"}>
                    {"Aceeași postare pe toate platformele."}
                  </span>
                  <span className={"nva-n"}>
                    {"Fiecare platformă, cu limba ei."}
                  </span>
                </div>
                <div className={"nva-row"}>
                  <span className={"nva-a"}>
                    {"Postezi când e campanie."}
                  </span>
                  <span className={"nva-n"}>
                    {"Ești acolo în fiecare săptămână."}
                  </span>
                </div>
                <div className={"nva-row"}>
                  <span className={"nva-a"}>
                    {"Raport de 40 de slide-uri."}
                  </span>
                  <span className={"nva-n"}>
                    {"Concluzii acționabile."}
                  </span>
                </div>
                {"\n"}
                <p className={"nva-end"}>
                  {"Noi facem doar a doua variantă. "}
                  <a href={"/ce-facem"}>
                    {"Vezi ce facem"}
                  </a>
                </p>
                {"\n"}
              </div>
              {"\n"}
            </div>
            {"\n"}
          </section>
          {"\n\n"}
          <section className={"wrap sec"}>
            {"\n"}
            <div className={"sec-head"}>
              <h2 className={"h2"}>
                {"Ce facem"}
              </h2>
              <p className={"lead"}>
                {"Un serviciu vedetă, lună de lună, plus câteva pentru ce-ți trebuie acum."}
              </p>
            </div>
            {"\n"}
            <div className={"na-grid-layout"}>
              <a className={"na-card"} href={"/lunar"}>
                {"\n"}
                <span className={"chip tomato"}>
                  {"serviciul principal"}
                </span>
                {"\n"}
                <h3 className={"h3"}>
                  {"NA Social Media Lunar"}
                </h3>
                {"\n"}
                <p className={"muted"}>
                  {"Conturile tale de social media, lună de lună: strategie, 10-12 postări, o zi de filmare, raport de 5 minute."}
                </p>
                {"\n"}
                <span className={"more"}>
                  {"Vezi ce primești lunar"}
                </span>
                {"\n"}
              </a>
              <a className={"na-card"} href={"/content-creation"}>
                {"\n"}
                <span className={"chip sky"}>
                  {"filmăm și edităm"}
                </span>
                {"\n"}
                <h3 className={"h3"}>
                  {"NA Content Creation"}
                </h3>
                {"\n"}
                <p className={"muted"}>
                  {"Filmăm, edităm, facem conținut adevărat: clipuri și poze gândite pentru telefon, gata de postat."}
                </p>
                {"\n"}
                <span className={"more"}>
                  {"Vezi cum filmăm"}
                </span>
                {"\n"}
              </a>
              <a className={"na-card"} href={"/audit"}>
                {"\n"}
                <span className={"chip mustard"}>
                  {"cel mai simplu început"}
                </span>
                {"\n"}
                <h3 className={"h3"}>
                  {"NA Audit"}
                </h3>
                {"\n"}
                <p className={"muted"}>
                  {"Tot ce ai online, radiografiat. Plan de 90 de zile pe o pagină, în 10 zile."}
                </p>
                {"\n"}
                <span className={"more"}>
                  {"Vezi ce verificăm"}
                </span>
                {"\n"}
              </a>
              <a className={"na-card"} href={"/tiktok-start"}>
                {"\n"}
                <span className={"chip sky"}>
                  {"pornim, apoi predăm"}
                </span>
                {"\n"}
                <h3 className={"h3"}>
                  {"NA TikTok Start"}
                </h3>
                {"\n"}
                <p className={"muted"}>
                  {"Cont setat, direcție creativă, primele 8 clipuri și un playbook pentru echipa ta."}
                </p>
                {"\n"}
                <span className={"more"}>
                  {"Vezi cum pornim contul"}
                </span>
                {"\n"}
              </a>
              <a className={"na-card"} href={"/email-marketing"}>
                {"\n"}
                <span className={"chip purple"}>
                  {"pe lângă lunar"}
                </span>
                {"\n"}
                <h3 className={"h3"}>
                  {"NA Email Marketing"}
                </h3>
                {"\n"}
                <p className={"muted"}>
                  {"Emailuri automate, campanii și o listă care crește."}
                </p>
                {"\n"}
                <span className={"more"}>
                  {"Vezi ce face emailul pentru tine"}
                </span>
                {"\n"}
              </a>
              <a className={"na-card"} href={"/facut-de-mana"}>
                {"\n"}
                <span className={"chip light"}>
                  {"cu artiștii noștri"}
                </span>
                {"\n"}
                <h3 className={"h3"}>
                  {"NA Făcut de mână"}
                </h3>
                {"\n"}
                <p className={"muted"}>
                  {"Pachete personalizate cu artiștii noștri: pictură, lut și ce mai are nevoie brandul tău."}
                </p>
                {"\n"}
                <span className={"more"}>
                  {"Vezi ce fac artiștii"}
                </span>
                {"\n"}
              </a>
              {"\n"}
              <a className={"na-card dashed"} href={"/ce-facem"}>
                {"\n"}
                <span className={"chip"}>
                  {"în curând"}
                </span>
                {"\n"}
                <h3 className={"h3"}>
                  {"Na, învață "}
                  <span aria-hidden={"true"}>
                    {"🎓"}
                  </span>
                </h3>
                {"\n"}
                <p className={"muted"}>
                  {"Cursuri. Vin când ni le ceri."}
                </p>
                {"\n"}
                <span className={"more"}>
                  {"Vezi tot meniul"}
                </span>
                {"\n"}
              </a>
            </div>
            {"\n"}
          </section>
          {"\n"}
          <section className={"wrap sec"}>
            {"\n"}
            <div className={"sec-head"}>
              <h2 className={"h2"}>
                {"Povești la care ținem"}
              </h2>
              <p className={"lead"}>
                {"De unde am pornit, ce am făcut împreună și ce a ieșit."}
              </p>
            </div>
            {"\n"}
            <div className={"na-grid-layout g2"}>
              {"\n"}
              <a className={"na-card p-[0] overflow-hidden"} href={"/ce-am-facut"} >
                {"\n"}
                <div className={"bg-brand-tomato p-[26px] min-h-[180px] flex flex-col justify-between gap-[12px]"} >
                  {"\n"}
                  <span className={"text-[13px] font-bold"} >
                    {"brand personal · Târgoviște"}
                  </span>
                  {"\n"}
                  <span className={"h2 text-[30px]"} >
                    {"Alexi Brows"}
                  </span>
                  {"\n"}
                </div>
                {"\n"}
                <div className={"p-[22px_26px] flex flex-col gap-[10px]"} >
                  {"\n"}
                  <p className={"muted"}>
                    {"Un brand de sprâncene, de la zero: audit, brand guidelines, calendar pe prima lună, copy pentru Instagram și TikTok."}
                  </p>
                  {"\n"}
                  <span className={"more"}>
                    {"Vezi povestea"}
                  </span>
                  {"\n"}
                </div>
                {"\n"}
              </a>
              {"\n"}
              <a className={"na-card p-[0] overflow-hidden"} href={"/ce-am-facut"} >
                {"\n"}
                <div className={"bg-brand-sky p-[26px] min-h-[180px] flex flex-col justify-between gap-[12px]"} >
                  {"\n"}
                  <span className={"text-[13px] font-bold"} >
                    {"ONG patrimoniu · retainer"}
                  </span>
                  {"\n"}
                  <span className={"h2 text-[30px]"} >
                    {"Pro Patrimonio"}
                  </span>
                  {"\n"}
                </div>
                {"\n"}
                <div className={"p-[22px_26px] flex flex-col gap-[10px]"} >
                  {"\n"}
                  <p className={"muted"}>
                    {"Concerte pe Siret, ediția a VI-a: concept creativ, strategie pe 4 canale, blog, newsletter și recap."}
                  </p>
                  {"\n"}
                  <span className={"more"}>
                    {"Vezi povestea"}
                  </span>
                  {"\n"}
                </div>
                {"\n"}
              </a>
              {"\n"}
            </div>
            {"\n"}
            <div className={"na-grid-layout mt-[16px]"} >
              {"\n"}
              <a className={"na-card p-[0] overflow-hidden"} href={"/ce-am-facut"} >
                {"\n"}
                <div className={"bg-brand-mustard p-[22px_26px] min-h-[140px] flex flex-col justify-between gap-[12px]"} >
                  {"\n"}
                  <span className={"text-[13px] font-bold"} >
                    {"trupă · metalcore"}
                  </span>
                  {"\n"}
                  <span className={"h2 text-[26px]"} >
                    {"Static Collapse"}
                  </span>
                  {"\n"}
                </div>
                {"\n"}
                <div className={"p-[20px_26px] flex flex-col gap-[10px]"} >
                  {"\n"}
                  <p className={"muted"}>
                    {"[CE AM FĂCUT, ÎNTR-UN RÂND]"}
                  </p>
                  {"\n"}
                  <span className={"more"}>
                    {"Vezi povestea"}
                  </span>
                  {"\n"}
                </div>
                {"\n"}
              </a>
              {"\n"}
              <a className={"na-card p-[0] overflow-hidden"} href={"/ce-am-facut"} >
                {"\n"}
                <div className={"bg-brand-purple p-[22px_26px] min-h-[140px] flex flex-col justify-between gap-[12px]"} >
                  {"\n"}
                  <span className={"text-[13px] font-bold"} >
                    {"atelier de mobilă"}
                  </span>
                  {"\n"}
                  <span className={"h2 text-[26px]"} >
                    {"Como Atelier"}
                  </span>
                  {"\n"}
                </div>
                {"\n"}
                <div className={"p-[20px_26px] flex flex-col gap-[10px]"} >
                  {"\n"}
                  <p className={"muted"}>
                    {"[CE AM FĂCUT, ÎNTR-UN RÂND]"}
                  </p>
                  {"\n"}
                  <span className={"more"}>
                    {"Vezi povestea"}
                  </span>
                  {"\n"}
                </div>
                {"\n"}
              </a>
              {"\n"}
              <a className={"na-card p-[0] overflow-hidden"} href={"/ce-am-facut"} >
                {"\n"}
                <div className={"bg-brand-ink text-brand-cream p-[22px_26px] min-h-[140px] flex flex-col justify-between gap-[12px]"} >
                  {"\n"}
                  <span className={"text-[13px] font-bold"} >
                    {"[DOMENIU]"}
                  </span>
                  {"\n"}
                  <span className={"h2 text-[26px]"} >
                    {"Imprimax Solutions"}
                  </span>
                  {"\n"}
                </div>
                {"\n"}
                <div className={"p-[20px_26px] flex flex-col gap-[10px]"} >
                  {"\n"}
                  <p className={"muted"}>
                    {"[CE AM FĂCUT, ÎNTR-UN RÂND]"}
                  </p>
                  {"\n"}
                  <span className={"more"}>
                    {"Vezi povestea"}
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
          <section className={"wrap sec"}>
            {"\n"}
            <div className={"sec-head"}>
              <h2 className={"h2"}>
                {"Pe lângă social media"}
              </h2>
            </div>
            {"\n"}
            <div className={"na-grid-layout g2"}>
              {"\n"}
              <a className={"na-card fill-purple"} href={"/artisti"}>
                {"\n"}
                <span className={"chip ink"}>
                  {"cu artiștii noștri"}
                </span>
                {"\n"}
                <h3 className={"h3 text-[26px]"} >
                  {"Făcut de mână, nu generat"}
                </h3>
                {"\n"}
                <p>
                  {"Lucrăm cu artiști în care credem și pe care îi promovăm: Bianca Morgociu, pictură, și Alex Jujan, lut."}
                </p>
                {"\n"}
                <span className={"more"}>
                  {"Vezi artiștii"}
                </span>
                {"\n"}
              </a>
              {"\n"}
              <a className={"na-card fill-mustard"} href={"/gratis"}>
                {"\n"}
                <span className={"chip ink"}>
                  {"na, moca"}
                </span>
                {"\n"}
                <h3 className={"h3 text-[26px]"} >
                  {"Lista pe care o folosim la NA Audit. Acum e a ta."}
                </h3>
                {"\n"}
                <p>
                  {"40 de întrebări în 8 capitole, ca să-ți verifici singur contul."}
                </p>
                {"\n"}
                <span className={"more"}>
                  {"Vreau lista gratuită"}
                </span>
                {"\n"}
              </a>
              {"\n"}
            </div>
            {"\n"}
          </section>
          {"\n"}
          <section className={"max-w-[1080px] [margin:0_auto] p-[0_28px_96px] flex flex-col gap-[24px]"} id={"s-din-feed"} >
            {"\n"}
            <div className={"flex flex-wrap items-end justify-between gap-[16px]"} >
              {"\n"}
              <div className={"flex flex-col gap-[8px]"} >
                {"\n"}
                <h2 className={"m-0 [font-family:'Unbounded',_sans-serif] font-bold text-[clamp(30px,_4vw,_44px)] leading-[1.1]"} >
                  {"Din feed-ul nostru"}
                </h2>
                {"\n"}
                <p className={"m-0 text-brand-muted"} >
                  {"Ultimele noastre postări. Salvează ce-ți folosește."}
                </p>
                {"\n"}
              </div>
              {"\n"}
              <div className={"flex flex-wrap gap-[10px]"} >
                {"\n"}
                <a className={"inline-flex items-center min-h-[44px] p-[0_18px] bg-brand-white [border:1px_solid_var(--color-brand-border-strong)] rounded-[12px] no-underline font-semibold"} href={"/"} >
                  {"Instagram [@HANDLE]"}
                </a>
                {"\n"}
                <a className={"inline-flex items-center min-h-[44px] p-[0_18px] bg-brand-white [border:1px_solid_var(--color-brand-border-strong)] rounded-[12px] no-underline font-semibold"} href={"/"} >
                  {"TikTok [@HANDLE]"}
                </a>
                {"\n"}
              </div>
              {"\n"}
            </div>
            {"\n"}
            <div className={"na-reels flex flex-wrap gap-[10px]"} >
              {"\n"}
              <a className={"na-reel no-underline [flex:1_1_150px] aspect-[9/16] rounded-[14px] [border:2px_dashed_var(--color-brand-border-dashed)] bg-brand-white flex flex-col items-center justify-center gap-[10px]"} href={"https://www.instagram.com/"} target={"_blank"} rel={"noopener"} aria-label={"Reel 1 pe Instagram"} >
                <svg aria-hidden={"true"} width={"40"} height={"40"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6B5A4E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                  <circle cx={"12"} cy={"12"} r={"9"}>
                  </circle>
                  <path d={"M10 8.5v7l6-3.5z"}>
                  </path>
                </svg>
                <span className={"text-[13px] font-bold text-brand-muted"} >
                  {"[REEL 1]"}
                </span>
              </a>
              {"\n"}
              <a className={"na-reel no-underline [flex:1_1_150px] aspect-[9/16] rounded-[14px] [border:2px_dashed_var(--color-brand-border-dashed)] bg-brand-white flex flex-col items-center justify-center gap-[10px]"} href={"https://www.instagram.com/"} target={"_blank"} rel={"noopener"} aria-label={"Reel 2 pe Instagram"} >
                <svg aria-hidden={"true"} width={"40"} height={"40"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6B5A4E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                  <circle cx={"12"} cy={"12"} r={"9"}>
                  </circle>
                  <path d={"M10 8.5v7l6-3.5z"}>
                  </path>
                </svg>
                <span className={"text-[13px] font-bold text-brand-muted"} >
                  {"[REEL 2]"}
                </span>
              </a>
              {"\n"}
              <a className={"na-reel no-underline [flex:1_1_150px] aspect-[9/16] rounded-[14px] [border:2px_dashed_var(--color-brand-border-dashed)] bg-brand-white flex flex-col items-center justify-center gap-[10px]"} href={"https://www.instagram.com/"} target={"_blank"} rel={"noopener"} aria-label={"Reel 3 pe Instagram"} >
                <svg aria-hidden={"true"} width={"40"} height={"40"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6B5A4E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                  <circle cx={"12"} cy={"12"} r={"9"}>
                  </circle>
                  <path d={"M10 8.5v7l6-3.5z"}>
                  </path>
                </svg>
                <span className={"text-[13px] font-bold text-brand-muted"} >
                  {"[REEL 3]"}
                </span>
              </a>
              {"\n"}
              <a className={"na-reel no-underline [flex:1_1_150px] aspect-[9/16] rounded-[14px] [border:2px_dashed_var(--color-brand-border-dashed)] bg-brand-white flex flex-col items-center justify-center gap-[10px]"} href={"https://www.instagram.com/"} target={"_blank"} rel={"noopener"} aria-label={"Reel 4 pe Instagram"} >
                <svg aria-hidden={"true"} width={"40"} height={"40"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6B5A4E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                  <circle cx={"12"} cy={"12"} r={"9"}>
                  </circle>
                  <path d={"M10 8.5v7l6-3.5z"}>
                  </path>
                </svg>
                <span className={"text-[13px] font-bold text-brand-muted"} >
                  {"[REEL 4]"}
                </span>
              </a>
              {"\n"}
              <a className={"na-reel no-underline [flex:1_1_150px] aspect-[9/16] rounded-[14px] [border:2px_dashed_var(--color-brand-border-dashed)] bg-brand-white flex flex-col items-center justify-center gap-[10px]"} href={"https://www.instagram.com/"} target={"_blank"} rel={"noopener"} aria-label={"Reel 5 pe Instagram"} >
                <svg aria-hidden={"true"} width={"40"} height={"40"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6B5A4E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                  <circle cx={"12"} cy={"12"} r={"9"}>
                  </circle>
                  <path d={"M10 8.5v7l6-3.5z"}>
                  </path>
                </svg>
                <span className={"text-[13px] font-bold text-brand-muted"} >
                  {"[REEL 5]"}
                </span>
              </a>
              {"\n"}
              <a className={"na-reel no-underline [flex:1_1_150px] aspect-[9/16] rounded-[14px] [border:2px_dashed_var(--color-brand-border-dashed)] bg-brand-white flex flex-col items-center justify-center gap-[10px]"} href={"https://www.instagram.com/"} target={"_blank"} rel={"noopener"} aria-label={"Reel 6 pe Instagram"} >
                <svg aria-hidden={"true"} width={"40"} height={"40"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6B5A4E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                  <circle cx={"12"} cy={"12"} r={"9"}>
                  </circle>
                  <path d={"M10 8.5v7l6-3.5z"}>
                  </path>
                </svg>
                <span className={"text-[13px] font-bold text-brand-muted"} >
                  {"[REEL 6]"}
                </span>
              </a>
              {"\n"}
            </div>
            {"\n"}
          </section>
          {"\n"}
          <section className={"wrap sec"}>
            {"\n"}
            <div className={"cta-band"}>
              {"\n"}
              <div>
                {"\n"}
                <h2 className={"h2"}>
                  {"Ne vedem la cafea."}
                </h2>
                {"\n"}
                <p>
                  {"Vorbim deschis despre ce ai nevoie și cât costă. Pe bune, cafeaua e de la noi."}
                </p>
                {"\n"}
              </div>
              {"\n"}
              <a className={"btn btn-accent"} href={"/contact"}>
                {"Hai la cafea"}
              </a>
              {"\n"}
            </div>
            {"\n"}
          </section>
          {"\n"}
        </div>
      </HomeInteractions>
  )
}