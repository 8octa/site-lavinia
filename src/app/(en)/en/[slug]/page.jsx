import { notFound } from "next/navigation";
import { createPageMetadata } from "../../../_seo";
import ArtistiPage from "../../../_components/artisti/page";
import artistiCopy from "../../../_components/artisti/copy.en.json";
import AuditPage from "../../../_components/audit/page";
import auditCopy from "../../../_components/audit/copy.en.json";
import CeAmFacutPage from "../../../_components/ce-am-facut/page";
import ceAmFacutCopy from "../../../_components/ce-am-facut/copy.en.json";
import CeFacemPage from "../../../_components/ce-facem/page";
import ceFacemCopy from "../../../_components/ce-facem/copy.en.json";
import CineSuntemPage from "../../../_components/cine-suntem/page";
import cineSuntemCopy from "../../../_components/cine-suntem/copy.en.json";
import ConfidentialitatePage from "../../../_components/confidentialitate/page";
import confidentialitateCopy from "../../../_components/confidentialitate/copy.en.json";
import ContactPage from "../../../_components/contact/page";
import contactCopy from "../../../_components/contact/copy.en.json";
import ContentCreationPage from "../../../_components/content-creation/page";
import contentCreationCopy from "../../../_components/content-creation/copy.en.json";
import CookiesPage from "../../../_components/cookies/page";
import cookiesCopy from "../../../_components/cookies/copy.en.json";
import EmailMarketingPage from "../../../_components/email-marketing/page";
import emailMarketingCopy from "../../../_components/email-marketing/copy.en.json";
import FacutDeManaPage from "../../../_components/facut-de-mana/page";
import facutDeManaCopy from "../../../_components/facut-de-mana/copy.en.json";
import GratisPage from "../../../_components/gratis/page";
import gratisCopy from "../../../_components/gratis/copy.en.json";
import IntrebariPage from "../../../_components/intrebari/page";
import intrebariCopy from "../../../_components/intrebari/copy.en.json";
import LunarPage from "../../../_components/lunar/page";
import lunarCopy from "../../../_components/lunar/copy.en.json";
import PentruCinePage from "../../../_components/pentru-cine/page";
import pentruCineCopy from "../../../_components/pentru-cine/copy.en.json";
import TiktokStartPage from "../../../_components/tiktok-start/page";
import tiktokStartCopy from "../../../_components/tiktok-start/copy.en.json";

const pages = {
  artisti: { Component: ArtistiPage, copy: artistiCopy },
  audit: { Component: AuditPage, copy: auditCopy },
  "ce-am-facut": { Component: CeAmFacutPage, copy: ceAmFacutCopy },
  "ce-facem": { Component: CeFacemPage, copy: ceFacemCopy },
  "cine-suntem": { Component: CineSuntemPage, copy: cineSuntemCopy },
  confidentialitate: {
    Component: ConfidentialitatePage,
    copy: confidentialitateCopy,
    noindex: true,
  },
  contact: { Component: ContactPage, copy: contactCopy },
  "content-creation": { Component: ContentCreationPage, copy: contentCreationCopy },
  cookies: { Component: CookiesPage, copy: cookiesCopy, noindex: true },
  "email-marketing": { Component: EmailMarketingPage, copy: emailMarketingCopy },
  "facut-de-mana": { Component: FacutDeManaPage, copy: facutDeManaCopy },
  gratis: { Component: GratisPage, copy: gratisCopy },
  intrebari: { Component: IntrebariPage, copy: intrebariCopy },
  lunar: { Component: LunarPage, copy: lunarCopy },
  "pentru-cine": { Component: PentruCinePage, copy: pentruCineCopy },
  "tiktok-start": { Component: TiktokStartPage, copy: tiktokStartCopy },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  return createPageMetadata({
    title: page.copy.metadata.title,
    description: page.copy.metadata.description,
    path: `/${slug}`,
    locale: "en",
    ...(page.noindex ? { robots: { index: false, follow: true } } : {}),
  });
}

export default async function EnglishPage({ params }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  const PageComponent = page.Component;
  return <PageComponent copy={page.copy} locale="en" />;
}
