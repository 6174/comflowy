import { useRouter } from 'next/router';
import { useState } from 'react';

const TITLE = {
  'zh-CN': '🥰 感谢你的阅读！',
  'en-US': '🥰 Thanks for reading!',
}

const SUBTITLE = {
  'zh-CN': ({ showImage, setShowImage }) => {
    return (
      <span>
        你可以订阅我们的{' '}
        <a href="https://comflowy.substack.com">
          <u>newsletter</u>
        </a>
        {' '}以及
        <span
          className="static underline hover:cursor-pointer"
          onClick={() => setShowImage(!showImage)}
        >
          公众号
        </span>
        ，或者加入{' '}
        <a href="https://discord.gg/cj623WvcVx">
          <u>Discord</u>
        </a>
        ，以获取最新的教程。
      </span>
    );
  },
  'en-US': () => (
    <span>
      Subscribe for free to receive new posts and support my work. Or join our{' '}
      <a href="https://discord.gg/cj623WvcVx">
        <u>Discord</u>.
      </a>
    </span>
  ),
}

export default function Subscribe() {
  const { locale } = useRouter()
  const [showImage, setShowImage] = useState(false);
  const SubtitleComponent = SUBTITLE[locale]  || (() => null);
  return (
    <div
      style={{
        border: '1px solid #EEE',
        borderRadius: '10px',
        padding: '20px 10px 10px 10px',
        margin: '20px 0px',
      }}
    >
      <div className="subscribe-heading-title">{TITLE[locale]}</div>
      <div
        style={{
          textAlign: 'center',
          paddingTop: '10px',
        }}
      >
        <SubtitleComponent showImage={showImage} setShowImage={setShowImage} />
        <div style={{
            textAlign: 'center'
          }}>
          {showImage && 
              <img 
                className="inline-block z-10 w-32 h-32 border border-slate-400 rounded-md left-1/2 mt-2 transition-opacity duration-200 ease-in-out" 
                src="/qrcode.jpg" 
                alt="Hover Image" 
              />
            
          }
        </div>
      </div>
      <iframe
        src="https://comflowy.substack.com/embed"
        width="100%"
        height="150"
        style={{ background: 'white', display: 'block', margin: '0 auto' }}
        frameborder="0"
      ></iframe>
    </div>
  )
}
