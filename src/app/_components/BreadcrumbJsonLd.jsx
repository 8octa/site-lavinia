"use client";

import { usePathname } from "next/navigation";
import { SITE_URL } from "../_seo";

const routeNames = {
  "/pentru-cine": { ro: "Pentru cine", en: "Who we work with" },
  "/ce-facem": { ro: "Ce facem", en: "What we do" },
  "/ce-am-facut": { ro: "Ce-am făcut", en: "Our work" },
  "/artisti": { ro: "Artiști", en: "Artists" },
  "/cine-suntem": { ro: "Cine suntem", en: "About us" },
  "/gratis": { ro: "Lista gratuită", en: "Free resource" },
  "/intrebari": { ro: "Întrebări", en: "FAQs" },
  "/contact": "Contact",
  "/lunar": { ro: "NA Social Media Lunar", en: "NA Social Media Monthly" },
  "/content-creation": { ro: "NA Content Creation", en: "NA Content Creation" },
  "/audit": { ro: "NA Audit", en: "NA Audit" },
  "/tiktok-start": { ro: "NA TikTok Start", en: "NA TikTok Start" },
  "/email-marketing": { ro: "NA Email Marketing", en: "NA Email Marketing" },
  "/facut-de-mana": { ro: "NA Făcut de mână", en: "NA Handmade" },
  "/confidentialitate": {
    ro: "Politica de confidențialitate",
    en: "Privacy policy",
  },
  "/cookies": { ro: "Politica de cookies", en: "Cookie policy" },
};

export default function BreadcrumbJsonLd({ locale = "ro" }) {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;

  const routePath =
    locale === "en" ? pathname.replace(/^\/en(?=\/|$)/, "") || "/" : pathname;
  const routeName = routeNames[routePath];
  if (!routeName) return null;
  const name =
    typeof routeName === "string" ? routeName : routeName[locale];
  const homeName = locale === "en" ? "Home" : "Acasă";

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: homeName,
        item: locale === "en" ? `${SITE_URL}/en` : SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: `${SITE_URL}${pathname}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
