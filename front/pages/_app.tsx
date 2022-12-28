import '@utils/css/index.css'
import type { AppProps } from 'next/app'
import Application from '@core/Application'
import {GlobalContextProvider} from '@context/GlobalContext'

const app = new Application()

export default function App({ Component, pageProps }: AppProps) {
	return <>
		<GlobalContextProvider value={app}>
			<Component {...pageProps} />
		</GlobalContextProvider>
	</>
}
