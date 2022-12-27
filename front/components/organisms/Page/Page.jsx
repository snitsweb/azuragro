import {useEffect} from 'react'
import MultiSection from '../MultiSection/MultiSection'
import ExampleSection from '../../../sections/ExampleSection/ExampleSection'


const Page = ({sections}) => {
	useEffect(() => {
		window.app.setMeta()
	}, [location])

	return (
		<>
			<ExampleSection />
			{sections && <MultiSection sections={sections} />}
		</>
	)
}

export default Page
