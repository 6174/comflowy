import { Docs } from "./docs";
import { HeroBlock } from "./hero";
import { Sections } from "./sections";

export function HomePageDesktop() {
  return (
    <div className="homepage-desktop">
      <HeroBlock />
      <Sections />
      <Docs />
    </div>
  )
}