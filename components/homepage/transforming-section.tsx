import Image from 'next/image'
import WorkflowImage from './transforming-section-images/001.png'
import AppImage from './transforming-section-images/002.png'
import PowerfulPluginImg from "./sections/powerful-plugin.png";
import CloudGPUImg from "./sections/cloud-gpu.png";
import LoadAnyModelImg from "./sections/load-any-model.png";
import VideoGernerationImg from "./sections/video-gerneration.webp";

export function TransformingSection() {
  return (
    <>
      <div className='transforming-section'>
        <div className='transforming-section-title'>
          <h2>Transforming Workflow into App</h2>
          <div className='transforming-section-title-content'>
            <p>You can easily transform the workflow interface into the familiar App interface!</p>
            <button className="try-now-btn">
              Try Now
              <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.1097 18.1044L22.1003 8.64988C22.1003 7.99071 21.6671 7.5387 20.9891 7.5387H11.5252C10.8848 7.5387 10.4422 8.01896 10.4422 8.58397C10.4422 9.13956 10.9225 9.60099 11.4969 9.60099H14.8776L18.8703 9.46915L17.1565 10.9758L8.21987 19.9219C8.00328 20.1479 7.88086 20.4115 7.88086 20.6752C7.88086 21.2308 8.38937 21.7581 8.9638 21.7581C9.22747 21.7581 9.49114 21.6451 9.71715 21.4286L18.6632 12.4825L20.1887 10.7687L20.0286 14.5919V18.1327C20.0286 18.7165 20.49 19.2062 21.0645 19.2062C21.6295 19.2062 22.1097 18.7259 22.1097 18.1044Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>
        <section className="transforming-section-content">
          <div className="left-panel">
            <Image
              src={WorkflowImage}
              alt="Workflow Interface"
              layout="responsive"
              className="workflow-image"
            />
          </div>
          <div className="middle-panel">
            <div className="arrow">→</div>
          </div>
          <div className="right-panel">
            <Image
              src={AppImage}
              alt="App Interface"
              layout="responsive"
              className="app-image"
            />
          </div>
        </section>
      </div>
      <div className='sections'>
        <div className="flexbox">
          <div className="box">
            <LoadAnyModel />
            <VideoGerneration />
          </div>
          <PowerfulPlugin />
        </div>
      </div>
    </>
  )
}

function PowerfulPlugin() {
  return (
    <div className="section-block debug-mode" style={{ backgroundColor: "transparent" }}>
      <GradientBg />
      <h3>Powerful Plugin System</h3>
      <p className="description">Thanks to the open-source community, our product boasts a robust plugin system. Through these plugins, you can tap into a variety of the latest AI technologies such as ControlNet, IPAdapter, and InstantID.</p>
      <Image src={PowerfulPluginImg.src} width={800} height={1024} alt="powerful plugin sysetm" style={{ margin: "60px 0px 0px 20px", paddingBottom: "20px", transform: "scale(1.1)" }} />
    </div>
  )
}

function LoadAnyModel() {
  return (
    <div className="sections section-block rich-templates">
      <h3>Using cloud power GPU</h3>
      <p className="description">Forget about "CUDA out of memory" errors. It's time to go BRRRR, 10x faster with 80GB of memory!</p>
      <Image className="pointer-none" src={CloudGPUImg.src} width={800} height={1024} alt="powerful plugin sysetm" style={{ margin: "40px 0px 0px 0px", transform: "scale(1.05)" }} />
    </div>
  )
}

function VideoGerneration() {
  return (
    <div className="sections section-block workflow-management" style={{ display: "flex" }}>
      <div>
        <h3>Video Generation</h3>
        <p className="description" style={{ padding: "0px 10px 0px 0px" }}>Besides creating images, you can also generate videos.</p>
      </div>
      <Image className="pointer-none" src={VideoGernerationImg.src} width={400} height={1024} alt="powerful plugin sysetm" style={{ borderRadius: "10px" }} />
    </div>
  )
}

