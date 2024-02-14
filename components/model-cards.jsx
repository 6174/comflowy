import { getPagesUnderRoute } from "nextra/context";
import filterRouteLocale from "nextra/filter-route-locale";
import { useRouter } from "next/router";
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState } from 'react';

export function Cards({image, title, href, tag}) {
  const { theme } = useTheme()

  const bglightThemeStyle = "bg-gray-100";
  const bgdarkThemeStyle = "bg-zinc-800  hover:bg-zinc-700";
  const backgroundStyle = theme === 'dark' ? bgdarkThemeStyle : bglightThemeStyle;

  const taglightThemeStyle = "bg-gray-300";
  const tagdarkThemeStyle = "bg-slate-600";
  const tagbackgroundStyle = theme === 'dark' ? tagdarkThemeStyle : taglightThemeStyle;

  const cardlightThemeStyle = "border-gray-200 hover:shadow-md";
  const carddarkThemeStyle = "border-zinc-600 hover:border-zinc-500";
  const cardStyle = theme === 'dark' ? carddarkThemeStyle : cardlightThemeStyle;

  return (
    <Link href={href} className={`flex flex-col flex-grow w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded-lg border ${cardStyle}  overflow-hidden block `}>
      <img className="w-full flex-col h-48 object-cover" src={image} alt={title} />
      <div className={`p-2 ${backgroundStyle}`}>
        <h2 className="text-base font-bold">{title}</h2>
        <div className={`mt-1 ${tagbackgroundStyle} py-1 px-2 rounded text-sm inline-block whitespace-nowrap`}>{tag}</div>
      </div>
    </Link>
  );
}

export function PageCard({pagesUnderRoute, selectedTag}){
  const { locale, defaultLocale } = useRouter();
  return (
    <div className="flex flex-wrap justify-start gap-4">
      {filterRouteLocale(getPagesUnderRoute(pagesUnderRoute), locale, defaultLocale)
        .filter(page => !selectedTag || page.frontMatter?.tag === selectedTag)
        .map((page) => {
          return (
            <Cards 
              image={page.frontMatter?.image} 
              title={page.meta?.title || page.frontMatter?.title || page.name} 
              href={page.route}
              tag={page.frontMatter?.tag}
            />
          );
        })}
    </div>
  );
}

export default function ModelCards() {
  const [selectedTag, setSelectedTag] = useState(null);
  const tagStyle = "rounded-2xl px-4 py-1 text-white mr-2 mb-6";
  return (
    <div className="mt-6">
      <div>
        <button className={` ${tagStyle} ${selectedTag === null ? 'bg-slate-700' : 'bg-slate-500'} `} onClick={() => setSelectedTag(null)}>All</button>
        <button className={` ${tagStyle} ${selectedTag === 'Checkpoint' ? 'bg-slate-700' : 'bg-slate-500'} `} onClick={() => setSelectedTag('Checkpoint')}>Checkpoint</button>
        <button className={` ${tagStyle} ${selectedTag === 'LoRA' ? 'bg-slate-700' : 'bg-slate-500'} `} onClick={() => setSelectedTag('LoRA')}>LoRA</button>
      </div>
      <PageCard 
        pagesUnderRoute={"/model"}
        selectedTag={selectedTag}
      />
    </div>
  );
}