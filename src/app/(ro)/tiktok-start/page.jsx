import copy from "../../_components/tiktok-start/copy.json";
import { createPageMetadata } from "../../_seo";
import TiktokStartPage from "../../_components/tiktok-start/page";

export const metadata = createPageMetadata({
  title: copy.metadata.title,
  description: copy.metadata.description,
  path: "/tiktok-start",
});

export default function NaDigitalTiktokStart() {
  return <TiktokStartPage />;
}
