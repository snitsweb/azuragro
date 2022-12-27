import '@utils/css/index.css'
import type { AppProps } from 'next/app'
import Application from '@core/Application'
import {isServer} from '@utils/ts/isServer'

const app = new Application()
if(!isServer()) {
  window.app = app
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
