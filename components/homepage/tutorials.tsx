import { sdTutorials } from "./tutorials-data";
import styles from "./tutorials.style.module.scss"; 

export function TutorialList() {
  return (
    <div className={styles.tutorials}>
      <div className="tutorial-card-list">
        {sdTutorials.map((card, index) => (
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
        console.log("open", url)
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