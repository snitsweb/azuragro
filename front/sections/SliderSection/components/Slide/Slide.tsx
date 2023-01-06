import s from './Slide.module.scss'
import {SplideSlide} from '@splidejs/react-splide'
import {FC} from 'react'
import Image from 'next/image'

export interface ISlide {
	slide: {
		image: string,
		alt: string,
		title: string
	}
}
const Slide: FC<ISlide> = ({slide}) => {
	return (
		<SplideSlide className={s.slide}>
			<img
				className={s.slide__image}
				src={slide.image}
				alt={slide.alt}
				title={slide.title}
			/>
		</SplideSlide>
	)
}

export default Slide
