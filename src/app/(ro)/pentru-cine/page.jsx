import copy from "../../_components/pentru-cine/copy.json";
import { createPageMetadata } from "../../_seo";
import PentruCinePage from "../../_components/pentru-cine/page";

export const metadata = createPageMetadata({
  title: copy.metadata.title,
  description: copy.metadata.description,
  path: "/pentru-cine",
});

export default function NaDigitalPentruCine() {
  return <PentruCinePage />;
}
