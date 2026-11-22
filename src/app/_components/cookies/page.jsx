import defaultCopy from "./copy.json";
import localizedHref from "../localizedHref";
export default function CookiesPage({ copy = defaultCopy, locale = "ro" }) {
  return (
    <div className={"view"}>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] flex flex-col items-center gap-3 pt-10 pb-9 text-center"}>
        {"\n"}
        <nav className={"flex flex-wrap items-center gap-2 text-sm leading-5 text-brand-muted [&>*]:inline-flex [&>*]:min-h-5 [&>*]:items-center [&>*]:leading-5 [&_a]:text-brand-muted"} aria-label={copy.hero.unde_esti}>
          <a href={localizedHref("/", locale)}>{copy.hero.na_digital}</a>{" "}
          <span aria-hidden={"true"}>{copy.hero.separator}</span>{" "}
          <span>{copy.hero.cookies}</span>
        </nav>
        {"\n\n"}
        <h1 className={"m-0 [font-family:Unbounded,_sans-serif] font-extrabold text-[clamp(30px,3.6vw,44px)] leading-[1.05] tracking-[-0.5px] max-[360px]:text-[26px]"}>{copy.hero.politica_de_cookies}</h1>
        {"\n"}
        <p className={"m-0 text-brand-muted max-w-[720px] text-[18px] text-brand-text"}>
          {copy.hero.folosim_doar_ce_e_necesar_iar_pentru_res}
        </p>
        {"\n\n"}
      </section>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px] legal [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:font-[Unbounded,sans-serif] [&_h2]:text-2xl [&_p]:max-w-[760px] [&_p]:text-brand-ink-soft [&_li]:max-w-[760px] [&_li]:text-brand-ink-soft [&_table]:w-full [&_table]:border-collapse [&_table]:bg-brand-white [&_table]:text-[15px] [&_th]:border [&_th]:border-brand-border [&_th]:bg-brand-cream-muted [&_th]:px-3 [&_th]:py-2.5 [&_th]:text-left [&_th]:align-top [&_td]:border [&_td]:border-brand-border [&_td]:px-3 [&_td]:py-2.5 [&_td]:text-left [&_td]:align-top"}>
        {"\n"}
        <span className={"flex self-start rounded-lg bg-brand-yellow px-3 py-1.5 text-[13px] font-bold"}>
          {
            copy.sections.ce_sunt_cookies
              .draft_de_verificat_juridic_inainte_de_pu
          }
        </span>
        {"\n"}
        <p>
          {
            copy.sections.ce_sunt_cookies
              .aici_afli_ce_cookies_foloseste_site_ul_n
          }
        </p>
        {"\n\n"}
        <h2>{copy.sections.ce_sunt_cookies.ce_sunt_cookies}</h2>
        {"\n"}
        <p>
          {
            copy.sections.ce_sunt_cookies
              .cookies_sunt_fisiere_mici_pe_care_un_sit
          }
        </p>
        {"\n\n"}
        <h2>{copy.sections.ce_sunt_cookies.ce_cookies_folosim}</h2>
        {"\n"}
        <div className={"overflow-x-auto rounded-[20px] border border-brand-border tbl"}>
          <table>
            {"\n"}
            <thead>
              <tr>
                <th>{copy.sections.ce_sunt_cookies.categoria}</th>
                <th>{copy.sections.ce_sunt_cookies.la_ce_foloseste}</th>
                <th>{copy.sections.ce_sunt_cookies.exemple}</th>
                <th>{copy.sections.ce_sunt_cookies.cat_ramane}</th>
                <th>{copy.sections.ce_sunt_cookies.iti_cerem_acordul}</th>
              </tr>
            </thead>
            {"\n"}
            <tbody>
              {"\n"}
              <tr>
                <td data-label={"Categoria"}>
                  {copy.sections.ce_sunt_cookies.strict_necesare}
                </td>
                <td data-label={"La ce folosește"}>
                  {
                    copy.sections.ce_sunt_cookies
                      .ca_site_ul_sa_functioneze_si_sa_ti_tina
                  }
                </td>
                <td data-label={"Exemple"}>
                  {copy.sections.ce_sunt_cookies.cookie_ul_de_consimtamant}
                </td>
                <td data-label={"Cât rămâne"}>
                  {copy.sections.ce_sunt_cookies.durata}
                </td>
                <td data-label={"Îți cerem acordul?"}>
                  {copy.sections.ce_sunt_cookies.nu_fara_ele_site_ul_nu_merge}
                </td>
              </tr>
              {"\n"}
              <tr>
                <td data-label={"Categoria"}>
                  {copy.sections.ce_sunt_cookies.analiza}
                </td>
                <td data-label={"La ce folosește"}>
                  {
                    copy.sections.ce_sunt_cookies
                      .sa_vedem_cati_oameni_vin_si_ce_pagini_ci
                  }
                </td>
                <td data-label={"Exemple"}>
                  {
                    copy.sections.ce_sunt_cookies
                      .instrumentul_de_analiza_daca_folositi
                  }
                </td>
                <td data-label={"Cât rămâne"}>
                  {copy.sections.ce_sunt_cookies.durata}
                </td>
                <td data-label={"Îți cerem acordul?"}>
                  {copy.sections.ce_sunt_cookies.da}
                </td>
              </tr>
              {"\n"}
              <tr>
                <td data-label={"Categoria"}>
                  {copy.sections.ce_sunt_cookies.continut_din_retele_sociale}
                </td>
                <td data-label={"La ce folosește"}>
                  {
                    copy.sections.ce_sunt_cookies
                      .afisarea_postarilor_de_instagram_si_tikt
                  }
                </td>
                <td data-label={"Exemple"}>
                  {copy.sections.ce_sunt_cookies.cookies_puse_de_meta_si_tiktok}
                </td>
                <td data-label={"Cât rămâne"}>
                  {copy.sections.ce_sunt_cookies.stabilita_de_fiecare_platforma}
                </td>
                <td data-label={"Îți cerem acordul?"}>
                  {copy.sections.ce_sunt_cookies.da}
                </td>
              </tr>
              {"\n"}
            </tbody>
          </table>
        </div>
        {"\n"}
        <p>
          {
            copy.sections.ce_sunt_cookies
              .completati_tabelul_dupa_ce_alegeti_platf
          }
        </p>
        {"\n\n"}
        <h2>
          {copy.sections.ce_sunt_cookies.cum_iti_dai_sau_iti_retragi_acordul}
        </h2>
        {"\n"}
        <p>
          {
            copy.sections.ce_sunt_cookies
              .la_prima_vizita_iti_aratam_un_banner_in
          }
        </p>
        {"\n"}
        <p>
          {
            copy.sections.ce_sunt_cookies
              .poti_sterge_sau_bloca_cookies_si_din_set
          }
        </p>
        {"\n\n"}
        <h2>{copy.sections.ce_sunt_cookies.cookies_puse_de_altii}</h2>
        {"\n"}
        <p>
          {
            copy.sections.ce_sunt_cookies
              .cand_vezi_in_pagina_o_postare_de_instagr
          }
        </p>
        {"\n\n"}
        <h2>{copy.sections.ce_sunt_cookies.intrebari}</h2>
        {"\n"}
        <p>
          {
            copy.sections.ce_sunt_cookies
              .ne_scrii_la_email_ce_facem_cu_datele_tal
          }
          <a href={localizedHref("/confidentialitate", locale)}>
            {copy.sections.ce_sunt_cookies.politica_de_confidentialitate}
          </a>
          {copy.sections.ce_sunt_cookies.period}
        </p>
        {"\n"}
      </section>
      {"\n\n"}
    </div>
  );
}
