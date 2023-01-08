import Head from 'next/head'
import {FC, useContext} from 'react'
import {GlobalContext} from '@context/GlobalContext'
import Application from '@core/Application'
import {useRouter} from 'next/router'
import {MultiSection} from '@components/organisms/MultiSection/MultiSection'
import Footer from '@components/organisms/Footer/Footer'
import Header from '@components/organisms/Header/Header'
import {GetServerSideProps} from 'next'
import {Page} from '@core/Types'

interface IPage {
	serverSidePage: Page | undefined
}
const Page: FC<IPage> = ({serverSidePage}) => {
	const app = useContext<Application>(GlobalContext)
	const router = useRouter()
	const page = app.pagesController.getByPath(router.asPath ? router.asPath : '/')
	return <>
		<Head>
			<title>Elo</title>
		</Head>
		<Header />
		<main>
			{serverSidePage
				? <MultiSection sections={serverSidePage.value.sections}/>
				: <MultiSection sections={page ? page.value.sections : ''}/>
			}
		</main>
		<Footer />
	</>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const app = new Application()
	const route = context.req.url
	const page = app.pagesController.getByPath(route || '/')

	console.log(route)
	console.log(page)

	if(page) {
		return {
			props: {
				serverSidePage: page
			}
		}
	}
	return  {
		props: {}
	}
}

export default Page