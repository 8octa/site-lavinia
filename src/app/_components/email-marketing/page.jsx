import defaultCopy from "./copy.json";
import localizedHref from "../localizedHref";
export default function EmailMarketingPage({ copy = defaultCopy, locale = "ro" }) {
  return (
    <div className={"view"}>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] flex flex-col items-center gap-3 pt-10 pb-9 text-center"}>
        {"\n"}
        <nav className={"flex flex-wrap items-center gap-2 text-sm leading-5 text-brand-muted [&>*]:inline-flex [&>*]:min-h-5 [&>*]:items-center [&>*]:leading-5 [&_a]:text-brand-muted"} aria-label={copy.hero.unde_esti}>
          <a href={localizedHref("/", locale)}>{copy.hero.na_digital}</a>{" "}
          <span aria-hidden={"true"}>{copy.hero.separator}</span>{" "}
          <a href={localizedHref("/ce-facem", locale)}>{copy.hero.ce_facem}</a>{" "}
          <span aria-hidden={"true"}>{copy.hero.separator}</span>{" "}
          <span>{copy.hero.na_email_marketing}</span>
        </nav>
        {"\n"}
        <span className={"inline-block self-start rounded-full bg-brand-cream-muted px-[10px] py-1 text-[13px] font-semibold bg-brand-purple"}>{copy.hero.pe_langa_lunar}</span>
        {"\n"}
        <h1 className={"m-0 [font-family:Unbounded,_sans-serif] font-extrabold text-[clamp(30px,3.6vw,44px)] leading-[1.05] tracking-[-0.5px] max-[360px]:text-[26px]"}>
          {copy.hero.na_email_marketing}
          <span className={"mt-2.5 block [font-family:Inter,system-ui,sans-serif] text-[clamp(16px,1.6vw,19px)] font-semibold leading-[1.35] tracking-normal text-brand-muted"}>
            {copy.hero.email_marketing_automatizari_si_campanii}
          </span>
        </h1>
        {"\n"}
        <p className={"m-0 text-brand-muted max-w-[720px] text-[18px] text-brand-text"}>
          {copy.hero.emailul_e_cea_mai_directa_conversatie_cu}
        </p>
        {"\n"}
        <div className={"flex flex-wrap gap-[10px]"}>
          <a className={"inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border-0 px-6 [font:inherit] font-bold no-underline bg-brand-tomato text-brand-ink hover:bg-brand-tomato-light hover:text-brand-ink"} href={localizedHref("/contact", locale)}>
            {copy.hero.hai_sa_vorbim}
          </a>
          <a className={"inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border-0 px-6 [font:inherit] font-bold no-underline border border-brand-border-strong bg-brand-white font-semibold text-brand-ink"} href={localizedHref("/intrebari", locale)}>
            {copy.hero.intrebari}
          </a>
        </div>
        {"\n"}
      </section>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
        {"\n"}
        <div className={"mb-6 flex max-w-[760px] flex-col gap-2"}>
          <h2 className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1]"}>{copy.sections.ce_primesti.ce_primesti}</h2>
        </div>
        {"\n"}
        <div className={"flex flex-[1_1_360px] flex-col gap-3 rounded-[18px] border border-brand-border bg-brand-white px-[26px] py-6"}>
          <ul className={"m-0 grid list-none grid-cols-2 gap-x-9 p-0 [&>li]:flex [&>li]:gap-[14px] [&>li]:border-t [&>li]:border-brand-border-soft [&>li]:py-[13px] [&>li:nth-child(-n+2)]:border-t-0 [&>li:nth-child(-n+2)]:pt-0.5 [&>li>span:last-child]:flex [&>li>span:last-child]:flex-col [&>li>span:last-child]:gap-0.5 [&_strong]:text-base [&_span>span]:text-[15px] [&_span>span]:text-brand-text max-[640px]:grid-cols-1 max-[640px]:[&>li:nth-child(2)]:border-t max-[640px]:[&>li:nth-child(2)]:pt-[13px]"}>
            <li>
              <span className={"mt-0.5 flex flex-none"}>
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
              </span>
              <span>
                <strong>{copy.sections.ce_primesti.strategia}</strong>
                <span>
                  {
                    copy.sections.ce_primesti
                      .stabilim_cui_ii_scrii_ce_primeste_din_fi
                  }
                </span>
              </span>
            </li>
            <li>
              <span className={"mt-0.5 flex flex-none"}>
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
              </span>
              <span>
                <strong>{copy.sections.ce_primesti.emailurile_automate}</strong>
                <span>
                  {
                    copy.sections.ce_primesti
                      .bun_venit_dupa_prima_comanda_revenire_du
                  }
                </span>
              </span>
            </li>
            <li>
              <span className={"mt-0.5 flex flex-none"}>
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
              </span>
              <span>
                <strong>
                  {copy.sections.ce_primesti.lansarile_si_momentele}
                </strong>
                <span>
                  {
                    copy.sections.ce_primesti
                      .produse_noi_oferte_aniversari_sarbatori
                  }
                </span>
              </span>
            </li>
            <li>
              <span className={"mt-0.5 flex flex-none"}>
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
              </span>
              <span>
                <strong>{copy.sections.ce_primesti.cresterea_listei}</strong>
                <span>
                  {
                    copy.sections.ce_primesti
                      .formulare_motive_bune_de_abonare_si_drum
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
        {"\n"}
        <div className={"mb-6 flex max-w-[760px] flex-col gap-2"}>
          <h2 className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1]"}>
            {copy.sections.de_ce_email_in_cifre.de_ce_email_in_cifre}
          </h2>
        </div>
        {"\n"}
        <div className={"grid grid-cols-2 gap-4 max-[700px]:grid-cols-1"}>
          <div className={"flex flex-col gap-1.5 rounded-[18px] border border-brand-border bg-brand-white px-[22px] py-5"}>
            <span className={"font-[Unbounded,sans-serif] text-[30px] font-bold leading-[1.1]"}>
              {copy.sections.de_ce_email_in_cifre.number_3_5}
            </span>
            <p className={"m-0 text-base text-brand-ink-soft"}>
              {
                copy.sections.de_ce_email_in_cifre
                  .dintre_urmaritori_vad_in_medie_o_postare
              }
            </p>
            <a
              className={"self-start py-1.5 text-xs text-brand-muted underline underline-offset-2"}
              href={"https://www.socialinsider.io/blog/social-media-reach/"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              {copy.sections.de_ce_email_in_cifre.sursa_socialinsider_2025}
            </a>
          </div>
          <div className={"flex flex-col gap-1.5 rounded-[18px] border border-brand-border bg-brand-white px-[22px] py-5"}>
            <span className={"font-[Unbounded,sans-serif] text-[30px] font-bold leading-[1.1]"}>
              {copy.sections.de_ce_email_in_cifre.number_30}
            </span>
            <p className={"m-0 text-base text-brand-ink-soft"}>
              {
                copy.sections.de_ce_email_in_cifre
                  .din_veniturile_din_email_vin_din_emailur
              }
            </p>
            <a
              className={"self-start py-1.5 text-xs text-brand-muted underline underline-offset-2"}
              href={
                "https://www.omnisend.com/resources/reports/2026ecommercemarketingreport/"
              }
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              {copy.sections.de_ce_email_in_cifre.sursa_omnisend_raportul_2026}
            </a>
          </div>
          <div className={"flex flex-col gap-1.5 rounded-[18px] border border-brand-border bg-brand-white px-[22px] py-5"}>
            <span className={"font-[Unbounded,sans-serif] text-[30px] font-bold leading-[1.1]"}>
              {copy.sections.de_ce_email_in_cifre.number_1_din_6}
            </span>
            <p className={"m-0 text-base text-brand-ink-soft"}>
              {
                copy.sections.de_ce_email_in_cifre
                  .emailuri_de_marketing_nu_ajunge_in_inbox
              }
            </p>
            <a
              className={"self-start py-1.5 text-xs text-brand-muted underline underline-offset-2"}
              href={"https://www.litmus.com/convince-your-team"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              {copy.sections.de_ce_email_in_cifre.sursa_litmus}
            </a>
          </div>
          <div className={"flex flex-col gap-1.5 rounded-[18px] border border-brand-border bg-brand-white px-[22px] py-5"}>
            <span className={"font-[Unbounded,sans-serif] text-[30px] font-bold leading-[1.1]"}>
              {copy.sections.de_ce_email_in_cifre.number_36_la_1}
            </span>
            <p className={"m-0 text-base text-brand-ink-soft"}>
              {
                copy.sections.de_ce_email_in_cifre
                  .e_randamentul_mediu_raportat_pentru_emai
              }
            </p>
            <a
              className={"self-start py-1.5 text-xs text-brand-muted underline underline-offset-2"}
              href={
                "https://www.litmus.com/blog/infographic-the-roi-of-email-marketing"
              }
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              {copy.sections.de_ce_email_in_cifre.sursa_litmus}
            </a>
          </div>
        </div>
        {"\n"}
      </section>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
        {"\n"}
        <div className={"mb-6 flex max-w-[760px] flex-col gap-2"}>
          <h2 className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1]"}>{copy.sections.pentru_cine_e.pentru_cine_e}</h2>
        </div>
        {"\n"}
        <div className={"relative flex flex-col gap-3 rounded-[20px] border border-brand-border bg-brand-white p-[26px] max-[640px]:p-5 [&_p]:m-0 na-card"}>
          <ul className={"ticks"}>
            <li>
              <span>
                {
                  copy.sections.pentru_cine_e
                    .brandurile_care_au_deja_clienti_si_vor_s
                }
              </span>
            </li>
            <li>
              <span>
                {
                  copy.sections.pentru_cine_e
                    .magazinele_online_care_vor_vanzari_si_di
                }
              </span>
            </li>
            <li>
              <span>
                {
                  copy.sections.pentru_cine_e
                    .cei_care_vor_un_canal_care_nu_depinde_de
                }
              </span>
            </li>
            <li>
              <span>
                {
                  copy.sections.pentru_cine_e
                    .clientii_na_social_media_lunar_care_vor
                }
              </span>
            </li>
          </ul>
        </div>
        {"\n"}
      </section>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
        {"\n"}
        <div className={"mb-6 flex max-w-[760px] flex-col gap-2"}>
          <h2 className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1]"}>{copy.sections.cum_decurge.cum_decurge}</h2>
        </div>
        {"\n"}
        <ol className={"m-0 flex list-none flex-wrap gap-[14px] p-0 [counter-reset:st] [&>li]:relative [&>li]:flex [&>li]:min-h-0 [&>li]:flex-[1_1_200px] [&>li]:flex-col [&>li]:gap-[10px] [&>li]:rounded-[18px] [&>li]:p-5 [&>li]:[counter-increment:st] [&>li]:before:content-[counter(st)] [&>li]:before:font-[Unbounded,sans-serif] [&>li]:before:text-[28px] [&>li]:before:font-extrabold [&>li]:after:pointer-events-none [&>li]:after:absolute [&>li]:after:inset-0 [&>li]:after:rounded-[inherit] [&>li]:after:bg-[image:var(--grain)] [&>li]:after:bg-[length:180px] [&>li]:after:opacity-[0.16] [&>li]:after:mix-blend-multiply [&>li]:after:content-[''] [&>li>strong]:mt-1.5 [&>li>strong]:font-[Unbounded,sans-serif] [&>li>strong]:text-xl [&>li:nth-child(4n+1)]:bg-brand-mustard [&>li:nth-child(4n+2)]:bg-brand-sky [&>li:nth-child(4n+3)]:bg-brand-purple [&>li:nth-child(4n+4)]:bg-brand-tomato"}>
          <li>
            <strong>{copy.sections.cum_decurge.ne_uitam_la_ce_nevoi_ai}</strong>
            <span>
              {
                copy.sections.cum_decurge
                  .ce_vinzi_cui_si_ce_vrei_sa_obtii_din_ema
              }
            </span>
          </li>
          <li>
            <strong>{copy.sections.cum_decurge.facem_planul}</strong>
            <span>
              {
                copy.sections.cum_decurge
                  .ce_automatizari_merita_ce_campanii_vin_s
              }
            </span>
          </li>
          <li>
            <strong>{copy.sections.cum_decurge.scriem_si_aprobam}</strong>
            <span>
              {
                copy.sections.cum_decurge
                  .textele_designul_si_automatizarile_nimic
              }
            </span>
          </li>
          <li>
            <strong>{copy.sections.cum_decurge.trimitem_si_masuram}</strong>
            <span>
              {
                copy.sections.cum_decurge
                  .deschideri_clicuri_abonati_noi_ce_merge
              }
            </span>
          </li>
        </ol>
        {"\n"}
      </section>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
        {"\n"}
        <div className={"mb-6 flex max-w-[760px] flex-col gap-2"}>
          <h2 className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1]"}>{copy.sections.intrebari.intrebari}</h2>
        </div>
        {"\n"}
        <div className={"rounded-[20px] border border-brand-border bg-brand-white px-[30px] py-1.5 [&>div]:flex [&>div]:flex-col [&>div]:gap-[10px] [&>div]:border-b [&>div]:border-brand-border [&>div]:py-[26px] [&>div:last-child]:border-b-0 [&_h3]:m-0 [&_h3]:font-[Unbounded,sans-serif] [&_h3]:text-lg [&_h3]:font-bold [&_p]:m-0 [&_p]:max-w-[720px] [&_p]:leading-[1.65] [&_p]:text-brand-text [&_p+p]:mt-0.5"}>
          <div>
            <h3>
              {copy.sections.intrebari.de_ce_email_daca_am_deja_social_media}
            </h3>
            <p>
              {copy.sections.intrebari.pentru_ca_lista_e_a_ta_si_emailul_pleaca}
            </p>
          </div>
          <div>
            <h3>{copy.sections.intrebari.pot_incepe_fara_lista}</h3>
            <p>
              {copy.sections.intrebari.da_incepem_cu_cresterea_listei_si_cu_ema}
            </p>
          </div>
        </div>
        {"\n"}
      </section>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
        {"\n"}
        <div className={"mb-6 flex max-w-[760px] flex-col gap-2"}>
          <h2 className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1]"}>
            {copy.sections.celelalte_servicii.celelalte_servicii}
          </h2>
        </div>
        {"\n"}
        <div className={"grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-3"}>
          <a className={"flex flex-col gap-1 rounded-[14px] border border-brand-border bg-brand-white px-4 py-[14px] text-brand-ink no-underline hover:border-brand-ink [&_strong]:text-[15px] [&_span]:text-sm [&_span]:text-brand-text"} href={localizedHref("/lunar", locale)}>
            <strong>
              {copy.sections.celelalte_servicii.na_social_media_lunar}
            </strong>
            <span>
              {
                copy.sections.celelalte_servicii
                  .conturile_tale_de_social_media_luna_de_l
              }
            </span>
          </a>
          <a className={"flex flex-col gap-1 rounded-[14px] border border-brand-border bg-brand-white px-4 py-[14px] text-brand-ink no-underline hover:border-brand-ink [&_strong]:text-[15px] [&_span]:text-sm [&_span]:text-brand-text"} href={localizedHref("/content-creation", locale)}>
            <strong>
              {copy.sections.celelalte_servicii.na_content_creation}
            </strong>
            <span>
              {
                copy.sections.celelalte_servicii
                  .filmam_editam_facem_continut_adevarat_cl
              }
            </span>
          </a>
          <a className={"flex flex-col gap-1 rounded-[14px] border border-brand-border bg-brand-white px-4 py-[14px] text-brand-ink no-underline hover:border-brand-ink [&_strong]:text-[15px] [&_span]:text-sm [&_span]:text-brand-text"} href={localizedHref("/audit", locale)}>
            <strong>{copy.sections.celelalte_servicii.na_audit}</strong>
            <span>
              {
                copy.sections.celelalte_servicii
                  .tot_ce_ai_online_radiografiat_plan_de_90
              }
            </span>
          </a>
          <a className={"flex flex-col gap-1 rounded-[14px] border border-brand-border bg-brand-white px-4 py-[14px] text-brand-ink no-underline hover:border-brand-ink [&_strong]:text-[15px] [&_span]:text-sm [&_span]:text-brand-text"} href={localizedHref("/tiktok-start", locale)}>
            <strong>{copy.sections.celelalte_servicii.na_tiktok_start}</strong>
            <span>
              {
                copy.sections.celelalte_servicii
                  .cont_setat_directie_creativa_primele_8_c
              }
            </span>
          </a>
          <a className={"flex flex-col gap-1 rounded-[14px] border border-brand-border bg-brand-white px-4 py-[14px] text-brand-ink no-underline hover:border-brand-ink [&_strong]:text-[15px] [&_span]:text-sm [&_span]:text-brand-text"} href={localizedHref("/facut-de-mana", locale)}>
            <strong>{copy.sections.celelalte_servicii.na_facut_de_mana}</strong>
            <span>
              {
                copy.sections.celelalte_servicii
                  .pachete_personalizate_cu_artistii_nostri
              }
            </span>
          </a>
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
