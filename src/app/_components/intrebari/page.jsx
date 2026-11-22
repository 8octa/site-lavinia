import defaultCopy from "./copy.json";
import localizedHref from "../localizedHref";
export default function IntrebariPage({ copy = defaultCopy, locale = "ro" }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: copy.ui.ce_trebuie_sa_fac_eu,
        acceptedAnswer: {
          "@type": "Answer",
          text: copy.ui.o_discutie_la_inceput_o_zi_pe_luna_pentr,
        },
      },
      {
        "@type": "Question",
        name: copy.ui.de_ce_minimum_3_luni_la_lunar,
        acceptedAnswer: {
          "@type": "Answer",
          text: copy.ui.in_prima_luna_se_testeaza_formatele_orel,
        },
      },
      {
        "@type": "Question",
        name: copy.ui.ce_ramane_la_mine_dupa_na_audit_daca_nu,
        acceptedAnswer: {
          "@type": "Answer",
          text: copy.ui.planul_de_90_de_zile_ramane_al_clientulu,
        },
      },
      {
        "@type": "Question",
        name: copy.ui.am_deja_o_agentie_putem_lucra_impreuna,
        acceptedAnswer: {
          "@type": "Answer",
          text: copy.ui.da_na_digital_poate_prelua_partea_de_soc,
        },
      },
      {
        "@type": "Question",
        name: copy.ui.lucrati_si_cu_firme_din_afara_bucurestiu,
        acceptedAnswer: {
          "@type": "Answer",
          text: copy.ui.da_strategia_si_textele_se_pot_realiza_d,
        },
      },
      {
        "@type": "Question",
        name: copy.ui.cum_functioneaza_pachetele_cu_artistii,
        acceptedAnswer: {
          "@type": "Answer",
          text: copy.ui.se_stabileste_impreuna_ce_proiect_este_s,
        },
      },
      {
        "@type": "Question",
        name: copy.ui.ce_primesc_gratis,
        acceptedAnswer: {
          "@type": "Answer",
          text: copy.ui.tot_continutul_publicat_pe_instagram_si,
        },
      },
    ],
  };

  return (
    <div className={"view"}>
      <script
        type={"application/ld+json"}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] flex flex-col items-center gap-3 pt-10 pb-9 text-center"}>
        {"\n"}
        <nav className={"flex flex-wrap items-center gap-2 text-sm leading-5 text-brand-muted [&>*]:inline-flex [&>*]:min-h-5 [&>*]:items-center [&>*]:leading-5 [&_a]:text-brand-muted"} aria-label={copy.hero.unde_esti}>
          <a href={localizedHref("/", locale)}>{copy.hero.na_digital}</a>{" "}
          <span aria-hidden={"true"}>{copy.hero.separator}</span>{" "}
          <span>{copy.hero.intrebari}</span>
        </nav>
        {"\n\n"}
        <h1 className={"m-0 [font-family:Unbounded,_sans-serif] font-extrabold text-[clamp(30px,3.6vw,44px)] leading-[1.05] tracking-[-0.5px] max-[360px]:text-[26px]"}>{copy.hero.intrebari_inainte_sa_vorbim}</h1>
        {"\n"}
        <p className={"m-0 text-brand-muted max-w-[720px] text-[18px] text-brand-text"}>
          {copy.hero.raspunsuri_scurte_la_ce_ne_intreaba_cei}
        </p>
        {"\n\n"}
      </section>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
        {"\n"}
        <div className={"mb-6 flex max-w-[760px] flex-col gap-2"}>
          <h2 className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1]"}>{copy.sections.cum_incepem.cum_incepem}</h2>
        </div>
        {"\n"}
        <div className={"rounded-[18px] border border-brand-border bg-brand-white px-6 py-0.5 max-[640px]:px-4 [&>details:last-child]:border-b-0"}>
          <details className={"border-b border-brand-border-soft group"} open={true}>
            <summary className={"list-none marker:hidden flex items-center justify-between gap-4 py-[18px] text-base font-bold text-brand-ink cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-ink focus-visible:outline-offset-4 focus-visible:rounded-md"}>
              <span>{copy.sections.cum_incepem.ce_trebuie_sa_fac_eu}</span>
              <svg
                className={"flex-none text-brand-muted transition-transform group-open:rotate-180 motion-reduce:transition-none"}
                width={"18"}
                height={"18"}
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"2.4"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                aria-hidden={"true"}
              >
                <path d={"M6 9l6 6 6-6"}></path>
              </svg>
            </summary>
            <div className={"max-w-[720px] pb-5 [&>p]:m-0 [&>p]:leading-[1.65] [&>p]:text-brand-text [&>p+p]:mt-2"}>
              <p>
                {
                  copy.sections.cum_incepem
                    .o_discutie_la_inceput_o_zi_pe_luna_pentr
                }
              </p>
            </div>
          </details>
          <details className={"border-b border-brand-border-soft group"}>
            <summary className={"list-none marker:hidden flex items-center justify-between gap-4 py-[18px] text-base font-bold text-brand-ink cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-ink focus-visible:outline-offset-4 focus-visible:rounded-md"}>
              <span>
                {copy.sections.cum_incepem.de_ce_minimum_3_luni_la_lunar}
              </span>
              <svg
                className={"flex-none text-brand-muted transition-transform group-open:rotate-180 motion-reduce:transition-none"}
                width={"18"}
                height={"18"}
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"2.4"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                aria-hidden={"true"}
              >
                <path d={"M6 9l6 6 6-6"}></path>
              </svg>
            </summary>
            <div className={"max-w-[720px] pb-5 [&>p]:m-0 [&>p]:leading-[1.65] [&>p]:text-brand-text [&>p+p]:mt-2"}>
              <p>
                {
                  copy.sections.cum_incepem
                    .in_prima_luna_testam_formate_ore_ton_rez
                }
              </p>
            </div>
          </details>
          <details className={"border-b border-brand-border-soft group"}>
            <summary className={"list-none marker:hidden flex items-center justify-between gap-4 py-[18px] text-base font-bold text-brand-ink cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-ink focus-visible:outline-offset-4 focus-visible:rounded-md"}>
              <span>
                {
                  copy.sections.cum_incepem
                    .ce_ramane_la_mine_dupa_na_audit_daca_nu
                }
              </span>
              <svg
                className={"flex-none text-brand-muted transition-transform group-open:rotate-180 motion-reduce:transition-none"}
                width={"18"}
                height={"18"}
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"2.4"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                aria-hidden={"true"}
              >
                <path d={"M6 9l6 6 6-6"}></path>
              </svg>
            </summary>
            <div className={"max-w-[720px] pb-5 [&>p]:m-0 [&>p]:leading-[1.65] [&>p]:text-brand-text [&>p+p]:mt-2"}>
              <p>
                {
                  copy.sections.cum_incepem
                    .planul_de_90_de_zile_e_al_tau_il_poti_ap
                }
              </p>
            </div>
          </details>
        </div>
        {"\n"}
      </section>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
        {"\n"}
        <div className={"mb-6 flex max-w-[760px] flex-col gap-2"}>
          <h2 className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1]"}>{copy.sections.cum_lucram.cum_lucram}</h2>
        </div>
        {"\n"}
        <div className={"rounded-[18px] border border-brand-border bg-brand-white px-6 py-0.5 max-[640px]:px-4 [&>details:last-child]:border-b-0"}>
          <details className={"border-b border-brand-border-soft group"}>
            <summary className={"list-none marker:hidden flex items-center justify-between gap-4 py-[18px] text-base font-bold text-brand-ink cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-ink focus-visible:outline-offset-4 focus-visible:rounded-md"}>
              <span>
                {
                  copy.sections.cum_lucram
                    .am_deja_o_agentie_putem_lucra_impreuna
                }
              </span>
              <svg
                className={"flex-none text-brand-muted transition-transform group-open:rotate-180 motion-reduce:transition-none"}
                width={"18"}
                height={"18"}
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"2.4"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                aria-hidden={"true"}
              >
                <path d={"M6 9l6 6 6-6"}></path>
              </svg>
            </summary>
            <div className={"max-w-[720px] pb-5 [&>p]:m-0 [&>p]:leading-[1.65] [&>p]:text-brand-text [&>p+p]:mt-2"}>
              <p>
                {
                  copy.sections.cum_lucram
                    .da_preluam_partea_de_social_media_si_luc
                }
              </p>
            </div>
          </details>
          <details className={"border-b border-brand-border-soft group"}>
            <summary className={"list-none marker:hidden flex items-center justify-between gap-4 py-[18px] text-base font-bold text-brand-ink cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-ink focus-visible:outline-offset-4 focus-visible:rounded-md"}>
              <span>
                {
                  copy.sections.cum_lucram
                    .lucrati_si_cu_firme_din_afara_bucurestiu
                }
              </span>
              <svg
                className={"flex-none text-brand-muted transition-transform group-open:rotate-180 motion-reduce:transition-none"}
                width={"18"}
                height={"18"}
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"2.4"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                aria-hidden={"true"}
              >
                <path d={"M6 9l6 6 6-6"}></path>
              </svg>
            </summary>
            <div className={"max-w-[720px] pb-5 [&>p]:m-0 [&>p]:leading-[1.65] [&>p]:text-brand-text [&>p+p]:mt-2"}>
              <p>
                {
                  copy.sections.cum_lucram
                    .da_strategia_si_textele_merg_de_oriunde
                }
              </p>
            </div>
          </details>
        </div>
        {"\n"}
      </section>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
        {"\n"}
        <div className={"mb-6 flex max-w-[760px] flex-col gap-2"}>
          <h2 className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1]"}>
            {copy.sections.artisti_si_lucruri_gratis.artisti_si_lucruri_gratis}
          </h2>
        </div>
        {"\n"}
        <div className={"rounded-[18px] border border-brand-border bg-brand-white px-6 py-0.5 max-[640px]:px-4 [&>details:last-child]:border-b-0"}>
          <details className={"border-b border-brand-border-soft group"}>
            <summary className={"list-none marker:hidden flex items-center justify-between gap-4 py-[18px] text-base font-bold text-brand-ink cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-ink focus-visible:outline-offset-4 focus-visible:rounded-md"}>
              <span>
                {
                  copy.sections.artisti_si_lucruri_gratis
                    .cum_functioneaza_pachetele_cu_artistii
                }
              </span>
              <svg
                className={"flex-none text-brand-muted transition-transform group-open:rotate-180 motion-reduce:transition-none"}
                width={"18"}
                height={"18"}
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"2.4"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                aria-hidden={"true"}
              >
                <path d={"M6 9l6 6 6-6"}></path>
              </svg>
            </summary>
            <div className={"max-w-[720px] pb-5 [&>p]:m-0 [&>p]:leading-[1.65] [&>p]:text-brand-text [&>p+p]:mt-2"}>
              <p>
                {
                  copy.sections.artisti_si_lucruri_gratis
                    .ne_spui_ce_vrei_sa_spui_si_unde_va_apare
                }
              </p>
            </div>
          </details>
          <details className={"border-b border-brand-border-soft group"}>
            <summary className={"list-none marker:hidden flex items-center justify-between gap-4 py-[18px] text-base font-bold text-brand-ink cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-ink focus-visible:outline-offset-4 focus-visible:rounded-md"}>
              <span>
                {copy.sections.artisti_si_lucruri_gratis.ce_primesc_gratis}
              </span>
              <svg
                className={"flex-none text-brand-muted transition-transform group-open:rotate-180 motion-reduce:transition-none"}
                width={"18"}
                height={"18"}
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"2.4"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                aria-hidden={"true"}
              >
                <path d={"M6 9l6 6 6-6"}></path>
              </svg>
            </summary>
            <div className={"max-w-[720px] pb-5 [&>p]:m-0 [&>p]:leading-[1.65] [&>p]:text-brand-text [&>p+p]:mt-2"}>
              <p>
                {
                  copy.sections.artisti_si_lucruri_gratis
                    .tot_ce_publicam_pe_instagram_si_tiktok
                }
                <a href={localizedHref("/gratis", locale)}>
                  {copy.sections.artisti_si_lucruri_gratis.lista_gratuita}
                </a>
                {
                  copy.sections.artisti_si_lucruri_gratis
                    .si_daca_te_alegem_un_mini_audit_facut_pu
                }
              </p>
            </div>
          </details>
        </div>
        {"\n"}
      </section>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
        <div className={"flex flex-[1_1_360px] flex-col gap-3 rounded-[18px] border border-brand-border bg-brand-white px-[26px] py-6 border-brand-cream-muted bg-brand-cream-muted"}>
          {"\n"}
          <h3 className={"m-0 font-[Unbounded,sans-serif] text-[19px] font-bold leading-[1.3]"}>
            {copy.sections.contact_cta.n_ai_gasit_ce_cautai}
          </h3>
          {"\n"}
          <p className={"m-0 text-[15px] text-brand-text"}>
            {copy.sections.contact_cta.scrie_ne_si_iti_raspundem_in_cel_mult_2}
          </p>
          {"\n"}
          <a className={"mt-auto inline-block py-2 text-[15px] font-semibold"} href={localizedHref("/contact", locale)}>
            {copy.sections.contact_cta.hai_sa_vorbim}
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
