import copy from "../../_components/gratis/copy.json";
import { createPageMetadata } from "../../_seo";
import GratisPage from "../../_components/gratis/page";

export const metadata = createPageMetadata({
  title: copy.metadata.title,
  description: copy.metadata.description,
  path: "/gratis",
});

export default function NaDigitalGratis() {
  return <GratisPage />;
}
