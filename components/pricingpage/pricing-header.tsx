import styles from './pricing.module.scss';
import { useLang } from "@/i18n";

const translations = {
  en: {
    title: "Pricing",
    discountInfo: {
      hobbyist: {
        before: 'To thank our early supporters, enter "',
        code: 'THANKYOU',
        after: '" at the coupon section when purchasing Hobbyist to enjoy a 10% discount; enter "'
      },
      pro: {
        code: 'GRATEFUL',
        after: '" at the coupon section when purchasing Pro to enjoy a 20% discount.'
      }
    }
  },
  zh: {
    title: "价格",
    discountInfo: {
      hobbyist: {
        before: '为了感谢早期支持者，在购买业余版时输入优惠码 "',
        code: 'THANKYOU',
        after: '" 可享受9折优惠；在购买专业版时输入优惠码 "'
      },
      pro: {
        code: 'GRATEFUL',
        after: '" 可享受8折优惠。'
      }
    }
  }
};

export default function PricingHeader() {
  const lang = useLang();
  const t = translations[lang === 'zh-CN' ? 'zh' : 'en'];

  return (
    <div className={styles.pricingHeader}>
      <LineBg />
      <h1>{t.title}</h1>
      {/* <p className={styles.discountInfo}>
        {t.discountInfo.hobbyist.before}
        <span className={styles.code}>{t.discountInfo.hobbyist.code}</span>
        {t.discountInfo.hobbyist.after}
        <span className={styles.code}>{t.discountInfo.pro.code}</span>
        {t.discountInfo.pro.after}
      </p> */}
    </div>
  );
}

export function LineBg() {
  return (
    <div className={styles.lineBg}>
      <div className={styles.content}>
      </div>
    </div>
  )
}
