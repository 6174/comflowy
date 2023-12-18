import { useRouter } from 'next/router'
const Vercel = ({ height = 20 }) => (
  <svg height={height} viewBox="0 0 283 64" fill="none">
    <path
      fill="currentColor"
      d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
    />
  </svg>
)

const TITLE = {
  'zh-CN': 'Comflowy - ComfyUI 社区',
  'en-US': 'Comflowy - ComfyUI Community',
}

const FEEDBACK_TEXT = {
  'zh-CN': '遇到问题？请给我们反馈 →',
  'en-US': 'Question? Give us feedback →',
}

const EDIT_TEXT = {
  'zh-CN': '在 GitHub 上编辑此页 →',
  'en-US': 'Edit this page on GitHub →',

}

export default {
  project: { link: 'https://github.com/6174/comflowy' }, // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/6174/comflowy/tree/master/example', // base URL for the docs repository
  titleSuffix: ' – comflowy',
  unstable_flexsearch: true,
  toc: {
    float: true,
  },
  navigation: {
    prev: true,
    next: true,
  },
  darkMode: true,
  footer: {
    text: () => {
      return (
        <a
          href="https://vercel.com/?utm_source=swr"
          target="_blank"
          rel="noopener"
        >
          <span>Powered by: </span>
          <span>
              <b>Vercel</b> & <b>Nextra</b>
          </span>
        </a>
      )
    },
  },
  chat: {
    link: 'https://discord.gg/t7jwRy83uN',
  },
  feedback: {
    content: function useText() {
      const { locale } = useRouter()
      return FEEDBACK_TEXT[locale]
    }
  },
  editLink: {
    text: function useText() {
      const { locale } = useRouter()
      return EDIT_TEXT[locale]
    }
  },
  logo: function Logo() {
    const { locale } = useRouter()
    return (
      <>
        <svg width="30" height="30" viewBox="0 0 30 30" style={{ opacity: 1 }}>
          <path
            transform="translate(0.000000,30.000000) scale(0.10000,-0.10000)"
            fill="#000000"
            stroke="none"
            d="M105 261 c-45 -20 -70 -60 -70 -112 0 -42 5 -53 33 -81 28 -28 39
  -33 82 -33 43 0 54 5 82 33 28 28 33 39 33 82 0 42 -5 54 -31 81 -33 33 -92
  46 -129 30z m35 -65 c0 -8 -7 -16 -15 -20 -8 -3 -15 -15 -15 -26 0 -11 7 -23
  15 -26 18 -7 20 -34 2 -34 -45 0 -70 67 -38 99 24 24 51 28 51 7z m83 -1 c-4
  -15 -66 -12 -71 3 -3 10 6 13 34 10 22 -2 38 -7 37 -13z m-33 -45 c0 -5 -13
  -10 -30 -10 -16 0 -30 5 -30 10 0 6 14 10 30 10 17 0 30 -4 30 -10z m-10 -45
  c0 -8 -4 -15 -9 -15 -13 0 -22 16 -14 24 11 11 23 6 23 -9z"
          />
        </svg>
        <strong>
          {TITLE[locale]}
        </strong>
      </>
    )
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Comflowy: ComfyUI 中文社区"
      />
      <meta name="og:title" content="Comflowy: ComfyUI 中文社区" />
      <meta name="og:tags" content="comflowy, comfyui, stable-diffusion, stable-diffusion-webui, sd.next, comfy, ui, ui-library" />
    </>
  ),
  i18n: [
    { locale: 'zh-CN', text: '简体中文' },
    { locale: 'en-US', text: 'English'}
  ],
}