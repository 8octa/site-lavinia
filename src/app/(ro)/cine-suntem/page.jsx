import copy from "../../_components/cine-suntem/copy.json";
import { createPageMetadata } from "../../_seo";
import CineSuntemPage from "../../_components/cine-suntem/page";

export const metadata = createPageMetadata({
  title: copy.metadata.title,
  description: copy.metadata.description,
  path: "/cine-suntem",
});

export default function NaDigitalCineSuntem() {
  return <CineSuntemPage />;
}
