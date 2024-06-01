import React, { useRef, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-image-previewer';

const ImageSlider = ({ images }) => {
  const scrollContainerRef = useRef(null);
  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);

  const scroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', margin:'20px 0px 0px 0px' }}>
      <button 
        onMouseEnter={() => setIsHoveredLeft(true)}
        onMouseLeave={() => setIsHoveredLeft(false)}
        onClick={() => scroll(-420)} 
        style={{ 
          position: 'absolute', 
          left: '10px', 
          top: '50%', 
          transform: 'translateY(-50%)',
          backgroundColor: 'white', 
          borderRadius: '50%',
          padding: '10px', 
          boxShadow: '0px 3px 6px #00000029', 
          opacity: isHoveredLeft ? 1 : 0.5,
        }}
      >
        <img src="/chevron.left.svg" alt="Scroll left" style={{ filter: 'invert(1)' }} />
      </button>
      <div 
        ref={scrollContainerRef}
        style={{ 
          display: 'flex', 
          overflowX: 'scroll',
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none', /* IE and Edge */
        }}
      >
        {images.map((image, index) => (
          <PhotoProvider key={index}>
            <PhotoView src={image}>
              <img 
                src={image} 
                alt={`Slide ${index}`} 
                style={{ 
                  width: '400px', 
                  height: '100%', 
                  objectFit: 'contain',
                  borderRadius: '10px', 
                  margin: 'auto 10px',
                  display: 'block',
                }} 
              />
            </PhotoView>
          </PhotoProvider>
        ))}
      </div>
      <button 
        onMouseEnter={() => setIsHoveredRight(true)}
        onMouseLeave={() => setIsHoveredRight(false)}
        onClick={() => scroll(420)} 
        style={{ 
          position: 'absolute', 
          right: '10px', 
          top: '50%', 
          transform: 'translateY(-50%)',
          backgroundColor: 'white', 
          borderRadius: '50%',
          padding: '10px', 
          boxShadow: '0px 3px 6px #00000029',
          opacity: isHoveredRight ? 1 : 0.5,
        }}
      >
        <img src="/chevron.right.svg" alt="Scroll right" style={{ filter: 'invert(1)' }} />
      </button>
    </div>
  );
};

export default ImageSlider;