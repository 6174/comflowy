import React from 'react';

export const PricingPlanItem = () => {
  return (
    <div className="billing-plan-item">
      
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
      <div style={{ height: 60 }}><Button  
          style={{
            width: 140,
            display: "inline-flex",
            justifyContent: "center",
            marginTop: 10
          }}
          onClick={() => window.open('https://github.com/6174/comflowyspace/releases', '_blank')}
      >{t(KEYS.download)}</Button></div>
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