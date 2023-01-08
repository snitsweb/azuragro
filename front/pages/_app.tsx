import '@utils/css/index.css'
import type {AppProps} from 'next/app'
import Application from '@core/Application'
import {GlobalContextProvider} from '@context/GlobalContext'
import {Roboto_Flex} from '@next/font/google'

const app = new Application()
const robotoFlex = Roboto_Flex({
	subsets: [
		'latin-ext',
		'cyrillic-ext'
	]
})

export default function App({Component, pageProps}: AppProps) {
	return <>
		<GlobalContextProvider value={app}>
			<Component {...pageProps} />
		</GlobalContextProvider>
	</>
}
