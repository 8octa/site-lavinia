import defaultCopy from "./copy.json";
import localizedHref from "../localizedHref";
import FeedbackForm from "../FeedbackForm";

export default function GratisPage({ copy = defaultCopy, locale = "ro" }) {
  return (
    <div className={"view"}>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] flex flex-col items-center gap-3 pt-10 pb-9 text-center"}>
        {"\n"}
        <nav className={"flex flex-wrap items-center gap-2 text-sm leading-5 text-brand-muted [&>*]:inline-flex [&>*]:min-h-5 [&>*]:items-center [&>*]:leading-5 [&_a]:text-brand-muted"} aria-label={copy.hero.unde_esti}>
          <a href={localizedHref("/", locale)}>{copy.hero.na_digital}</a>{" "}
          <span aria-hidden={"true"}>{copy.hero.separator}</span>{" "}
          <span>{copy.hero.gratis}</span>
        </nav>
        {"\n\n"}
        <h1 className={"m-0 [font-family:Unbounded,_sans-serif] font-extrabold text-[clamp(30px,3.6vw,44px)] leading-[1.05] tracking-[-0.5px] max-[360px]:text-[26px]"}>{copy.hero.na_ia_de_aici}</h1>
        {"\n"}
        <p className={"m-0 text-brand-muted max-w-[720px] text-[18px] text-brand-text"}>
          {copy.hero.number_40_de_intrebari_in_8_capitole_ca_sa_ti_v}
        </p>
        {"\n\n"}
      </section>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
        <div className={"flex flex-wrap gap-7 rounded-[20px] border border-brand-border bg-brand-white p-[26px] max-[640px]:p-[18px]"}>
          {"\n"}
          <div className={"flex min-w-0 flex-[1_1_380px] flex-col gap-3"}>
            {"\n"}
            <span className={"text-[13px] font-semibold tracking-[0.3px] text-brand-muted"}>
              {copy.sections.lasa_ne_emailul_si_e_a_ta.gratis}
            </span>
            {"\n"}
            <h2 className={"m-0 font-[Unbounded,sans-serif] text-[19px] font-bold leading-[1.3]"}>
              {
                copy.sections.lasa_ne_emailul_si_e_a_ta
                  .lasa_ne_emailul_si_e_a_ta
              }
            </h2>
            {"\n"}
            <p className={"m-0 text-[15px] text-brand-text"}>
              {
                copy.sections.lasa_ne_emailul_si_e_a_ta
                  .verifica_ti_singur_contul_punct_cu_punct
              }
            </p>
            {"\n"}
            <FeedbackForm className={"na-form mt-1.5 flex flex-col gap-2"}>
              {"\n"}
              <label className={"text-sm font-semibold"} htmlFor={"na-lead-email"}>
                {copy.sections.lasa_ne_emailul_si_e_a_ta.emailul_tau}
              </label>
              {"\n"}
              <div className={"flex flex-wrap gap-2 [&_input]:min-w-0 [&_input]:min-h-12 [&_input]:flex-[1_1_220px] [&_input]:box-border [&_input]:rounded-xl [&_input]:border [&_input]:border-brand-border-strong [&_input]:bg-brand-cream [&_input]:px-4 [&_input]:text-brand-ink [&_input]:[font:inherit] [&_input:focus]:outline-2 [&_input:focus]:outline-brand-ink [&_input:focus]:outline-offset-1 [&_button]:flex-none"}>
                {"\n"}
                <input
                  id={"na-lead-email"}
                  type={"email"}
                  placeholder={
                    copy.sections.lasa_ne_emailul_si_e_a_ta.nume_firma_ro
                  }
                  autoComplete={"email"}
                />
                {"\n"}
                <button className={"inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border-0 px-6 [font:inherit] font-bold no-underline bg-brand-ink text-brand-cream hover:bg-brand-ink-hover hover:text-brand-cream"} type={"submit"}>
                  {copy.sections.lasa_ne_emailul_si_e_a_ta.trimite_mi_lista}
                </button>
                {"\n"}
              </div>
              {"\n"}
              <label className={"flex items-start gap-2.5 text-sm text-brand-text [&_input]:mt-0.5 [&_input]:h-[18px] [&_input]:w-[18px] [&_input]:flex-none [&_input]:accent-brand-ink"} htmlFor={"na-lead-nl"}>
                <input id={"na-lead-nl"} type={"checkbox"} />
                {
                  copy.sections.lasa_ne_emailul_si_e_a_ta
                    .vreau_si_newsletterul_na_din_cand_in_can
                }
              </label>
              {"\n"}
              <span className={"text-[13px] text-brand-muted"}>
                {
                  copy.sections.lasa_ne_emailul_si_e_a_ta
                    .folosim_emailul_doar_pentru_ce_ai_bifat
                }
                <a href={localizedHref("/confidentialitate", locale)}>
                  {
                    copy.sections.lasa_ne_emailul_si_e_a_ta
                      .politica_de_confidentialitate
                  }
                </a>
                {copy.sections.lasa_ne_emailul_si_e_a_ta.period}
              </span>
              {"\n"}
            </FeedbackForm>
            {"\n"}
          </div>
          {"\n"}
          <div className={"flex flex-[1_1_240px] items-center justify-center rounded-[14px] bg-brand-cream-muted p-7 max-[640px]:p-5 max-[640px]:hidden"} aria-hidden={"true"}>
            {"\n"}
            <div className={"flex w-[190px] rotate-[2deg] flex-col gap-[11px] rounded-lg bg-brand-white p-[18px] shadow-[0_8px_20px_rgba(30,18,12,0.08)]"}>
              <span className={"font-[Unbounded,sans-serif] text-[15px] font-bold"}>
                {copy.sections.lasa_ne_emailul_si_e_a_ta.lista_gratuita}
              </span>
              <div className={"flex items-center gap-2"}>
                <span className={"h-3 w-3 flex-none rounded-[3px] border-[1.5px] border-brand-ink bg-brand-tomato"}></span>
                <span className={"h-1.5 flex-1 rounded-[3px] bg-brand-border mr-0"}></span>
              </div>
              <div className={"flex items-center gap-2"}>
                <span className={"h-3 w-3 flex-none rounded-[3px] border-[1.5px] border-brand-ink bg-brand-tomato"}></span>
                <span className={"h-1.5 flex-1 rounded-[3px] bg-brand-border mr-[24px]"}></span>
              </div>
              <div className={"flex items-center gap-2"}>
                <span className={"h-3 w-3 flex-none rounded-[3px] border-[1.5px] border-brand-ink"}></span>
                <span className={"h-1.5 flex-1 rounded-[3px] bg-brand-border mr-0"}></span>
              </div>
              <div className={"flex items-center gap-2"}>
                <span className={"h-3 w-3 flex-none rounded-[3px] border-[1.5px] border-brand-ink"}></span>
                <span className={"h-1.5 flex-1 rounded-[3px] bg-brand-border mr-[40px]"}></span>
              </div>
              <div className={"flex items-center gap-2"}>
                <span className={"h-3 w-3 flex-none rounded-[3px] border-[1.5px] border-brand-ink"}></span>
                <span className={"h-1.5 flex-1 rounded-[3px] bg-brand-border mr-[12px]"}></span>
              </div>
            </div>
            {"\n"}
          </div>
          {"\n"}
        </div>
      </section>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
        {"\n"}
        <div className={"mb-6 flex max-w-[760px] flex-col gap-2"}>
          <h2 className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1]"}>{copy.sections.ce_e_in_lista.ce_e_in_lista}</h2>
        </div>
        {"\n"}
        <div className={"flex flex-[1_1_360px] flex-col gap-3 rounded-[18px] border border-brand-border bg-brand-white px-[26px] py-6"}>
          <ol className={"m-0 grid list-none grid-cols-2 gap-x-9 p-0 [&>li]:flex [&>li]:gap-[14px] [&>li]:border-t [&>li]:border-brand-border-soft [&>li]:py-[13px] [&>li:nth-child(-n+2)]:border-t-0 [&>li:nth-child(-n+2)]:pt-0.5 [&>li>span:last-child]:flex [&>li>span:last-child]:flex-col [&>li>span:last-child]:gap-0.5 [&_strong]:text-base [&_span>span]:text-[15px] [&_span>span]:text-brand-text max-[640px]:grid-cols-1 max-[640px]:[&>li:nth-child(2)]:border-t max-[640px]:[&>li:nth-child(2)]:pt-[13px]"}>
            <li>
              <span className={"mt-px flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full bg-brand-cream-muted text-xs font-bold"}>
                {copy.sections.ce_e_in_lista.number_1}
              </span>
              <span>
                <strong>{copy.sections.ce_e_in_lista.profilul}</strong>
                <span>
                  {
                    copy.sections.ce_e_in_lista
                      .vitrina_pe_care_oamenii_o_judeca_in_cate
                  }
                </span>
              </span>
            </li>
            <li>
              <span className={"mt-px flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full bg-brand-cream-muted text-xs font-bold"}>
                {copy.sections.ce_e_in_lista.number_2}
              </span>
              <span>
                <strong>{copy.sections.ce_e_in_lista.feed_ul}</strong>
                <span>
                  {copy.sections.ce_e_in_lista.testul_ultimelor_9_postari}
                </span>
              </span>
            </li>
            <li>
              <span className={"mt-px flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full bg-brand-cream-muted text-xs font-bold"}>
                {copy.sections.ce_e_in_lista.number_3}
              </span>
              <span>
                <strong>{copy.sections.ce_e_in_lista.continutul}</strong>
                <span>
                  {
                    copy.sections.ce_e_in_lista
                      .nativ_sau_adaptat_diferenta_se_vede_din
                  }
                </span>
              </span>
            </li>
            <li>
              <span className={"mt-px flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full bg-brand-cream-muted text-xs font-bold"}>
                {copy.sections.ce_e_in_lista.number_4}
              </span>
              <span>
                <strong>{copy.sections.ce_e_in_lista.ritmul}</strong>
                <span>
                  {copy.sections.ce_e_in_lista.consecventa_bate_inspiratia}
                </span>
              </span>
            </li>
            <li>
              <span className={"mt-px flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full bg-brand-cream-muted text-xs font-bold"}>
                {copy.sections.ce_e_in_lista.number_5}
              </span>
              <span>
                <strong>{copy.sections.ce_e_in_lista.comunitatea}</strong>
                <span>
                  {
                    copy.sections.ce_e_in_lista
                      .un_cont_care_nu_raspunde_e_un_panou_publ
                  }
                </span>
              </span>
            </li>
            <li>
              <span className={"mt-px flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full bg-brand-cream-muted text-xs font-bold"}>
                {copy.sections.ce_e_in_lista.number_6}
              </span>
              <span>
                <strong>{copy.sections.ce_e_in_lista.cifrele}</strong>
                <span>
                  {
                    copy.sections.ce_e_in_lista
                      .salvarile_si_mesajele_spun_mai_mult_deca
                  }
                </span>
              </span>
            </li>
            <li>
              <span className={"mt-px flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full bg-brand-cream-muted text-xs font-bold"}>
                {copy.sections.ce_e_in_lista.number_7}
              </span>
              <span>
                <strong>
                  {copy.sections.ce_e_in_lista.de_la_feed_la_vanzare}
                </strong>
                <span>
                  {
                    copy.sections.ce_e_in_lista
                      .unde_ajunge_omul_dupa_ce_te_place
                  }
                </span>
              </span>
            </li>
            <li>
              <span className={"mt-px flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full bg-brand-cream-muted text-xs font-bold"}>
                {copy.sections.ce_e_in_lista.number_8}
              </span>
              <span>
                <strong>{copy.sections.ce_e_in_lista.partea_legala}</strong>
                <span>
                  {
                    copy.sections.ce_e_in_lista
                      .colaborari_marcate_ai_afirmatii_de_mediu
                  }
                </span>
              </span>
            </li>
          </ol>
        </div>
        {"\n"}
      </section>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
        {"\n"}
        <div className={"mb-6 flex max-w-[760px] flex-col gap-2"}>
          <h2 className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1]"}>{copy.sections.vrei_mai_mult.vrei_mai_mult}</h2>
        </div>
        {"\n"}
        <div className={"flex flex-wrap gap-4"}>
          {"\n"}
          <div className={"flex flex-[1_1_360px] flex-col gap-3 rounded-[18px] border border-brand-border bg-brand-white px-[26px] py-6"}>
            {"\n"}
            <span className={"text-[13px] font-semibold tracking-[0.3px] text-brand-muted"}>
              {copy.sections.vrei_mai_mult.na_audit_public}
            </span>
            {"\n"}
            <h3 className={"m-0 font-[Unbounded,sans-serif] text-[19px] font-bold leading-[1.3]"}>
              {
                copy.sections.vrei_mai_mult
                  .vrei_un_mini_audit_gratuit_facut_public
              }
            </h3>
            {"\n"}
            <p className={"m-0 text-[15px] text-brand-text"}>
              {
                copy.sections.vrei_mai_mult
                  .alegem_cate_un_cont_si_il_analizam_pe_co
              }
            </p>
            {"\n"}
            <a className={"mt-auto inline-block py-2 text-[15px] font-semibold"} href={localizedHref("/contact", locale)}>
              {copy.sections.vrei_mai_mult.hai_sa_vorbim}
            </a>
            {"\n"}
          </div>
          {"\n"}
          <div className={"flex flex-[1_1_360px] flex-col gap-3 rounded-[18px] border border-brand-border bg-brand-white px-[26px] py-6"}>
            {"\n"}
            <span className={"text-[13px] font-semibold tracking-[0.3px] text-brand-muted"}>
              {copy.sections.vrei_mai_mult.na_audit}
            </span>
            {"\n"}
            <h3 className={"m-0 font-[Unbounded,sans-serif] text-[19px] font-bold leading-[1.3]"}>
              {copy.sections.vrei_mai_mult.vrei_sa_ne_uitam_noi}
            </h3>
            {"\n"}
            <p className={"m-0 text-[15px] text-brand-text"}>
              {
                copy.sections.vrei_mai_mult
                  .aceeasi_lista_facuta_de_noi_plus_un_plan
              }
            </p>
            {"\n"}
            <a className={"mt-auto inline-block py-2 text-[15px] font-semibold"} href={localizedHref("/audit", locale)}>
              {copy.sections.vrei_mai_mult.despre_na_audit}
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
