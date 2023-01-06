import Head from 'next/head'
import {useContext} from 'react'
import {GlobalContext} from '@context/GlobalContext'
import Application from '@core/Application'
import {useRouter} from 'next/router'
import {MultiSection} from '@components/organisms/MultiSection/MultiSection'
import Footer from '@components/organisms/Footer/Footer'
import Header from '@components/organisms/Header/Header'

function Page() {
	const app = useContext<Application>(GlobalContext)
	const router = useRouter()
	const page = app.pagesController.getByPath(router.asPath ? router.asPath : '/')
	return <>
		<Head>
			<title>Elo</title>
		</Head>
		<Header />
		<main>
			{page ? <MultiSection sections={page.value.sections}/> : ''}
		</main>
		<Footer />
	</>
}

export function getServerSideProps() {
	const app = new Application()
	return {
		props: {}
	}
}

export default Page