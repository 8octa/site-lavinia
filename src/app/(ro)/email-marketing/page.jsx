import copy from "../../_components/email-marketing/copy.json";
import { createPageMetadata } from "../../_seo";
import EmailMarketingPage from "../../_components/email-marketing/page";

export const metadata = createPageMetadata({
  title: copy.metadata.title,
  description: copy.metadata.description,
  path: "/email-marketing",
});

export default function NaDigitalEmailMarketing() {
  return <EmailMarketingPage />;
}
