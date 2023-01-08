import React, {FC} from 'react'
import s from './JumbotronSection.module.scss'
import BaseContainer from '@components/atoms/BaseContainer/BaseContainer'
import BaseFont from '@components/atoms/BaseFont/BaseFont'
import BaseButton from '@components/molecules/BaseButton/BaseButton'

interface IJumbotronSection {
	value: {
		header: string,
		description: string,
		image: {
			path: string,
			alt: string,
			title: string
		}
	}
}
const JumbotronSection: FC<IJumbotronSection> = ({value}) => {
	return (
		<section className={s.jumbotron_section}>
			<BaseContainer>
				<div className={s.jumbotron_section_inner}>
					<div className={s.content_wrapper}>
						<div className={s.content_wrapper_text_section}>
							<BaseFont tag={'h1'}>
								{value.header}
							</BaseFont>
							<BaseFont tag={'p'}>
								{value.description}
							</BaseFont>
							<BaseButton theme={'secondary'} className={s.jumbotron_section_button}
								text="Show more"
							/>
						</div>
						<img src={value.image.path} alt={value.image.alt} title={value.image.title} />
					</div>
				</div>
			</BaseContainer>
		</section>
	)
}

export default JumbotronSection