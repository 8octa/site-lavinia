import copy from "../_components/not-found/copy.en.json";
import NotFoundPage from "../_components/not-found/page";

export const metadata = {
  title: copy.metadata.title,
  description: copy.metadata.description,
  robots: { index: false, follow: false },
};

export default function EnglishNotFound() {
  return <NotFoundPage copy={copy} />;
}
