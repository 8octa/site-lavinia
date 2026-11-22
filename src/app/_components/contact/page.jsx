import defaultCopy from "./copy.json";
import localizedHref from "../localizedHref";
import FeedbackForm from "../FeedbackForm";

export default function ContactPage({ copy = defaultCopy, locale = "ro" }) {
  return (
    <div className={"view"}>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] flex flex-col items-center gap-3 pt-10 pb-9 text-center"}>
        {"\n"}
        <nav className={"flex flex-wrap items-center gap-2 text-sm leading-5 text-brand-muted [&>*]:inline-flex [&>*]:min-h-5 [&>*]:items-center [&>*]:leading-5 [&_a]:text-brand-muted"} aria-label={copy.hero.unde_esti}>
          <a href={localizedHref("/", locale)}>{copy.hero.na_digital}</a>{" "}
          <span aria-hidden={"true"}>{copy.hero.separator}</span>{" "}
          <span>{copy.hero.contact}</span>
        </nav>
        {"\n\n"}
        <h1 className={"m-0 [font-family:Unbounded,_sans-serif] font-extrabold text-[clamp(30px,3.6vw,44px)] leading-[1.05] tracking-[-0.5px] max-[360px]:text-[26px]"}>{copy.hero.hai_sa_vorbim}</h1>
        {"\n"}
        <p className={"m-0 text-brand-muted max-w-[720px] text-[18px] text-brand-text"}>
          {copy.hero.vorbim_deschis_despre_ce_ai_nevoie_si_ca}
        </p>
        {"\n\n"}
      </section>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
        <div className={"grid grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] grid-rows-[auto_auto_auto_1fr] gap-4 items-start [grid-template-areas:'form_book'_'form_direct'_'form_after'_'form_.'] max-[860px]:grid-cols-1 max-[860px]:grid-rows-none max-[860px]:[grid-template-areas:'book'_'form'_'direct'_'after']"}>
          <div className={"flex flex-[1_1_360px] flex-col gap-3 rounded-[18px] border border-brand-border bg-brand-white px-[26px] py-6 [grid-area:form]"}>
            {"\n"}
            <h2 className={"m-0 font-[Unbounded,sans-serif] text-[19px] font-bold leading-[1.3]"}>{copy.sections.scrie_ne.scrie_ne}</h2>
            {"\n"}
            <FeedbackForm
              className={"na-form mt-1 flex flex-col gap-4"}
              locale={locale}
            >
              {"\n"}
              <div className={"grid grid-cols-2 gap-3.5 max-[560px]:grid-cols-1"}>
                {"\n"}
                <div className={"flex min-w-0 flex-col gap-1.5 [&_label]:text-sm [&_label]:font-semibold [&_input]:box-border [&_input]:w-full [&_input]:min-h-12 [&_input]:rounded-xl [&_input]:border [&_input]:border-brand-border-strong [&_input]:bg-brand-cream [&_input]:px-[14px] [&_input]:text-brand-ink [&_input]:[font:inherit] [&_input:focus]:outline-2 [&_input:focus]:outline-brand-ink [&_input:focus]:outline-offset-1 [&_select]:box-border [&_select]:w-full [&_select]:min-h-12 [&_select]:rounded-xl [&_select]:border [&_select]:border-brand-border-strong [&_select]:bg-brand-cream [&_select]:px-[14px] [&_select]:text-brand-ink [&_select]:[font:inherit] [&_select:focus]:outline-2 [&_select:focus]:outline-brand-ink [&_select:focus]:outline-offset-1 [&_textarea]:box-border [&_textarea]:w-full [&_textarea]:min-h-12 [&_textarea]:rounded-xl [&_textarea]:border [&_textarea]:border-brand-border-strong [&_textarea]:bg-brand-cream [&_textarea]:px-[14px] [&_textarea]:text-brand-ink [&_textarea]:[font:inherit] [&_textarea]:resize-y [&_textarea]:focus:outline-2 [&_textarea]:focus:outline-brand-ink [&_textarea]:focus:outline-offset-1"}>
                  <label htmlFor={"na-f-nume"}>
                    {copy.sections.scrie_ne.nume}
                  </label>
                  <input id={"na-f-nume"} type={"text"} autoComplete={"name"} />
                </div>
                {"\n"}
                <div className={"flex min-w-0 flex-col gap-1.5 [&_label]:text-sm [&_label]:font-semibold [&_input]:box-border [&_input]:w-full [&_input]:min-h-12 [&_input]:rounded-xl [&_input]:border [&_input]:border-brand-border-strong [&_input]:bg-brand-cream [&_input]:px-[14px] [&_input]:text-brand-ink [&_input]:[font:inherit] [&_input:focus]:outline-2 [&_input:focus]:outline-brand-ink [&_input:focus]:outline-offset-1 [&_select]:box-border [&_select]:w-full [&_select]:min-h-12 [&_select]:rounded-xl [&_select]:border [&_select]:border-brand-border-strong [&_select]:bg-brand-cream [&_select]:px-[14px] [&_select]:text-brand-ink [&_select]:[font:inherit] [&_select:focus]:outline-2 [&_select:focus]:outline-brand-ink [&_select:focus]:outline-offset-1 [&_textarea]:box-border [&_textarea]:w-full [&_textarea]:min-h-12 [&_textarea]:rounded-xl [&_textarea]:border [&_textarea]:border-brand-border-strong [&_textarea]:bg-brand-cream [&_textarea]:px-[14px] [&_textarea]:text-brand-ink [&_textarea]:[font:inherit] [&_textarea]:resize-y [&_textarea]:focus:outline-2 [&_textarea]:focus:outline-brand-ink [&_textarea]:focus:outline-offset-1"}>
                  <label htmlFor={"na-f-email"}>
                    {copy.sections.scrie_ne.email}
                  </label>
                  <input
                    id={"na-f-email"}
                    type={"email"}
                    autoComplete={"email"}
                  />
                </div>
                {"\n"}
                <div className={"flex min-w-0 flex-col gap-1.5 [&_label]:text-sm [&_label]:font-semibold [&_input]:box-border [&_input]:w-full [&_input]:min-h-12 [&_input]:rounded-xl [&_input]:border [&_input]:border-brand-border-strong [&_input]:bg-brand-cream [&_input]:px-[14px] [&_input]:text-brand-ink [&_input]:[font:inherit] [&_input:focus]:outline-2 [&_input:focus]:outline-brand-ink [&_input:focus]:outline-offset-1 [&_select]:box-border [&_select]:w-full [&_select]:min-h-12 [&_select]:rounded-xl [&_select]:border [&_select]:border-brand-border-strong [&_select]:bg-brand-cream [&_select]:px-[14px] [&_select]:text-brand-ink [&_select]:[font:inherit] [&_select:focus]:outline-2 [&_select:focus]:outline-brand-ink [&_select:focus]:outline-offset-1 [&_textarea]:box-border [&_textarea]:w-full [&_textarea]:min-h-12 [&_textarea]:rounded-xl [&_textarea]:border [&_textarea]:border-brand-border-strong [&_textarea]:bg-brand-cream [&_textarea]:px-[14px] [&_textarea]:text-brand-ink [&_textarea]:[font:inherit] [&_textarea]:resize-y [&_textarea]:focus:outline-2 [&_textarea]:focus:outline-brand-ink [&_textarea]:focus:outline-offset-1"}>
                  <label htmlFor={"na-f-firma"}>
                    {copy.sections.scrie_ne.firma_optional}
                  </label>
                  <input
                    id={"na-f-firma"}
                    type={"text"}
                    autoComplete={"organization"}
                  />
                </div>
                {"\n"}
                <div className={"flex min-w-0 flex-col gap-1.5 [&_label]:text-sm [&_label]:font-semibold [&_input]:box-border [&_input]:w-full [&_input]:min-h-12 [&_input]:rounded-xl [&_input]:border [&_input]:border-brand-border-strong [&_input]:bg-brand-cream [&_input]:px-[14px] [&_input]:text-brand-ink [&_input]:[font:inherit] [&_input:focus]:outline-2 [&_input:focus]:outline-brand-ink [&_input:focus]:outline-offset-1 [&_select]:box-border [&_select]:w-full [&_select]:min-h-12 [&_select]:rounded-xl [&_select]:border [&_select]:border-brand-border-strong [&_select]:bg-brand-cream [&_select]:px-[14px] [&_select]:text-brand-ink [&_select]:[font:inherit] [&_select:focus]:outline-2 [&_select:focus]:outline-brand-ink [&_select:focus]:outline-offset-1 [&_textarea]:box-border [&_textarea]:w-full [&_textarea]:min-h-12 [&_textarea]:rounded-xl [&_textarea]:border [&_textarea]:border-brand-border-strong [&_textarea]:bg-brand-cream [&_textarea]:px-[14px] [&_textarea]:text-brand-ink [&_textarea]:[font:inherit] [&_textarea]:resize-y [&_textarea]:focus:outline-2 [&_textarea]:focus:outline-brand-ink [&_textarea]:focus:outline-offset-1"}>
                  <label htmlFor={"na-f-serviciu"}>
                    {copy.sections.scrie_ne.cu_ce_te_putem_ajuta}
                  </label>
                  <select id={"na-f-serviciu"}>
                    <option>{copy.sections.scrie_ne.nu_stiu_inca}</option>
                    <option>
                      {copy.sections.scrie_ne.na_social_media_lunar}
                    </option>
                    <option>
                      {copy.sections.scrie_ne.na_content_creation}
                    </option>
                    <option>{copy.sections.scrie_ne.na_audit}</option>
                    <option>{copy.sections.scrie_ne.na_tiktok_start}</option>
                    <option>{copy.sections.scrie_ne.na_email_marketing}</option>
                    <option>
                      {copy.sections.scrie_ne.na_facut_de_mana_artisti}
                    </option>
                  </select>
                </div>
                {"\n"}
                <div className={"flex min-w-0 flex-col gap-1.5 [&_label]:text-sm [&_label]:font-semibold [&_input]:box-border [&_input]:w-full [&_input]:min-h-12 [&_input]:rounded-xl [&_input]:border [&_input]:border-brand-border-strong [&_input]:bg-brand-cream [&_input]:px-[14px] [&_input]:text-brand-ink [&_input]:[font:inherit] [&_input:focus]:outline-2 [&_input:focus]:outline-brand-ink [&_input:focus]:outline-offset-1 [&_select]:box-border [&_select]:w-full [&_select]:min-h-12 [&_select]:rounded-xl [&_select]:border [&_select]:border-brand-border-strong [&_select]:bg-brand-cream [&_select]:px-[14px] [&_select]:text-brand-ink [&_select]:[font:inherit] [&_select:focus]:outline-2 [&_select:focus]:outline-brand-ink [&_select:focus]:outline-offset-1 [&_textarea]:box-border [&_textarea]:w-full [&_textarea]:min-h-12 [&_textarea]:rounded-xl [&_textarea]:border [&_textarea]:border-brand-border-strong [&_textarea]:bg-brand-cream [&_textarea]:px-[14px] [&_textarea]:text-brand-ink [&_textarea]:[font:inherit] [&_textarea]:resize-y [&_textarea]:focus:outline-2 [&_textarea]:focus:outline-brand-ink [&_textarea]:focus:outline-offset-1 col-span-full"}>
                  <label htmlFor={"na-f-mesaj"}>
                    {copy.sections.scrie_ne.mesaj}
                  </label>
                  <textarea
                    id={"na-f-mesaj"}
                    rows={"5"}
                    placeholder={
                      copy.sections.scrie_ne
                        .unde_esti_acum_si_unde_vrei_sa_ajungi
                    }
                  ></textarea>
                </div>
                {"\n"}
              </div>
              {"\n"}
              <div className={"flex flex-wrap items-center justify-between gap-3 [&_.lf-note]:flex-[1_1_240px]"}>
                {"\n"}
                <span className={"text-[13px] text-brand-muted"}>
                  {
                    copy.sections.scrie_ne
                      .folosim_datele_doar_ca_sa_ti_raspundem_d
                  }
                  <a href={localizedHref("/confidentialitate", locale)}>
                    {copy.sections.scrie_ne.politica_de_confidentialitate}
                  </a>
                  {copy.sections.scrie_ne.period}
                </span>
                {"\n"}
                <button className={"inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border-0 px-6 [font:inherit] font-bold no-underline bg-brand-ink text-brand-cream hover:bg-brand-ink-hover hover:text-brand-cream"} type={"submit"}>
                  {copy.sections.scrie_ne.trimite}
                </button>
                {"\n"}
              </div>
              {"\n"}
            </FeedbackForm>
            {"\n"}
          </div>
          <div className={"flex flex-[1_1_360px] flex-col gap-3 rounded-[18px] border border-brand-border bg-brand-white px-[26px] py-6 border-brand-cream-muted bg-brand-cream-muted [grid-area:book]"}>
            {"\n"}
            <span className={"text-[13px] font-semibold tracking-[0.3px] text-brand-muted"}>
              {copy.sections.scrie_ne.cel_mai_simplu}
            </span>
            {"\n"}
            <h3 className={"m-0 font-[Unbounded,sans-serif] text-[19px] font-bold leading-[1.3]"}>
              {copy.sections.scrie_ne.programeaza_o_discutie}
            </h3>
            {"\n"}
            <p className={"m-0 text-[15px] text-brand-text"}>
              {copy.sections.scrie_ne.alegi_o_zi_si_o_ora_din_calendar_iar_noi}
            </p>
            {"\n"}
            <a className={"inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border-0 px-6 [font:inherit] font-bold no-underline bg-brand-ink text-brand-cream hover:bg-brand-ink-hover hover:text-brand-cream mt-1 self-start"} href={localizedHref("/contact", locale)}>
              {copy.sections.scrie_ne.alege_o_zi}
            </a>
            {"\n"}
            <span className={"text-[13px] text-brand-muted"}>
              {copy.sections.scrie_ne.scrie_ne_prin_formular_si_revenim_cu_urm}
            </span>
            {"\n"}
          </div>
          <div className={"flex flex-[1_1_360px] flex-col gap-3 rounded-[18px] border border-brand-border bg-brand-white px-[26px] py-6 [grid-area:direct]"}>
            {"\n"}
            <h3 className={"m-0 font-[Unbounded,sans-serif] text-[19px] font-bold leading-[1.3]"}>{copy.sections.scrie_ne.sau_direct}</h3>
            {"\n"}
            <ul className={"m-0 flex list-none flex-col p-0 [&>li]:flex [&>li]:justify-between [&>li]:gap-3 [&>li]:border-t [&>li]:border-brand-border-soft [&>li]:py-2.5 [&>li]:text-[15px] [&>li:first-child]:border-0 [&>li:first-child]:pt-0.5 [&>li>span]:text-brand-muted [&_a]:font-semibold"}>
              {"\n"}
              <li>
                <span>{copy.sections.scrie_ne.email}</span>
                <a href={localizedHref("/intrebari", locale)}>
                  {copy.sections.scrie_ne.intrebari_frecvente}
                </a>
              </li>
              {"\n"}
              <li>
                <span>{copy.sections.scrie_ne.instagram}</span>
                <a href={localizedHref("/ce-am-facut", locale)}>
                  {copy.sections.scrie_ne.vezi_proiectele_noastre}
                </a>
              </li>
              {"\n"}
              <li>
                <span>{copy.sections.scrie_ne.tiktok}</span>
                <a href={localizedHref("/ce-am-facut", locale)}>
                  {copy.sections.scrie_ne.vezi_proiectele_noastre}
                </a>
              </li>
              {"\n"}
            </ul>
            {"\n"}
          </div>
          <div className={"flex flex-[1_1_360px] flex-col gap-3 rounded-[18px] border border-brand-border bg-brand-white px-[26px] py-6 [grid-area:after]"}>
            {"\n"}
            <h3 className={"m-0 font-[Unbounded,sans-serif] text-[19px] font-bold leading-[1.3]"}>
              {copy.sections.scrie_ne.ce_se_intampla_dupa}
            </h3>
            {"\n"}
            <ol className={"m-0 flex list-none flex-col gap-3 p-0 [&>li]:flex [&>li]:items-start [&>li]:gap-3 [&>li>span:last-child]:flex [&>li>span:last-child]:flex-col [&>li>span:last-child]:gap-0.5 [&>li>span:last-child]:text-[15px] [&>li>span:last-child]:text-brand-text [&_strong]:text-brand-ink"}>
              <li>
                <span className={"flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full text-[13px] bg-brand-mustard"}>
                  {copy.sections.scrie_ne.number_1}
                </span>
                <span>
                  <strong>{copy.sections.scrie_ne.ne_scrii}</strong>
                  <span>
                    {
                      copy.sections.scrie_ne
                        .sau_alegi_direct_o_zi_iti_raspundem_in_c
                    }
                  </span>
                </span>
              </li>
              <li>
                <span className={"flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full text-[13px] bg-brand-sky"}>
                  {copy.sections.scrie_ne.number_2}
                </span>
                <span>
                  <strong>{copy.sections.scrie_ne.ne_auzim}</strong>
                  <span>
                    {
                      copy.sections.scrie_ne
                        .ne_spui_unde_esti_si_unde_vrei_sa_ajungi
                    }
                  </span>
                </span>
              </li>
              <li>
                <span className={"flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full text-[13px] bg-brand-purple"}>
                  {copy.sections.scrie_ne.number_3}
                </span>
                <span>
                  <strong>{copy.sections.scrie_ne.primesti_oferta}</strong>
                  <span>
                    {
                      copy.sections.scrie_ne
                        .pretul_clar_si_in_scris_fara_surprize
                    }
                  </span>
                </span>
              </li>
            </ol>
            {"\n"}
          </div>
        </div>
      </section>
      {"\n\n"}
    </div>
  );
}
