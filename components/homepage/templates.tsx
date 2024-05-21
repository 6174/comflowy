import { I } from "nextra/dist/types-c8e621b7";
import { TemplatesInfo } from "./templates-data";
import styles from "./tutorials.style.module.scss";
import Image from "next/image";

export function Templates() {
  return (
    <div className="templates">
      <h2>Looking for inspiration? <br/> Start with these workflow.</h2>
      <TemplatesList/>
    </div>
  )
}

function TemplatesList() {
  return (
    <div className={styles.tutorials}>
      <div className="template-card-list">
        {TemplatesInfo.map((card, index) => (
          <TemplateCard key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

interface TemplateCardProps {
  image: string;
  title: string;
  url: string;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ image, title, url }) => {
  return (
    <div
      className="template-card"
      onClick={() => {
        console.log("open", url)
      }}
    >
      <div className="image">
        <Image src={image} alt={title} width={300} height={300} />
      </div>

      <div className="content">
        <div className="title">
          {title}
        </div>
        <div className="action">
          <a href="https://app.comflowy.com/templates" target="_blank">Try Now →</a>
        </div>
      </div>
    </div>
  );
};