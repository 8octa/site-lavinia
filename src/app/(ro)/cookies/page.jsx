import copy from "../../_components/cookies/copy.json";
import { createPageMetadata } from "../../_seo";
import CookiesPage from "../../_components/cookies/page";

export const metadata = createPageMetadata({
  title: copy.metadata.title,
  description: copy.metadata.description,
  path: "/cookies",
  robots: { index: false, follow: true },
});

export default function NaDigitalCookies() {
  return <CookiesPage />;
}
