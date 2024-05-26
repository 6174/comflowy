import { useIsMobile } from "@/utils/use-is-mobile";
import { HeroBlock } from "./hero";
import styles from "./homepage.module.scss";
import { HomePageMobile } from "./homepage-mobile";
import { HomePageDesktop } from "./homepage-desktop";
import { useEffect } from "react";
import _ from "lodash";
export function HomePage() {
  const isMobile = useIsMobile();
  console.log("isMobile", isMobile)

  useEffect(() => {
    const handleScroll = _.throttle(() => {
      if (window.scrollY > 100) {
        document.body.classList.add('fixed-header');
      } else {
        document.body.classList.remove('fixed-header');
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.homepage}>
      {isMobile ? <HomePageMobile /> : <HomePageDesktop />}
    </div>
  )
}