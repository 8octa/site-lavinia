import defaultCopy from "./copy.json";
import localizedHref from "../localizedHref";
export default function ArtistiPage({ copy = defaultCopy, locale = "ro" }) {
  return (
    <div className={"view"}>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] flex flex-col items-center gap-3 pt-10 pb-9 text-center"}>
        {"\n"}
        <nav className={"flex flex-wrap items-center gap-2 text-sm leading-5 text-brand-muted [&>*]:inline-flex [&>*]:min-h-5 [&>*]:items-center [&>*]:leading-5 [&_a]:text-brand-muted"} aria-label={copy.hero.unde_esti}>
          <a href={localizedHref("/", locale)}>{copy.hero.na_digital}</a>{" "}
          <span aria-hidden={"true"}>{copy.hero.separator}</span>{" "}
          <span>{copy.hero.artisti}</span>
        </nav>
        {"\n\n"}
        <h1 className={"m-0 [font-family:Unbounded,_sans-serif] font-extrabold text-[clamp(30px,3.6vw,44px)] leading-[1.05] tracking-[-0.5px] max-[360px]:text-[26px]"}>{copy.hero.loving_our_artists}</h1>
        {"\n"}
        <p className={"m-0 text-brand-muted max-w-[720px] text-[18px] text-brand-text"}>
          {copy.hero.lucram_cu_artisti_in_care_credem_si_pe_c}
        </p>
        {"\n\n"}
      </section>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
        <div className={"flex flex-wrap gap-5"}>
          <article className={"flex min-w-0 flex-[1_1_380px] flex-col gap-2 rounded-[20px] border border-brand-border bg-brand-white p-[18px]"}>
            {"\n"}
            <div className={"flex aspect-[4/3] items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-xs font-bold text-brand-muted"}>
              {copy.sections.artist_profiles.un_tablou_de_al_ei}
            </div>
            {"\n"}
            <div className={"flex min-w-0 gap-2"}>
              <div className={"flex min-w-0 flex-1 aspect-square items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-[10px] font-bold text-brand-muted"}>
                {copy.sections.artist_profiles.detaliu}
              </div>
              <div className={"flex min-w-0 flex-1 aspect-square items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-[10px] font-bold text-brand-muted"}>
                {copy.sections.artist_profiles.in_atelier}
              </div>
              <div className={"flex min-w-0 flex-1 aspect-square items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-[10px] font-bold text-brand-muted"}>
                {copy.sections.artist_profiles.intr_o_postare}
              </div>
            </div>
            {"\n"}
            <div className={"flex flex-col gap-2 px-[6px] pt-3 pb-1"}>
              {"\n"}
              <span className={"inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.3px] text-brand-muted [&_i]:inline-block [&_i]:h-[10px] [&_i]:w-[10px] [&_i]:rounded-full"}>
                <i className={"bg-brand-purple"}></i>
                {copy.sections.artist_profiles.pictura}
              </span>
              {"\n"}
              <h3 className={"m-0 font-[Unbounded,sans-serif] text-2xl font-bold"}>
                {copy.sections.artist_profiles.bianca_morgociu}
              </h3>
              {"\n"}
              <p className={"m-0 text-[15px] text-brand-text"}>
                {
                  copy.sections.artist_profiles
                    .pictorita_profesionista_cu_o_viziune_car
                }
              </p>
              {"\n"}
              <a
                className={"mt-auto inline-block py-2 text-[15px] font-semibold"}
                href={"https://www.instagram.com/morgociu.bianca/"}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                {copy.sections.artist_profiles.vezi_lucrarile_pe_instagram}
              </a>
              {"\n"}
            </div>
            {"\n"}
          </article>
          <article className={"flex min-w-0 flex-[1_1_380px] flex-col gap-2 rounded-[20px] border border-brand-border bg-brand-white p-[18px]"}>
            {"\n"}
            <div className={"flex aspect-[4/3] items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-xs font-bold text-brand-muted"}>
              {copy.sections.artist_profiles.o_piesa_de_a_lui}
            </div>
            {"\n"}
            <div className={"flex min-w-0 gap-2"}>
              <div className={"flex min-w-0 flex-1 aspect-square items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-[10px] font-bold text-brand-muted"}>
                {copy.sections.artist_profiles.detaliu}
              </div>
              <div className={"flex min-w-0 flex-1 aspect-square items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-[10px] font-bold text-brand-muted"}>
                {copy.sections.artist_profiles.in_atelier}
              </div>
              <div className={"flex min-w-0 flex-1 aspect-square items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-[10px] font-bold text-brand-muted"}>
                {copy.sections.artist_profiles.intr_o_postare}
              </div>
            </div>
            {"\n"}
            <div className={"flex flex-col gap-2 px-[6px] pt-3 pb-1"}>
              {"\n"}
              <span className={"inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.3px] text-brand-muted [&_i]:inline-block [&_i]:h-[10px] [&_i]:w-[10px] [&_i]:rounded-full"}>
                <i className={"bg-brand-mustard"}></i>
                {copy.sections.artist_profiles.lut}
              </span>
              {"\n"}
              <h3 className={"m-0 font-[Unbounded,sans-serif] text-2xl font-bold"}>
                {copy.sections.artist_profiles.alex_jujan}
              </h3>
              {"\n"}
              <p className={"m-0 text-[15px] text-brand-text"}>
                {
                  copy.sections.artist_profiles
                    .artist_in_lut_face_figurine_obiecte_si_v
                }
              </p>
              {"\n"}
              <a className={"mt-auto inline-block py-2 text-[15px] font-semibold"} href={localizedHref("/artisti", locale)}>
                {copy.sections.artist_profiles.vezi_lucrarile_link}
              </a>
              {"\n"}
            </div>
            {"\n"}
          </article>
        </div>
      </section>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
        {"\n"}
        <div className={"mb-6 flex max-w-[760px] flex-col gap-2"}>
          <h2 className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1]"}>
            {copy.sections.ce_putem_face_impreuna.ce_putem_face_impreuna}
          </h2>
        </div>
        {"\n"}
        <div className={"flex flex-wrap gap-4"}>
          {"\n"}
          <div className={"flex flex-[1_1_360px] flex-col gap-3 rounded-[18px] border border-brand-border bg-brand-white px-[26px] py-6"}>
            {"\n"}
            <h3 className={"m-0 font-[Unbounded,sans-serif] text-[19px] font-bold leading-[1.3]"}>
              {
                copy.sections.ce_putem_face_impreuna
                  .ce_pot_face_pentru_brandul_tau
              }
            </h3>
            {"\n"}
            <ul className={"m-0 flex list-none flex-col p-0 [&>li]:flex [&>li]:items-start [&>li]:gap-2.5 [&>li]:border-t [&>li]:border-brand-border [&>li]:py-2.5 [&>li]:text-base [&>li]:text-brand-text [&>li:first-child]:border-t-0 [&>li:first-child]:pt-1 [&_svg]:mt-1 [&_svg]:flex-none [&_strong]:text-brand-ink"}>
              <li>
                <svg
                  aria-hidden={"true"}
                  width={"18"}
                  height={"18"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"#1E120C"}
                  strokeWidth={"2"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                >
                  <path d={"M20 6L9 17l-5-5"}></path>
                </svg>
                <span>
                  <strong>
                    {
                      copy.sections.ce_putem_face_impreuna
                        .ilustratie_sau_pictura
                    }
                  </strong>
                  {
                    copy.sections.ce_putem_face_impreuna
                      .pentru_o_campanie_un_produs_sau_un_ambal
                  }
                </span>
              </li>
              <li>
                <svg
                  aria-hidden={"true"}
                  width={"18"}
                  height={"18"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"#1E120C"}
                  strokeWidth={"2"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                >
                  <path d={"M20 6L9 17l-5-5"}></path>
                </svg>
                <span>
                  <strong>
                    {
                      copy.sections.ce_putem_face_impreuna
                        .figurine_obiecte_si_vase_din_lut
                    }
                  </strong>
                  {
                    copy.sections.ce_putem_face_impreuna
                      .pentru_continut_sau_pentru_spatiul_tau
                  }
                </span>
              </li>
              <li>
                <svg
                  aria-hidden={"true"}
                  width={"18"}
                  height={"18"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"#1E120C"}
                  strokeWidth={"2"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                >
                  <path d={"M20 6L9 17l-5-5"}></path>
                </svg>
                <span>
                  <strong>
                    {copy.sections.ce_putem_face_impreuna.o_lucrare_anume}
                  </strong>
                  {
                    copy.sections.ce_putem_face_impreuna
                      .pentru_o_lansare_sau_un_eveniment
                  }
                </span>
              </li>
              <li>
                <svg
                  aria-hidden={"true"}
                  width={"18"}
                  height={"18"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"#1E120C"}
                  strokeWidth={"2"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                >
                  <path d={"M20 6L9 17l-5-5"}></path>
                </svg>
                <span>
                  <strong>
                    {copy.sections.ce_putem_face_impreuna.cadouri_unicat}
                  </strong>
                  {
                    copy.sections.ce_putem_face_impreuna
                      .pentru_clienti_sau_pentru_echipa
                  }
                </span>
              </li>
            </ul>
            {"\n"}
          </div>
          {"\n"}
          <div className={"flex flex-[1_1_360px] flex-col gap-3 rounded-[18px] border border-brand-border bg-brand-white px-[26px] py-6 border-brand-cream-muted bg-brand-cream-muted"}>
            {"\n"}
            <span className={"text-[13px] font-semibold tracking-[0.3px] text-brand-muted"}>
              {copy.sections.ce_putem_face_impreuna.na_facut_de_mana}
            </span>
            {"\n"}
            <h3 className={"m-0 font-[Unbounded,sans-serif] text-[19px] font-bold leading-[1.3]"}>
              {
                copy.sections.ce_putem_face_impreuna
                  .un_pachet_facut_pe_masura_ta
              }
            </h3>
            {"\n"}
            <p className={"m-0 text-[15px] text-brand-text"}>
              {
                copy.sections.ce_putem_face_impreuna
                  .alegem_impreuna_ce_fac_artistii_pentru_t
              }
            </p>
            {"\n"}
            <p className={"m-0 text-[15px] text-brand-text"}>
              {
                copy.sections.ce_putem_face_impreuna
                  .artistii_sunt_creditati_in_fiecare_proie
              }
            </p>
            {"\n"}
            <a className={"mt-auto inline-block py-2 text-[15px] font-semibold"} href={localizedHref("/contact", locale)}>
              {copy.sections.ce_putem_face_impreuna.hai_sa_vorbim}
            </a>
            {"\n"}
          </div>
          {"\n"}
        </div>
        {"\n"}
      </section>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
        {"\n"}
        <div className={"mb-6 flex max-w-[760px] flex-col gap-2"}>
          <h2 className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1]"}>
            {copy.sections.cum_lucram_cu_artistii.cum_lucram_cu_artistii}
          </h2>
        </div>
        {"\n"}
        <ol className={"m-0 flex list-none flex-wrap gap-4 p-0 [&>li]:flex [&>li]:flex-[1_1_200px] [&>li]:flex-col [&>li]:gap-1.5 [&>li]:rounded-2xl [&>li]:border [&>li]:border-brand-border [&>li]:bg-brand-white [&>li]:px-5 [&>li]:py-[18px] [&>li>span:last-child]:text-[15px] [&>li>span:last-child]:text-brand-text [&_strong]:text-base"}>
          <li>
            <span className={"mb-1 flex h-[30px] w-[30px] items-center justify-center rounded-full text-sm font-bold bg-brand-mustard"}>
              {copy.sections.cum_lucram_cu_artistii.number_1}
            </span>
            <strong>
              {copy.sections.cum_lucram_cu_artistii.prima_discutie}
            </strong>
            <span>
              {
                copy.sections.cum_lucram_cu_artistii
                  .ne_spui_ce_vrei_sa_spui_si_unde_va_apare
              }
            </span>
          </li>
          <li>
            <span className={"mb-1 flex h-[30px] w-[30px] items-center justify-center rounded-full text-sm font-bold bg-brand-sky"}>
              {copy.sections.cum_lucram_cu_artistii.number_2}
            </span>
            <strong>
              {copy.sections.cum_lucram_cu_artistii.alegem_artistul}
            </strong>
            <span>
              {
                copy.sections.cum_lucram_cu_artistii
                  .potrivim_stilul_artistului_cu_brandul_ta
              }
            </span>
          </li>
          <li>
            <span className={"mb-1 flex h-[30px] w-[30px] items-center justify-center rounded-full text-sm font-bold bg-brand-purple"}>
              {copy.sections.cum_lucram_cu_artistii.number_3}
            </span>
            <strong>{copy.sections.cum_lucram_cu_artistii.schite}</strong>
            <span>
              {
                copy.sections.cum_lucram_cu_artistii
                  .vezi_directia_inainte_de_lucrarea_finala
              }
            </span>
          </li>
          <li>
            <span className={"mb-1 flex h-[30px] w-[30px] items-center justify-center rounded-full text-sm font-bold bg-brand-tomato"}>
              {copy.sections.cum_lucram_cu_artistii.number_4}
            </span>
            <strong>{copy.sections.cum_lucram_cu_artistii.lucrarea}</strong>
            <span>
              {
                copy.sections.cum_lucram_cu_artistii
                  .artistul_o_face_noi_o_aducem_in_continut
              }
            </span>
          </li>
        </ol>
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
