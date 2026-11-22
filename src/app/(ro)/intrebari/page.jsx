import copy from "../../_components/intrebari/copy.json";
import { createPageMetadata } from "../../_seo";
import IntrebariPage from "../../_components/intrebari/page";

export const metadata = createPageMetadata({
  title: copy.metadata.title,
  description: copy.metadata.description,
  path: "/intrebari",
});

export default function NaDigitalIntrebari() {
  return <IntrebariPage />;
}
