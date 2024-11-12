import Image from 'next/image'
import styles from './homepage.module.scss'
import BlockImage1 from './from-app-to-revenue-section-images/block-001.png'
import BlockImage2 from './from-app-to-revenue-section-images/block-002.png'
import BlockImage3 from './from-app-to-revenue-section-images/block-003.png'

export function FromAppToRevenueSection() {
  return (
    <section className="from-app-to-revenue-section">
      <h2>From App to Revenue</h2>
      <p>
        The AI-powered app can be easily transformed into a revenue-generating tool.
      </p>
      <div className="sections">
        <div className="flexbox">
          <div className="section-block">
            <div> 
              <Image src={BlockImage1.src} alt="mobile" width={200} height={200} layout="responsive" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" , marginTop: "20px"}}>
              <h3 >Low Fees</h3>
              <p style={{textAlign: "center", padding: "20px 10px 0px 10px", margin: "0px" }}>
                Only 5% fee, compared to Gumroad's 10% and Patreon's 12%.
              </p>
            </div>
          </div>
          <div className="section-block">
            <div>
              <Image src={BlockImage2.src} alt="mobile" width={200} height={200} layout="responsive" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
              <h3 style={{ textAlign: "center" }}>Multi-Currency Support</h3>
              <p style={{textAlign: "center", padding: "20px 10px 0px 10px", margin: "0px" }}>
                We support world's major currencies. Ability to sell the App to global users.
              </p>
            </div>
          </div>
          <div className="section-block">
            <div>
              <Image src={BlockImage3.src} alt="mobile" width={200} height={200} layout="responsive" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
              <h3 style={{ textAlign: "center" }}>Mobile optimized</h3>
              <p style={{ textAlign: "center", padding: "20px 10px 0px 10px", margin: "0px" }}>
                Checkout designed for desktop AND mobile across all devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
