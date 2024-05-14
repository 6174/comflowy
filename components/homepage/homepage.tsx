import { useIsMobile } from "@/utils/use-is-mobile";
import { HeroBlock } from "./hero";
import styles from "./homepage.module.scss";
import { HomePageMobile } from "./homepage-mobile";
import { HomePageDesktop } from "./homepage-desktop";
export function HomePage() {
  const isMobile = useIsMobile();
  console.log("isMobile", isMobile)
  return (
    <div className={styles.homepage}>
      {isMobile ? <HomePageMobile /> : <HomePageDesktop />}
    </div>
  )
}

