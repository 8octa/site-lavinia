import copy from "../../_components/home/copy.en.json";
import { createPageMetadata } from "../../_seo";
import HomePage from "../../_components/home/page";

export const metadata = createPageMetadata({
  title: copy.metadata.title,
  description: copy.metadata.description,
  path: "/",
  locale: "en",
});

export default function EnglishHomePage() {
  return <HomePage copy={copy} locale="en" />;
}
