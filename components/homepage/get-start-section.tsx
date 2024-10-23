import Link from 'next/link'
import Image from 'next/image'
import BackGroundImage from './get-start-section-images/001.png'
import logo from '../../public/logo.png'

export function GetStartedSection() {
  return (
    <section className="get-started-section">
      <Image src={BackGroundImage} alt="Background" layout="fill" objectFit="cover" style={{ backgroundPosition: 'center'}}/>
      <div className="content">
        <div className="text-button-container">
          <div className="logo">
            <Image src={logo} alt="Logo" width={60} height={60} />
            <h2>Ready to explore?</h2>
          </div>
          <div className="buttons">
            <Link href="https://github.com/6174/comflowyspace" target="_blank" rel="noopener noreferrer" className="button github">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              Github
            </Link>
            <Link href="https://app.comflowy.com" className="button get-start">
              <svg width="25" height="25" viewBox="0 0 25 31" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight:'10'}}>
                <path d="M11.6689 6.89648C11.8403 6.89648 11.9458 6.79102 11.9722 6.61963C12.3677 4.44434 12.3413 4.41797 14.6221 3.96973C14.7935 3.94336 14.9121 3.83789 14.9121 3.65332C14.9121 3.48193 14.7935 3.37646 14.6221 3.3501C12.3545 2.91504 12.4072 2.87549 11.9722 0.700195C11.9458 0.528809 11.8403 0.42334 11.6689 0.42334C11.4976 0.42334 11.3921 0.528809 11.3525 0.700195C10.9307 2.84912 10.9966 2.88867 8.70264 3.3501C8.53125 3.37646 8.42578 3.48193 8.42578 3.65332C8.42578 3.83789 8.53125 3.94336 8.71582 3.96973C10.9834 4.41797 10.9702 4.44434 11.3525 6.61963C11.3921 6.79102 11.4976 6.89648 11.6689 6.89648ZM5.2749 16.125C5.53857 16.125 5.73633 15.9404 5.77588 15.6768C6.2373 12.1831 6.34277 12.1699 9.98145 11.4844C10.2319 11.4448 10.4297 11.2603 10.4297 10.9834C10.4297 10.7197 10.2319 10.522 9.96826 10.4824C6.35596 9.98144 6.22412 9.87598 5.77588 6.31641C5.73633 6.03955 5.53857 5.85498 5.2749 5.85498C4.99805 5.85498 4.80029 6.03955 4.77393 6.32959C4.33887 9.81006 4.18066 9.81006 0.568359 10.4824C0.304688 10.5352 0.120117 10.7197 0.120117 10.9834C0.120117 11.2734 0.304688 11.4448 0.621094 11.4844C4.19385 12.0513 4.33887 12.1567 4.77393 15.6504C4.80029 15.9404 4.99805 16.125 5.2749 16.125ZM14.4111 30.6929C14.7935 30.6929 15.0835 30.416 15.1362 30.0205C16.0854 22.875 17.1006 21.7544 24.167 20.9766C24.5757 20.9238 24.8657 20.6206 24.8657 20.2383C24.8657 19.856 24.5757 19.5527 24.167 19.5C17.127 18.6826 16.125 17.6279 15.1362 10.4561C15.0703 10.0605 14.7935 9.78369 14.4111 9.78369C14.0288 9.78369 13.7388 10.0605 13.686 10.4561C12.7368 17.6016 11.7217 18.7222 4.65527 19.5C4.2334 19.5527 3.95654 19.856 3.95654 20.2383C3.95654 20.6206 4.2334 20.9238 4.65527 20.9766C11.6689 21.9126 12.6445 22.8486 13.686 30.0205C13.752 30.416 14.0288 30.6929 14.4111 30.6929Z" fill="white" />
              </svg>
              Get start
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


function GradientBg() {
  return (
    <div className="gradient-bg">
      <svg width="1347" height="800" viewBox="0 0 1347 648" fill="none" xmlns="http://www.w3.org/2000/svg">
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
