import { sdTutorials } from "./tutorials-data";
import styles from "./tutorials.style.module.scss"; 

export function TutorialList() {
  return (
    <div className={styles.tutorials}>
      <div className="tutorial-card-row row1">
        {sdTutorials.slice(0, 3).map((card, index) => (
          <TutorialCard key={index} {...card} />
        ))}
      </div>
      <div className="tutorial-card-row row2">
        {sdTutorials.slice(3, 6).map((card, index) => (
          <TutorialCard key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

interface TutorialCardProps {
  image: string;
  title: string;
  url: string;
  tag: string;
}

const TutorialCard: React.FC<TutorialCardProps> = ({ image, title, url }) => {
  return (
    <div
      className="tutorial-card"
      onClick={() => {
        window.open(url, "_blank")
      }}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="name" style={{ position: 'absolute' }}>
        {title}
      </div>
    </div>
  );
};