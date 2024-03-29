import { getPagesUnderRoute } from "nextra/context";
import filterRouteLocale from "nextra/filter-route-locale"
import { useRouter } from "next/router";
import { Cards } from 'nextra/components'

export function PageCard({pagesUnderRoute}){
  const { locale, defaultLocale } = useRouter();
  return filterRouteLocale(getPagesUnderRoute(pagesUnderRoute), locale, defaultLocale).map((page) => {
    return (
      <Cards.Card image arrow title={page.meta?.title || page.frontMatter?.title || page.name} href={page.route}>
        <img 
          src={page.frontMatter?.image} 
          alt=""
          style={{
            aspectRatio: 12/6.3,
            objectFit: "cover",
          }} 
        />
      </Cards.Card>
    );
  });
}

export default function BlogCards({ more = "Read more" }) {
  return (
    <div>
      <Cards className="mb-10">
        <PageCard 
          pagesUnderRoute={"/blog"}
        />
      </Cards>
    </div>
  );
}