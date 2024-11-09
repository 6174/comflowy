import { Templates } from "./templates";
import { HeroBlock } from "./hero";
import { PowerSection } from './power-section';
import { TransformingSection } from './transforming-section';
import { FromAppToRevenueSection } from './from-app-to-revenue-section';
import { AllInOneSection } from './all-in-one-section';
import { GetStartedSection } from './get-start-section';

export function HomePageMobile() {
  return (
    <div className="homepage-mobile">
      <HeroBlock />
      <PowerSection />
      <TransformingSection />
      <FromAppToRevenueSection />
      <AllInOneSection />
      <GetStartedSection />
    </div>
  )
}