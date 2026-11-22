"use client";
import copy from "./shared/copy.json";
import copyEn from "./shared/copy.en.json";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Check, Palette } from "lucide-react";

const themeNames = copy.header.theme_options.map((item) => item.name);
const themeListeners = new Set();
const serverThemeSnapshot = { theme: "light", error: "" };

function readSavedTheme() {
  if (typeof window === "undefined") return serverThemeSnapshot;

  try {
    const savedTheme = window.localStorage.getItem("na-theme");
    return {
      theme: themeNames.includes(savedTheme) ? savedTheme : "light",
      error: "",
    };
  } catch {
    return { theme: "light", error: "theme-storage-unavailable" };
  }
}

let themeSnapshot = readSavedTheme();

function getThemeSnapshot() {
  return themeSnapshot;
}

function subscribeToTheme(listener) {
  themeListeners.add(listener);
  window.addEventListener("storage", handleThemeStorage);

  return () => {
    themeListeners.delete(listener);
    window.removeEventListener("storage", handleThemeStorage);
  };
}

function notifyThemeListeners() {
  themeListeners.forEach((listener) => listener());
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
}

function handleThemeStorage(event) {
  if (event.key !== "na-theme") return;

  const savedTheme = themeNames.includes(event.newValue)
    ? event.newValue
    : "light";
  themeSnapshot = { theme: savedTheme, error: "" };
  applyTheme(savedTheme);
  notifyThemeListeners();
}

function changeTheme(nextTheme, headerStrings) {
  applyTheme(nextTheme);

  let error = "";
  try {
    window.localStorage.setItem("na-theme", nextTheme);
  } catch {
    error =
      headerStrings.tema_nu_a_putut_fi_salvata_pentru_urmatoarea_vizita;
  }

  themeSnapshot = { theme: nextTheme, error };
  notifyThemeListeners();
}

