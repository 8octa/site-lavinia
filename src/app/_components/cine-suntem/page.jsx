import defaultCopy from "./copy.json";
import localizedHref from "../localizedHref";
export default function CineSuntemPage({ copy = defaultCopy, locale = "ro" }) {
  return (
    <div className={"view"}>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] flex flex-col items-center gap-3 pt-10 pb-9 text-center"}>
        {"\n"}
        <nav className={"flex flex-wrap items-center gap-2 text-sm leading-5 text-brand-muted [&>*]:inline-flex [&>*]:min-h-5 [&>*]:items-center [&>*]:leading-5 [&_a]:text-brand-muted"} aria-label={copy.hero.unde_esti}>
          <a href={localizedHref("/", locale)}>{copy.hero.na_digital}</a>{" "}
          <span aria-hidden={"true"}>{copy.hero.separator}</span>{" "}
          <span>{copy.hero.cine_suntem}</span>
        </nav>
        {"\n\n"}
        <h1 className={"m-0 [font-family:Unbounded,_sans-serif] font-extrabold text-[clamp(30px,3.6vw,44px)] leading-[1.05] tracking-[-0.5px] max-[360px]:text-[26px]"}>{copy.hero.cine_suntem}</h1>
        {"\n"}
        <p className={"m-0 text-brand-muted max-w-[720px] text-[18px] text-brand-text"}>
          {copy.hero.doua_prietene_din_publicitate_care_dau_d}
        </p>
        {"\n\n"}
      </section>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
        <div className={"flex flex-wrap gap-4"}>
          <div className={"flex flex-[1_1_360px] flex-col gap-3 rounded-[18px] border border-brand-border bg-brand-white px-[26px] py-6 flex-row flex-wrap items-center gap-[22px]"}>
            {"\n"}
            <div className={"flex flex-none"}>
              <svg
                className={"flex-none bg-brand-mustard rounded-full"}
                role={"img"}
                aria-label={
                  copy.sections.lavinia.desen_lavinia_par_blond_cu_o_cafea_si_un
                }
                width={"128"}
                height={"128"}
                viewBox={"0 0 220 220"}
              >
                {"\n"}
                <path
                  d={
                    "M58 112 C50 60 80 34 112 34 C150 34 172 62 166 112 C164 140 170 160 174 176 L50 176 C56 160 60 138 58 112 Z"
                  }
                  fill={"#FBE29A"}
                  stroke={"#1E120C"}
                  strokeWidth={"4"}
                  strokeLinejoin={"round"}
                ></path>
                {"\n"}
                <path
                  d={
                    "M66 214 C70 182 88 170 112 170 C136 170 154 182 158 214 Z"
                  }
                  fill={"#E2432B"}
                  stroke={"#1E120C"}
                  strokeWidth={"4"}
                ></path>
                {"\n"}
                <ellipse
                  cx={"112"}
                  cy={"104"}
                  rx={"40"}
                  ry={"46"}
                  fill={"#F7D6BE"}
                  stroke={"#1E120C"}
                  strokeWidth={"4"}
                ></ellipse>
                {"\n"}
                <path
                  d={
                    "M72 96 C80 62 124 54 152 88 C134 80 112 76 98 88 C90 94 80 96 72 96 Z"
                  }
                  fill={"#FBE29A"}
                  stroke={"#1E120C"}
                  strokeWidth={"4"}
                  strokeLinejoin={"round"}
                ></path>
                {"\n"}
                <circle
                  cx={"98"}
                  cy={"110"}
                  r={"4.5"}
                  fill={"#1E120C"}
                ></circle>
                <circle
                  cx={"126"}
                  cy={"110"}
                  r={"4.5"}
                  fill={"#1E120C"}
                ></circle>
                {"\n"}
                <path
                  d={"M100 128 Q112 138 124 128"}
                  fill={"none"}
                  stroke={"#1E120C"}
                  strokeWidth={"4"}
                  strokeLinecap={"round"}
                ></path>
                {"\n"}
                <path
                  d={
                    "M146 22 h52 a10 10 0 0 1 10 10 v22 a10 10 0 0 1 -10 10 h-28 l-12 12 v-12 h-12 a10 10 0 0 1 -10 -10 v-22 a10 10 0 0 1 10 -10 z"
                  }
                  fill={"#FFFFFF"}
                  stroke={"#1E120C"}
                  strokeWidth={"4"}
                  strokeLinejoin={"round"}
                ></path>
                {"\n"}
                <text
                  x={"172"}
                  y={"49"}
                  textAnchor={"middle"}
                  fontFamily={"'Unbounded', sans-serif"}
                  fontWeight={"800"}
                  fontSize={"16"}
                  fill={"#1E120C"}
                >
                  {copy.sections.lavinia.na}
                </text>
                {"\n"}
                <path
                  d={
                    "M24 150 h36 v28 a11 11 0 0 1 -11 11 h-14 a11 11 0 0 1 -11 -11 z"
                  }
                  fill={"#FFFFFF"}
                  stroke={"#1E120C"}
                  strokeWidth={"4"}
                ></path>
                {"\n"}
                <path
                  d={"M60 157 a8 8 0 0 1 0 16"}
                  fill={"none"}
                  stroke={"#1E120C"}
                  strokeWidth={"4"}
                ></path>
                {"\n"}
              </svg>
            </div>
            {"\n"}
            <div className={"flex min-w-0 flex-[1_1_200px] flex-col gap-1.5"}>
              {"\n"}
              <span className={"inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.3px] text-brand-muted [&_i]:inline-block [&_i]:h-[10px] [&_i]:w-[10px] [&_i]:rounded-full"}>
                <i className={"bg-brand-mustard"}></i>
                {copy.sections.lavinia.strategie}
              </span>
              {"\n"}
              <h2 className={"m-0 font-[Unbounded,sans-serif] text-2xl font-bold"}>{copy.sections.lavinia.lavinia}</h2>
              {"\n"}
              <p className={"m-0 text-[15px] text-brand-text"}>
                {copy.sections.lavinia.strategul_echipei_vine_cu_intrebarile_pe}
              </p>
              {"\n"}
            </div>
            {"\n"}
          </div>
          <div className={"flex flex-[1_1_360px] flex-col gap-3 rounded-[18px] border border-brand-border bg-brand-white px-[26px] py-6 flex-row flex-wrap items-center gap-[22px]"}>
            {"\n"}
            <div className={"flex flex-none"}>
              <svg
                className={"flex-none bg-brand-purple rounded-full"}
                role={"img"}
                aria-label={
                  copy.sections.lavinia.desen_bianca_par_mov_ochelari_cu_un_carn
                }
                width={"128"}
                height={"128"}
                viewBox={"0 0 220 220"}
              >
                {"\n"}
                <path
                  d={
                    "M62 100 C58 56 84 32 112 32 C142 32 168 56 164 100 C162 140 168 180 172 214 L52 214 C56 180 64 140 62 100 Z"
                  }
                  fill={"#7A45C9"}
                  stroke={"#1E120C"}
                  strokeWidth={"4"}
                  strokeLinejoin={"round"}
                ></path>
                {"\n"}
                <path
                  d={
                    "M66 214 C70 182 88 170 112 170 C136 170 154 182 158 214 Z"
                  }
                  fill={"#8CC8EA"}
                  stroke={"#1E120C"}
                  strokeWidth={"4"}
                ></path>
                {"\n"}
                <ellipse
                  cx={"112"}
                  cy={"104"}
                  rx={"40"}
                  ry={"46"}
                  fill={"#F3CFB3"}
                  stroke={"#1E120C"}
                  strokeWidth={"4"}
                ></ellipse>
                {"\n"}
                <path
                  d={
                    "M72 98 C74 62 112 50 142 64 C154 70 156 84 154 96 C138 76 108 76 72 98 Z"
                  }
                  fill={"#7A45C9"}
                  stroke={"#1E120C"}
                  strokeWidth={"4"}
                  strokeLinejoin={"round"}
                ></path>
                {"\n"}
                <circle
                  cx={"97"}
                  cy={"112"}
                  r={"12"}
                  fill={"#FFFFFF"}
                  stroke={"#1E120C"}
                  strokeWidth={"4"}
                ></circle>
                <circle
                  cx={"127"}
                  cy={"112"}
                  r={"12"}
                  fill={"#FFFFFF"}
                  stroke={"#1E120C"}
                  strokeWidth={"4"}
                ></circle>
                {"\n"}
                <path
                  d={"M109 112 h6"}
                  stroke={"#1E120C"}
                  strokeWidth={"4"}
                ></path>
                {"\n"}
                <circle
                  cx={"97"}
                  cy={"112"}
                  r={"3.5"}
                  fill={"#1E120C"}
                ></circle>
                <circle
                  cx={"127"}
                  cy={"112"}
                  r={"3.5"}
                  fill={"#1E120C"}
                ></circle>
                {"\n"}
                <path
                  d={"M102 134 Q112 142 122 134"}
                  fill={"none"}
                  stroke={"#1E120C"}
                  strokeWidth={"4"}
                  strokeLinecap={"round"}
                ></path>
                {"\n"}
                <rect
                  x={"16"}
                  y={"132"}
                  width={"42"}
                  height={"56"}
                  rx={"5"}
                  fill={"#FFFFFF"}
                  stroke={"#1E120C"}
                  strokeWidth={"4"}
                ></rect>
                {"\n"}
                <path
                  d={"M26 148 h22 M26 160 h22 M26 172 h14"}
                  stroke={"#1E120C"}
                  strokeWidth={"3"}
                  strokeLinecap={"round"}
                ></path>
                {"\n"}
                <path
                  d={"M178 214 L184 112"}
                  stroke={"#1E120C"}
                  strokeWidth={"16"}
                  strokeLinecap={"round"}
                ></path>
                {"\n"}
                <path
                  d={"M178 214 L184 112"}
                  stroke={"#F3CFB3"}
                  strokeWidth={"9"}
                  strokeLinecap={"round"}
                ></path>
                {"\n"}
                <rect
                  x={"168"}
                  y={"80"}
                  width={"34"}
                  height={"38"}
                  rx={"11"}
                  fill={"#F3CFB3"}
                  stroke={"#1E120C"}
                  strokeWidth={"4"}
                ></rect>
                {"\n"}
                <path
                  d={"M176 82 v12 M185 81 v13 M194 82 v12"}
                  stroke={"#1E120C"}
                  strokeWidth={"3"}
                  strokeLinecap={"round"}
                ></path>
                {"\n"}
              </svg>
            </div>
            {"\n"}
            <div className={"flex min-w-0 flex-[1_1_200px] flex-col gap-1.5"}>
              {"\n"}
              <span className={"inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.3px] text-brand-muted [&_i]:inline-block [&_i]:h-[10px] [&_i]:w-[10px] [&_i]:rounded-full"}>
                <i className={"bg-brand-purple"}></i>
                {copy.sections.lavinia.texte_si_continut}
              </span>
              {"\n"}
              <h2 className={"m-0 font-[Unbounded,sans-serif] text-2xl font-bold"}>{copy.sections.lavinia.bianca}</h2>
              {"\n"}
              <p className={"m-0 text-[15px] text-brand-text"}>
                {copy.sections.lavinia.transforma_planul_in_realitate_in_cuvint}
              </p>
              {"\n"}
            </div>
            {"\n"}
          </div>
        </div>
      </section>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
        <div className={"flex flex-[1_1_360px] flex-col gap-3 rounded-[18px] border border-brand-border bg-brand-white px-[26px] py-6 border-brand-cream-muted bg-brand-cream-muted flex-row flex-wrap items-center gap-6 [&_p]:m-0 [&_p]:flex-[1_1_320px] [&_p]:text-[17px] [&_p]:text-brand-ink-soft"}>
          {"\n"}
          <span className={"font-[Unbounded,sans-serif] text-[40px] font-extrabold leading-none"}>
            {copy.sections.na_story_and_artists.na}
          </span>
          {"\n"}
          <p>
            {
              copy.sections.na_story_and_artists
                .na_e_cea_mai_folosita_interjectie_romane
            }
          </p>
          {"\n"}
        </div>
      </section>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
        {"\n"}
        <div className={"mb-6 flex max-w-[760px] flex-col gap-2"}>
          <h2 className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1]"}>{copy.sections.ce_credem.ce_credem}</h2>
        </div>
        {"\n"}
        <div className={"flex flex-[1_1_360px] flex-col gap-3 rounded-[18px] border border-brand-border bg-brand-white px-[26px] py-6"}>
          <ul className={"m-0 grid list-none grid-cols-2 gap-x-9 p-0 [&>li]:flex [&>li]:gap-[14px] [&>li]:border-t [&>li]:border-brand-border-soft [&>li]:py-[13px] [&>li:nth-child(-n+2)]:border-t-0 [&>li:nth-child(-n+2)]:pt-0.5 [&>li>span:last-child]:flex [&>li>span:last-child]:flex-col [&>li>span:last-child]:gap-0.5 [&_strong]:text-base [&_span>span]:text-[15px] [&_span>span]:text-brand-text max-[640px]:grid-cols-1 max-[640px]:[&>li:nth-child(2)]:border-t max-[640px]:[&>li:nth-child(2)]:pt-[13px]"}>
            <li>
              <span className={"mt-[7px] h-[10px] w-[10px] flex-none rounded-full bg-brand-tomato"}></span>
              <span>
                <strong>{copy.sections.ce_credem.nativ_nu_adaptat}</strong>
                <span>
                  {
                    copy.sections.ce_credem
                      .gandim_direct_pentru_feed_nu_traducem_in
                  }
                </span>
              </span>
            </li>
            <li>
              <span className={"mt-[7px] h-[10px] w-[10px] flex-none rounded-full bg-brand-mustard"}></span>
              <span>
                <strong>{copy.sections.ce_credem.dam_inainte_sa_cerem}</strong>
                <span>
                  {
                    copy.sections.ce_credem
                      .ce_stim_publicam_gratis_daca_iti_foloses
                  }
                </span>
              </span>
            </li>
            <li>
              <span className={"mt-[7px] h-[10px] w-[10px] flex-none rounded-full bg-brand-sky"}></span>
              <span>
                <strong>{copy.sections.ce_credem.pe_intelesul_tuturor}</strong>
                <span>
                  {
                    copy.sections.ce_credem
                      .iti_explicam_ce_facem_fara_jargon_si_far
                  }
                </span>
              </span>
            </li>
            <li>
              <span className={"mt-[7px] h-[10px] w-[10px] flex-none rounded-full bg-brand-purple"}></span>
              <span>
                <strong>
                  {copy.sections.ce_credem.oamenii_inaintea_formatelor}
                </strong>
                <span>
                  {
                    copy.sections.ce_credem
                      .un_cont_creste_cand_in_el_apar_oameni_nu
                  }
                </span>
              </span>
            </li>
          </ul>
        </div>
        {"\n"}
      </section>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
        <div className={"flex flex-[1_1_360px] flex-col gap-3 rounded-[18px] border border-brand-border bg-brand-white px-[26px] py-6"}>
          {"\n"}
          <span className={"text-[13px] font-semibold tracking-[0.3px] text-brand-muted"}>
            {copy.sections.na_story_and_artists.nu_suntem_doar_noi}
          </span>
          {"\n"}
          <h3 className={"m-0 font-[Unbounded,sans-serif] text-[19px] font-bold leading-[1.3]"}>
            {copy.sections.na_story_and_artists.lucram_si_cu_artisti}
          </h3>
          {"\n"}
          <p className={"m-0 text-[15px] text-brand-text"}>
            {
              copy.sections.na_story_and_artists
                .bianca_morgociu_picteaza_alex_jujan_lucr
            }
          </p>
          {"\n"}
          <a className={"mt-auto inline-block py-2 text-[15px] font-semibold"} href={localizedHref("/artisti", locale)}>
            {copy.sections.na_story_and_artists.vezi_artistii}
          </a>
          {"\n"}
        </div>
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
                  .vorbim_deschis_despre_ce_ai_nevoie_si_ca
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
      {"\n\n"}
    </div>
  );
}