function GradientBg() {
  return (
    <div className="gradient-bg">
      <svg width="1347" height="648" viewBox="0 0 1347 648" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5">
          <rect opacity="0.5" x="293.147" y="237.404" width="876.705" height="173.263" rx="86.6316" stroke="url(#paint0_radial_1237_15621)" strokeWidth="3" />
          <rect opacity="0.5" x="275.292" y="220.73" width="912.417" height="206.61" rx="103.305" stroke="url(#paint1_radial_1237_15621)" strokeWidth="3" />
          <rect opacity="0.5" x="309.813" y="255.269" width="843.374" height="137.534" rx="68.7671" stroke="url(#paint2_radial_1237_15621)" strokeWidth="3" />
          <rect opacity="0.4" x="216.312" y="167.809" width="1028.75" height="312.383" rx="156.191" stroke="url(#paint3_radial_1237_15621)" strokeWidth="3" />
          <rect opacity="0.4" x="255.368" y="203.139" width="950.635" height="241.723" rx="120.862" stroke="url(#paint4_radial_1237_15621)" strokeWidth="3" />
          <rect opacity="0.4" x="237.468" y="185.904" width="986.437" height="276.191" rx="138.096" stroke="url(#paint5_radial_1237_15621)" strokeWidth="3" />
          <rect opacity="0.3" x="196.783" y="147.989" width="1069.43" height="352.021" rx="176.011" stroke="url(#paint6_radial_1237_15621)" strokeWidth="3" />
          <rect opacity="0.3" x="174.001" y="132.479" width="1115" height="383.043" rx="191.521" stroke="url(#paint7_radial_1237_15621)" strokeWidth="3" />
          <rect opacity="0.2" x="152.845" y="116.968" width="1157.31" height="414.064" rx="207.032" stroke="url(#paint8_radial_1237_15621)" strokeWidth="3" />
          <rect opacity="0.1" x="104.023" y="80.7769" width="1254.95" height="486.447" rx="243.223" stroke="url(#paint9_radial_1237_15621)" strokeWidth="3" />
          <rect opacity="0.1" x="131.689" y="102.319" width="1199.62" height="443.362" rx="221.681" stroke="url(#paint10_radial_1237_15621)" strokeWidth="3" />
          <rect opacity="0.05" x="35.6748" y="38.5532" width="1391.65" height="570.894" rx="285.447" stroke="url(#paint11_radial_1237_15621)" strokeWidth="3" />
          <rect opacity="0.05" x="73.1035" y="62.6812" width="1316.79" height="522.638" rx="261.319" stroke="url(#paint12_radial_1237_15621)" strokeWidth="3" />
          <rect opacity="0.05" x="1.5" y="1.5" width="1460" height="645" rx="322.5" stroke="url(#paint13_radial_1237_15621)" strokeWidth="3" />
        </g>
        <defs>
          <radialGradient id="paint0_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(731.5 324.036) rotate(90) scale(88.1316 439.852)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
          <radialGradient id="paint1_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(731.5 324.036) rotate(90) scale(104.805 457.708)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
          <radialGradient id="paint2_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(731.5 324.036) rotate(90) scale(70.2671 423.187)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
          <radialGradient id="paint3_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(730.686 324.001) rotate(90) scale(157.691 515.874)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
          <radialGradient id="paint4_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(730.686 324) rotate(90) scale(122.362 476.818)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
          <radialGradient id="paint5_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(730.686 324) rotate(90) scale(139.596 494.719)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
          <radialGradient id="paint6_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(731.5 324) rotate(90) scale(177.511 536.216)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
          <radialGradient id="paint7_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(731.5 324) rotate(90) scale(193.021 558.999)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
          <radialGradient id="paint8_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(731.5 324) rotate(90) scale(208.532 580.155)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
          <radialGradient id="paint9_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(731.5 324) rotate(90) scale(244.723 628.976)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
          <radialGradient id="paint10_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(731.5 324) rotate(90) scale(223.181 601.311)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
          <radialGradient id="paint11_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(731.5 324) rotate(90) scale(286.947 697.325)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
          <radialGradient id="paint12_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(731.5 324) rotate(90) scale(262.819 659.896)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
          <radialGradient id="paint13_radial_1237_15621" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(731.5 324) rotate(90) scale(324 731.5)">
            <stop stopColor="#2BCBBB" />
            <stop offset="1" stopColor="#2AAFF7" />
          </radialGradient>
        </defs>
      </svg>

    </div>
  )
}