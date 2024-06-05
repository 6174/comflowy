import type { AppProps } from 'next/app'
import { useEffect} from "react";
import 'nextra-theme-docs/style.css'
import "../styles/global.scss";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { useRouter } from 'next/router';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

export default function App ({ Component, pageProps }) {
  const router = useRouter();
  const path = router.pathname;
  useEffect(() => {
    if (window) {
      const realPath = path.replace(".en-US", "").replace('.zh-CN', "");
      document.documentElement.dataset.page = realPath;
    }
  }, [path])
  return (
    <>
      <GoogleAnalytics strategy="lazyOnload" />
      <Component {...pageProps} />
      <TawkMessengerReact
        propertyId="66602842981b6c564778b9d7"
        widgetId="1hvjpqh9n"
      />
    </>
  )
}