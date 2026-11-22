import "../globals.css";
import "../_components/shared/style.css";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import SiteShell from "../site-shell";
import BreadcrumbJsonLd from "../_components/BreadcrumbJsonLd";
import LocalePreference from "../_components/LocalePreference";
import { SITE_NAME, SITE_URL } from "../_seo";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "na.digital · Studio de social media în București",
    template: "%s · na.digital",
  },
  description:
    "Studio de social media din București: administrare conturi, creare conținut video, TikTok, email marketing și audit.",
  applicationName: SITE_NAME,
  authors: [{ name: "na.digital" }],
  creator: "na.digital",
  publisher: "na.digital",
  category: "marketing",
  keywords: [
    "social media București",
    "agenție social media",
    "administrare conturi social media",
    "creare conținut video",
    "TikTok",
    "email marketing",
    "audit social media",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "ro-RO": "/",
      "en-GB": "/en",
      "x-default": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "na.digital · Studio de social media în București",
    description:
      "Studio de social media din București: administrare conturi, creare conținut video, TikTok, email marketing și audit.",
    type: "website",
    locale: "ro_RO",
    url: "/",
    siteName: SITE_NAME,
    images: [
      {
        url: "/na-digital/og.png",
        width: 1200,
        height: 630,
        alt: "na.digital - studio de social media din București",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "na.digital · Studio de social media în București",
    description:
      "Studio de social media din București: administrare conturi, creare conținut video, TikTok, email marketing și audit.",
    images: ["/na-digital/og.png"],
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: "na.digital",
    url: SITE_URL,
    logo: `${SITE_URL}/na-digital/og.png`,
    image: `${SITE_URL}/na-digital/og.png`,
    description:
      "Studio de social media din București pentru administrare conturi, conținut video, TikTok, email marketing și audit.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "București",
      addressCountry: "RO",
    },
    areaServed: "România",
    priceRange: "Lei",
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "ro-RO",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <html lang="ro" data-theme="light" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <LocalePreference locale="ro" />
        <BreadcrumbJsonLd />
        <Header locale="ro" />
        <main>
          <SiteShell>{children}</SiteShell>
        </main>
        <Footer locale="ro" />
      </body>
    </html>
  );
}
