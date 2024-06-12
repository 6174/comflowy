import { useRouter } from 'next/router'
import NextLink from "next/link"
import { DocsThemeConfig, ThemeSwitch, useConfig } from 'nextra-theme-docs'
import logo from './public/logo.png'
import githubIconPath from './public/icons/github.svg';
import discordIconPath from './public/icons/discord.svg';
import twitterIconPath from './public/icons/twitter.svg';
import Image from 'next/image';
import { t } from 'nextra/dist/types-c8e621b7'
import { text } from 'stream/consumers'

const Vercel = ({ height = 20 }) => (
  <svg height={height} viewBox="0 0 283 64" fill="none">
    <path
      fill="currentColor"
      d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
    />
  </svg>
)

const TITLE = {
  'zh-CN': 'Comflowy',
  'en-US': 'Comflowy',
}

const FEEDBACK_TEXT = {
  'zh-CN': '遇到问题？请给我们反馈 →',
  'en-US': 'Question? Give us feedback →',
}

const EDIT_TEXT = {
  'zh-CN': '在 GitHub 上编辑此页 →',
  'en-US': 'Edit this page on GitHub →',

}

const classes = {
  link: "hover:underline decoration-from-font [text-underline-position:from-font]",
}

function List({
  title,
  items,
}: {
  title: string
  items: { title: string; url: string }[]
}) {
  return (
    <ul className="text-sm flex flex-col gap-4 max-lg:w-[46%]">
      <h3 className="text-lg font-bold">{title}</h3>
      {items.map(item => (
        <li key={item.title}>
          <NextLink href={item.url} className={classes.link} target="_blank">
            {item.title}
          </NextLink>
        </li>
      ))}
    </ul>
  )
}

export default {
  project: { link: 'https://github.com/6174/comflowy' }, // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/6174/comflowy/tree/master/example', // base URL for the docs repository
  titleSuffix: ' – comflowy',
  unstable_flexsearch: true,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Comflowy',
    }
  },
  toc: {
    float: true,
  },
  navigation: {
    prev: true,
    next: true,
  },
  darkMode: false,
  nextThemes: {
    defaultTheme: 'dark',
    forcedTheme: 'dark',
  },
  footer: {
    text: () => {
      return (
        <div className="w-full">
          <div className="flex justify-between items-start mb-24 flex-wrap gap-10">
            <NextLink href="/" className="max-lg:w-full flex items-center">
              <img src={logo.src} alt="Logo" width={40} height={logo.height} />
              <p className='text-2xl font-bold ml-3'>Comflowy</p>
            </NextLink>
            <List
              title="Resources"
              items={[
                { title: "Tutorial", url: "./docs" },
                { title: "Model", url: "./model"},
                { title: "Blog", url: "./blog"},
                { title: "Template", url: "./templates"},
                { title: "Help Center", url: "https://https://comflowy.tawk.help" },
                { title: "Community", url: "https://discord.gg/t7jwRy83uN" },
              ]}
            />
            <List
              title="Product"
              items={[
                { title: "Pricing", url: "./pricing" },
                { title: "Changelog", url: "./change-log" },
                { title: "Feature Request", url: "https://comflowy.featurebase.app/" },
                { title: "Product Roadmap", url: "https://comflowy.featurebase.app/roadmap" },
              ]}
            />
            <List
              title="Compare"
              items={[
                {
                  title: "Comflowy vs. ComfyUI",
                  url: "./blog",
                },
              ]}
            />
            <List
              title="Friends"
              items={[
                { title: "Llamagen", url: "https://llamagen.ai/"},
                { title: "Way To AGI", url: "https://www.waytoagi.com/" },
              ]}
            />
            <List
              title="& More"
              items={[
                { title: "Terms of Service", url: "./terms" },
                { title: "Privacy Policy", url: "./privacy-policy" },
              ]}
            />
          </div>
          <div className="flex justify-between flex-wrap gap-10">
            <p className="text-sm">
              Copyright © {new Date().getFullYear()} Comflowy. All
              rights reserved.
            </p>
            {/* <div className="flex flex-col gap-4 lg:items-end">
              <ul className="flex gap-5">
                <Image src={githubIconPath} alt="GitHub" />
                <Image src={discordIconPath} alt="Discord" />
                <Image src={twitterIconPath} alt="Twitter" />
              </ul>
            </div> */}
          </div>
        </div>
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
      <div style={{position: "relative", left: -4, "display": "flex"}}>
        <img src="/logo.png" width="28" height="28" />
        <span className="text-pretty text-xl max-[480px]:text-sm" style={{ marginLeft: '.4em', fontWeight: 800 }}>
          {TITLE[locale]}
        </span>
      </div>
    )
  },
  head: () => {
    const {asPath} = useRouter();
    const { title, ...meta } = useConfig().frontMatter;
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={
            meta.description ||
            "Unleash endless possibilities with ComfyUI and Stable Diffusion, committed to crafting refined AI-Gen tools and cultivating a vibrant community for both developers and users."}
        />
        <meta
          name="keywords"
          content="ComfyUI, Stable Diffusion, comflowy, stable-diffusion, stable-diffusion-webui, sd.next, comfy, ui, ui-library, text-to-image, text2img, text2video, text-to-video, ComfyUI 教程, ComfyUI tutorial, How to use ComfyUI, ComfyUI 使用教程, 如何使用 ComfyUI"
        />
        <meta 
          property="og:title" 
          content={title ? title + ' – Comflowy' : 'Comflowy'}
        />
        <meta 
          property="og:url" 
          content={`https://comflowy.com${asPath}`} 
        />
        <meta 
          property="og:type" 
          content="website" 
        />
        <meta
          property="og:description"
          content={
            meta.description ||
            "Unleash endless possibilities with ComfyUI and Stable Diffusion, committed to crafting refined AI-Gen tools and cultivating a vibrant community for both developers and users."
          }
        />
        <meta 
          property="og:tags" 
          content="comflowy, comfyui, stable-diffusion, stable-diffusion-webui, sd.next, comfy, ui, ui-library" 
        />
        <meta 
          property="og:image" 
          content = {'http://www.comflowy.com/index/Comflowy_banner.png'}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={'http://www.comflowy.com/index/Comflowy_banner.png'} />
        <meta name="twitter:site:domain" content="comflowy.com" />
        <meta name="twitter:url" content="https://comflowy.com" />
        <meta name="twitter:description" content={meta.description} />
        <link rel="icon" href="/logo.png" type="image/png" />
      </>
    )
  },
  i18n: [
    { locale: 'zh-CN', text: '简体中文' },
    { locale: 'en-US', text: 'English'}
  ],
}