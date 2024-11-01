import { useState } from 'react'
import styles from './pricing.module.scss'
import { useLang } from "@/i18n";

interface FAQItem {
  question: string
  answer: string
}

// 新增 FAQ 翻译对象
const faqTranslations = {
  en: [
    {
      question: "What is the difference between onpen-source version Comflowy and this cloud version Comflowy?",
      answer: "Currently, the cloud version and the open-source offline version offer the same features. The main differences are: \n 1. Using the open-source offline version requires you to deal with various installation issues on your own. The cloud version, on the other hand, is ready to use directly.\n 2. The cloud version runs on high-performance GPUs, offering stronger performance, but at a cost. The offline open-source version uses your computer's GPU, so it's free."
    },
    {
      question: "Which version should I use?",
      answer: "If you have a low-end computer or don't want to tinker, our cloud version might be more suitable for you. You can download and install our free version on your computer and run the default workflow to see how fast it generates images. Compare the speed with our cloud version. If the local image generation speed is faster, there is no need to use our cloud version."
    },
    {
      question: "Do you offer a free trial?",
      answer: "No, we don't.\n Firstly, as a startup, we currently lack the funds to cover the costs of offering free trials.Additionally, even if we were to offer trials, the amount of usage we could provide would be limited.For most people, it might only stretch to producing a few images, which isn't sufficient for comprehensive use. \n So, if you're looking to try our product, we recommend downloading and installing our open-source version, which is perpetually free and essentially offers the same features as the paid version, especially in terms of generating images. \n However, since the product is in its early stages, it might be somewhat unstable, but we're continuously making improvements. To show our appreciation for early supporters, we're offering a discount: 10 % off for Hobbyist and 20% off for Pro."
    },
    {
      question: "Can I cancel my subscription plan?",
      answer: "Yes, you are free to cancel your subscription at any time but the cancellation will be effective at the end of the current billing cycle. If you change your mind, you can un-cancel your plan before the end of the cycle."
    },
    {
      question: "Can I install custom node?",
      answer: "We don't support user installations of custom nodes due to the unique challenges they present and the pure serverless design of Comflowy. However, you can contact us by using the customer support chat so that our team can manually install them."
    },
  ],
  zh: [
    {
      question: "Comflowy 开源版本和云端版本有什么区别？",
      answer: "目前，云端版本和开源离线版本提供相同的功能。主要区别在于：\n 1. 使用开源离线版本需要你自行处理各种安装问题。而云端版本可以直接使用。\n 2. 云端版本运行在高性能 GPU 上，性能更强，但需要付费。离线开源版本使用你电脑的 GPU，所以是免费的。"
    },
    {
      question: "我应该使用哪个版本？",
      answer: "如果你的电脑配置较低或不想折腾，我们的云端版本可能更适合你。你可以在电脑上下载安装我们的免费版本，运行默认工作流程看看生成图片的速度。与我们的云端版本比较速度，如果本地生成图片速度更快，就不需要使用我们的云端版本。"
    },
    {
      question: "你们提供免费试用吗？",
      answer: "目前不提供。\n 首先，作为一个创业项目，我们目前缺乏资金来支付免费试用的成本。此外，即使我们提供试用，可用量也会很有限。对大多数人来说，可能只够生成几张图片，这不足以进行全面的体验。\n 因此，如果你想尝试我们的产品，我们建议下载安装我们的开源版本，它是永久免费的，并且基本提供与付费版本相同的功能，特别是在生成图片方面。\n 不过，由于产品还处于早期阶段，可能会有些不稳定，但我们在持续改进。为了感谢早期支持者，我们提供折扣：业余版 9 折，专业版 8 折。"
    },
    {
      question: "我可以取消订阅计划吗？",
      answer: "是的，你可以随时取消订阅，但取消将在当前计费周期结束时生效。如果你改变主意，可以在周期结束前取消退订。"
    },
    {
      question: "我可以安装自定义节点吗？",
      answer: "由于 Comflowy 采用纯无服务器设计以及自定义节点带来的独特挑战，我们不支持用户安装自定义节点。但你可以通过客服聊天联系我们，我们的团队可以手动安装它们。"
    },
  ]
}

export const PricingFaqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const lang = useLang()  // 获取当前语言

  // 根据语言选择相应的 FAQ 内容
  const faqs = faqTranslations[lang === 'zh-CN' ? 'zh' : 'en']

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const renderAnswer = (answer: string) => {
    return answer.split('\n').map((paragraph, i) => (
      <p key={i} className="answer-paragraph">
        {paragraph.trim()}
      </p>
    ))
  }

  return (
    <div className={styles.faq}>
      <div className="faq-title">FAQ</div>
      <div className="faq-section">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              <div className="question-text">
                {openIndex === index ? '▼' : '▶'} <span style={{ marginLeft: '4px' }}>Q{index + 1}</span>: {faq.question}
              </div>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                {renderAnswer(faq.answer)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}