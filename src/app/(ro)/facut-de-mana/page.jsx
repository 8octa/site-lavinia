import copy from "../../_components/facut-de-mana/copy.json";
import { createPageMetadata } from "../../_seo";
import FacutDeManaPage from "../../_components/facut-de-mana/page";

export const metadata = createPageMetadata({
  title: copy.metadata.title,
  description: copy.metadata.description,
  path: "/facut-de-mana",
});

export default function NaDigitalFacutDeMana() {
  return <FacutDeManaPage />;
}
