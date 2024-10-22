import Image from 'next/image'
import StabilityAILogo from './all-in-one-section-images/stability.png'
import FluxLogo from './all-in-one-section-images/flux.png'
import DalleLogo from './all-in-one-section-images/dalle.png'
import IdeogramLogo from './all-in-one-section-images/ideogram.png'

export function AllInOneSection() {
  return (
    <section className="all-in-one-section">
      <h2>One Platform Connecting to Global Models</h2>
      <p>
        Unlike any tool you've used before, you can use all the major AI models on the market through us. Even some closed source models. And you only need to pay for the part you use.
      </p>
      <div className="sections">
        <div className='flexbox'>
          <div className='section-block'>
            <div>
              <h3>Load Any AI Model</h3>
              <p>You can use all the current open-source models available on the market with our product, such as SD 1.5, SDXL. Even some closed-source models such as Ideogram and Flux Pro.</p>
              <div className="model-logos">
                <div className="model-logo" style={{padding: '20px'}}>
                  <Image src={StabilityAILogo} alt="Stability AI" />
                </div>
                <div className="model-logo" style={{padding: '22px'}}>
                  <Image src={FluxLogo} alt="Flux" />
                </div>
                <div className="model-logo" style={{padding: '26px'}}>
                  <Image src={DalleLogo} alt="DALL·E" />
                </div>
                <div className="model-logo" style={{padding: '0px'}}>
                  <Image src={IdeogramLogo} alt="ideogram" />
                </div>
              </div>
            </div>
          </div>
          <div className='section-block save-big'>
            <div>
              <h3>Save BIG with Comflowy</h3>
              <p>Pay one price on Comflowy and get everything.</p>
              <div className="price-comparison">
                <div className="other-services">
                  <div className="service">
                    <span className='service-name'>Ideogram</span>
                    <span className="price">$10</span>
                  </div>
                  <div className="service">
                    <span className='service-name'>Flux pro</span>
                    <span className="price">$10</span>
                  </div>
                  <div className="total">
                    <span className='service-name'>Total</span>
                    <span className="price">$20</span>
                  </div>
                </div>
                <div className="arrow">
                  <svg width="16" height="27" viewBox="0 0 16 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.6881 13.4074C15.673 12.88 15.4771 12.428 15.0703 12.0212L3.34821 0.555246C3.00167 0.223772 2.59487 0.0429688 2.09766 0.0429688C1.08817 0.0429688 0.304688 0.826451 0.304688 1.83594C0.304688 2.31808 0.500558 2.77009 0.847098 3.11663L11.394 13.4074L0.847098 23.6981C0.500558 24.0446 0.304688 24.4816 0.304688 24.9788C0.304688 25.9883 1.08817 26.7718 2.09766 26.7718C2.5798 26.7718 3.00167 26.591 3.34821 26.2595L15.0703 14.7785C15.4922 14.3867 15.6881 13.9347 15.6881 13.4074Z" fill="white" />
                  </svg>
                </div>
                <div className="comflowy-price">
                  <span style={{ fontSize: "40px" }}>Comflowy</span>
                  <span className="price">$10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
