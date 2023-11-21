import React from 'react'
import type { AppProps } from 'next/app'
import 'nextra-theme-docs/style.css'
import "../styles/global.scss";
export default function Nextra({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}