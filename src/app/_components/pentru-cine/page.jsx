import defaultCopy from "./copy.json";
import localizedHref from "../localizedHref";
export default function PentruCinePage({ copy = defaultCopy, locale = "ro" }) {
  return (
    <div className={"view"}>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] flex flex-col items-center gap-3 pt-10 pb-9 text-center"}>
        {"\n"}
        <nav className={"flex flex-wrap items-center gap-2 text-sm leading-5 text-brand-muted [&>*]:inline-flex [&>*]:min-h-5 [&>*]:items-center [&>*]:leading-5 [&_a]:text-brand-muted"} aria-label={copy.hero.unde_esti}>
          <a href={localizedHref("/", locale)}>{copy.hero.na_digital}</a>{" "}
          <span aria-hidden={"true"}>{copy.hero.separator}</span>{" "}
          <span>{copy.hero.pentru_cine}</span>
        </nav>
        {"\n\n"}
        <div className={"flex flex-col gap-3 rounded-3xl bg-brand-lavender px-9 pt-9 pb-8 max-[640px]:rounded-[18px] max-[640px]:px-5 max-[640px]:py-6"}>
          {"\n"}
          <h1 className={"m-0 [font-family:Unbounded,_sans-serif] font-extrabold text-[clamp(30px,3.6vw,44px)] leading-[1.05] tracking-[-0.5px] max-[360px]:text-[26px]"}>{copy.hero.pentru_cine}</h1>
          {"\n"}
          <p className={"m-0 text-brand-muted max-w-[720px] text-[18px] text-brand-text"}>{copy.hero.cel_mai_des_lucram_cu}</p>
          {"\n"}
          <div className={"mt-1 flex flex-wrap gap-2"}>
            <span className={"rounded-full px-[14px] py-1.5 text-sm font-semibold text-brand-ink bg-brand-sky"}>
              {copy.hero.marketing_manageri}
            </span>
            <span className={"rounded-full px-[14px] py-1.5 text-sm font-semibold text-brand-ink bg-brand-mustard"}>
              {copy.hero.antreprenori}
            </span>
          </div>
          {"\n"}
        </div>
        {"\n\n"}
      </section>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
        <div className={"flex flex-wrap gap-4"}>
          <article className={"flex flex-[1_1_360px] flex-col gap-3 rounded-[18px] border border-brand-border bg-brand-white px-[26px] py-6"}>
            {"\n"}
            <div className={"flex items-center gap-3"}>
              <span className={"flex h-11 w-11 items-center justify-center rounded-xl bg-brand-sky"}>
                <svg
                  width={"26"}
                  height={"26"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"#1E120C"}
                  strokeWidth={"2"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  aria-hidden={"true"}
                >
                  <rect
                    x={"3"}
                    y={"5"}
                    width={"13"}
                    height={"9"}
                    rx={"1.5"}
                  ></rect>
                  <path d={"M2 17h15"}></path>
                  <rect
                    x={"17"}
                    y={"8"}
                    width={"5"}
                    height={"10"}
                    rx={"1.2"}
                  ></rect>
                  <path d={"M6 11v1M9 9v3M12 8v4"}></path>
                </svg>
              </span>
              <span className={"text-[13px] font-semibold tracking-[0.3px] text-brand-muted"}>
                {
                  copy.sections.ai_agentie_dar_conturile_arata_ca_reclam
                    .marketing_manager
                }
              </span>
            </div>
            {"\n"}
            <h2 className={"m-0 font-[Unbounded,sans-serif] text-[19px] font-bold leading-[1.3]"}>
              {
                copy.sections.ai_agentie_dar_conturile_arata_ca_reclam
                  .ai_agentie_dar_conturile_arata_ca_reclam
              }
            </h2>
            {"\n"}
            <ul className={"m-0 flex list-disc flex-col gap-1 pl-[18px] text-base text-brand-text"}>
              <li>
                {
                  copy.sections.ai_agentie_dar_conturile_arata_ca_reclam
                    .echipa_ta_n_are_timp_sa_filmeze_si_sa_sc
                }
              </li>
              <li>
                {
                  copy.sections.ai_agentie_dar_conturile_arata_ca_reclam
                    .ai_nevoie_de_continut_luna_de_luna_nu_do
                }
              </li>
              <li>
                {
                  copy.sections.ai_agentie_dar_conturile_arata_ca_reclam
                    .vrei_pe_cineva_care_stie_cum_se_vorbeste
                }
              </li>
            </ul>
            {"\n"}
            <a className={"mt-auto inline-block py-2 text-[15px] font-semibold"} href={localizedHref("/lunar", locale)}>
              {
                copy.sections.ai_agentie_dar_conturile_arata_ca_reclam
                  .incepe_cu_na_social_media_lunar
              }
            </a>
            {"\n"}
          </article>
          <article className={"flex flex-[1_1_360px] flex-col gap-3 rounded-[18px] border border-brand-border bg-brand-white px-[26px] py-6"}>
            {"\n"}
            <div className={"flex items-center gap-3"}>
              <span className={"flex h-11 w-11 items-center justify-center rounded-xl bg-brand-mustard"}>
                <svg
                  width={"26"}
                  height={"26"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"#1E120C"}
                  strokeWidth={"2"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  aria-hidden={"true"}
                >
                  <path d={"M4 10h16v10H4z"}></path>
                  <path d={"M3 10l2-5h14l2 5"}></path>
                  <path d={"M10 20v-5h4v5"}></path>
                </svg>
              </span>
              <span className={"text-[13px] font-semibold tracking-[0.3px] text-brand-muted"}>
                {
                  copy.sections.ai_agentie_dar_conturile_arata_ca_reclam
                    .antreprenor
                }
              </span>
            </div>
            {"\n"}
            <h2 className={"m-0 font-[Unbounded,sans-serif] text-[19px] font-bold leading-[1.3]"}>
              {
                copy.sections.ai_agentie_dar_conturile_arata_ca_reclam
                  .ai_o_afacere_buna_si_un_cont_care_nu_spu
              }
            </h2>
            {"\n"}
            <ul className={"m-0 flex list-disc flex-col gap-1 pl-[18px] text-base text-brand-text"}>
              <li>
                {
                  copy.sections.ai_agentie_dar_conturile_arata_ca_reclam
                    .postezi_cand_ai_timp_adica_rar
                }
              </li>
              <li>
                {
                  copy.sections.ai_agentie_dar_conturile_arata_ca_reclam
                    .nu_stii_ce_sa_postezi_ca_sa_vina_clienti
                }
              </li>
              <li>
                {
                  copy.sections.ai_agentie_dar_conturile_arata_ca_reclam
                    .vrei_sa_intelegi_pe_ce_dai_banii_inainte
                }
              </li>
            </ul>
            {"\n"}
            <a className={"mt-auto inline-block py-2 text-[15px] font-semibold"} href={localizedHref("/audit", locale)}>
              {
                copy.sections.ai_agentie_dar_conturile_arata_ca_reclam
                  .incepe_cu_na_audit
              }
            </a>
            {"\n"}
          </article>
        </div>
        {"\n"}
        <p className={"mt-[18px] mb-0 text-base text-brand-text"}>
          {
            copy.sections.ai_agentie_dar_conturile_arata_ca_reclam
              .nu_stii_in_care_te_incadrezi
          }
          <a href={localizedHref("/contact", locale)}>
            {copy.sections.ai_agentie_dar_conturile_arata_ca_reclam.scrie_ne}
          </a>
          {
            copy.sections.ai_agentie_dar_conturile_arata_ca_reclam
              .si_ne_lamurim_impreuna
          }
        </p>
        {"\n"}
      </section>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
        {"\n"}
        <div className={"mb-6 flex max-w-[760px] flex-col gap-2"}>
          <h2 className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1]"}>
            {copy.sections.cateva_exemple.cateva_exemple}
          </h2>
          <p className={"m-0 text-brand-muted"}>
            {copy.sections.cateva_exemple.oameni_si_branduri_cu_care_am_lucrat}
          </p>
        </div>
        {"\n"}
        <div className={"flex flex-wrap gap-4 [&>.ex]:min-w-0 [&>.ex]:flex-[1_1_220px] [&>.ex]:gap-2 [&>.ex]:px-4 [&>.ex]:pt-4 [&>.ex]:pb-5"}>
          <article className={"flex flex-[1_1_360px] flex-col gap-3 rounded-[18px] border border-brand-border bg-brand-white px-[26px] py-6 ex"}>
            {"\n"}
            <div className={"mb-1 flex aspect-[4/3] items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-2 text-center text-xs font-bold text-brand-muted"}>
              {copy.sections.cateva_exemple.logo_sau_poza}
            </div>
            {"\n"}
            <span className={"text-[13px] font-semibold tracking-[0.3px] text-brand-muted"}>
              {copy.sections.cateva_exemple.antreprenor}
            </span>
            {"\n"}
            <h3 className={"m-0 font-[Unbounded,sans-serif] text-[19px] font-bold leading-[1.3] text-[17px]"}>
              {copy.sections.cateva_exemple.alexi_brows}
            </h3>
            {"\n"}
            <p className={"m-0 text-[15px] text-brand-text"}>
              {
                copy.sections.cateva_exemple
                  .un_brand_de_sprancene_din_targoviste_de
              }
            </p>
            {"\n"}
            <a className={"mt-auto inline-block py-2 text-[15px] font-semibold"} href={localizedHref("/ce-am-facut", locale)}>
              {copy.sections.cateva_exemple.vezi_exemplul}
            </a>
            {"\n"}
          </article>
          <article className={"flex flex-[1_1_360px] flex-col gap-3 rounded-[18px] border border-brand-border bg-brand-white px-[26px] py-6 ex"}>
            {"\n"}
            <div className={"mb-1 flex aspect-[4/3] items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-2 text-center text-xs font-bold text-brand-muted"}>
              {copy.sections.cateva_exemple.logo_sau_poza}
            </div>
            {"\n"}
            <span className={"text-[13px] font-semibold tracking-[0.3px] text-brand-muted"}>
              {copy.sections.cateva_exemple.ong}
            </span>
            {"\n"}
            <h3 className={"m-0 font-[Unbounded,sans-serif] text-[19px] font-bold leading-[1.3] text-[17px]"}>
              {copy.sections.cateva_exemple.pro_patrimonio}
            </h3>
            {"\n"}
            <p className={"m-0 text-[15px] text-brand-text"}>
              {
                copy.sections.cateva_exemple
                  .concerte_pe_siret_comunicare_pe_patru_ca
              }
            </p>
            {"\n"}
            <a className={"mt-auto inline-block py-2 text-[15px] font-semibold"} href={localizedHref("/ce-am-facut", locale)}>
              {copy.sections.cateva_exemple.vezi_exemplul}
            </a>
            {"\n"}
          </article>
          <article className={"flex flex-[1_1_360px] flex-col gap-3 rounded-[18px] border border-brand-border bg-brand-white px-[26px] py-6 ex"}>
            {"\n"}
            <div className={"mb-1 flex aspect-[4/3] items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-2 text-center text-xs font-bold text-brand-muted"}>
              {copy.sections.cateva_exemple.logo_sau_poza}
            </div>
            {"\n"}
            <span className={"text-[13px] font-semibold tracking-[0.3px] text-brand-muted"}>
              {copy.sections.cateva_exemple.trupa_metalcore}
            </span>
            {"\n"}
            <h3 className={"m-0 font-[Unbounded,sans-serif] text-[19px] font-bold leading-[1.3] text-[17px]"}>
              {copy.sections.cateva_exemple.static_collapse}
            </h3>
            {"\n"}
            <p className={"m-0 text-[15px] text-brand-text"}>
              {copy.sections.cateva_exemple.ce_am_facut_intr_un_rand}
            </p>
            {"\n"}
            <a className={"mt-auto inline-block py-2 text-[15px] font-semibold"} href={localizedHref("/ce-am-facut", locale)}>
              {copy.sections.cateva_exemple.vezi_exemplul}
            </a>
            {"\n"}
          </article>
          <article className={"flex flex-[1_1_360px] flex-col gap-3 rounded-[18px] border border-brand-border bg-brand-white px-[26px] py-6 ex"}>
            {"\n"}
            <div className={"mb-1 flex aspect-[4/3] items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-2 text-center text-xs font-bold text-brand-muted"}>
              {copy.sections.cateva_exemple.logo_sau_poza}
            </div>
            {"\n"}
            <span className={"text-[13px] font-semibold tracking-[0.3px] text-brand-muted"}>
              {copy.sections.cateva_exemple.atelier_de_mobila}
            </span>
            {"\n"}
            <h3 className={"m-0 font-[Unbounded,sans-serif] text-[19px] font-bold leading-[1.3] text-[17px]"}>
              {copy.sections.cateva_exemple.como_atelier}
            </h3>
            {"\n"}
            <p className={"m-0 text-[15px] text-brand-text"}>
              {copy.sections.cateva_exemple.ce_am_facut_intr_un_rand}
            </p>
            {"\n"}
            <a className={"mt-auto inline-block py-2 text-[15px] font-semibold"} href={localizedHref("/ce-am-facut", locale)}>
              {copy.sections.cateva_exemple.vezi_exemplul}
            </a>
            {"\n"}
          </article>
        </div>
        {"\n"}
      </section>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
        <div className={"flex flex-wrap gap-4"}>
          {"\n"}
          <div className={"flex flex-[1_1_360px] flex-col gap-3 rounded-[18px] border border-brand-border bg-brand-white px-[26px] py-6 border-brand-cream-muted bg-brand-cream-muted"}>
            {"\n"}
            <h2 className={"m-0 font-[Unbounded,sans-serif] text-[19px] font-bold leading-[1.3]"}>
              {
                copy.sections.ce_poti_astepta_de_la_noi
                  .ce_poti_astepta_de_la_noi
              }
            </h2>
            {"\n"}
            <ul className={"m-0 flex list-none flex-col p-0 [&>li]:flex [&>li]:items-start [&>li]:gap-2.5 [&>li]:border-t [&>li]:border-brand-border [&>li]:py-2.5 [&>li]:text-base [&>li]:text-brand-text [&>li:first-child]:border-t-0 [&>li:first-child]:pt-1 [&_svg]:mt-1 [&_svg]:flex-none [&_strong]:text-brand-ink"}>
              <li>
                <svg
                  width={"16"}
                  height={"16"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"#1E120C"}
                  strokeWidth={"3"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  aria-hidden={"true"}
                >
                  <path d={"M5 12l5 5 9-10"}></path>
                </svg>
                <span>
                  <strong>
                    {copy.sections.ce_poti_astepta_de_la_noi.oameni_adevarati}
                  </strong>
                  {
                    copy.sections.ce_poti_astepta_de_la_noi
                      .crestem_conturi_cu_oameni_care_chiar_vor
                  }
                </span>
              </li>
              <li>
                <svg
                  width={"16"}
                  height={"16"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"#1E120C"}
                  strokeWidth={"3"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  aria-hidden={"true"}
                >
                  <path d={"M5 12l5 5 9-10"}></path>
                </svg>
                <span>
                  <strong>
                    {copy.sections.ce_poti_astepta_de_la_noi.rabdare}
                  </strong>
                  {
                    copy.sections.ce_poti_astepta_de_la_noi
                      .un_cont_bun_se_construieste_in_luni_iar
                  }
                </span>
              </li>
              <li>
                <svg
                  width={"16"}
                  height={"16"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"#1E120C"}
                  strokeWidth={"3"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  aria-hidden={"true"}
                >
                  <path d={"M5 12l5 5 9-10"}></path>
                </svg>
                <span>
                  <strong>
                    {
                      copy.sections.ce_poti_astepta_de_la_noi
                        .continut_nu_prezentari
                    }
                  </strong>
                  {
                    copy.sections.ce_poti_astepta_de_la_noi
                      .raportul_tine_5_minute_restul_timpului_i
                  }
                </span>
              </li>
            </ul>
            {"\n"}
          </div>
          {"\n"}
          <div className={"flex flex-[1_1_360px] flex-col gap-3 rounded-[18px] border border-brand-border bg-brand-white px-[26px] py-6"}>
            {"\n"}
            <h2 className={"m-0 font-[Unbounded,sans-serif] text-[19px] font-bold leading-[1.3]"}>
              {copy.sections.ce_poti_astepta_de_la_noi.si_daca}
            </h2>
            {"\n"}
            <ul className={"m-0 flex list-none flex-col p-0 [&>li]:flex [&>li]:flex-col [&>li]:gap-0.5 [&>li]:border-t [&>li]:border-brand-border-soft [&>li]:py-2.5 [&>li]:text-base [&>li]:text-brand-text [&>li:first-child]:border-t-0 [&>li:first-child]:pt-1 [&_strong]:text-brand-ink [&_a]:text-[15px] [&_a]:font-semibold"}>
              <li>
                <span>
                  <strong>
                    {
                      copy.sections.ce_poti_astepta_de_la_noi
                        .ai_un_ong_sau_un_proiect_cultural
                    }
                  </strong>
                  {copy.sections.ce_poti_astepta_de_la_noi.lucram_si_cu_tine}
                </span>
                <a href={localizedHref("/ce-am-facut", locale)}>
                  {copy.sections.ce_poti_astepta_de_la_noi.vezi_pro_patrimonio}
                </a>
              </li>
              <li>
                <span>
                  <strong>
                    {
                      copy.sections.ce_poti_astepta_de_la_noi
                        .ai_nevoie_doar_de_ceva_facut_de_mana
                    }
                  </strong>
                  {copy.sections.ce_poti_astepta_de_la_noi.lucram_cu_artisti}
                </span>
                <a href={localizedHref("/artisti", locale)}>
                  {copy.sections.ce_poti_astepta_de_la_noi.vezi_artistii}
                </a>
              </li>
              <li>
                <span>
                  <strong>
                    {
                      copy.sections.ce_poti_astepta_de_la_noi
                        .vrei_sa_incerci_intai_singur
                    }
                  </strong>
                  {
                    copy.sections.ce_poti_astepta_de_la_noi
                      .avem_o_lista_pentru_asta
                  }
                </span>
                <a href={localizedHref("/gratis", locale)}>
                  {copy.sections.ce_poti_astepta_de_la_noi.vreau_lista_gratuita}
                </a>
              </li>
            </ul>
            {"\n"}
          </div>
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
