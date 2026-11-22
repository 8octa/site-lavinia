import copy from "../../_components/audit/copy.json";
import { createPageMetadata } from "../../_seo";
import AuditPage from "../../_components/audit/page";

export const metadata = createPageMetadata({
  title: copy.metadata.title,
  description: copy.metadata.description,
  path: "/audit",
});

export default function NaDigitalAudit() {
  return <AuditPage />;
}
