import { Templates } from "./templates";
import { HeroBlock } from "./hero";
import { Sections } from "./sections";

export function HomePageMobile() {
  return (
    <div className="homepage-mobile">
      <HeroBlock />
      <Sections />
      <Templates />
    </div>
  )
}