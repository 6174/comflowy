import Image, { StaticImageData } from 'next/image'
import { useRef, useEffect, useState } from 'react'

// 导入图片
import Image1 from './from-app-to-revenue-section-images/001.png'
import Image2 from './from-app-to-revenue-section-images/001.png'
import Image3 from './from-app-to-revenue-section-images/001.png'
import Image4 from './from-app-to-revenue-section-images/001.png'
import Image5 from './from-app-to-revenue-section-images/001.png'
import Image6 from './from-app-to-revenue-section-images/001.png'
import Image7 from './from-app-to-revenue-section-images/001.png'

interface Card {
  id: number;
  image: StaticImageData;
  title: string;
  link: string;
}

const cards: Card[] = [
  { id: 1, image: Image1, title: 'Partial Template #1', link: 'https://www.google.com' },
  { id: 2, image: Image2, title: 'Partial Template #2', link: 'https://www.google.com' },
  { id: 3, image: Image3, title: 'Partial Template #3', link: 'https://www.google.com' },
  { id: 4, image: Image4, title: 'Partial Template #4', link: 'https://www.google.com' },
  { id: 5, image: Image5, title: 'Partial Template #5', link: 'https://www.google.com' },
  { id: 6, image: Image6, title: 'Replace Product Background', link: 'https://www.google.com' },
  { id: 7, image: Image7, title: 'Partial Template #6', link: 'https://www.google.com' },
];

export function FromAppToRevenueSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      let animationFrameId: number;

      const scroll = () => {
        if (!isHovering) {
          scrollElement.scrollLeft += 1;
          if (scrollElement.scrollLeft >= (scrollElement.scrollWidth - scrollElement.clientWidth) / 2) {
            scrollElement.scrollLeft = 0;
          }
        }
        animationFrameId = requestAnimationFrame(scroll);
      };

      animationFrameId = requestAnimationFrame(scroll);

      return () => cancelAnimationFrame(animationFrameId);
    }
  }, [isHovering]);

  return (
    <section className="from-app-to-revenue-section">
      <h2>From App to Revenuw</h2>
      <p>
        Unlike any tool you've used before. Not only can you control the AI's output with text
        commands, but you also control the AI in various ways to generate images that meet
        your requirements.
      </p>
      <div 
        className="card-scroll" 
        ref={scrollRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {[...cards, ...cards].map((card, index) => (
          <a key={`${card.id}-${index}`} href={card.link} target="_blank" rel="noopener noreferrer" className="card">
            <Image src={card.image} alt={card.title} width={200} height={200} layout="responsive" />
            <p>{card.title}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
