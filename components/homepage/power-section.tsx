import Image from 'next/image'
import Image001 from './hero-section-images/001.jpg'
import Image002 from './hero-section-images/002.png'
import Image003 from './hero-section-images/003.png'
import Image004 from './hero-section-images/004.png'
import Image005 from './hero-section-images/001.png'

interface Creator {
  name: string;
  image: string;
  link: string;
}

const creators: Creator[] = [
  { name: "Jimmy Wong", image: Image001.src, link: "https://app.comflowy.com/u/a26154cb-4a72-406b-aa6a-d38d4d98e8ed" },
  { name: "Sylvie", image: Image002.src, link: "https://app.comflowy.com/u/45ec8e87-b331-482f-b011-3e8bea99f2a8" },
];

export function PowerSection() {
  return (
    <section className="power-section">
      <LineBg />
      <h2>Powering the world's best AI Creators</h2>
      <div className="creators-list">
        {creators.map((creator, index) => (
          <a
            key={index}
            href={creator.link}
            target="_blank"
            rel="noopener noreferrer"
            className="creator-item"
          >
            <div className="creator-image-wrapper">
              <Image src={creator.image} alt={creator.name} width={40} height={40} className="creator-image" />
            </div>
            <span className="creator-name">{creator.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}


function LineBg() {
  return (
    <div className="bg">
      <div className="content">
      </div>
    </div>
  )
}
