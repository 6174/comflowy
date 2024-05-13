import { HeroBlock } from "./hero";
import styles from "./homepage.module.scss";
export function HomePage() {
  return (
    <div className={styles.homepage}>
      <HeroBlock />
    </div>
  )
}