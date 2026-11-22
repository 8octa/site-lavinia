"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

function saveLocalePreference(locale) {
  document.cookie = `na-language=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

export default function LocalePreference({ locale }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let savedLanguage;
    try {
      savedLanguage = window.localStorage.getItem("na-language");
    } catch {
      savedLanguage = null;
    }

    if (locale === "ro" && savedLanguage === "en") {
      saveLocalePreference("en");
      router.replace(pathname === "/" ? "/en" : `/en${pathname}`);
      return;
    }

    saveLocalePreference(locale);
  }, [locale, pathname, router]);

  return null;
}
