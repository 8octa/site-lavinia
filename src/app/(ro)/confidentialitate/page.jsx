import copy from "../../_components/confidentialitate/copy.json";
import { createPageMetadata } from "../../_seo";
import ConfidentialitatePage from "../../_components/confidentialitate/page";

export const metadata = createPageMetadata({
  title: copy.metadata.title,
  description: copy.metadata.description,
  path: "/confidentialitate",
  robots: { index: false, follow: true },
});

export default function NaDigitalConfidentialitate() {
  return <ConfidentialitatePage />;
}
