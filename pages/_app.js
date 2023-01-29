/** @jsxImportSource theme-ui */
import 'react-multi-carousel/lib/styles.css';
import 'rc-drawer/assets/index.css';
import 'swiper/css/bundle';
import 'typeface-dm-sans';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Script from 'next/script';

function MyApp({ Component, pageProps }) {

  gsap.registerPlugin(ScrollTrigger);

  return <>
          <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=UA-253465427-1"/>
          <Script
            id='google-analytics'
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-253465427-1', {
            page_path: window.location.pathname,
            });
            `,
            }}
        />
          <Component {...pageProps} />
        </>
}

export default MyApp