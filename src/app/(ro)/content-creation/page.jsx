import copy from "../../_components/content-creation/copy.json";
import { createPageMetadata } from "../../_seo";
import ContentCreationPage from "../../_components/content-creation/page";

export const metadata = createPageMetadata({
  title: copy.metadata.title,
  description: copy.metadata.description,
  path: "/content-creation",
});

export default function NaDigitalContentCreation() {
  return <ContentCreationPage />;
}
