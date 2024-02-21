import React from 'react'
import type { AppProps } from 'next/app'
import 'nextra-theme-docs/style.css'
import "../styles/global.scss";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App ({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics strategy="lazyOnload" />
      <Component {...pageProps} />
    </>
  )
}