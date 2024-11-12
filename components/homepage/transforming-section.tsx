import Image, { StaticImageData } from 'next/image'
import WorkflowImage from './transforming-section-images/001.png'
import AppImage from './transforming-section-images/002.png'
import { useRef, useEffect, useState } from 'react'
// 导入图片
import Image1 from './from-app-to-revenue-section-images/001.png'
import Image2 from './from-app-to-revenue-section-images/002.png'
import Image3 from './from-app-to-revenue-section-images/003.png'
import Image4 from './from-app-to-revenue-section-images/004.png'
import Image5 from './from-app-to-revenue-section-images/005.png'
import Image6 from './from-app-to-revenue-section-images/006.png'
import Image7 from './from-app-to-revenue-section-images/007.png'
import Image8 from './from-app-to-revenue-section-images/008.png'
import Avatar1 from './from-app-to-revenue-section-images/avatar-001.jpg'
import Avatar2 from './from-app-to-revenue-section-images/avatar-002.png'

interface Card {
  id: number;
  image: StaticImageData;
  title: string;
  link: string;
  creator: string; // 新增创作者名称
  creatorAvatar: string; // 新增创作者头像
}

const cards: Card[] = [
  {
    id: 1,
    image: Image1,
    title: 'Change Portrait Back-ground',
    link: 'https://app.comflowy.com/app/portrait-background-change-workflow-75b831',
    creator: 'JimmyWong',
    creatorAvatar: Avatar1.src
  },
  {
    id: 2,
    image: Image2,
    title: 'Replacement Product Background',
    link: 'https://app.comflowy.com/app/replacement-product-background-with-rmbg-and-ipada',
    creator: 'JimmyWong',
    creatorAvatar: Avatar1.src
  },
  {
    id: 3,
    image: Image4,
    title: 'Portrait to Illustration Style',
    link: 'https://app.comflowy.com/app/app-s-portrait-to-illustration-style-4586a1',
    creator: 'Sylvie',
    creatorAvatar: Avatar2.src
  },
  {
    id: 4,
    image: Image3,
    title: 'Replacement Product Background',
    link: 'https://app.comflowy.com/app/s-replacement-product-background-with-rmbg-48cbfb',
    creator: 'JimmyWong',
    creatorAvatar: Avatar1.src
  },
  {
    id: 5,
    image: Image5,
    title: 'Image Redraw (BrushNet with IPA)',
    link: 'https://app.comflowy.com/app/s-brushnet-with-ipa-62d875',
    creator: 'Sylvie',
    creatorAvatar: Avatar2.src
  },
  {
    id: 6,
    image: Image6,
    title: 'Portrait to Sticker',
    link: 'https://app.comflowy.com/app/s-portrait-to-sticker--4fafae',
    creator: 'Sylvie',
    creatorAvatar: Avatar2.src
  },
  {
    id: 7,
    image: Image7,
    title: 'Remove Background',
    link: 'https://app.comflowy.com/app/s-remove-background-cb0e6a',
    creator: 'JimmyWong',
    creatorAvatar: Avatar1.src
  },
  {
    id: 8,
    image: Image8,
    title: 'CatVton Clothing Change',
    link: 'https://app.comflowy.com/app/s-catvton-clothing-change-workflow-b911ae',
    creator: 'JimmyWong',
    creatorAvatar: Avatar1.src
  },
];

