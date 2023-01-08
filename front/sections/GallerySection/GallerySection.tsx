import BaseContainer from '@components/atoms/BaseContainer/BaseContainer'
import s from './GallerySection.module.scss'
import GalleryItem from 'sections/GallerySection/components/GalleryItem/GalleryItem'
import {FC} from 'react'

interface IGallerySection {
	value: {
		images: {
			image: string,
			alt: string,
			title: string
		}[]
	}
}

const GallerySection: FC<IGallerySection> = ({value}) => {
	return (
		<section className={s.section}>
			<BaseContainer>
				<div className={s.section__inner}>
					<div className={s.gallery}>
						{
							value.images.length ?
								value.images.map(image => (
									<GalleryItem
										image={image.image}
										alt={image.alt}
										title={image.title}
										key={image.image}
									/>
								))
								:
								''
						}
					</div>
				</div>
			</BaseContainer>
		</section>
	)
}

export default GallerySection
