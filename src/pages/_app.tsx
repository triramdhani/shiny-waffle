// import '@/styles/tailwind.css'

import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/global.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
