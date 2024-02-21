import {Cards} from './model-cards';
import { useRouter } from "next/router";
import matter from 'gray-matter';

export default function ModelCard({ pageData }) {
  return (
    <div className="mt-4">
      <Cards 
        image={pageData.frontMatter?.image} 
        title={pageData.meta?.title || pageData.frontMatter?.title || pageData.name} 
        href={pageData.path}
        tag={pageData.frontMatter?.tag}
        size={pageData.frontMatter?.size || "Unknown"}
      />
    </div>
  );
}