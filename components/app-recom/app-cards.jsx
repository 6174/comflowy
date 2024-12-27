import { getPagesUnderRoute } from "nextra/context";
import filterRouteLocale from "nextra/filter-route-locale"
import { useRouter } from "next/router";
import { Cards, Card } from 'nextra/components'
import Image from 'next/image'

export function AppCard({ image, title, description, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex flex-row w-full rounded-lg border border-[#373A4C] 
        overflow-hidden block bg-[#252630] hover:bg-[#34374b]
      `}
    >
      <img
        className="
          w-1/3 h-44 object-cover 
          m-3 rounded-lg border border-[#31353A]
        "
        src={image}
        alt={title}
      />
      <div className={`
        flex flex-col justify-start 
        w-2/3 mx-3 mt-8 mb-2
      `}>
        <h2 className="text-xl  font-bold">{title}</h2>
        <p className="text-base text-[#FFFFFF]/50">{description}</p>
      </div>
    </a>
  );
}