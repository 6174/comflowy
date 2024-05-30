import {Cards} from './template-cards';
import { useRouter } from "next/router";
import matter from 'gray-matter';

export default function TemplateCard({ pageData }) {
  return (
    <div className="mt-4">
      <Cards 
        image={pageData.frontMatter?.image} 
        title={pageData.meta?.title || pageData.frontMatter?.title || pageData.name} 
        href={pageData.path}
        tag={pageData.frontMatter?.tag}
        author={pageData.frontMatter?.author || "Unknown"}
        score = {pageData.frontMatter?.score || 0}
      />
    </div>
  );
}