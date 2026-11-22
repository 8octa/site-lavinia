import copy from "../_components/home/copy.json";
import { createPageMetadata } from "../_seo";
import HomePage from "../_components/home/page";

export const metadata = createPageMetadata({
  title: copy.metadata.title,
  description: copy.metadata.description,
  path: "/",
});

export default function NaDigitalAcasa() {
  return <HomePage />;
}
