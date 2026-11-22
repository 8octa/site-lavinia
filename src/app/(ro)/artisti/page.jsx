import copy from "../../_components/artisti/copy.json";
import { createPageMetadata } from "../../_seo";
import ArtistiPage from "../../_components/artisti/page";

export const metadata = createPageMetadata({
  title: copy.metadata.title,
  description: copy.metadata.description,
  path: "/artisti",
});

export default function NaDigitalArtisti() {
  return <ArtistiPage />;
}
