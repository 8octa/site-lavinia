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
    default: "na.digital · Social Media Studio in Bucharest",
    template: "%s · na.digital",
  },
  description:
    "A Bucharest-based social media studio for account management, video content, TikTok, email marketing and social media audits.",
  applicationName: SITE_NAME,
  authors: [{ name: "na.digital" }],
  creator: "na.digital",
  publisher: "na.digital",
  category: "marketing",
  alternates: {
    canonical: "/en",
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
    title: "na.digital · Social Media Studio in Bucharest",
    description:
      "A Bucharest-based social media studio for account management, video content, TikTok, email marketing and social media audits.",
    type: "website",
    locale: "en_GB",
    url: "/en",
    siteName: SITE_NAME,
    images: [
      {
        url: "/na-digital/og.png",
        width: 1200,
        height: 630,
        alt: "na.digital - social media studio in Bucharest",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "na.digital · Social Media Studio in Bucharest",
    description:
      "A Bucharest-based social media studio for account management, video content, TikTok, email marketing and social media audits.",
    images: ["/na-digital/og.png"],
  },
};

export default function EnglishRootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: "na.digital",
    url: SITE_URL,
    logo: `${SITE_URL}/na-digital/og.png`,
    image: `${SITE_URL}/na-digital/og.png`,
    description:
      "A Bucharest social media studio for account management, video content, TikTok, email marketing and audits.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bucharest",
      addressCountry: "RO",
    },
    areaServed: "Romania",
    priceRange: "RON",
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/en`,
    name: SITE_NAME,
    inLanguage: "en-GB",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <html lang="en-GB" data-theme="light" data-scroll-behavior="smooth">
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
        <LocalePreference locale="en" />
        <BreadcrumbJsonLd locale="en" />
        <Header locale="en" />
        <main>
          <SiteShell>{children}</SiteShell>
        </main>
        <Footer locale="en" />
      </body>
    </html>
  );
}
