import { getPagesUnderRoute } from "nextra/context";
import filterRouteLocale from "nextra/filter-route-locale"
import Link from "next/link";
import { useRouter } from "next/router";
import { Cards } from 'nextra/components'

function BlogCard(){
  const { locale, defaultLocale } = useRouter();
  return filterRouteLocale(getPagesUnderRoute("/blog"), locale, defaultLocale).map((page) => {
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
        <BlogCard />
      </Cards>
    </div>
  );
}