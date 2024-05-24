import React from 'react';
import styles from "./pricing.module.scss";
import { t, useLang } from "@/i18n";
import { KEYS } from "@/i18n/i18n.types";

const localPlansInfo = [{
  productName: "Hobbyist",
  price: "1000"
}, {
  productName: "Pro",
  price: "3000"
}, {
  productName: "Mega",
  price: "10000"
}];

interface BillingPageProps {
  plans: SelectStripeProductType[];
  subscriptions: SelectStripeSubscriptionType[];
}

export const PricingPlanItem = (props: BillingPageProps)  => {
  const { plans, subscriptions } = props;
  const planMap: Record<string, SelectStripeProductType & any> = {};

  if (Array.isArray(localPlansInfo)) {
    localPlansInfo.forEach(plan => planMap[plan.productName] = plan);
  }

  if (Array.isArray(plans)) {
    plans.forEach(plan => planMap[plan.name] = { 
      ...planMap[plan.name], 
      ...plan
    });
  }

  let sortedPlans = [];
  if (Array.isArray(plans)) {
    sortedPlans = plans.sort((a, b) => {
      const aprice = a.prices[0].unit_amount;
      const bprice = b.prices[0].unit_amount;
      return aprice - bprice
    });
  }

  return (
    <div className="billing-plan-item">
      <div className="plan-table">
        <table border={0}>
          <thead>
            <tr className="noborder">
              <th style={{width: 180}}></th>
              <th>
                <FreePlan/>
              </th>
              <th>
                <HobbyistPlan/>
              </th>
              <th>
                <ProPlan/>
              </th>
            </tr>
          </thead>
          <TableBodyDetails/>
        </table>
      </div>
    </div>
  )
}

function FreePlan() {
  return (
    <div className="billing-plan-item">
      <h2>Free</h2>
      <div className="content">
        <div className="price">
          <span style={{
            fontSize: 30
          }}>$0</span>/{t(KEYS.month)} 
        </div>
      </div>
    </div>
  )
}

function HobbyistPlan() {
  return (
    <div className="billing-plan-item">
      <h2>Hobbyist</h2>
      <div className="content">
        <div className="price">
          <span style={{
            fontSize: 30
          }}>$10</span>/{t(KEYS.month)} 
        </div>
      </div>
    </div>
  )
}

function ProPlan() {
  return (
    <div className="billing-plan-item">
      <h2>Pro</h2>
      <div className="content">
        <div className="price">
          <span style={{
            fontSize: 30
          }}>$20</span>/{t(KEYS.month)} 
        </div>
      </div>
    </div>
  )
}

function TableBodyDetails() {

  const FeaturesInfo = [{
    name: t(KEYS.payOnlyForActiveGPUUsage),
    supported: [false, true, true]
  }, {
    name: t(KEYS.noSetupInstallation),
    supported: [false, true, true]
  }, {
    name: "Copilot (coming soon)",
    supported: [false, true, true]
  // }, {
  //   name: "App Publish (coming soon)",
  //   supported: [false, true, true]
  }, {
    name: "Custom model (coming soon)",
    supported: [false, true, true]
  }, {
    name: "Independent GPU (coming soon)",
    supported: [false, false, true]
  }];

  const SupportInfo = [{
    name: t(KEYS.communitySupport),
    supported: [true, true, true]
  }, {
    name: t(KEYS.discordGroupsForPaidUsers),
    supported: [false, true, true]
  }];

  return (
    <tbody>
      <tr className="noborder">
        <td><span style={{
            fontSize: 18,
            fontWeight: "bold"
          }}>{t(KEYS.usage)}</span></td>
      </tr>
      <tr>
        <td>GPU</td>
        <td>{t(KEYS.yourComputerGPU)}</td>
        <td>T4, L4, A10G</td>
        <td>T4, L4, A10G, A100</td>
      </tr>
      <tr>
        <td>{t(KEYS.gpuCredit)}</td>
        <td>0</td>
        <td>100,000</td>
        <td>300,000</td>
      </tr>
      <tr className="noborder">
        <td><span style={{
            fontSize: 18,
            fontWeight: "bold",
          }}>{t(KEYS.features)}</span></td>
      </tr>
      {FeaturesInfo.map((feature, i) => (
        <tr key={i}>
          <td>{feature.name}</td>
          {feature.supported.map((supported, i) => (
            <td key={i}>{supported ? "✅" : "❌"}</td>
          ))}
        </tr>
      ))}
      <tr className="noborder">
        <td><span style={{
            fontSize: 18,
            fontWeight: "bold"
          }}>{t(KEYS.support)}</span></td>
      </tr>
      {SupportInfo.map((support, i) => (
        <tr key={i}>
          <td>{support.name}</td>
          {support.supported.map((supported, i) => (
            <td key={i}>{supported ? "✅" : "❌"}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}