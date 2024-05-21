import { Templates } from "./tutorials";
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