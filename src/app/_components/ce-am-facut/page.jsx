import defaultCopy from "./copy.json";
import localizedHref from "../localizedHref";
export default function CeAmFacutPage({ copy = defaultCopy, locale = "ro" }) {
  return (
    <div className={"view"}>
      {"\n"}
      <section className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] flex flex-col items-center gap-3 pt-10 pb-9 text-center"}>
        {"\n"}
        <nav className={"flex flex-wrap items-center gap-2 text-sm leading-5 text-brand-muted [&>*]:inline-flex [&>*]:min-h-5 [&>*]:items-center [&>*]:leading-5 [&_a]:text-brand-muted"} aria-label={copy.hero.unde_esti}>
          <a href={localizedHref("/", locale)}>{copy.hero.na_digital}</a>{" "}
          <span aria-hidden={"true"}>{copy.hero.separator}</span>{" "}
          <span>{copy.hero.ce_am_facut}</span>
        </nav>
        {"\n\n"}
        <h1 className={"m-0 [font-family:Unbounded,_sans-serif] font-extrabold text-[clamp(30px,3.6vw,44px)] leading-[1.05] tracking-[-0.5px] max-[360px]:text-[26px]"}>{copy.hero.povesti_la_care_tinem}</h1>
        {"\n"}
        <p className={"m-0 text-brand-muted max-w-[720px] text-[18px] text-brand-text"}>
          {copy.hero.de_unde_am_pornit_ce_am_facut_impreuna_s}
        </p>
        {"\n\n"}
      </section>
      {"\n"}
      <section className={"flex justify-center mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] pb-[88px] max-[640px]:pb-[64px]"}>
        <div className={"flex flex-col gap-5"}>
          <article className={"flex flex-wrap gap-7 rounded-[20px] border border-brand-border bg-brand-white p-[22px] max-[640px]:p-4"}>
            {"\n"}
            <div className={"flex max-w-[420px] flex-[1_1_300px] flex-col gap-2"}>
              {"\n"}
              <div className={"flex aspect-[4/3] items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-xs font-bold text-brand-muted"}>
                {copy.sections.alexi_brows.vizual_principal}
              </div>
              {"\n"}
              <div className={"flex min-w-0 gap-2"}>
                <div className={"flex min-w-0 flex-1 aspect-square items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-[10px] font-bold text-brand-muted"}>
                  {copy.sections.alexi_brows.pagina_din_guidelines}
                </div>
                <div className={"flex min-w-0 flex-1 aspect-square items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-[10px] font-bold text-brand-muted"}>
                  {copy.sections.alexi_brows.postare_luna_1}
                </div>
                <div className={"flex min-w-0 flex-1 aspect-square items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-[10px] font-bold text-brand-muted"}>
                  {copy.sections.alexi_brows.postare_luna_1}
                </div>
              </div>
              {"\n"}
            </div>
            {"\n"}
            <div className={"flex min-w-0 flex-[1_1_380px] flex-col gap-2"}>
              {"\n"}
              <span className={"text-[13px] font-semibold tracking-[0.3px] text-brand-muted"}>
                {copy.sections.alexi_brows.antreprenor_beauty_targoviste}
              </span>
              {"\n"}
              <h2 className={"m-0 font-[Unbounded,sans-serif] text-2xl font-bold"}>
                {copy.sections.alexi_brows.alexi_brows}
              </h2>
              {"\n"}
              <p className={"m-0 text-[17px] text-brand-ink-soft"}>
                {copy.sections.alexi_brows.un_brand_de_sprancene_de_la_zero}
              </p>
              {"\n"}
              <dl className={"mt-2 mb-0 grid grid-cols-[120px_minmax(0,1fr)] gap-x-4 gap-y-2 text-[15px] max-[640px]:grid-cols-1 max-[640px]:gap-y-0 [&>dt]:pt-0.5 [&>dt]:text-xs [&>dt]:font-bold [&>dt]:uppercase [&>dt]:tracking-[0.8px] [&>dt]:text-brand-muted [&>dd]:m-0 [&>dd]:text-brand-text max-[640px]:[&>dd]:mb-2"}>
                {"\n"}
                <dt>{copy.sections.alexi_brows.contextul}</dt>
                <dd>
                  {
                    copy.sections.alexi_brows
                      .alexia_isi_lansa_brandul_personal_alexi
                  }
                </dd>
                {"\n"}
                <dt>{copy.sections.alexi_brows.ce_am_facut}</dt>
                <dd>
                  {
                    copy.sections.alexi_brows
                      .audit_de_brand_brand_guidelines_arhetipu
                  }
                </dd>
                {"\n"}
                <dt>{copy.sections.alexi_brows.ce_a_iesit}</dt>
                <dd className={"font-bold text-brand-ink"}>
                  {copy.sections.alexi_brows.rezultatele_cu_cifre}
                </dd>
                {"\n"}
              </dl>
              {"\n"}
              <blockquote className={"mt-2.5 rounded-xl bg-brand-cream-muted px-4 py-3.5 [&>p]:m-0 [&>p]:font-[Unbounded,sans-serif] [&>p]:text-base [&>p]:font-medium [&>cite]:mt-1.5 [&>cite]:block [&>cite]:text-[13px] [&>cite]:not-italic [&>cite]:text-brand-muted"}>
                <p>{copy.sections.alexi_brows.o_fraza_de_la_alexia}</p>
                <cite>{copy.sections.alexi_brows.alexia_alexi_brows}</cite>
              </blockquote>
              {"\n"}
              <span className={"text-xs text-brand-muted"}>
                {copy.sections.alexi_brows.publicat_cu_acordul_clientei}
              </span>
              {"\n"}
            </div>
            {"\n"}
          </article>
          <article className={"flex flex-wrap gap-7 rounded-[20px] border border-brand-border bg-brand-white p-[22px] max-[640px]:p-4"}>
            {"\n"}
            <div className={"flex max-w-[420px] flex-[1_1_300px] flex-col gap-2"}>
              {"\n"}
              <div className={"flex aspect-[4/3] items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-xs font-bold text-brand-muted"}>
                {copy.sections.alexi_brows.vizual_principal}
              </div>
              {"\n"}
              <div className={"flex min-w-0 gap-2"}>
                <div className={"flex min-w-0 flex-1 aspect-square items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-[10px] font-bold text-brand-muted"}>
                  {copy.sections.alexi_brows.postare_din_campanie}
                </div>
                <div className={"flex min-w-0 flex-1 aspect-square items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-[10px] font-bold text-brand-muted"}>
                  {copy.sections.alexi_brows.newsletter}
                </div>
                <div className={"flex min-w-0 flex-1 aspect-square items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-[10px] font-bold text-brand-muted"}>
                  {copy.sections.alexi_brows.recap}
                </div>
              </div>
              {"\n"}
            </div>
            {"\n"}
            <div className={"flex min-w-0 flex-[1_1_380px] flex-col gap-2"}>
              {"\n"}
              <span className={"text-[13px] font-semibold tracking-[0.3px] text-brand-muted"}>
                {copy.sections.alexi_brows.ong_patrimoniu_retainer}
              </span>
              {"\n"}
              <h2 className={"m-0 font-[Unbounded,sans-serif] text-2xl font-bold"}>
                {copy.sections.alexi_brows.pro_patrimonio}
              </h2>
              {"\n"}
              <p className={"m-0 text-[17px] text-brand-ink-soft"}>
                {copy.sections.alexi_brows.concerte_pe_siret_editia_a_vi_a}
              </p>
              {"\n"}
              <dl className={"mt-2 mb-0 grid grid-cols-[120px_minmax(0,1fr)] gap-x-4 gap-y-2 text-[15px] max-[640px]:grid-cols-1 max-[640px]:gap-y-0 [&>dt]:pt-0.5 [&>dt]:text-xs [&>dt]:font-bold [&>dt]:uppercase [&>dt]:tracking-[0.8px] [&>dt]:text-brand-muted [&>dd]:m-0 [&>dd]:text-brand-text max-[640px]:[&>dd]:mb-2"}>
                {"\n"}
                <dt>{copy.sections.alexi_brows.contextul}</dt>
                <dd>
                  {
                    copy.sections.alexi_brows
                      .concerte_in_patru_conace_din_judetul_bot
                  }
                </dd>
                {"\n"}
                <dt>{copy.sections.alexi_brows.ce_am_facut}</dt>
                <dd>
                  {
                    copy.sections.alexi_brows
                      .conceptul_creativ_mosteniri_la_liman_str
                  }
                </dd>
                {"\n"}
                <dt>{copy.sections.alexi_brows.ce_a_iesit}</dt>
                <dd className={"font-bold text-brand-ink"}>
                  {copy.sections.alexi_brows.rezultatele_cu_cifre}
                </dd>
                {"\n"}
              </dl>
              {"\n"}
              <blockquote className={"mt-2.5 rounded-xl bg-brand-cream-muted px-4 py-3.5 [&>p]:m-0 [&>p]:font-[Unbounded,sans-serif] [&>p]:text-base [&>p]:font-medium [&>cite]:mt-1.5 [&>cite]:block [&>cite]:text-[13px] [&>cite]:not-italic [&>cite]:text-brand-muted"}>
                <p>{copy.sections.alexi_brows.o_fraza_de_la_pro_patrimonio}</p>
                <cite>{copy.sections.alexi_brows.nume_rol_pro_patrimonio}</cite>
              </blockquote>
              {"\n"}
              <span className={"text-xs text-brand-muted"}>
                {copy.sections.alexi_brows.publicat_cu_acordul_clientului}
              </span>
              {"\n"}
            </div>
            {"\n"}
          </article>
          <article className={"flex flex-wrap gap-7 rounded-[20px] border border-brand-border bg-brand-white p-[22px] max-[640px]:p-4"}>
            {"\n"}
            <div className={"flex max-w-[420px] flex-[1_1_300px] flex-col gap-2"}>
              {"\n"}
              <div className={"flex aspect-[4/3] items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-xs font-bold text-brand-muted"}>
                {copy.sections.alexi_brows.vizual_principal}
              </div>
              {"\n"}
              <div className={"flex min-w-0 gap-2"}>
                <div className={"flex min-w-0 flex-1 aspect-square items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-[10px] font-bold text-brand-muted"}>
                  {copy.sections.alexi_brows.exemplu_1}
                </div>
                <div className={"flex min-w-0 flex-1 aspect-square items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-[10px] font-bold text-brand-muted"}>
                  {copy.sections.alexi_brows.exemplu_2}
                </div>
                <div className={"flex min-w-0 flex-1 aspect-square items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-[10px] font-bold text-brand-muted"}>
                  {copy.sections.alexi_brows.exemplu_3}
                </div>
              </div>
              {"\n"}
            </div>
            {"\n"}
            <div className={"flex min-w-0 flex-[1_1_380px] flex-col gap-2"}>
              {"\n"}
              <span className={"text-[13px] font-semibold tracking-[0.3px] text-brand-muted"}>
                {copy.sections.alexi_brows.trupa_metalcore}
              </span>
              {"\n"}
              <h2 className={"m-0 font-[Unbounded,sans-serif] text-2xl font-bold"}>
                {copy.sections.alexi_brows.static_collapse}
              </h2>
              {"\n"}
              <p className={"m-0 text-[17px] text-brand-ink-soft"}>
                {copy.sections.alexi_brows.ce_am_facut_intr_un_rand}
              </p>
              {"\n"}
              <dl className={"mt-2 mb-0 grid grid-cols-[120px_minmax(0,1fr)] gap-x-4 gap-y-2 text-[15px] max-[640px]:grid-cols-1 max-[640px]:gap-y-0 [&>dt]:pt-0.5 [&>dt]:text-xs [&>dt]:font-bold [&>dt]:uppercase [&>dt]:tracking-[0.8px] [&>dt]:text-brand-muted [&>dd]:m-0 [&>dd]:text-brand-text max-[640px]:[&>dd]:mb-2"}>
                {"\n"}
                <dt>{copy.sections.alexi_brows.contextul}</dt>
                <dd>{copy.sections.alexi_brows.contextul_de_unde_am_pornit}</dd>
                {"\n"}
                <dt>{copy.sections.alexi_brows.ce_am_facut}</dt>
                <dd>{copy.sections.alexi_brows.ce_am_facut_2}</dd>
                {"\n"}
                <dt>{copy.sections.alexi_brows.ce_a_iesit}</dt>
                <dd className={"font-bold text-brand-ink"}>
                  {copy.sections.alexi_brows.rezultatele_cu_cifre}
                </dd>
                {"\n"}
              </dl>
              {"\n"}
              <blockquote className={"mt-2.5 rounded-xl bg-brand-cream-muted px-4 py-3.5 [&>p]:m-0 [&>p]:font-[Unbounded,sans-serif] [&>p]:text-base [&>p]:font-medium [&>cite]:mt-1.5 [&>cite]:block [&>cite]:text-[13px] [&>cite]:not-italic [&>cite]:text-brand-muted"}>
                <p>{copy.sections.alexi_brows.o_fraza_de_la_client}</p>
                <cite>{copy.sections.alexi_brows.nume_static_collapse}</cite>
              </blockquote>
              {"\n"}
              <span className={"text-xs text-brand-muted"}>
                {copy.sections.alexi_brows.publicat_cu_acordul_trupei}
              </span>
              {"\n"}
            </div>
            {"\n"}
          </article>
          <article className={"flex flex-wrap gap-7 rounded-[20px] border border-brand-border bg-brand-white p-[22px] max-[640px]:p-4"}>
            {"\n"}
            <div className={"flex max-w-[420px] flex-[1_1_300px] flex-col gap-2"}>
              {"\n"}
              <div className={"flex aspect-[4/3] items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-xs font-bold text-brand-muted"}>
                {copy.sections.alexi_brows.vizual_principal}
              </div>
              {"\n"}
              <div className={"flex min-w-0 gap-2"}>
                <div className={"flex min-w-0 flex-1 aspect-square items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-[10px] font-bold text-brand-muted"}>
                  {copy.sections.alexi_brows.exemplu_1}
                </div>
                <div className={"flex min-w-0 flex-1 aspect-square items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-[10px] font-bold text-brand-muted"}>
                  {copy.sections.alexi_brows.exemplu_2}
                </div>
                <div className={"flex min-w-0 flex-1 aspect-square items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-[10px] font-bold text-brand-muted"}>
                  {copy.sections.alexi_brows.exemplu_3}
                </div>
              </div>
              {"\n"}
            </div>
            {"\n"}
            <div className={"flex min-w-0 flex-[1_1_380px] flex-col gap-2"}>
              {"\n"}
              <span className={"text-[13px] font-semibold tracking-[0.3px] text-brand-muted"}>
                {copy.sections.alexi_brows.atelier_de_mobila}
              </span>
              {"\n"}
              <h2 className={"m-0 font-[Unbounded,sans-serif] text-2xl font-bold"}>
                {copy.sections.alexi_brows.como_atelier}
              </h2>
              {"\n"}
              <p className={"m-0 text-[17px] text-brand-ink-soft"}>
                {copy.sections.alexi_brows.ce_am_facut_intr_un_rand}
              </p>
              {"\n"}
              <dl className={"mt-2 mb-0 grid grid-cols-[120px_minmax(0,1fr)] gap-x-4 gap-y-2 text-[15px] max-[640px]:grid-cols-1 max-[640px]:gap-y-0 [&>dt]:pt-0.5 [&>dt]:text-xs [&>dt]:font-bold [&>dt]:uppercase [&>dt]:tracking-[0.8px] [&>dt]:text-brand-muted [&>dd]:m-0 [&>dd]:text-brand-text max-[640px]:[&>dd]:mb-2"}>
                {"\n"}
                <dt>{copy.sections.alexi_brows.contextul}</dt>
                <dd>{copy.sections.alexi_brows.contextul_de_unde_am_pornit}</dd>
                {"\n"}
                <dt>{copy.sections.alexi_brows.ce_am_facut}</dt>
                <dd>{copy.sections.alexi_brows.ce_am_facut_2}</dd>
                {"\n"}
                <dt>{copy.sections.alexi_brows.ce_a_iesit}</dt>
                <dd className={"font-bold text-brand-ink"}>
                  {copy.sections.alexi_brows.rezultatele_cu_cifre}
                </dd>
                {"\n"}
              </dl>
              {"\n"}
              <blockquote className={"mt-2.5 rounded-xl bg-brand-cream-muted px-4 py-3.5 [&>p]:m-0 [&>p]:font-[Unbounded,sans-serif] [&>p]:text-base [&>p]:font-medium [&>cite]:mt-1.5 [&>cite]:block [&>cite]:text-[13px] [&>cite]:not-italic [&>cite]:text-brand-muted"}>
                <p>{copy.sections.alexi_brows.o_fraza_de_la_client}</p>
                <cite>{copy.sections.alexi_brows.nume_rol_como_atelier}</cite>
              </blockquote>
              {"\n"}
              <span className={"text-xs text-brand-muted"}>
                {copy.sections.alexi_brows.publicat_cu_acordul_clientului}
              </span>
              {"\n"}
            </div>
            {"\n"}
          </article>
          <article className={"flex flex-wrap gap-7 rounded-[20px] border border-brand-border bg-brand-white p-[22px] max-[640px]:p-4"}>
            {"\n"}
            <div className={"flex max-w-[420px] flex-[1_1_300px] flex-col gap-2"}>
              {"\n"}
              <div className={"flex aspect-[4/3] items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-xs font-bold text-brand-muted"}>
                {copy.sections.alexi_brows.vizual_principal}
              </div>
              {"\n"}
              <div className={"flex min-w-0 gap-2"}>
                <div className={"flex min-w-0 flex-1 aspect-square items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-[10px] font-bold text-brand-muted"}>
                  {copy.sections.alexi_brows.exemplu_1}
                </div>
                <div className={"flex min-w-0 flex-1 aspect-square items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-[10px] font-bold text-brand-muted"}>
                  {copy.sections.alexi_brows.exemplu_2}
                </div>
                <div className={"flex min-w-0 flex-1 aspect-square items-center justify-center rounded-xl border-2 border-dashed border-brand-border-strong bg-brand-cream p-1.5 text-center text-[10px] font-bold text-brand-muted"}>
                  {copy.sections.alexi_brows.exemplu_3}
                </div>
              </div>
              {"\n"}
            </div>
            {"\n"}
            <div className={"flex min-w-0 flex-[1_1_380px] flex-col gap-2"}>
              {"\n"}
              <span className={"text-[13px] font-semibold tracking-[0.3px] text-brand-muted"}>
                {copy.sections.alexi_brows.domeniu}
              </span>
              {"\n"}
              <h2 className={"m-0 font-[Unbounded,sans-serif] text-2xl font-bold"}>
                {copy.sections.alexi_brows.imprimax_solutions}
              </h2>
              {"\n"}
              <p className={"m-0 text-[17px] text-brand-ink-soft"}>
                {copy.sections.alexi_brows.ce_am_facut_intr_un_rand}
              </p>
              {"\n"}
              <dl className={"mt-2 mb-0 grid grid-cols-[120px_minmax(0,1fr)] gap-x-4 gap-y-2 text-[15px] max-[640px]:grid-cols-1 max-[640px]:gap-y-0 [&>dt]:pt-0.5 [&>dt]:text-xs [&>dt]:font-bold [&>dt]:uppercase [&>dt]:tracking-[0.8px] [&>dt]:text-brand-muted [&>dd]:m-0 [&>dd]:text-brand-text max-[640px]:[&>dd]:mb-2"}>
                {"\n"}
                <dt>{copy.sections.alexi_brows.contextul}</dt>
                <dd>{copy.sections.alexi_brows.contextul_de_unde_am_pornit}</dd>
                {"\n"}
                <dt>{copy.sections.alexi_brows.ce_am_facut}</dt>
                <dd>{copy.sections.alexi_brows.ce_am_facut_2}</dd>
                {"\n"}
                <dt>{copy.sections.alexi_brows.ce_a_iesit}</dt>
                <dd className={"font-bold text-brand-ink"}>
                  {copy.sections.alexi_brows.rezultatele_cu_cifre}
                </dd>
                {"\n"}
              </dl>
              {"\n"}
              <blockquote className={"mt-2.5 rounded-xl bg-brand-cream-muted px-4 py-3.5 [&>p]:m-0 [&>p]:font-[Unbounded,sans-serif] [&>p]:text-base [&>p]:font-medium [&>cite]:mt-1.5 [&>cite]:block [&>cite]:text-[13px] [&>cite]:not-italic [&>cite]:text-brand-muted"}>
                <p>{copy.sections.alexi_brows.o_fraza_de_la_client}</p>
                <cite>
                  {copy.sections.alexi_brows.nume_rol_imprimax_solutions}
                </cite>
              </blockquote>
              {"\n"}
              <span className={"text-xs text-brand-muted"}>
                {copy.sections.alexi_brows.publicat_cu_acordul_clientului}
              </span>
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
          <h2 className={"m-0 [font-family:Unbounded,_sans-serif] font-bold text-[clamp(24px,2.6vw,32px)] leading-[1.1]"}>{copy.sections.urmeaza.urmeaza}</h2>
        </div>
        {"\n"}
        <div className={"flex flex-wrap gap-4"}>
          {"\n"}
          <div className={"flex flex-[1_1_360px] flex-col gap-3 rounded-[18px] border border-brand-border bg-brand-white px-[26px] py-6"}>
            {"\n"}
            <span className={"text-[13px] font-semibold tracking-[0.3px] text-brand-muted"}>
              {copy.sections.urmeaza.in_lucru}
            </span>
            {"\n"}
            <h3 className={"m-0 font-[Unbounded,sans-serif] text-[19px] font-bold leading-[1.3]"}>
              {copy.sections.urmeaza.primul_nostru_client_suntem_noi}
            </h3>
            {"\n"}
            <p className={"m-0 text-[15px] text-brand-text"}>
              {copy.sections.urmeaza.contul_na_porneste_de_la_zero_publicam_c}
            </p>
            {"\n"}
            <div
              className={"mt-1.5 flex gap-1.5 [&>span]:flex-1 [&>span]:border-t-[3px] [&>span]:border-brand-border [&>span]:pt-2 [&>span]:text-center [&>span]:text-xs [&>span]:font-semibold [&>span]:text-brand-muted [&>span.on]:border-brand-ink [&>span.on]:text-brand-ink"}
              aria-label={copy.sections.urmeaza.ziua_1_din_90}
            >
              <span className={"text-brand-ink [border-top-color:var(--brand-ink)]"}>{copy.sections.urmeaza.ziua_1}</span>
              <span>{copy.sections.urmeaza.ziua_30}</span>
              <span>{copy.sections.urmeaza.ziua_60}</span>
              <span>{copy.sections.urmeaza.ziua_90}</span>
            </div>
            {"\n"}
          </div>
          {"\n"}
          <div className={"flex flex-[1_1_360px] flex-col gap-3 rounded-[18px] border border-brand-border bg-brand-white px-[26px] py-6"}>
            {"\n"}
            <span className={"text-[13px] font-semibold tracking-[0.3px] text-brand-muted"}>
              {copy.sections.urmeaza.na_audit_public}
            </span>
            {"\n"}
            <h3 className={"m-0 font-[Unbounded,sans-serif] text-[19px] font-bold leading-[1.3]"}>
              {copy.sections.urmeaza.vrei_un_mini_audit_gratuit_facut_public}
            </h3>
            {"\n"}
            <p className={"m-0 text-[15px] text-brand-text"}>
              {copy.sections.urmeaza.alegem_cate_un_cont_si_il_analizam_pe_co}
            </p>
            {"\n"}
            <a className={"mt-auto inline-block py-2 text-[15px] font-semibold"} href={localizedHref("/contact", locale)}>
              {copy.sections.urmeaza.hai_sa_vorbim}
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
