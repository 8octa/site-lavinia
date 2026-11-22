import defaultCopy from "./copy.json";
import localizedHref from "../localizedHref";
export default function CeFacemPage({ copy = defaultCopy, locale = "ro" }) {
  return (
    <div className={"view"}>
      {"\n"}
      <section className={"flex justify-center items-center mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] flex flex-col gap-3 pt-10 pb-9 text-center"}>
        {"\n"}
        <nav className={"flex flex-wrap items-center gap-2 text-sm leading-5 text-brand-muted [&>*]:inline-flex [&>*]:min-h-5 [&>*]:items-center [&>*]:leading-5 [&_a]:text-brand-muted"} aria-label={copy.hero.unde_esti}>
          <a href={localizedHref("/", locale)}>{copy.hero.na_digital}</a>{" "}
          <span aria-hidden={"true"}>{copy.hero.separator}</span>{" "}
          <span>{copy.hero.ce_facem}</span>
        </nav>
        {"\n\n"}
        <h1 className={"m-0 [font-family:Unbounded,_sans-serif] font-extrabold text-[clamp(30px,3.6vw,44px)] leading-[1.05] tracking-[-0.5px] max-[360px]:text-[26px]"}>{copy.hero.serving_the_following}</h1>
        {"\n"}
        <p className={"m-0 text-brand-muted max-w-[720px] text-[18px] text-brand-text"}>
          {copy.hero.un_serviciu_vedeta_luna_de_luna_plus_cat}
        </p>
        {"\n\n"}
      </section>
      {"\n"}
      <section className={"flex items-center justify-center mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
        {"\n"}
        <div className={"max-w-[860px] rounded-[20px] border border-brand-border bg-brand-white px-8 pt-7 pb-6 max-[640px]:px-[18px] max-[640px]:py-5"}>
          {"\n"}
          <div className={"flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-brand-ink pb-4"}>
            <span className={"font-[Unbounded,sans-serif] text-xl font-bold"}>
              {copy.sections.service_menu.meniul_na}
            </span>
            <span className={"text-sm italic text-brand-muted"}>
              {
                copy.sections.service_menu
                  .apasa_pe_un_serviciu_ca_sa_vezi_ce_conti
              }
            </span>
          </div>
          {"\n"}
          <ul className={"m-0 list-none p-0 [&>li]:border-b [&>li]:border-brand-border-soft"}>
            <li>
              <details className={"group"} name={"meniu"}>
                <summary className={"group-open:bg-brand-cream list-none marker:hidden cursor-pointer flex items-end gap-3 rounded-[10px] px-1 py-4 text-brand-ink no-underline transition-colors hover:bg-brand-cream hover:text-brand-ink focus-visible:outline-2 focus-visible:outline-brand-tomato focus-visible:outline-offset-2 max-[640px]:flex-wrap"}>
                  <span className={"flex min-w-0 flex-[0_1_auto] flex-col gap-[3px]"}>
                    <span className={"flex flex-wrap items-center gap-2 font-[Unbounded,sans-serif] text-[17px] font-bold"}>
                      {copy.sections.service_menu.na_social_media_lunar}
                      <span className={"rounded-full bg-brand-tomato px-2 py-0.5 font-[Inter,sans-serif] text-xs font-semibold"}>
                        {copy.sections.service_menu.serviciul_principal}
                      </span>
                    </span>
                    <span className={"text-[15px] text-brand-ink-soft"}>
                      {copy.sections.service_menu.conturile_tale_luna_de_luna}
                    </span>
                    <span className={"text-[13px] text-brand-muted"}>
                      {
                        copy.sections.service_menu
                          .contine_strategie_calendar_10_12_postari
                      }
                    </span>
                  </span>
                  <span className={"min-w-6 flex-[1_1_40px] mb-1.5 [border-bottom:2px_dotted_var(--brand-sand-border)] max-[640px]:hidden"} aria-hidden={"true"}></span>
                  <span className={"flex-none whitespace-nowrap mb-px text-sm font-semibold max-[640px]:w-full max-[640px]:text-brand-muted max-[640px]:font-medium"}>
                    {copy.sections.service_menu.lunar_min_3_luni}
                  </span>
                  <svg
                    className={"mb-0.5 flex-none transition-transform motion-reduce:transition-none transition-transform motion-reduce:transition-none group-open:rotate-180"}
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
                <div className={"flex flex-col gap-3 px-1 pt-1.5 pb-[22px]"}>
                  <p className={"m-0 max-w-[640px] text-base text-brand-ink-soft"}>
                    {
                      copy.sections.service_menu
                        .conturile_tale_de_social_media_luna_de_l
                    }
                  </p>
                  <div className={"flex flex-wrap gap-6 [&>div]:flex [&>div]:min-w-0 [&>div]:flex-[1_1_260px] [&>div]:flex-col [&>div]:gap-2"}>
                    <div>
                      <strong className={"text-xs uppercase tracking-[1px] text-brand-muted"}>
                        {copy.sections.service_menu.ce_primesti}
                      </strong>
                      <ul className={"m-0 flex list-disc flex-col gap-1.5 pl-[18px] text-[15px] text-brand-text [&_strong]:text-brand-ink"}>
                        <li>
                          <strong>
                            {copy.sections.service_menu.strategie_si_calendar}
                          </strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .stii_de_la_inceputul_lunii_ce_iese_cand
                            }
                          </span>
                        </li>
                        <li>
                          <strong>
                            {copy.sections.service_menu.number_10_12_postari}
                          </strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .gandite_pentru_telefon_nu_adaptate_din_a
                            }
                          </span>
                        </li>
                        <li>
                          <strong>
                            {copy.sections.service_menu.o_zi_de_filmare}
                          </strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .filmam_tot_continutul_lunii_intr_o_singu
                            }
                          </span>
                        </li>
                        <li>
                          <strong>
                            {copy.sections.service_menu.publicare}
                          </strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .postam_noi_pe_instagram_tiktok_facebook
                            }
                          </span>
                        </li>
                        <li>
                          <strong>
                            {copy.sections.service_menu.raport_de_5_minute}
                          </strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .ce_a_mers_ce_nu_si_ce_schimbam_luna_viit
                            }
                          </span>
                        </li>
                        <li>
                          <strong>
                            {copy.sections.service_menu.minimum_3_luni}
                          </strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .atat_ii_trebuie_unui_cont_ca_sa_se_vada
                            }
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <strong className={"text-xs uppercase tracking-[1px] text-brand-muted"}>
                        {copy.sections.service_menu.pentru_cine_e}
                      </strong>
                      <ul className={"m-0 flex list-disc flex-col gap-1.5 pl-[18px] text-[15px] text-brand-text"}>
                        <li>
                          {
                            copy.sections.service_menu
                              .marketing_managerii_care_au_deja_agentie
                          }
                        </li>
                        <li>
                          {
                            copy.sections.service_menu
                              .antreprenorii_care_vor_sa_posteze_consta
                          }
                        </li>
                        <li>
                          {
                            copy.sections.service_menu
                              .brandurile_care_vor_sa_apara_cu_oameni_n
                          }
                        </li>
                      </ul>
                      <p className={"mt-1 mb-0 text-sm text-brand-text"}>
                        <strong>
                          {copy.sections.service_menu.cine_lucreaza}
                        </strong>
                        {
                          copy.sections.service_menu
                            .lavinia_face_strategia_bianca_scrie_film
                        }
                      </p>
                    </div>
                  </div>
                  <strong className={"text-xs uppercase tracking-[1px] text-brand-muted"}>
                    {copy.sections.service_menu.cum_decurge}
                  </strong>
                  <ol className={"m-0 flex list-none flex-wrap gap-2 p-0 [&>li]:inline-flex [&>li]:items-center [&>li]:gap-2 [&>li]:rounded-full [&>li]:bg-brand-cream-muted [&>li]:py-1.5 [&>li]:pr-[14px] [&>li]:pl-1.5 [&>li]:text-sm [&>li]:font-semibold"}>
                    <li>
                      <span className={"flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-ink text-xs text-brand-cream"}>
                        {copy.sections.service_menu.number_1}
                      </span>
                      {copy.sections.service_menu.prima_discutie}
                    </li>
                    <li>
                      <span className={"flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-ink text-xs text-brand-cream"}>
                        {copy.sections.service_menu.number_2}
                      </span>
                      {copy.sections.service_menu.planul_lunii}
                    </li>
                    <li>
                      <span className={"flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-ink text-xs text-brand-cream"}>
                        {copy.sections.service_menu.number_3}
                      </span>
                      {copy.sections.service_menu.ziua_de_filmare}
                    </li>
                    <li>
                      <span className={"flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-ink text-xs text-brand-cream"}>
                        {copy.sections.service_menu.number_4}
                      </span>
                      {copy.sections.service_menu.publicare_si_raport}
                    </li>
                  </ol>
                  <div className={"flex flex-wrap items-center gap-[18px]"}>
                    <a className={"inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border-0 px-6 [font:inherit] font-bold no-underline bg-brand-ink text-brand-cream hover:bg-brand-ink-hover hover:text-brand-cream min-h-11 px-[18px]"} href={localizedHref("/contact", locale)}>
                      {copy.sections.service_menu.hai_sa_vorbim}
                    </a>
                    <a className={"mt-auto inline-block py-2 text-[15px] font-semibold md-more"} href={localizedHref("/lunar", locale)}>
                      {copy.sections.service_menu.vezi_pagina_completa}
                    </a>
                  </div>
                </div>
              </details>
            </li>
            <li>
              <details className={"group"} name={"meniu"}>
                <summary className={"group-open:bg-brand-cream list-none marker:hidden cursor-pointer flex items-end gap-3 rounded-[10px] px-1 py-4 text-brand-ink no-underline transition-colors hover:bg-brand-cream hover:text-brand-ink focus-visible:outline-2 focus-visible:outline-brand-tomato focus-visible:outline-offset-2 max-[640px]:flex-wrap"}>
                  <span className={"flex min-w-0 flex-[0_1_auto] flex-col gap-[3px]"}>
                    <span className={"flex flex-wrap items-center gap-2 font-[Unbounded,sans-serif] text-[17px] font-bold"}>
                      {copy.sections.service_menu.na_content_creation}
                    </span>
                    <span className={"text-[15px] text-brand-ink-soft"}>
                      {
                        copy.sections.service_menu
                          .filmam_editam_facem_continut_adevarat
                      }
                    </span>
                    <span className={"text-[13px] text-brand-muted"}>
                      {
                        copy.sections.service_menu
                          .contine_concept_filmare_montaj_subtitrar
                      }
                    </span>
                  </span>
                  <span className={"min-w-6 flex-[1_1_40px] mb-1.5 [border-bottom:2px_dotted_var(--brand-sand-border)] max-[640px]:hidden"} aria-hidden={"true"}></span>
                  <span className={"flex-none whitespace-nowrap mb-px text-sm font-semibold max-[640px]:w-full max-[640px]:text-brand-muted max-[640px]:font-medium"}>
                    {copy.sections.service_menu.pe_proiect}
                  </span>
                  <svg
                    className={"mb-0.5 flex-none transition-transform motion-reduce:transition-none transition-transform motion-reduce:transition-none group-open:rotate-180"}
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
                <div className={"flex flex-col gap-3 px-1 pt-1.5 pb-[22px]"}>
                  <p className={"m-0 max-w-[640px] text-base text-brand-ink-soft"}>
                    {
                      copy.sections.service_menu
                        .filmam_editam_si_facem_continut_adevarat
                    }
                  </p>
                  <div className={"flex flex-wrap gap-6 [&>div]:flex [&>div]:min-w-0 [&>div]:flex-[1_1_260px] [&>div]:flex-col [&>div]:gap-2"}>
                    <div>
                      <strong className={"text-xs uppercase tracking-[1px] text-brand-muted"}>
                        {copy.sections.service_menu.ce_primesti}
                      </strong>
                      <ul className={"m-0 flex list-disc flex-col gap-1.5 pl-[18px] text-[15px] text-brand-text [&_strong]:text-brand-ink"}>
                        <li>
                          <strong>
                            {copy.sections.service_menu.conceptul}
                          </strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .ce_filmam_de_ce_si_pentru_ce_platforma
                            }
                          </span>
                        </li>
                        <li>
                          <strong>{copy.sections.service_menu.filmarea}</strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .filmam_tot_continutul_intr_o_zi_sau_pe_p
                            }
                          </span>
                        </li>
                        <li>
                          <strong>{copy.sections.service_menu.montajul}</strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .taieturi_ritm_subtitrari_si_text_pe_ecra
                            }
                          </span>
                        </li>
                        <li>
                          <strong>
                            {copy.sections.service_menu.gata_de_postat}
                          </strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .primesti_clipurile_si_pozele_in_formatel
                            }
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <strong className={"text-xs uppercase tracking-[1px] text-brand-muted"}>
                        {copy.sections.service_menu.pentru_cine_e}
                      </strong>
                      <ul className={"m-0 flex list-disc flex-col gap-1.5 pl-[18px] text-[15px] text-brand-text"}>
                        <li>
                          {
                            copy.sections.service_menu
                              .brandurile_care_au_pe_cineva_care_postea
                          }
                        </li>
                        <li>
                          {
                            copy.sections.service_menu
                              .marketing_managerii_care_au_agentie_dar
                          }
                        </li>
                        <li>
                          {
                            copy.sections.service_menu
                              .oricine_vrea_sa_apara_cu_oameni_adevarat
                          }
                        </li>
                      </ul>
                      <p className={"mt-1 mb-0 text-sm text-brand-text"}>
                        <strong>
                          {copy.sections.service_menu.cine_lucreaza}
                        </strong>
                        {
                          copy.sections.service_menu
                            .lavinia_pe_concept_si_directie_bianca_pe
                        }
                      </p>
                    </div>
                  </div>
                  <strong className={"text-xs uppercase tracking-[1px] text-brand-muted"}>
                    {copy.sections.service_menu.cum_decurge}
                  </strong>
                  <ol className={"m-0 flex list-none flex-wrap gap-2 p-0 [&>li]:inline-flex [&>li]:items-center [&>li]:gap-2 [&>li]:rounded-full [&>li]:bg-brand-cream-muted [&>li]:py-1.5 [&>li]:pr-[14px] [&>li]:pl-1.5 [&>li]:text-sm [&>li]:font-semibold"}>
                    <li>
                      <span className={"flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-ink text-xs text-brand-cream"}>
                        {copy.sections.service_menu.number_1}
                      </span>
                      {copy.sections.service_menu.prima_discutie}
                    </li>
                    <li>
                      <span className={"flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-ink text-xs text-brand-cream"}>
                        {copy.sections.service_menu.number_2}
                      </span>
                      {copy.sections.service_menu.conceptul_2}
                    </li>
                    <li>
                      <span className={"flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-ink text-xs text-brand-cream"}>
                        {copy.sections.service_menu.number_3}
                      </span>
                      {copy.sections.service_menu.filmarea_2}
                    </li>
                    <li>
                      <span className={"flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-ink text-xs text-brand-cream"}>
                        {copy.sections.service_menu.number_4}
                      </span>
                      {copy.sections.service_menu.montajul_2}
                    </li>
                  </ol>
                  <div className={"flex flex-wrap items-center gap-[18px]"}>
                    <a className={"inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border-0 px-6 [font:inherit] font-bold no-underline bg-brand-ink text-brand-cream hover:bg-brand-ink-hover hover:text-brand-cream min-h-11 px-[18px]"} href={localizedHref("/contact", locale)}>
                      {copy.sections.service_menu.hai_sa_vorbim}
                    </a>
                    <a
                      className={"mt-auto inline-block py-2 text-[15px] font-semibold md-more"}
                      href={localizedHref("/content-creation", locale)}
                    >
                      {copy.sections.service_menu.vezi_pagina_completa}
                    </a>
                  </div>
                </div>
              </details>
            </li>
            <li>
              <details className={"group"} name={"meniu"}>
                <summary className={"group-open:bg-brand-cream list-none marker:hidden cursor-pointer flex items-end gap-3 rounded-[10px] px-1 py-4 text-brand-ink no-underline transition-colors hover:bg-brand-cream hover:text-brand-ink focus-visible:outline-2 focus-visible:outline-brand-tomato focus-visible:outline-offset-2 max-[640px]:flex-wrap"}>
                  <span className={"flex min-w-0 flex-[0_1_auto] flex-col gap-[3px]"}>
                    <span className={"flex flex-wrap items-center gap-2 font-[Unbounded,sans-serif] text-[17px] font-bold"}>
                      {copy.sections.service_menu.na_audit}
                    </span>
                    <span className={"text-[15px] text-brand-ink-soft"}>
                      {
                        copy.sections.service_menu
                          .radiografia_contului_si_un_plan_de_90_de
                      }
                    </span>
                    <span className={"text-[13px] text-brand-muted"}>
                      {
                        copy.sections.service_menu
                          .contine_audit_pe_8_capitole_planul_pe_o
                      }
                    </span>
                  </span>
                  <span className={"min-w-6 flex-[1_1_40px] mb-1.5 [border-bottom:2px_dotted_var(--brand-sand-border)] max-[640px]:hidden"} aria-hidden={"true"}></span>
                  <span className={"flex-none whitespace-nowrap mb-px text-sm font-semibold max-[640px]:w-full max-[640px]:text-brand-muted max-[640px]:font-medium"}>
                    {copy.sections.service_menu.in_10_zile}
                  </span>
                  <svg
                    className={"mb-0.5 flex-none transition-transform motion-reduce:transition-none transition-transform motion-reduce:transition-none group-open:rotate-180"}
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
                <div className={"flex flex-col gap-3 px-1 pt-1.5 pb-[22px]"}>
                  <p className={"m-0 max-w-[640px] text-base text-brand-ink-soft"}>
                    {
                      copy.sections.service_menu
                        .ne_uitam_la_tot_ce_ai_online_si_iti_dam
                    }
                  </p>
                  <div className={"flex flex-wrap gap-6 [&>div]:flex [&>div]:min-w-0 [&>div]:flex-[1_1_260px] [&>div]:flex-col [&>div]:gap-2"}>
                    <div>
                      <strong className={"text-xs uppercase tracking-[1px] text-brand-muted"}>
                        {copy.sections.service_menu.ce_primesti}
                      </strong>
                      <ul className={"m-0 flex list-disc flex-col gap-1.5 pl-[18px] text-[15px] text-brand-text [&_strong]:text-brand-ink"}>
                        <li>
                          <strong>
                            {copy.sections.service_menu.radiografia}
                          </strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .profil_feed_continut_ritm_comunitate_cif
                            }
                          </span>
                        </li>
                        <li>
                          <strong>
                            {copy.sections.service_menu.planul_de_90_de_zile}
                          </strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .pe_o_singura_pagina_ce_schimbi_in_ce_ord
                            }
                          </span>
                        </li>
                        <li>
                          <strong>
                            {copy.sections.service_menu.pe_intelesul_tuturor}
                          </strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .fara_jargon_fiecare_problema_vine_cu_ce
                            }
                          </span>
                        </li>
                        <li>
                          <strong>
                            {copy.sections.service_menu.se_scade_din_prima_luna}
                          </strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .daca_mergem_mai_departe_cu_na_social_med
                            }
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <strong className={"text-xs uppercase tracking-[1px] text-brand-muted"}>
                        {copy.sections.service_menu.pentru_cine_e}
                      </strong>
                      <ul className={"m-0 flex list-disc flex-col gap-1.5 pl-[18px] text-[15px] text-brand-text"}>
                        <li>
                          {
                            copy.sections.service_menu
                              .ai_un_cont_si_simti_ca_nu_merge_dar_nu_s
                          }
                        </li>
                        <li>
                          {
                            copy.sections.service_menu
                              .vrei_sa_stii_ce_sa_ceri_unei_agentii_ina
                          }
                        </li>
                        <li>
                          {
                            copy.sections.service_menu
                              .vrei_sa_lucrezi_cu_noi_dar_intai_vrei_sa
                          }
                        </li>
                      </ul>
                      <p className={"mt-1 mb-0 text-sm text-brand-text"}>
                        <strong>
                          {copy.sections.service_menu.cine_lucreaza}
                        </strong>
                        {copy.sections.service_menu.lavinia_si_bianca_impreuna}
                      </p>
                    </div>
                  </div>
                  <strong className={"text-xs uppercase tracking-[1px] text-brand-muted"}>
                    {copy.sections.service_menu.cum_decurge}
                  </strong>
                  <ol className={"m-0 flex list-none flex-wrap gap-2 p-0 [&>li]:inline-flex [&>li]:items-center [&>li]:gap-2 [&>li]:rounded-full [&>li]:bg-brand-cream-muted [&>li]:py-1.5 [&>li]:pr-[14px] [&>li]:pl-1.5 [&>li]:text-sm [&>li]:font-semibold"}>
                    <li>
                      <span className={"flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-ink text-xs text-brand-cream"}>
                        {copy.sections.service_menu.number_1}
                      </span>
                      {copy.sections.service_menu.ne_scrii}
                    </li>
                    <li>
                      <span className={"flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-ink text-xs text-brand-cream"}>
                        {copy.sections.service_menu.number_2}
                      </span>
                      {copy.sections.service_menu.ne_uitam}
                    </li>
                    <li>
                      <span className={"flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-ink text-xs text-brand-cream"}>
                        {copy.sections.service_menu.number_3}
                      </span>
                      {copy.sections.service_menu.primesti_planul}
                    </li>
                    <li>
                      <span className={"flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-ink text-xs text-brand-cream"}>
                        {copy.sections.service_menu.number_4}
                      </span>
                      {copy.sections.service_menu.decizi}
                    </li>
                  </ol>
                  <div className={"flex flex-wrap items-center gap-[18px]"}>
                    <a className={"inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border-0 px-6 [font:inherit] font-bold no-underline bg-brand-ink text-brand-cream hover:bg-brand-ink-hover hover:text-brand-cream min-h-11 px-[18px]"} href={localizedHref("/contact", locale)}>
                      {copy.sections.service_menu.hai_sa_vorbim}
                    </a>
                    <a className={"mt-auto inline-block py-2 text-[15px] font-semibold md-more"} href={localizedHref("/audit", locale)}>
                      {copy.sections.service_menu.vezi_pagina_completa}
                    </a>
                  </div>
                </div>
              </details>
            </li>
            <li>
              <details className={"group"} name={"meniu"}>
                <summary className={"group-open:bg-brand-cream list-none marker:hidden cursor-pointer flex items-end gap-3 rounded-[10px] px-1 py-4 text-brand-ink no-underline transition-colors hover:bg-brand-cream hover:text-brand-ink focus-visible:outline-2 focus-visible:outline-brand-tomato focus-visible:outline-offset-2 max-[640px]:flex-wrap"}>
                  <span className={"flex min-w-0 flex-[0_1_auto] flex-col gap-[3px]"}>
                    <span className={"flex flex-wrap items-center gap-2 font-[Unbounded,sans-serif] text-[17px] font-bold"}>
                      {copy.sections.service_menu.na_tiktok_start}
                    </span>
                    <span className={"text-[15px] text-brand-ink-soft"}>
                      {
                        copy.sections.service_menu
                          .contul_pornit_cum_trebuie_apoi_predat_ec
                      }
                    </span>
                    <span className={"text-[13px] text-brand-muted"}>
                      {
                        copy.sections.service_menu
                          .contine_setarea_contului_directia_creati
                      }
                    </span>
                  </span>
                  <span className={"min-w-6 flex-[1_1_40px] mb-1.5 [border-bottom:2px_dotted_var(--brand-sand-border)] max-[640px]:hidden"} aria-hidden={"true"}></span>
                  <span className={"flex-none whitespace-nowrap mb-px text-sm font-semibold max-[640px]:w-full max-[640px]:text-brand-muted max-[640px]:font-medium"}>
                    {copy.sections.service_menu.o_singura_data}
                  </span>
                  <svg
                    className={"mb-0.5 flex-none transition-transform motion-reduce:transition-none transition-transform motion-reduce:transition-none group-open:rotate-180"}
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
                <div className={"flex flex-col gap-3 px-1 pt-1.5 pb-[22px]"}>
                  <p className={"m-0 max-w-[640px] text-base text-brand-ink-soft"}>
                    {
                      copy.sections.service_menu
                        .iti_pornim_contul_de_tiktok_cum_trebuie
                    }
                  </p>
                  <div className={"flex flex-wrap gap-6 [&>div]:flex [&>div]:min-w-0 [&>div]:flex-[1_1_260px] [&>div]:flex-col [&>div]:gap-2"}>
                    <div>
                      <strong className={"text-xs uppercase tracking-[1px] text-brand-muted"}>
                        {copy.sections.service_menu.ce_primesti}
                      </strong>
                      <ul className={"m-0 flex list-disc flex-col gap-1.5 pl-[18px] text-[15px] text-brand-text [&_strong]:text-brand-ink"}>
                        <li>
                          <strong>
                            {copy.sections.service_menu.contul_setat}
                          </strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .profil_bio_link_si_primele_postari_fixat
                            }
                          </span>
                        </li>
                        <li>
                          <strong>
                            {copy.sections.service_menu.directia_creativa}
                          </strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .ce_formate_faci_cum_suni_si_ce_te_face_r
                            }
                          </span>
                        </li>
                        <li>
                          <strong>
                            {copy.sections.service_menu.primele_8_clipuri}
                          </strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .le_gandim_le_filmam_si_le_montam_noi
                            }
                          </span>
                        </li>
                        <li>
                          <strong>
                            {copy.sections.service_menu.playbook_ul}
                          </strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .un_ghid_pentru_echipa_ta_formate_ton_pas
                            }
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <strong className={"text-xs uppercase tracking-[1px] text-brand-muted"}>
                        {copy.sections.service_menu.pentru_cine_e}
                      </strong>
                      <ul className={"m-0 flex list-disc flex-col gap-1.5 pl-[18px] text-[15px] text-brand-text"}>
                        <li>
                          {
                            copy.sections.service_menu
                              .brandurile_care_vor_sa_fie_pe_tiktok_dar
                          }
                        </li>
                        <li>
                          {
                            copy.sections.service_menu
                              .echipele_care_vor_sa_faca_singure_contin
                          }
                        </li>
                        <li>
                          {
                            copy.sections.service_menu
                              .afacerile_locale_care_vor_sa_ajunga_la_o
                          }
                        </li>
                      </ul>
                      <p className={"mt-1 mb-0 text-sm text-brand-text"}>
                        <strong>
                          {copy.sections.service_menu.cine_lucreaza}
                        </strong>
                        {
                          copy.sections.service_menu
                            .lavinia_si_bianca_inclusiv_filmarea_si_m
                        }
                      </p>
                    </div>
                  </div>
                  <strong className={"text-xs uppercase tracking-[1px] text-brand-muted"}>
                    {copy.sections.service_menu.cum_decurge}
                  </strong>
                  <ol className={"m-0 flex list-none flex-wrap gap-2 p-0 [&>li]:inline-flex [&>li]:items-center [&>li]:gap-2 [&>li]:rounded-full [&>li]:bg-brand-cream-muted [&>li]:py-1.5 [&>li]:pr-[14px] [&>li]:pl-1.5 [&>li]:text-sm [&>li]:font-semibold"}>
                    <li>
                      <span className={"flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-ink text-xs text-brand-cream"}>
                        {copy.sections.service_menu.number_1}
                      </span>
                      {copy.sections.service_menu.prima_discutie}
                    </li>
                    <li>
                      <span className={"flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-ink text-xs text-brand-cream"}>
                        {copy.sections.service_menu.number_2}
                      </span>
                      {copy.sections.service_menu.directia}
                    </li>
                    <li>
                      <span className={"flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-ink text-xs text-brand-cream"}>
                        {copy.sections.service_menu.number_3}
                      </span>
                      {copy.sections.service_menu.filmam}
                    </li>
                    <li>
                      <span className={"flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-ink text-xs text-brand-cream"}>
                        {copy.sections.service_menu.number_4}
                      </span>
                      {copy.sections.service_menu.predam}
                    </li>
                  </ol>
                  <div className={"flex flex-wrap items-center gap-[18px]"}>
                    <a className={"inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border-0 px-6 [font:inherit] font-bold no-underline bg-brand-ink text-brand-cream hover:bg-brand-ink-hover hover:text-brand-cream min-h-11 px-[18px]"} href={localizedHref("/contact", locale)}>
                      {copy.sections.service_menu.hai_sa_vorbim}
                    </a>
                    <a className={"mt-auto inline-block py-2 text-[15px] font-semibold md-more"} href={localizedHref("/tiktok-start", locale)}>
                      {copy.sections.service_menu.vezi_pagina_completa}
                    </a>
                  </div>
                </div>
              </details>
            </li>
            <li>
              <details className={"group"} name={"meniu"}>
                <summary className={"group-open:bg-brand-cream list-none marker:hidden cursor-pointer flex items-end gap-3 rounded-[10px] px-1 py-4 text-brand-ink no-underline transition-colors hover:bg-brand-cream hover:text-brand-ink focus-visible:outline-2 focus-visible:outline-brand-tomato focus-visible:outline-offset-2 max-[640px]:flex-wrap"}>
                  <span className={"flex min-w-0 flex-[0_1_auto] flex-col gap-[3px]"}>
                    <span className={"flex flex-wrap items-center gap-2 font-[Unbounded,sans-serif] text-[17px] font-bold"}>
                      {copy.sections.service_menu.na_email_marketing}
                    </span>
                    <span className={"text-[15px] text-brand-ink-soft"}>
                      {
                        copy.sections.service_menu
                          .lista_ta_de_emailuri_pusa_la_treaba
                      }
                    </span>
                    <span className={"text-[13px] text-brand-muted"}>
                      {
                        copy.sections.service_menu
                          .contine_strategie_emailuri_automate_camp
                      }
                    </span>
                  </span>
                  <span className={"min-w-6 flex-[1_1_40px] mb-1.5 [border-bottom:2px_dotted_var(--brand-sand-border)] max-[640px]:hidden"} aria-hidden={"true"}></span>
                  <span className={"flex-none whitespace-nowrap mb-px text-sm font-semibold max-[640px]:w-full max-[640px]:text-brand-muted max-[640px]:font-medium"}>
                    {copy.sections.service_menu.lunar}
                  </span>
                  <svg
                    className={"mb-0.5 flex-none transition-transform motion-reduce:transition-none transition-transform motion-reduce:transition-none group-open:rotate-180"}
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
                <div className={"flex flex-col gap-3 px-1 pt-1.5 pb-[22px]"}>
                  <p className={"m-0 max-w-[640px] text-base text-brand-ink-soft"}>
                    {
                      copy.sections.service_menu
                        .emailul_e_cea_mai_directa_conversatie_cu
                    }
                  </p>
                  <div className={"flex flex-wrap gap-6 [&>div]:flex [&>div]:min-w-0 [&>div]:flex-[1_1_260px] [&>div]:flex-col [&>div]:gap-2"}>
                    <div>
                      <strong className={"text-xs uppercase tracking-[1px] text-brand-muted"}>
                        {copy.sections.service_menu.ce_primesti}
                      </strong>
                      <ul className={"m-0 flex list-disc flex-col gap-1.5 pl-[18px] text-[15px] text-brand-text [&_strong]:text-brand-ink"}>
                        <li>
                          <strong>
                            {copy.sections.service_menu.strategia}
                          </strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .stabilim_cui_ii_scrii_ce_primeste_din_fi
                            }
                          </span>
                        </li>
                        <li>
                          <strong>
                            {copy.sections.service_menu.emailurile_automate}
                          </strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .bun_venit_dupa_prima_comanda_revenire_du
                            }
                          </span>
                        </li>
                        <li>
                          <strong>
                            {copy.sections.service_menu.lansarile_si_momentele}
                          </strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .produse_noi_oferte_aniversari_sarbatori
                            }
                          </span>
                        </li>
                        <li>
                          <strong>
                            {copy.sections.service_menu.cresterea_listei}
                          </strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .formulare_motive_bune_de_abonare_si_drum
                            }
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <strong className={"text-xs uppercase tracking-[1px] text-brand-muted"}>
                        {copy.sections.service_menu.pentru_cine_e}
                      </strong>
                      <ul className={"m-0 flex list-disc flex-col gap-1.5 pl-[18px] text-[15px] text-brand-text"}>
                        <li>
                          {
                            copy.sections.service_menu
                              .brandurile_care_au_deja_clienti_si_vor_s
                          }
                        </li>
                        <li>
                          {
                            copy.sections.service_menu
                              .magazinele_online_care_vor_vanzari_si_di
                          }
                        </li>
                        <li>
                          {
                            copy.sections.service_menu
                              .cei_care_vor_un_canal_care_nu_depinde_de
                          }
                        </li>
                        <li>
                          {
                            copy.sections.service_menu
                              .clientii_na_social_media_lunar_care_vor
                          }
                        </li>
                      </ul>
                    </div>
                  </div>
                  <strong className={"text-xs uppercase tracking-[1px] text-brand-muted"}>
                    {copy.sections.service_menu.cum_decurge}
                  </strong>
                  <ol className={"m-0 flex list-none flex-wrap gap-2 p-0 [&>li]:inline-flex [&>li]:items-center [&>li]:gap-2 [&>li]:rounded-full [&>li]:bg-brand-cream-muted [&>li]:py-1.5 [&>li]:pr-[14px] [&>li]:pl-1.5 [&>li]:text-sm [&>li]:font-semibold"}>
                    <li>
                      <span className={"flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-ink text-xs text-brand-cream"}>
                        {copy.sections.service_menu.number_1}
                      </span>
                      {copy.sections.service_menu.ne_uitam_la_ce_nevoi_ai}
                    </li>
                    <li>
                      <span className={"flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-ink text-xs text-brand-cream"}>
                        {copy.sections.service_menu.number_2}
                      </span>
                      {copy.sections.service_menu.facem_planul}
                    </li>
                    <li>
                      <span className={"flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-ink text-xs text-brand-cream"}>
                        {copy.sections.service_menu.number_3}
                      </span>
                      {copy.sections.service_menu.scriem_si_aprobam}
                    </li>
                    <li>
                      <span className={"flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-ink text-xs text-brand-cream"}>
                        {copy.sections.service_menu.number_4}
                      </span>
                      {copy.sections.service_menu.trimitem_si_masuram}
                    </li>
                  </ol>
                  <div className={"flex flex-wrap items-center gap-[18px]"}>
                    <a className={"inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border-0 px-6 [font:inherit] font-bold no-underline bg-brand-ink text-brand-cream hover:bg-brand-ink-hover hover:text-brand-cream min-h-11 px-[18px]"} href={localizedHref("/contact", locale)}>
                      {copy.sections.service_menu.hai_sa_vorbim}
                    </a>
                    <a
                      className={"mt-auto inline-block py-2 text-[15px] font-semibold md-more"}
                      href={localizedHref("/email-marketing", locale)}
                    >
                      {copy.sections.service_menu.vezi_pagina_completa}
                    </a>
                  </div>
                </div>
              </details>
            </li>
            <li>
              <details className={"group"} name={"meniu"}>
                <summary className={"group-open:bg-brand-cream list-none marker:hidden cursor-pointer flex items-end gap-3 rounded-[10px] px-1 py-4 text-brand-ink no-underline transition-colors hover:bg-brand-cream hover:text-brand-ink focus-visible:outline-2 focus-visible:outline-brand-tomato focus-visible:outline-offset-2 max-[640px]:flex-wrap"}>
                  <span className={"flex min-w-0 flex-[0_1_auto] flex-col gap-[3px]"}>
                    <span className={"flex flex-wrap items-center gap-2 font-[Unbounded,sans-serif] text-[17px] font-bold"}>
                      {copy.sections.service_menu.na_facut_de_mana}
                    </span>
                    <span className={"text-[15px] text-brand-ink-soft"}>
                      {copy.sections.service_menu.pachete_cu_artistii_nostri}
                    </span>
                    <span className={"text-[13px] text-brand-muted"}>
                      {
                        copy.sections.service_menu
                          .contine_pictura_lut_obiecte_unicat
                      }
                    </span>
                  </span>
                  <span className={"min-w-6 flex-[1_1_40px] mb-1.5 [border-bottom:2px_dotted_var(--brand-sand-border)] max-[640px]:hidden"} aria-hidden={"true"}></span>
                  <span className={"flex-none whitespace-nowrap mb-px text-sm font-semibold max-[640px]:w-full max-[640px]:text-brand-muted max-[640px]:font-medium"}>
                    {copy.sections.service_menu.pe_proiect}
                  </span>
                  <svg
                    className={"mb-0.5 flex-none transition-transform motion-reduce:transition-none transition-transform motion-reduce:transition-none group-open:rotate-180"}
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
                <div className={"flex flex-col gap-3 px-1 pt-1.5 pb-[22px]"}>
                  <p className={"m-0 max-w-[640px] text-base text-brand-ink-soft"}>
                    {
                      copy.sections.service_menu
                        .pachete_personalizate_cu_artistii_cu_car
                    }
                  </p>
                  <div className={"flex flex-wrap gap-6 [&>div]:flex [&>div]:min-w-0 [&>div]:flex-[1_1_260px] [&>div]:flex-col [&>div]:gap-2"}>
                    <div>
                      <strong className={"text-xs uppercase tracking-[1px] text-brand-muted"}>
                        {copy.sections.service_menu.ce_primesti}
                      </strong>
                      <ul className={"m-0 flex list-disc flex-col gap-1.5 pl-[18px] text-[15px] text-brand-text [&_strong]:text-brand-ink"}>
                        <li>
                          <strong>
                            {copy.sections.service_menu.ilustratie_sau_pictura}
                          </strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .pentru_o_campanie_un_produs_sau_un_ambal
                            }
                          </span>
                        </li>
                        <li>
                          <strong>
                            {
                              copy.sections.service_menu
                                .figurine_obiecte_si_vase_din_lut
                            }
                          </strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .pentru_continut_sau_pentru_spatiul_tau
                            }
                          </span>
                        </li>
                        <li>
                          <strong>
                            {
                              copy.sections.service_menu
                                .o_lucrare_pentru_un_moment
                            }
                          </strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .o_lansare_sau_un_eveniment_care_merita_c
                            }
                          </span>
                        </li>
                        <li>
                          <strong>
                            {copy.sections.service_menu.cadouri_unicat}
                          </strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .pentru_clienti_sau_pentru_echipa
                            }
                          </span>
                        </li>
                        <li>
                          <strong>
                            {copy.sections.service_menu.creditare_si_promovare}
                          </strong>{" "}
                          <span>
                            {
                              copy.sections.service_menu
                                .artistii_sunt_creditati_in_fiecare_proie
                            }
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <strong className={"text-xs uppercase tracking-[1px] text-brand-muted"}>
                        {copy.sections.service_menu.pentru_cine_e}
                      </strong>
                      <ul className={"m-0 flex list-disc flex-col gap-1.5 pl-[18px] text-[15px] text-brand-text"}>
                        <li>
                          {
                            copy.sections.service_menu
                              .brandurile_care_vor_ceva_unic_nu_inca_o
                          }
                        </li>
                        <li>
                          {
                            copy.sections.service_menu
                              .lansarile_si_evenimentele_care_au_nevoie
                          }
                        </li>
                        <li>
                          {
                            copy.sections.service_menu
                              .cine_vrea_in_continut_lucruri_care_se_po
                          }
                        </li>
                      </ul>
                      <p className={"mt-1 mb-0 text-sm text-brand-text"}>
                        <strong>
                          {copy.sections.service_menu.cine_lucreaza}
                        </strong>
                        {
                          copy.sections.service_menu
                            .lavinia_si_bianca_coordoneaza_artistii_n
                        }
                      </p>
                    </div>
                  </div>
                  <strong className={"text-xs uppercase tracking-[1px] text-brand-muted"}>
                    {copy.sections.service_menu.cum_decurge}
                  </strong>
                  <ol className={"m-0 flex list-none flex-wrap gap-2 p-0 [&>li]:inline-flex [&>li]:items-center [&>li]:gap-2 [&>li]:rounded-full [&>li]:bg-brand-cream-muted [&>li]:py-1.5 [&>li]:pr-[14px] [&>li]:pl-1.5 [&>li]:text-sm [&>li]:font-semibold"}>
                    <li>
                      <span className={"flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-ink text-xs text-brand-cream"}>
                        {copy.sections.service_menu.number_1}
                      </span>
                      {copy.sections.service_menu.prima_discutie}
                    </li>
                    <li>
                      <span className={"flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-ink text-xs text-brand-cream"}>
                        {copy.sections.service_menu.number_2}
                      </span>
                      {copy.sections.service_menu.alegem_artistul}
                    </li>
                    <li>
                      <span className={"flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-ink text-xs text-brand-cream"}>
                        {copy.sections.service_menu.number_3}
                      </span>
                      {copy.sections.service_menu.schite}
                    </li>
                    <li>
                      <span className={"flex h-[22px] w-[22px] items-center justify-center rounded-full bg-brand-ink text-xs text-brand-cream"}>
                        {copy.sections.service_menu.number_4}
                      </span>
                      {copy.sections.service_menu.lucrarea}
                    </li>
                  </ol>
                  <div className={"flex flex-wrap items-center gap-[18px]"}>
                    <a className={"inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border-0 px-6 [font:inherit] font-bold no-underline bg-brand-ink text-brand-cream hover:bg-brand-ink-hover hover:text-brand-cream min-h-11 px-[18px]"} href={localizedHref("/contact", locale)}>
                      {copy.sections.service_menu.hai_sa_vorbim}
                    </a>
                    <a className={"mt-auto inline-block py-2 text-[15px] font-semibold md-more"} href={localizedHref("/facut-de-mana", locale)}>
                      {copy.sections.service_menu.vezi_pagina_completa}
                    </a>
                  </div>
                </div>
              </details>
            </li>
            <li>
              <div className={"flex items-end gap-3 rounded-[10px] px-1 py-4 text-brand-ink no-underline opacity-60 transition-colors hover:bg-brand-cream hover:text-brand-ink max-[640px]:flex-wrap"}>
                <span className={"flex min-w-0 flex-[0_1_auto] flex-col gap-[3px]"}>
                  <span className={"flex flex-wrap items-center gap-2 font-[Unbounded,sans-serif] text-[17px] font-bold"}>
                    {copy.sections.service_menu.na_invata}
                    <span aria-hidden={"true"}>
                      {copy.sections.service_menu.text}
                    </span>
                  </span>
                  <span className={"text-[15px] text-brand-ink-soft"}>
                    {copy.sections.service_menu.cursuri_vin_cand_ni_le_ceri}
                  </span>
                </span>
                <span className={"min-w-6 flex-[1_1_40px] mb-1.5 [border-bottom:2px_dotted_var(--brand-sand-border)] max-[640px]:hidden"} aria-hidden={"true"}></span>
                <span className={"flex-none whitespace-nowrap mb-px text-sm font-semibold max-[640px]:w-full max-[640px]:text-brand-muted max-[640px]:font-medium"}>
                  {copy.sections.service_menu.in_curand}
                </span>
              </div>
            </li>
          </ul>
          {"\n"}
          <p className={"mt-4 text-sm text-brand-muted"}>
            {copy.sections.service_menu.despre_pret_cinstit_depinde_de_ce_alegi}
          </p>
          {"\n"}
        </div>
        {"\n"}
      </section>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"} id={"s-cum-lucram"}>
        {"\n"}
        <div className={"mb-6 flex max-w-[760px] flex-col gap-2"}>
          <h2 className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1]"}>{copy.sections.cum_lucram.cum_lucram}</h2>
        </div>
        {"\n"}
        <ol className={"m-0 flex list-none flex-wrap gap-4 p-0 [&>li]:flex [&>li]:flex-[1_1_200px] [&>li]:flex-col [&>li]:gap-1.5 [&>li]:rounded-2xl [&>li]:border [&>li]:border-brand-border [&>li]:bg-brand-white [&>li]:px-5 [&>li]:py-[18px] [&>li>span:last-child]:text-[15px] [&>li>span:last-child]:text-brand-text [&_strong]:text-base"}>
          <li>
            <span className={"mb-1 flex h-[30px] w-[30px] items-center justify-center rounded-full text-sm font-bold bg-brand-mustard"}>
              {copy.sections.cum_lucram.number_1}
            </span>
            <strong>{copy.sections.cum_lucram.prima_discutie}</strong>
            <span>
              {
                copy.sections.cum_lucram
                  .ne_spui_unde_esti_si_unde_vrei_sa_ajungi
              }
            </span>
          </li>
          <li>
            <span className={"mb-1 flex h-[30px] w-[30px] items-center justify-center rounded-full text-sm font-bold bg-brand-sky"}>
              {copy.sections.cum_lucram.number_2}
            </span>
            <strong>{copy.sections.cum_lucram.oferta}</strong>
            <span>
              {copy.sections.cum_lucram.iti_propunem_ce_are_sens_pentru_tine_cu}
            </span>
          </li>
          <li>
            <span className={"mb-1 flex h-[30px] w-[30px] items-center justify-center rounded-full text-sm font-bold bg-brand-purple"}>
              {copy.sections.cum_lucram.number_3}
            </span>
            <strong>{copy.sections.cum_lucram.lucram}</strong>
            <span>
              {
                copy.sections.cum_lucram
                  .filmam_scriem_sau_construim_in_functie_d
              }
            </span>
          </li>
          <li>
            <span className={"mb-1 flex h-[30px] w-[30px] items-center justify-center rounded-full text-sm font-bold bg-brand-tomato"}>
              {copy.sections.cum_lucram.number_4}
            </span>
            <strong>{copy.sections.cum_lucram.rezultatele}</strong>
            <span>
              {
                copy.sections.cum_lucram
                  .masuram_si_iti_spunem_pe_scurt_ce_a_mers
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
