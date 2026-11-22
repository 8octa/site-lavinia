export default function localizedHref(href, locale) {
  if (
    locale !== "en" ||
    !href.startsWith("/") ||
    href.startsWith("//") ||
    href === "/en" ||
    href.startsWith("/en/")
  ) {
    return href;
  }

  return href === "/" ? "/en" : `/en${href}`;
}
