import copy from "../../_components/contact/copy.json";
import { createPageMetadata } from "../../_seo";
import ContactPage from "../../_components/contact/page";

export const metadata = createPageMetadata({
  title: copy.metadata.title,
  description: copy.metadata.description,
  path: "/contact",
});

export default function NaDigitalContact() {
  return <ContactPage />;
}
