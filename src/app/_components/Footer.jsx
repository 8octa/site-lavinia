import copy from "./shared/copy.json";
import copyEn from "./shared/copy.en.json";

export default function Footer({ locale = "ro" }) {
  const strings = locale === "en" ? copyEn : copy;
  const localizedHref = (path) =>
    locale === "en" ? (path === "/" ? "/en" : `/en${path}`) : path;

  return (
    <footer className={"mt-6 border-t border-brand-border bg-brand-white"}>
      {"\n"}
      <div className={"mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px]"}>
        {"\n"}
        <div className={"flex flex-wrap gap-8 pt-10 pb-7"}>
          {"\n"}
          <div className={"flex flex-[2_1_260px] flex-col gap-2 text-[15px] text-brand-muted"}>
            {"\n"}
            <a href={localizedHref("/")} className={"font-[Unbounded,sans-serif] text-[22px] font-extrabold text-brand-ink no-underline"}>
              {strings.footer.na_digital}
            </a>
            {"\n"}
            <span>{strings.footer.born_and_raised_in_the_feed}</span>
            {"\n"}
            <span>{strings.footer.studio_de_social_media_din_bucuresti}</span>
            {"\n"}
            <a href={localizedHref("/contact")}>{strings.footer.contact_si_canal_social}</a>
            {"\n"}
          </div>
          {"\n"}
          <nav className={"flex flex-[1_1_150px] flex-col gap-2 text-[15px] [&>strong]:text-[13px] [&>strong]:uppercase [&>strong]:tracking-[1px] [&>strong]:text-brand-muted [&_a]:no-underline [&_a:hover]:underline"} aria-label={strings.footer.pagini}>
            <strong>{strings.footer.pagini}</strong>
            {"\n"}
            <a href={localizedHref("/pentru-cine")}>{strings.footer.pentru_cine}</a>
            {"\n"}
            <a href={localizedHref("/ce-facem")}>{strings.footer.ce_facem}</a>
            {"\n"}
            <a href={localizedHref("/ce-am-facut")}>{strings.footer.ce_am_facut}</a>
            {"\n"}
            <a href={localizedHref("/artisti")}>{strings.footer.artisti}</a>
            {"\n"}
            <a href={localizedHref("/cine-suntem")}>{strings.footer.cine_suntem}</a>
            {"\n"}
            <a href={localizedHref("/gratis")}>{strings.footer.lista_gratuita}</a>
            {"\n"}
            <a href={localizedHref("/intrebari")}>{strings.footer.intrebari}</a>
            {"\n"}
            <a href={localizedHref("/contact")}>{strings.footer.contact}</a>
            {"\n"}
          </nav>
          {"\n"}
          <nav className={"flex flex-[1_1_150px] flex-col gap-2 text-[15px] [&>strong]:text-[13px] [&>strong]:uppercase [&>strong]:tracking-[1px] [&>strong]:text-brand-muted [&_a]:no-underline [&_a:hover]:underline"} aria-label={"Servicii"}>
            <strong>{strings.footer.servicii}</strong>
            {"\n"}
            <a href={localizedHref("/lunar")}>{strings.footer.na_social_media_lunar}</a>
            {"\n"}
            <a href={localizedHref("/content-creation")}>{strings.footer.na_content_creation}</a>
            {"\n"}
            <a href={localizedHref("/audit")}>{strings.footer.na_audit}</a>
            {"\n"}
            <a href={localizedHref("/tiktok-start")}>{strings.footer.na_tiktok_start}</a>
            {"\n"}
            <a href={localizedHref("/email-marketing")}>{strings.footer.na_email_marketing}</a>
            {"\n"}
            <a href={localizedHref("/facut-de-mana")}>{strings.footer.na_facut_de_mana}</a>
            {"\n"}
          </nav>
          {"\n"}
          <nav className={"flex flex-[1_1_150px] flex-col gap-2 text-[15px] [&>strong]:text-[13px] [&>strong]:uppercase [&>strong]:tracking-[1px] [&>strong]:text-brand-muted [&_a]:no-underline [&_a:hover]:underline"} aria-label={"Legal"}>
            <strong>{strings.footer.legal}</strong>
            {"\n"}
            <a href={localizedHref("/confidentialitate")}>
              {strings.footer.politica_de_confidentialitate}
            </a>
            {"\n"}
            <a href={localizedHref("/cookies")}>{strings.footer.politica_de_cookies}</a>
            {"\n"}
          </nav>
          {"\n"}
        </div>
        {"\n"}
        <div className={"flex flex-wrap justify-between gap-3 border-t border-brand-border pt-[18px] pb-8 text-[13px] text-brand-muted"}>
          {"\n"}
          <span>{strings.footer.number_2026_na_digital}</span>
          {"\n"}
        </div>
        {"\n"}
      </div>
      {"\n"}
    </footer>
  );
}
