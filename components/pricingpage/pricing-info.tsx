import React from 'react';
import styles from "./pricing.module.scss";
import { t, useLang } from "@/i18n";
import { KEYS } from "@/i18n/i18n.types";

const translations = {
  en: {
    free: {
      title: "Free",
      button: "Download",
      month: "month",
      usage: {
        title: "Usage",
        gpu: "Your computer's GPU",
        credit: "GPU Credit 0"
      },
      features: {
        title: "Features",
        items: [
          "Pay only for active GPU usage",
          "No setup or installation",
          "Copilot (coming soon)",
          "Custom model (coming soon)",
          "Independent GPU (coming soon)"
        ]
      },
      support: {
        title: "Support",
        items: [
          "Community support",
          "Discord groups for paid users"
        ]
      }
    },
    hobbyist: {
      title: "Hobbyist",
      button: "Subscription",
      month: "month",
      usage: {
        title: "Usage",
        gpu: "T4, L4, A10G",
        credit: "GPU Credit 100,000"
      }
    },
    pro: {
      title: "Pro",
      button: "Subscribe Now",
      month: "month",
      usage: {
        title: "Usage",
        gpu: "T4, L4, A10G, A100(80GB)",
        credit: "GPU Credit 300,000"
      }
    }
  },
  zh: {
    free: {
      title: "免费版",
      button: "下载",
      month: "月",
      usage: {
        title: "使用额度",
        gpu: "使用你的电脑 GPU",
        credit: "GPU 点数 0"
      },
      features: {
        title: "功能特性",
        items: [
          "仅对实际 GPU 使用时间收费",
          "无需进行初始化设置或安装",
          "AI助手（即将推出）",
          "自定义模型（即将推出）",
          "独立GPU（即将推出）"
        ]
      },
      support: {
        title: "支持服务",
        items: [
          "社区支持",
          "付费用户 Discord 群组"
        ]
      }
    },
    hobbyist: {
      title: "业余版",
      button: "订阅",
      month: "月",
      usage: {
        title: "使用额度",
        gpu: "T4, L4, A10G",
        credit: "GPU 点数 100,000"
      }
    },
    pro: {
      title: "专业版",
      button: "立即订阅",
      month: "月",
      usage: {
        title: "使用额度",
        gpu: "T4, L4, A10G, A100(80GB)",
        credit: "GPU 点数 300,000"
      }
    }
  }
};

export const PricingPlanItem = ()  => {
  return (
    <div className="billing-plan-item">
      <ProPlan />
      <HobbyistPlan />
      <FreePlan />
    </div>
  )
}

function FreePlan() {
  const lang = useLang();
  const t = translations[lang === 'zh-CN' ? 'zh' : 'en'].free;

  return (
    <div className="billing-plan-item billing-plan-item-free">
      <h2>{t.title}</h2>
      <div className="price">
        <span>$0</span>/{t.month}
      </div>
      <a href="https://github.com/6174/comflowyspace/releases" target="_blank" rel="noopener noreferrer">
        <button className="free">{t.button}</button>
      </a>
      <div className="section-title">{t.usage.title}</div>
      <div className="usage">{t.usage.gpu}</div>
      <div className="usage">{t.usage.credit}</div>

      <div className="section-title">{t.features.title}</div>
      <div className="feature-list">
        {t.features.items.map((item, index) => (
          <div key={index} className="feature-item disabled">{item}</div>
        ))}
      </div>

      <div className="section-title">{t.support.title}</div>
      <div className="feature-list">
        {t.support.items.map((item, index) => (
          <div key={index} className="feature-item disabled">{item}</div>
        ))}
      </div>
    </div>
  )
}

function HobbyistPlan() {
  const lang = useLang();
  const t = translations[lang === 'zh-CN' ? 'zh' : 'en'].hobbyist;
  
  return (
    <div className="billing-plan-item billing-plan-item-hobbyist">
      <h2>{t.title}</h2>
      <div className="price">
        <span>$10</span>/{t.month}
      </div>
      <a href="https://app.comflowy.com/billing" target="_blank" rel="noopener noreferrer">
        <button className="hobbyist">{t.button}</button>
      </a>
      <div className="section-title">{t.usage.title}</div>
      <div className="usage">{t.usage.gpu}</div>
      <div className="usage">{t.usage.credit}</div>

      <div className="section-title">{translations[lang === 'zh-CN' ? 'zh' : 'en'].free.features.title}</div>
      <div className="feature-list">
        {translations[lang === 'zh-CN' ? 'zh' : 'en'].free.features.items.map((item, index) => (
          <div key={index} className={`feature-item ${index === 4 ? 'disabled' : 'enabled'}`}>
            {item}
          </div>
        ))}
      </div>

      <div className="section-title">{translations[lang === 'zh-CN' ? 'zh' : 'en'].free.support.title}</div>
      <div className="feature-list">
        {translations[lang === 'zh-CN' ? 'zh' : 'en'].free.support.items.map((item, index) => (
          <div key={index} className="feature-item enabled">{item}</div>
        ))}
      </div>
    </div>
  )
}

function ProPlan() {
  const lang = useLang();
  const t = translations[lang === 'zh-CN' ? 'zh' : 'en'].pro;
  
  return (
    <div className="billing-plan-item billing-plan-item-pro">
      <h2>{t.title}</h2>
      <div className="price">
        <span>$30</span>/{t.month}
      </div>
      <a href="https://app.comflowy.com/billing" target="_blank" rel="noopener noreferrer">
        <button className="pro">{t.button}</button>
      </a>
      
      <div className="section-title">{t.usage.title}</div>
      <div className="usage">{t.usage.gpu}</div>
      <div className="usage">{t.usage.credit}</div>
      
      <div className="section-title">{translations[lang === 'zh-CN' ? 'zh' : 'en'].free.features.title}</div>
      <div className="feature-list">
        {translations[lang === 'zh-CN' ? 'zh' : 'en'].free.features.items.map((item, index) => (
          <div key={index} className="feature-item enabled">{item}</div>
        ))}
      </div>
      
      <div className="section-title">{translations[lang === 'zh-CN' ? 'zh' : 'en'].free.support.title}</div>
      <div className="feature-list">
        {translations[lang === 'zh-CN' ? 'zh' : 'en'].free.support.items.map((item, index) => (
          <div key={index} className="feature-item enabled">{item}</div>
        ))}
      </div>
    </div>
  )
}