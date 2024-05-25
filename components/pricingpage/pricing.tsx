import { PricingPlanItem } from "./pricing-info";
import { PricingFaqs } from "./pricing-faq";
import styles from "./pricing.module.scss";

export function PricingPage() {
  return (
    <div className={styles.billingPage}>
      <PricingPlanItem plans={[]} subscriptions={[]} />
    </div>
  )
}