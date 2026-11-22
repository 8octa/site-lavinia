import copy from "../../_components/ce-am-facut/copy.json";
import { createPageMetadata } from "../../_seo";
import CeAmFacutPage from "../../_components/ce-am-facut/page";

export const metadata = createPageMetadata({
  title: copy.metadata.title,
  description: copy.metadata.description,
  path: "/ce-am-facut",
});

export default function NaDigitalCeAmFacut() {
  return <CeAmFacutPage />;
}
