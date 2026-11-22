import defaultCopy from "./copy.json";
import localizedHref from "../localizedHref";
import Link from "next/link";

export default function NotFoundPage({ copy = defaultCopy, locale = "ro" }) {
  return (
    <div className="view">
      <section className="mx-auto max-w-[1080px] px-[28px] max-[640px]:px-[18px] page-hero">
        <h1 className="m-0 [font-family:Unbounded,_sans-serif] font-extrabold text-[clamp(30px,3.6vw,44px)] leading-[1.05] tracking-[-0.5px] max-[360px]:text-[26px]">{copy.hero.pagina_nu_a_fost_gasita}</h1>
        <p className="m-0 text-brand-muted max-w-[720px] text-[18px] text-brand-text">
          {copy.hero.linkul_este_vechi_sau_pagina_a_fost_muta}
        </p>
        <Link className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-xl border-0 px-6 [font:inherit] font-bold no-underline bg-brand-tomato text-brand-ink hover:bg-brand-tomato-light hover:text-brand-ink" href="/">
          {copy.hero.revenire_la_pagina_principala}
        </Link>
      </section>
    </div>
  );
}
