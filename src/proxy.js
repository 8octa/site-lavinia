import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const preferredLanguage = request.cookies.get("na-language")?.value;
  const isEnglishPath = pathname === "/en" || pathname.startsWith("/en/");

  if (preferredLanguage === "en" && !isEnglishPath) {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? "/en" : `/en${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|api|robots\\.txt|sitemap\\.xml|icon\\.svg|favicon\\.ico).*)",
  ],
};
