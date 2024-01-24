import { getPagesUnderRoute } from "nextra/context";
import filterRouteLocale from "nextra/filter-route-locale";
import { useRouter } from "next/router";
import Link from 'next/link';
import { useTheme } from 'next-themes';

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
    <Link href={href} className={`rounded-lg border ${cardStyle}  overflow-hidden w-80 h-72 block `}>
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className={`p-4 ${backgroundStyle}`}>
        <h2 className="text-xl font-bold">{title}</h2>
        <div className={`mt-1 ${tagbackgroundStyle} py-1 px-2 rounded inline-block whitespace-nowrap`}>{tag}</div>
      </div>
    </Link>
  );
}

export function PageCard({pagesUnderRoute}){
  const { locale, defaultLocale } = useRouter();
  return (
    <div className="flex flex-wrap justify-start gap-4">
    {filterRouteLocale(getPagesUnderRoute(pagesUnderRoute), locale, defaultLocale).map((page) => {
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
  return (
    <div className="mt-4">
      <PageCard 
        pagesUnderRoute={"/model"}
      />
    </div>
  );
}