import {Cards} from './model-cards';
import { useRouter } from "next/router";

export default function ModelCard({ page }) {
  const { locale, defaultLocale } = useRouter();
  return (
    <div className="mt-4">
      <Cards 
        image={page.frontMatter?.image} 
        title={page.meta?.title || page.frontMatter?.title || page.name} 
        href={page}
        tag={page.frontMatter?.tag}
        className="mb-10"
      />
    </div>
  );
}