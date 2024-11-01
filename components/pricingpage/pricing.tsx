import PricingHeader from "./pricing-header";
import { PricingPlanItem } from "./pricing-info";
import { PricingFaqs } from "./pricing-faq";
import styles from "./pricing.module.scss";
import { useLang } from "@/i18n";

export function PricingPage() {
  const lang = useLang();
  return (
    <div className={styles.billingPage}>
      <PricingHeader />
      <PricingPlanItem />
      <PricingFaqs />
    </div>
  )
}