import Image from 'next/image'
import StabilityAILogo from './all-in-one-section-images/stability.png'
import FluxLogo from './all-in-one-section-images/flux.png'
import DalleLogo from './all-in-one-section-images/dalle.png'

export function AllInOneSection() {
  return (
    <section className="all-in-one-section">
      <h2>One Platform Connecting to Global Models</h2>
      <p>
        Unlike any tool you've used before. Not only can you control the AI's output with text
        commands, but you also control the AI in various ways to generate images that meet
        your requirements.
      </p>
      <div className="model-logos">
        <div className="model-logo">
          <Image 
            src={StabilityAILogo}
            alt="Stability AI" 
            layout="responsive"
          />
        </div>
        <div className="model-logo">
          <Image 
            src={FluxLogo}
            alt="FLUX.1" 
            layout="responsive"
          />
        </div>
        <div className="model-logo">
          <Image 
            src={DalleLogo}
            alt="DALL·E 3" 
            layout="responsive"
          />
        </div>
      </div>
    </section>
  )
}