export function TransformingSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardScrollRef = useRef<HTMLDivElement>(null);

  const cardWidth = 260; // 卡片宽度
  const cardMargin = 16; // 卡片右边距

  useEffect(() => {
    if (scrollContainerRef.current && cardScrollRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      const scrollWidth = cardScrollRef.current.scrollWidth;
      const maxScroll = scrollWidth - containerWidth;

      if (maxScroll <= 0) {
        // 如果内容不足以滚动，禁用按钮
        // 这里可以添加逻辑来禁用按钮
      }
    }
  }, []);

  const handlePrevPage = () => {
    const newPosition = Math.min(scrollPosition + (cardWidth + cardMargin) * 2, 0);
    setScrollPosition(newPosition);
  };

  const handleNextPage = () => {
    if (scrollContainerRef.current && cardScrollRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      const scrollWidth = cardScrollRef.current.scrollWidth;
      const maxScroll = scrollWidth - containerWidth;
      const newPosition = Math.max(
        scrollPosition - (cardWidth + cardMargin) * 2,
        -maxScroll
      );
      setScrollPosition(newPosition);
    }
  };
  return (
      <div className='transforming-section'>
        <div className='transforming-section-title'>
          <h2>Transforming Workflow into App</h2>
          <div className='transforming-section-title-content'>
            <p>You can easily transform the workflow interface into the familiar App interface!</p>
            <a href="https://app.comflowy.com" target="_blank" rel="noopener noreferrer" className="try-now-btn">
              Try Now
              <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.1097 18.1044L22.1003 8.64988C22.1003 7.99071 21.6671 7.5387 20.9891 7.5387H11.5252C10.8848 7.5387 10.4422 8.01896 10.4422 8.58397C10.4422 9.13956 10.9225 9.60099 11.4969 9.60099H14.8776L18.8703 9.46915L17.1565 10.9758L8.21987 19.9219C8.00328 20.1479 7.88086 20.4115 7.88086 20.6752C7.88086 21.2308 8.38937 21.7581 8.9638 21.7581C9.22747 21.7581 9.49114 21.6451 9.71715 21.4286L18.6632 12.4825L20.1887 10.7687L20.0286 14.5919V18.1327C20.0286 18.7165 20.49 19.2062 21.0645 19.2062C21.6295 19.2062 22.1097 18.7259 22.1097 18.1044Z" fill="white" />
              </svg>
            </a>
          </div>
        </div>
        <section className="transforming-section-content">
          <div className="left-panel">
            <Image
              src={WorkflowImage}
              alt="Workflow Interface"
              layout="responsive"
              className="workflow-image"
            />
          </div>
          <div className="middle-panel">
            <div className="arrow">→</div>
          </div>
          <div className="right-panel">
            <Image
              src={AppImage}
              alt="App Interface"
              layout="responsive"
              className="app-image"
            />
          </div>
        </section>
        <div className="card-scroll-container" ref={scrollContainerRef}>
          <div className="card-header">
            <h3>Take a look at cases</h3>
            <div className="pagination-buttons">
              <button className="scroll-button prev" onClick={handlePrevPage}>
                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.945312 8.6296C0.945312 8.95919 1.06773 9.2417 1.3314 9.48654L8.65772 16.6622C8.86489 16.8693 9.12856 16.9824 9.43931 16.9824C10.0608 16.9824 10.5599 16.4927 10.5599 15.8617C10.5599 15.551 10.4281 15.2779 10.2209 15.0613L3.6197 8.6296L10.2209 2.19789C10.4281 1.98131 10.5599 1.6988 10.5599 1.39746C10.5599 0.766532 10.0608 0.276855 9.43931 0.276855C9.12856 0.276855 8.86489 0.389858 8.65772 0.597028L1.3314 7.76325C1.06773 8.01751 0.945312 8.30001 0.945312 8.6296Z" fill="white" />
                </svg>
              </button>
              <button className="scroll-button next" onClick={handleNextPage}>
                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.055 8.6296C10.0456 8.30001 9.9232 8.01751 9.66895 7.76325L2.34263 0.597028C2.12605 0.389858 1.87179 0.276855 1.56104 0.276855C0.930106 0.276855 0.44043 0.766532 0.44043 1.39746C0.44043 1.6988 0.562849 1.98131 0.779436 2.19789L7.37123 8.6296L0.779436 15.0613C0.562849 15.2779 0.44043 15.551 0.44043 15.8617C0.44043 16.4927 0.930106 16.9824 1.56104 16.9824C1.86237 16.9824 2.12605 16.8693 2.34263 16.6622L9.66895 9.48654C9.93262 9.2417 10.055 8.95919 10.055 8.6296Z" fill="white" />
                </svg>
              </button>
            </div>
          </div>
          <div className="card-scroll" ref={cardScrollRef} style={{ transform: `translateX(${scrollPosition}px)` }}>
            {cards.map((card) => (
              <a key={card.id} href={card.link} target="_blank" rel="noopener noreferrer" className="card">
                <Image src={card.image} alt={card.title} layout="responsive" style={{ padding: "10px", borderRadius: "18px", maxHeight: "200px", minHeight: "200px" }} />
                <div className="creator-info">
                  <img src={card.creatorAvatar} alt={card.creator} className="creator-avatar" />
                  <div style={{ width: "210px" }}>
                    <p className="card-title" title={card.title}>{card.title}</p>
                    <span className="creator-name">{card.creator}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
  )
}



