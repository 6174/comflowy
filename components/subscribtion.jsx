import { useRouter } from 'next/router'

const TITLE = {
  'zh-CN': '🥰 感谢你的阅读！',
  'en-US': '🥰 Thanks for reading Comflowy!',
}

const SUBTITLE = {
  'zh-CN': (
    <span>
      你可以订阅我们的{' '}
      <a href="https:comflowy.substack.com">
        <u>newsletter</u>
      </a>
      ，或者加入{' '}
      <a href="https://discord.gg/cj623WvcVx">
        <u>Discord</u>
      </a>
      ，以获取最新的教程。
    </span>
  ),
  'en-US': (
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
        {SUBTITLE[locale]}
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
