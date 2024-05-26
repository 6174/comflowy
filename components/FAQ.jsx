import styles from "./pricingpage/pricing.module.scss";

export function FAQBox({ title, children }) {
  return (
    <details
      open
      className={`last-of-type:mb-0 rounded-lg dark:bg-neutral-800 p-2 mt-4 ${styles.faq}`}
    >
      <summary>
        <strong className="text-lg">{title}</strong>
      </summary>
      <div className="nx-p-2">{children}</div>
    </details>
  )
}