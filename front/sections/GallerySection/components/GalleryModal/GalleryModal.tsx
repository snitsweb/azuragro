import s from './GalleryModal.module.scss'
import BaseFont from '@components/atoms/BaseFont/BaseFont'
import {FC, ReactNode, useEffect, useState} from 'react'

interface IGalleryModal {
	children: ReactNode,
	isVisible?: boolean,
	closeHandler: () => void
}

const GalleryModal: FC<IGalleryModal> = ({children, isVisible=false, closeHandler}) => {

	const [mounted, setMounted] = useState(isVisible)

	useEffect(() => {
		if(isVisible) {
			setMounted(true)
		} else {
			setTimeout(() => {
				setMounted(isVisible)
			}, 290)
		}
	}, [isVisible])

	return (
		<div className={s.gallery_modal}>
			{mounted && (
				<div className={`${s.gallery_modal_inner} ${isVisible ? s.fadeIn : s.fadeOut}`}>
					{children}
					<div
						className={s.gallery_close}
						onClick={closeHandler}
					>
						<BaseFont className={s.gallery_close_text} tag="h4">Close</BaseFont>
					</div>
				</div>
			)}
		</div>
	)
}

export default GalleryModal
