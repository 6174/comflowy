import { getPagesUnderRoute } from "nextra/context";
import filterRouteLocale from "nextra/filter-route-locale";
import { useRouter } from "next/router";
import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';

export function VerticalCard({ image, title, description, href }) {
  return (
    <a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex flex-row w-full rounded-lg border border-[#373A4C] 
        overflow-hidden block bg-[#252630] 
        hover:bg-[#34374b] hover:shadow-lg 
        active:bg-[#2c2f3f] active:scale-[0.98] 
        transition-all duration-200 ease-in-out
        !cursor-pointer
      `}
    >
      <img 
        className="
          w-1/3 h-44 object-cover 
          m-3 rounded-lg border border-[#31353A]
          transition-transform duration-200 ease-in-out
          group-hover:scale-105
        " 
        src={image} 
        alt={title} 
      />
      <div className={`
        flex flex-col justify-start 
        w-2/3 mx-3 mt-8 mb-2
      `}>
        <h2 className="text-xl font-bold transition-colors duration-200 ease-in-out group-hover:text-[#6b7280]">{title}</h2>
        <p className="mt-2 text-base text-[#FFFFFF]/50 transition-colors duration-200 ease-in-out group-hover:text-[#FFFFFF]/70">{description}</p>
      </div>
    </a>
  );
}