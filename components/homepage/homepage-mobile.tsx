import { Docs } from "./docs";
import { HeroBlock } from "./hero";
import { Sections } from "./sections";

export function HomePageMobile() {
  return (
    <div className="homepage-mobile">
      <HeroBlock />
      <Sections />
      <Docs />
    </div>
  )
}