function saveLanguageCookie(nextLanguage) {
  document.cookie = `na-language=${nextLanguage}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

export default function Header({ locale = "ro" }) {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSelector, setOpenSelector] = useState(null);
  const [languageError, setLanguageError] = useState("");
  const selectorGroupRef = useRef(null);
  const strings = locale === "en" ? copyEn : copy;
  const language = locale;
  const { theme, error: themeError } = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    () => serverThemeSnapshot,
  );
  const themeErrorMessage =
    themeError === "theme-storage-unavailable"
      ? strings.header.tema_va_reveni_la_light_la_urmatoarea_vizita
      : themeError;
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    if (!openSelector) return undefined;

    function handlePointerDown(event) {
      if (!selectorGroupRef.current?.contains(event.target)) {
        setOpenSelector(null);
      }
    }

    function handleKeyDown(event) {
      if (event.key !== "Escape") return;
      const selector = openSelector;
      setOpenSelector(null);
      document.getElementById(`${selector}-selector-trigger`)?.focus();
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openSelector]);

  const services = [
    "/lunar",
    "/content-creation",
    "/audit",
    "/tiktok-start",
    "/email-marketing",
    "/facut-de-mana",
  ];
  const currentPath = pathname?.replace(/^\/en(?=\/|$)/, "") || "/";
  const currentPage = services.includes(currentPath) ? "/ce-facem" : currentPath;
  const localizedHref = (path) =>
    locale === "en" ? (path === "/" ? "/en" : `/en${path}`) : path;

  function changeLanguage(nextLanguage) {
    let cookieSaved = false;
    let storageSaved = false;

    try {
      saveLanguageCookie(nextLanguage);
      cookieSaved = true;
    } catch {
      cookieSaved = false;
    }

    try {
      window.localStorage.setItem("na-language", nextLanguage);
      storageSaved = true;
    } catch {
      storageSaved = false;
    }

    setLanguageError(
      cookieSaved || storageSaved ? "" : strings.header.language_save_error,
    );

    const targetPath =
      nextLanguage === "en"
        ? currentPath === "/"
          ? "/en"
          : `/en${currentPath}`
        : currentPath;
    router.push(targetPath);
  }

  return (
    <header className="sticky top-0 z-20 border-b border-brand-border bg-brand-white">
      <div className="mx-auto flex min-h-[72px] max-w-[1080px] items-center justify-between gap-4 px-[28px] max-[640px]:px-[18px]">
        <Link
          href={localizedHref("/")}
          className="font-[Unbounded,sans-serif] text-[22px] font-extrabold text-brand-ink no-underline"
          onClick={closeMenu}
        >
          {strings.header.na_digital}
        </Link>

        <button
          type="button"
          className="hidden min-h-11 cursor-pointer items-center justify-center rounded-xl border border-brand-border-strong bg-brand-white px-4 font-semibold text-brand-ink max-[860px]:inline-flex"
          aria-expanded={menuOpen}
          aria-controls="meniu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? strings.header.inchide : strings.header.meniu}
        </button>

        <nav
          id="meniu"
          className={`flex flex-wrap items-center gap-[22px] text-[15px] font-medium max-[860px]:absolute max-[860px]:left-0 max-[860px]:right-0 max-[860px]:top-full max-[860px]:flex-col max-[860px]:items-stretch max-[860px]:gap-0 max-[860px]:border-b max-[860px]:border-brand-border max-[860px]:bg-brand-white max-[860px]:px-[18px] max-[860px]:pt-2 max-[860px]:pb-[18px] ${
            menuOpen ? "max-[860px]:flex" : "max-[860px]:hidden"
          }`}
          aria-label={strings.header.navigare_principala}
        >
          <Link
            href={localizedHref("/pentru-cine")}
            className="py-[14px] no-underline aria-[current=page]:underline aria-[current=page]:underline-offset-[6px] aria-[current=page]:decoration-2 max-[860px]:border-b max-[860px]:border-brand-border-soft max-[860px]:px-1"
            aria-current={currentPage === "/pentru-cine" ? "page" : undefined}
            onClick={closeMenu}
          >
            {strings.header.pentru_cine}
          </Link>
          <Link
            href={localizedHref("/ce-facem")}
            className="py-[14px] no-underline aria-[current=page]:underline aria-[current=page]:underline-offset-[6px] aria-[current=page]:decoration-2 max-[860px]:border-b max-[860px]:border-brand-border-soft max-[860px]:px-1"
            aria-current={currentPage === "/ce-facem" ? "page" : undefined}
            onClick={closeMenu}
          >
            {strings.header.ce_facem}
          </Link>
          <Link
            href={localizedHref("/ce-am-facut")}
            className="py-[14px] no-underline aria-[current=page]:underline aria-[current=page]:underline-offset-[6px] aria-[current=page]:decoration-2 max-[860px]:border-b max-[860px]:border-brand-border-soft max-[860px]:px-1"
            aria-current={currentPage === "/ce-am-facut" ? "page" : undefined}
            onClick={closeMenu}
          >
            {strings.header.ce_am_facut}
          </Link>
          <Link
            href={localizedHref("/artisti")}
            className="py-[14px] no-underline aria-[current=page]:underline aria-[current=page]:underline-offset-[6px] aria-[current=page]:decoration-2 max-[860px]:border-b max-[860px]:border-brand-border-soft max-[860px]:px-1"
            aria-current={currentPage === "/artisti" ? "page" : undefined}
            onClick={closeMenu}
          >
            {strings.header.artisti}
          </Link>
          <Link
            href={localizedHref("/cine-suntem")}
            className="py-[14px] no-underline aria-[current=page]:underline aria-[current=page]:underline-offset-[6px] aria-[current=page]:decoration-2 max-[860px]:border-b max-[860px]:border-brand-border-soft max-[860px]:px-1"
            aria-current={currentPage === "/cine-suntem" ? "page" : undefined}
            onClick={closeMenu}
          >
            {strings.header.cine_suntem}
          </Link>
          <div
            ref={selectorGroupRef}
            className="flex items-center gap-2 max-[860px]:my-2 max-[860px]:self-start"
          >
          <div className="relative flex-none">
            <button
              id="theme-selector-trigger"
              type="button"
              className="inline-flex h-10 min-h-10 w-10 min-w-10 cursor-pointer items-center justify-center rounded-xl border border-brand-border bg-brand-white p-2 text-brand-ink shadow-none"
              aria-label={`${strings.header.tema}: ${strings.header.theme_options.find((item) => item.name === theme)?.label}`}
              title={`${strings.header.tema}: ${strings.header.theme_options.find((item) => item.name === theme)?.label}`}
              aria-expanded={openSelector === "theme"}
              aria-controls="theme-selector-menu"
              aria-haspopup="menu"
              onClick={() =>
                setOpenSelector((current) =>
                  current === "theme" ? null : "theme",
                )
              }
            >
              <Palette aria-hidden="true" />
            </button>
            <ul
              id="theme-selector-menu"
              className={`menu absolute top-[calc(100%+8px)] right-0 z-40 w-[190px] rounded-[14px] border border-brand-border bg-brand-white p-[6px] text-brand-ink shadow-[0_12px_32px_rgba(30,18,12,0.14)] max-[860px]:top-[calc(100%+4px)] max-[860px]:right-auto max-[860px]:left-0 ${
                openSelector === "theme" ? "block" : "hidden"
              }`}
              aria-label={strings.header.alege_tema}
              role="menu"
            >
              {strings.header.theme_options.map((item) => (
                <li key={item.name}>
                  <button
                    type="button"
                    role="menuitemradio"
                    aria-checked={theme === item.name}
                    className={`flex min-h-10 items-center gap-2.5 rounded-[9px] text-[14px] text-brand-ink [font:inherit] hover:bg-brand-cream-muted ${
                      theme === item.name ? "bg-brand-cream-muted" : ""
                    }`}
                    onClick={() => {
                      changeTheme(item.name, strings.header);
                      setOpenSelector(null);
                    }}
                  >
                    <span
                      className={`h-[18px] w-[18px] flex-none rounded-full border border-brand-border-strong ${
                        item.name === "dark"
                          ? "bg-[linear-gradient(135deg,#211a15_0_50%,#f5eee4_50%)]"
                          : item.name === "na"
                            ? "bg-[conic-gradient(#e2432b_0_25%,#8cc8ea_25%_50%,#c3a6f2_50%_75%,#e8b03a_75%)]"
                            : "bg-[linear-gradient(135deg,#fffdf8_0_50%,#1e120c_50%)]"
                      }`}
                      aria-hidden="true"
                    />
                    <span>{item.label}</span>
                    {theme === item.name && (
                      <Check className="ml-auto h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex-none">
            <button
              id="language-selector-trigger"
              type="button"
              className="inline-flex h-10 min-h-10 w-10 min-w-10 cursor-pointer items-center justify-center rounded-xl border border-brand-border bg-brand-white p-2 text-brand-ink shadow-none"
              aria-label={`${strings.header.limba}: ${strings.header.language_options.find((item) => item.name === language)?.label}`}
              title={`${strings.header.limba}: ${strings.header.language_options.find((item) => item.name === language)?.label}`}
              aria-expanded={openSelector === "language"}
              aria-controls="language-selector-menu"
              aria-haspopup="menu"
              onClick={() =>
                setOpenSelector((current) =>
                  current === "language" ? null : "language",
                )
              }
            >
              {language === "en" ? (
                <svg
                  viewBox="0 0 60 30"
                  className="h-4 w-[22px] overflow-hidden rounded-[2px] ring-1 ring-black/10"
                  aria-hidden="true"
                >
                  <rect width="60" height="30" fill="#012169" />
                  <path
                    d="M0 0 60 30M60 0 0 30"
                    stroke="#fff"
                    strokeWidth="6"
                  />
                  <path
                    d="M0 0 60 30M60 0 0 30"
                    stroke="#c8102e"
                    strokeWidth="2.5"
                  />
                  <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
                  <path d="M30 0v30M0 15h60" stroke="#c8102e" strokeWidth="6" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 30 20"
                  className="h-4 w-[22px] overflow-hidden rounded-[2px] ring-1 ring-black/10"
                  aria-hidden="true"
                >
                  <rect width="10" height="20" fill="#002b7f" />
                  <rect x="10" width="10" height="20" fill="#fcd116" />
                  <rect x="20" width="10" height="20" fill="#ce1126" />
                </svg>
              )}
            </button>
            <ul
              id="language-selector-menu"
              className={`menu absolute top-[calc(100%+8px)] right-0 z-40 w-[190px] rounded-[14px] border border-brand-border bg-brand-white p-[6px] text-brand-ink shadow-[0_12px_32px_rgba(30,18,12,0.14)] max-[860px]:top-[calc(100%+4px)] max-[860px]:right-auto max-[860px]:left-0 ${
                openSelector === "language" ? "block" : "hidden"
              }`}
              aria-label={strings.header.alege_limba}
              role="menu"
            >
              {strings.header.language_options.map((item) => (
                <li key={item.name}>
                  <button
                    type="button"
                    role="menuitemradio"
                    aria-checked={language === item.name}
                    className={`flex min-h-10 items-center gap-2.5 rounded-[9px] text-[14px] text-brand-ink [font:inherit] hover:bg-brand-cream-muted ${
                      language === item.name ? "bg-brand-cream-muted" : ""
                    }`}
                    onClick={() => {
                      setOpenSelector(null);
                      changeLanguage(item.name);
                    }}
                  >
                    <span>{item.label}</span>
                    {language === item.name && (
                      <Check className="ml-auto h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          </div>
          <Link
            href={localizedHref("/contact")}
            className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-xl bg-brand-tomato px-[18px] text-[15px] font-bold text-brand-ink no-underline hover:bg-brand-tomato-light hover:text-brand-ink max-[860px]:mt-3 max-[860px]:border-b-0"
            onClick={closeMenu}
          >
            {strings.header.hai_sa_vorbim}
          </Link>
        </nav>
      </div>
      {themeErrorMessage && (
        <span className="sr-only" role="status">
          {themeErrorMessage}
        </span>
      )}
      {languageError && (
        <span className="sr-only" role="status">
          {languageError}
        </span>
      )}
    </header>
  );
}
