import copy from "../../_components/ce-facem/copy.json";
import { createPageMetadata } from "../../_seo";
import CeFacemPage from "../../_components/ce-facem/page";

export const metadata = createPageMetadata({
  title: copy.metadata.title,
  description: copy.metadata.description,
  path: "/ce-facem",
});

export default function NaDigitalCeFacem() {
  return <CeFacemPage />;
}
