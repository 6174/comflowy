import React from 'react';

const Banner = ({ imageUrl1, imageUrl2, url1, url2, title1, title2, subtitle1, subtitle2}) => (
  <div className="flex flex-col sm:flex-row justify-between mt-4">
    <a href={url1} rel="noopener noreferrer" className="w-full sm:w-1/2 mb-2 sm:mb-0 sm:mr-2">
      <div className={"rounded-lg bg-center bg-cover h-48 flex flex-col justify-center"} style={{ backgroundImage: `url(${imageUrl1})` }}>
        <div className="text-xs text-[#232222] ml-4 uppercase font-bold">{subtitle1}</div>
        <div className="text-black text-2xl ml-4 font-bold" style={{maxWidth: '220px'}}>{title1}</div>
      </div>
    </a>
    <a href={url2} rel="noopener noreferrer" className="w-full sm:w-1/2 mb-2 sm:mb-0 sm:mr-2">
      <div className={"rounded-lg bg-center bg-cover h-48 flex flex-col justify-center"} style={{ backgroundImage: `url(${imageUrl2})` }}>
        <div className="text-xs text-[#232222] ml-4 uppercase font-bold">{subtitle2}</div>
        <div className="text-black text-2xl ml-4 font-bold" style={{maxWidth: '220px'}}>{title2}</div>
      </div>
    </a>
  </div>
);

export default Banner;