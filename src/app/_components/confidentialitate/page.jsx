import defaultCopy from "./copy.json";
import localizedHref from "../localizedHref";
export default function ConfidentialitatePage({ copy = defaultCopy, locale = "ro" }) {
  return (
    <div className={"view"}>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] flex flex-col items-center gap-3 pt-10 pb-9 text-center"}>
        {"\n"}
        <nav className={"flex flex-wrap items-center gap-2 text-sm leading-5 text-brand-muted [&>*]:inline-flex [&>*]:min-h-5 [&>*]:items-center [&>*]:leading-5 [&_a]:text-brand-muted"} aria-label={copy.hero.unde_esti}>
          <a href={localizedHref("/", locale)}>{copy.hero.na_digital}</a>{" "}
          <span aria-hidden={"true"}>{copy.hero.separator}</span>{" "}
          <span>{copy.hero.confidentialitate}</span>
        </nav>
        {"\n\n"}
        <h1 className={"m-0 [font-family:Unbounded,_sans-serif] font-extrabold text-[clamp(30px,3.6vw,44px)] leading-[1.05] tracking-[-0.5px] max-[360px]:text-[26px]"}>{copy.hero.politica_de_confidentialitate}</h1>
        {"\n"}
        <p className={"m-0 text-brand-muted max-w-[720px] text-[18px] text-brand-text"}>
          {copy.hero.pe_scurt_colectam_doar_ce_ne_dai_nu_vind}
        </p>
        {"\n\n"}
      </section>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px] legal [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:font-[Unbounded,sans-serif] [&_h2]:text-2xl [&_p]:max-w-[760px] [&_p]:text-brand-ink-soft [&_li]:max-w-[760px] [&_li]:text-brand-ink-soft [&_table]:w-full [&_table]:border-collapse [&_table]:bg-brand-white [&_table]:text-[15px] [&_th]:border [&_th]:border-brand-border [&_th]:bg-brand-cream-muted [&_th]:px-3 [&_th]:py-2.5 [&_th]:text-left [&_th]:align-top [&_td]:border [&_td]:border-brand-border [&_td]:px-3 [&_td]:py-2.5 [&_td]:text-left [&_td]:align-top"}>
        {"\n"}
        <span className={"flex self-start rounded-lg bg-brand-yellow px-3 py-1.5 text-[13px] font-bold"}>
          {
            copy.sections.cine_are_grija_de_datele_tale
              .draft_de_verificat_juridic_inainte_de_pu
          }
        </span>
        {"\n"}
        <p>
          {
            copy.sections.cine_are_grija_de_datele_tale
              .aici_afli_ce_date_ne_lasi_cand_folosesti
          }
        </p>
        {"\n\n"}
        <h2>
          {
            copy.sections.cine_are_grija_de_datele_tale
              .cine_are_grija_de_datele_tale
          }
        </h2>
        {"\n"}
        <p>
          {
            copy.sections.cine_are_grija_de_datele_tale
              .operatorul_datelor_este_numele_pfa_cui_c
          }
        </p>
        {"\n\n"}
        <h2>
          {
            copy.sections.cine_are_grija_de_datele_tale
              .ce_date_colectam_de_ce_si_cat_le_pastram
          }
        </h2>
        {"\n"}
        <p>
          {
            copy.sections.cine_are_grija_de_datele_tale
              .colectam_doar_ce_ne_dai_tu_in_situatiile
          }
        </p>
        {"\n"}
        <div className={"overflow-x-auto rounded-[20px] border border-brand-border tbl"}>
          <table>
            {"\n"}
            <thead>
              <tr>
                <th>{copy.sections.cine_are_grija_de_datele_tale.cand}</th>
                <th>{copy.sections.cine_are_grija_de_datele_tale.ce_date}</th>
                <th>{copy.sections.cine_are_grija_de_datele_tale.de_ce}</th>
                <th>
                  {copy.sections.cine_are_grija_de_datele_tale.temeiul_legal}
                </th>
                <th>
                  {copy.sections.cine_are_grija_de_datele_tale.cat_le_pastram}
                </th>
              </tr>
            </thead>
            {"\n"}
            <tbody>
              {"\n"}
              <tr>
                <td data-label={"Când"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .ne_scrii_prin_formular_sau_pe_email
                  }
                </td>
                <td data-label={"Ce date"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .nume_email_firma_optional_serviciul_ales
                  }
                </td>
                <td data-label={"De ce"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .sa_ti_raspundem_si_sa_ti_facem_o_oferta
                  }
                </td>
                <td data-label={"Temeiul legal"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .pasi_inainte_de_un_contract_la_cererea_t
                  }
                </td>
                <td data-label={"Cât le păstrăm"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .number_12_luni_de_la_ultima_discutie_daca_nu_lu
                  }
                </td>
              </tr>
              {"\n"}
              <tr>
                <td data-label={"Când"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .iti_programezi_o_discutie_prin_instrumen
                  }
                </td>
                <td data-label={"Ce date"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .nume_email_data_si_ora_alese
                  }
                </td>
                <td data-label={"De ce"}>
                  {copy.sections.cine_are_grija_de_datele_tale.sa_ne_vedem}
                </td>
                <td data-label={"Temeiul legal"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .pasi_inainte_de_un_contract_lit_b
                  }
                </td>
                <td data-label={"Cât le păstrăm"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .number_12_luni_de_la_intalnire
                  }
                </td>
              </tr>
              {"\n"}
              <tr>
                <td data-label={"Când"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .ceri_lista_gratuita
                  }
                </td>
                <td data-label={"Ce date"}>
                  {copy.sections.cine_are_grija_de_datele_tale.email}
                </td>
                <td data-label={"De ce"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .sa_ti_trimitem_lista
                  }
                </td>
                <td data-label={"Temeiul legal"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .consimtamantul_tau_lit_a
                  }
                </td>
                <td data-label={"Cât le păstrăm"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .number_30_de_zile_daca_nu_te_ai_abonat_si_la_ne
                  }
                </td>
              </tr>
              {"\n"}
              <tr>
                <td data-label={"Când"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .bifezi_newsletterul
                  }
                </td>
                <td data-label={"Ce date"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .email_deschideri_si_clicuri
                  }
                </td>
                <td data-label={"De ce"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .sa_ti_trimitem_newsletterul_si_sa_vedem
                  }
                </td>
                <td data-label={"Temeiul legal"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .consimtamantul_tau_lit_a
                  }
                </td>
                <td data-label={"Cât le păstrăm"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .pana_te_dezabonezi
                  }
                </td>
              </tr>
              {"\n"}
              <tr>
                <td data-label={"Când"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .ne_scrii_pe_instagram_tiktok_sau_alta_re
                  }
                </td>
                <td data-label={"Ce date"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .numele_contului_mesajul
                  }
                </td>
                <td data-label={"De ce"}>
                  {copy.sections.cine_are_grija_de_datele_tale.sa_ti_raspundem}
                </td>
                <td data-label={"Temeiul legal"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .interesul_nostru_legitim_de_a_raspunde_l
                  }
                </td>
                <td data-label={"Cât le păstrăm"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .number_12_luni_de_la_ultima_discutie
                  }
                </td>
              </tr>
              {"\n"}
              <tr>
                <td data-label={"Când"}>
                  {copy.sections.cine_are_grija_de_datele_tale.devii_client}
                </td>
                <td data-label={"Ce date"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .date_de_contact_contractul_facturile
                  }
                </td>
                <td data-label={"De ce"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .sa_lucram_impreuna_si_sa_tinem_contabili
                  }
                </td>
                <td data-label={"Temeiul legal"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .contractul_lit_b_si_obligatii_legale_lit
                  }
                </td>
                <td data-label={"Cât le păstrăm"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .cat_dureaza_contractul_iar_documentele_c
                  }
                </td>
              </tr>
              {"\n"}
            </tbody>
          </table>
        </div>
        {"\n\n"}
        <h2>
          {
            copy.sections.cine_are_grija_de_datele_tale
              .ce_nu_facem_cu_datele_tale
          }
        </h2>
        {"\n"}
        <ul>
          {"\n"}
          <li>
            {
              copy.sections.cine_are_grija_de_datele_tale
                .nu_le_vindem_nu_le_inchiriem_si_nu_le_da
            }
          </li>
          {"\n"}
          <li>
            {
              copy.sections.cine_are_grija_de_datele_tale
                .nu_luam_decizii_automate_despre_tine_si
            }
          </li>
          {"\n"}
          <li>
            {
              copy.sections.cine_are_grija_de_datele_tale
                .nu_te_abonam_la_newsletter_daca_nu_ai_bi
            }
          </li>
          {"\n"}
        </ul>
        {"\n\n"}
        <h2>
          {copy.sections.cine_are_grija_de_datele_tale.cat_timp_le_pastram}
        </h2>
        {"\n"}
        <p>
          {
            copy.sections.cine_are_grija_de_datele_tale
              .pastram_datele_doar_cat_e_nevoie_pentru
          }
        </p>
        {"\n\n"}
        <h2>
          {copy.sections.cine_are_grija_de_datele_tale.cine_mai_vede_datele}
        </h2>
        {"\n"}
        <p>
          {
            copy.sections.cine_are_grija_de_datele_tale
              .lucram_cu_cativa_furnizori_care_ne_ajuta
          }
        </p>
        {"\n"}
        <div className={"overflow-x-auto rounded-[20px] border border-brand-border tbl"}>
          <table>
            {"\n"}
            <thead>
              <tr>
                <th>{copy.sections.cine_are_grija_de_datele_tale.furnizor}</th>
                <th>{copy.sections.cine_are_grija_de_datele_tale.pentru_ce}</th>
              </tr>
            </thead>
            {"\n"}
            <tbody>
              {"\n"}
              <tr>
                <td data-label={"Furnizor"}>
                  {copy.sections.cine_are_grija_de_datele_tale.furnizor_hosting}
                </td>
                <td data-label={"Pentru ce"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .gazduirea_site_ului
                  }
                </td>
              </tr>
              {"\n"}
              <tr>
                <td data-label={"Furnizor"}>
                  {copy.sections.cine_are_grija_de_datele_tale.furnizor_email}
                </td>
                <td data-label={"Pentru ce"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .emailul_de_contact
                  }
                </td>
              </tr>
              {"\n"}
              <tr>
                <td data-label={"Furnizor"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .platforma_newsletter
                  }
                </td>
                <td data-label={"Pentru ce"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .trimiterea_listei_gratuite_si_a_newslett
                  }
                </td>
              </tr>
              {"\n"}
              <tr>
                <td data-label={"Furnizor"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .instrument_programare
                  }
                </td>
                <td data-label={"Pentru ce"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .programarea_intalnirilor
                  }
                </td>
              </tr>
              {"\n"}
              <tr>
                <td data-label={"Furnizor"}>
                  {copy.sections.cine_are_grija_de_datele_tale.contabil}
                </td>
                <td data-label={"Pentru ce"}>
                  {
                    copy.sections.cine_are_grija_de_datele_tale
                      .contabilitatea_doar_pentru_clienti
                  }
                </td>
              </tr>
              {"\n"}
            </tbody>
          </table>
        </div>
        {"\n"}
        <p>
          {
            copy.sections.cine_are_grija_de_datele_tale
              .daca_un_furnizor_stocheaza_datele_in_afa
          }
        </p>
        {"\n"}
        <p>
          {
            copy.sections.cine_are_grija_de_datele_tale
              .pe_paginile_noastre_de_instagram_si_tikt
          }
        </p>
        {"\n\n"}
        <h2>{copy.sections.cine_are_grija_de_datele_tale.cookies}</h2>
        {"\n"}
        <p>
          {
            copy.sections.cine_are_grija_de_datele_tale
              .ce_cookies_folosim_si_cum_iti_dai_acordu
          }
          <a href={localizedHref("/cookies", locale)}>
            {copy.sections.cine_are_grija_de_datele_tale.politica_de_cookies}
          </a>
          {copy.sections.cine_are_grija_de_datele_tale.period}
        </p>
        {"\n\n"}
        <h2>{copy.sections.cine_are_grija_de_datele_tale.drepturile_tale}</h2>
        {"\n"}
        <p>
          {copy.sections.cine_are_grija_de_datele_tale.oricand_ne_poti_cere}
        </p>
        {"\n"}
        <ul>
          {"\n"}
          <li>
            {
              copy.sections.cine_are_grija_de_datele_tale
                .sa_afli_ce_date_avem_despre_tine_si_sa_p
            }
          </li>
          {"\n"}
          <li>
            {
              copy.sections.cine_are_grija_de_datele_tale
                .sa_corectam_datele_gresite
            }
          </li>
          {"\n"}
          <li>{copy.sections.cine_are_grija_de_datele_tale.sa_le_stergem}</li>
          {"\n"}
          <li>
            {
              copy.sections.cine_are_grija_de_datele_tale
                .sa_le_folosim_mai_putin_pana_lamurim_o_p
            }
          </li>
          {"\n"}
          <li>
            {
              copy.sections.cine_are_grija_de_datele_tale
                .sa_ti_le_dam_intr_un_format_pe_care_il_p
            }
          </li>
          {"\n"}
          <li>
            {
              copy.sections.cine_are_grija_de_datele_tale
                .sa_nu_le_mai_folosim_pe_baza_interesului
            }
          </li>
          {"\n"}
          <li>
            {
              copy.sections.cine_are_grija_de_datele_tale
                .sa_iti_retragi_acordul_de_exemplu_pentru
            }
          </li>
          {"\n"}
        </ul>
        {"\n"}
        <p>
          {
            copy.sections.cine_are_grija_de_datele_tale
              .ne_scrii_la_email_si_iti_raspundem_in_ce
          }
        </p>
        {"\n"}
        <p>
          {
            copy.sections.cine_are_grija_de_datele_tale
              .daca_crezi_ca_nu_ne_am_purtat_corect_cu
          }
          <a href={"https://www.dataprotection.ro/"}>
            {copy.sections.cine_are_grija_de_datele_tale.dataprotection_ro}
          </a>
          {copy.sections.cine_are_grija_de_datele_tale.period}
        </p>
        {"\n\n"}
        <h2>
          {
            copy.sections.cine_are_grija_de_datele_tale
              .siguranta_minori_si_schimbari
          }
        </h2>
        {"\n"}
        <p>
          <strong>
            {copy.sections.cine_are_grija_de_datele_tale.siguranta}
          </strong>
          {
            copy.sections.cine_are_grija_de_datele_tale
              .datele_stau_doar_la_furnizorii_de_mai_su
          }
        </p>
        {"\n"}
        <p>
          <strong>{copy.sections.cine_are_grija_de_datele_tale.minori}</strong>
          {
            copy.sections.cine_are_grija_de_datele_tale
              .serviciile_noastre_sunt_pentru_firme_si
          }
        </p>
        {"\n"}
        <p>
          <strong>
            {copy.sections.cine_are_grija_de_datele_tale.schimbari}
          </strong>
          {
            copy.sections.cine_are_grija_de_datele_tale
              .daca_politica_se_schimba_actualizam_data
          }
        </p>
        {"\n"}
      </section>
      {"\n\n"}
    </div>
  );
}
