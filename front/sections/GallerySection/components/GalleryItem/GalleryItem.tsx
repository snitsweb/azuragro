import s from './GalleryItem.module.scss'
import BaseButton from '@components/molecules/BaseButton/BaseButton'
import GalleryModal from 'sections/GallerySection/components/GalleryModal/GalleryModal'
import {FC, MouseEvent, useState} from 'react'

interface IGalleryItem {
	image: string,
	alt: string,
	title: string
}
const GalleryItem: FC<IGalleryItem> = ({image, alt, title}) => {

	const [isModalVisible, setIsModalVisible] = useState(false)

	const handleButtonClick = (event: MouseEvent) => {
		event.preventDefault()
		setIsModalVisible(!isModalVisible)
	}

	const closeModal = () => {
		setIsModalVisible(false)
	}

	return (
		<div className={s.gallery_item}>
			<div className={s.gallery_item_inner}>
				<img
					src={image}
					alt={alt}
					title={title}
					className={s.gallery_image}
				/>
				<div className={s.gallery_item_overlay}>
					<BaseButton
						onClick={handleButtonClick}
						text="Show more"
					/>
				</div>
			</div>
			<GalleryModal isVisible={isModalVisible} closeHandler={closeModal}>
				<img
					src={image}
					alt={alt}
					title={title}
					className={s.gallery_modal_image}
				/>
			</GalleryModal>
		</div>

	)
}

export default GalleryItem
