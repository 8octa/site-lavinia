import copy from "../../_components/lunar/copy.json";
import { createPageMetadata } from "../../_seo";
import LunarPage from "../../_components/lunar/page";

export const metadata = createPageMetadata({
  title: copy.metadata.title,
  description: copy.metadata.description,
  path: "/lunar",
});

export default function NaDigitalLunar() {
  return <LunarPage />;
}
