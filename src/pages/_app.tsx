import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonicalUrl = (
    `https://maxaljadery.com` +
    (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0];
  return (
    <>
      <DefaultSeo canonical={canonicalUrl} />
      <Component {...pageProps} />
    </>
  );
}
