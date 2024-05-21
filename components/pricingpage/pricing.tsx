import { PricingPlanItem } from "./pricing-info";
import { PricingFaqs } from "./pricing-faq";

export function PricingPage() {
  return (
    <div className="homepage-desktop">
      <PricingPlanItem />
      <PricingFaqs />
    </div>
  )
}