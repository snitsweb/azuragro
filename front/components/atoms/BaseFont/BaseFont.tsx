import s from './BaseFont.module.scss'
import {FC} from 'react'
export interface IBaseFont {
	children: string,
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span',
	className?: string,
	color?: 'default' | 'dark'
}
const BaseFont: FC<IBaseFont> = ({children, className='', tag: Tag, color='default'}) => {
	return (
		<Tag className={`${s[color]} ${className}`}>
			{children}
		</Tag>
	)
}
export default BaseFont
