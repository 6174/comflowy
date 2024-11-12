import { Templates } from "./templates";
import { HeroBlock } from "./hero";
import { PowerSection } from './power-section';
import { TransformingSection } from './transforming-section';
import { FromAppToRevenueSection } from './from-app-to-revenue-section';
import { AllInOneSection } from './all-in-one-section';
import { GetStartedSection } from './get-start-section';
import { Sections } from "./sections";
import { EditorSection } from "./editor";

export function HomePageDesktop() {
  return (
    <div className="homepage-desktop">
      <HeroBlock />
      <PowerSection />
      <TransformingSection />
      <FromAppToRevenueSection />
      <AllInOneSection />
      <EditorSection />
      <GetStartedSection />
    </div>
  )
}