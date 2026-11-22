import defaultCopy from "./copy.json";
import localizedHref from "../localizedHref";
export default function AuditPage({ copy = defaultCopy, locale = "ro" }) {
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
          <span>{copy.hero.na_audit}</span>
        </nav>
        {"\n"}
        <span className={"inline-block self-start rounded-full bg-brand-cream-muted px-[10px] py-1 text-[13px] font-semibold bg-brand-mustard"}>
          {copy.hero.cel_mai_simplu_inceput}
        </span>
        {"\n"}
        <h1 className={"m-0 [font-family:Unbounded,_sans-serif] font-extrabold text-[clamp(30px,3.6vw,44px)] leading-[1.05] tracking-[-0.5px] max-[360px]:text-[26px]"}>
          {copy.hero.na_audit}
          <span className={"mt-2.5 block [font-family:Inter,system-ui,sans-serif] text-[clamp(16px,1.6vw,19px)] font-semibold leading-[1.35] tracking-normal text-brand-muted"}>
            {copy.hero.audit_social_media_cu_plan_de_90_de_zile}
          </span>
        </h1>
        {"\n"}
        <p className={"m-0 text-brand-muted max-w-[720px] text-[18px] text-brand-text"}>
          {copy.hero.ne_uitam_la_tot_ce_ai_online_si_iti_dam}
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
        <div className={"flex flex-wrap gap-4 [&>*]:[flex:1_1_300px] [&>*]:min-w-0 [&>*]:[flex-basis:420px]"}>
          <div className={"relative flex flex-col gap-3 rounded-[20px] border border-brand-border bg-brand-white p-[26px] max-[640px]:p-5 [&_p]:m-0 na-card"}>
            <h3 className={"m-0 [font-family:Unbounded,_sans-serif] text-[22px] font-bold leading-[1.2] text-[20px]"}>
              {copy.sections.ce_primesti.radiografia}
            </h3>
            <p className={"text-brand-muted"}>
              {
                copy.sections.ce_primesti
                  .profil_feed_continut_ritm_comunitate_cif
              }
            </p>
          </div>
          <div className={"relative flex flex-col gap-3 rounded-[20px] border border-brand-border bg-brand-white p-[26px] max-[640px]:p-5 [&_p]:m-0 na-card"}>
            <h3 className={"m-0 [font-family:Unbounded,_sans-serif] text-[22px] font-bold leading-[1.2] text-[20px]"}>
              {copy.sections.ce_primesti.planul_de_90_de_zile}
            </h3>
            <p className={"text-brand-muted"}>
              {
                copy.sections.ce_primesti
                  .pe_o_singura_pagina_ce_schimbi_in_ce_ord
              }
            </p>
          </div>
          <div className={"relative flex flex-col gap-3 rounded-[20px] border border-brand-border bg-brand-white p-[26px] max-[640px]:p-5 [&_p]:m-0 na-card"}>
            <h3 className={"m-0 [font-family:Unbounded,_sans-serif] text-[22px] font-bold leading-[1.2] text-[20px]"}>
              {copy.sections.ce_primesti.pe_intelesul_tuturor}
            </h3>
            <p className={"text-brand-muted"}>
              {
                copy.sections.ce_primesti
                  .fara_jargon_fiecare_problema_vine_cu_ce
              }
            </p>
          </div>
          <div className={"relative flex flex-col gap-3 rounded-[20px] border border-brand-border bg-brand-white p-[26px] max-[640px]:p-5 [&_p]:m-0 na-card"}>
            <h3 className={"m-0 [font-family:Unbounded,_sans-serif] text-[22px] font-bold leading-[1.2] text-[20px]"}>
              {copy.sections.ce_primesti.se_scade_din_prima_luna}
            </h3>
            <p className={"text-brand-muted"}>
              {
                copy.sections.ce_primesti
                  .daca_mergem_mai_departe_cu_na_social_med
              }
            </p>
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
        <div className={"flex flex-wrap gap-4 [&>*]:[flex:1_1_300px] [&>*]:min-w-0 [&>*]:[flex-basis:420px]"}>
          {"\n"}
          <div className={"relative flex flex-col gap-3 rounded-[20px] border border-brand-border bg-brand-white p-[26px] max-[640px]:p-5 [&_p]:m-0 na-card"}>
            <ul className={"ticks"}>
              <li>
                <span>
                  {
                    copy.sections.pentru_cine_e
                      .ai_un_cont_si_simti_ca_nu_merge_dar_nu_s
                  }
                </span>
              </li>
              <li>
                <span>
                  {
                    copy.sections.pentru_cine_e
                      .vrei_sa_stii_ce_sa_ceri_unei_agentii_ina
                  }
                </span>
              </li>
              <li>
                <span>
                  {
                    copy.sections.pentru_cine_e
                      .vrei_sa_lucrezi_cu_noi_dar_intai_vrei_sa
                  }
                </span>
              </li>
            </ul>
          </div>
          {"\n"}
          <div className={"relative flex flex-col gap-3 rounded-[20px] border border-brand-border bg-brand-white p-[26px] max-[640px]:p-5 [&_p]:m-0 border-0 bg-brand-ink text-brand-cream na-card fill-ink"}>
            <span className={"inline-block self-start rounded-full bg-brand-cream-muted px-[10px] py-1 text-[13px] font-semibold bg-brand-yellow"}>
              {copy.sections.pentru_cine_e.cine_lucreaza}
            </span>
            <p className={"text-[19px]"}>
              {copy.sections.pentru_cine_e.lavinia_si_bianca_impreuna}
            </p>
          </div>
          {"\n"}
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
            <strong>{copy.sections.cum_decurge.ne_scrii}</strong>
            <span>
              {
                copy.sections.cum_decurge
                  .ne_spui_ce_conturi_avem_de_vazut_si_ce_t
              }
            </span>
          </li>
          <li>
            <strong>{copy.sections.cum_decurge.ne_uitam}</strong>
            <span>{copy.sections.cum_decurge.in_10_zile_trecem_prin_tot}</span>
          </li>
          <li>
            <strong>{copy.sections.cum_decurge.primesti_planul}</strong>
            <span>
              {
                copy.sections.cum_decurge
                  .radiografia_si_planul_de_90_de_zile_pe_o
              }
            </span>
          </li>
          <li>
            <strong>{copy.sections.cum_decurge.decizi}</strong>
            <span>
              {
                copy.sections.cum_decurge
                  .il_aplici_singur_cu_altcineva_sau_cu_noi
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
              {copy.sections.intrebari.ce_ramane_la_mine_dupa_na_audit_daca_nu}
            </h3>
            <p>
              {copy.sections.intrebari.planul_de_90_de_zile_e_al_tau_il_poti_ap}
            </p>
          </div>
          <div>
            <h3>{copy.sections.intrebari.cat_dureaza}</h3>
            <p>{copy.sections.intrebari.number_10_zile}</p>
          </div>
          <div>
            <h3>
              {copy.sections.intrebari.care_e_diferenta_fata_de_lista_gratuita}
            </h3>
            <p>
              {copy.sections.intrebari.lista_o_completezi_singur_la_na_audit_tr}
              <a href={localizedHref("/gratis", locale)}>{copy.sections.intrebari.lista_e_aici}</a>
              {copy.sections.intrebari.period}
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
          <a className={"flex flex-col gap-1 rounded-[14px] border border-brand-border bg-brand-white px-4 py-[14px] text-brand-ink no-underline hover:border-brand-ink [&_strong]:text-[15px] [&_span]:text-sm [&_span]:text-brand-text"} href={localizedHref("/tiktok-start", locale)}>
            <strong>{copy.sections.celelalte_servicii.na_tiktok_start}</strong>
            <span>
              {
                copy.sections.celelalte_servicii
                  .cont_setat_directie_creativa_primele_8_c
              }
            </span>
          </a>
          <a className={"flex flex-col gap-1 rounded-[14px] border border-brand-border bg-brand-white px-4 py-[14px] text-brand-ink no-underline hover:border-brand-ink [&_strong]:text-[15px] [&_span]:text-sm [&_span]:text-brand-text"} href={localizedHref("/email-marketing", locale)}>
            <strong>
              {copy.sections.celelalte_servicii.na_email_marketing}
            </strong>
            <span>
              {
                copy.sections.celelalte_servicii
                  .emailuri_automate_campanii_si_o_lista_ca
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
