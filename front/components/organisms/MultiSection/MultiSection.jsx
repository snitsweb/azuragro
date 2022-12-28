import {useContext} from "react";
import {GlobalContext} from "@context/GlobalContext";

export const MultiSection = ({sections}) => {

	const app = useContext(GlobalContext)


	return (
		<>
			{
				sections.length ? sections.map((section, i) => {
					const Section = app.sectionsController.getByAlias(section.alias).component
					return <Section value={section.value} key={`${section.alias}-${i}`} />
				}) : ''
			}
		</>
	)
}