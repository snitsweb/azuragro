import s from './BaseButton.module.scss'
import {FC} from 'react'

interface IBaseButton {
	text: string,
	onClick?: () => void
	className?: string
	theme?: 'default' | 'secondary',
	href?: string
}
const BaseButton: FC<IBaseButton> = ({
	theme='default',
	text='',
	onClick,
	className= '',
	href = ''
}) => {
	return (
		<a
			onClick={onClick}
			className={`${s.base_button} ${s[theme]} ${className ? className : ''}`}
			href={href ? href : ''}
		>
			<span className={`${s.base_button_text} ${s[theme]}`}>{text}</span>
		</a>
	)
}

export default BaseButton
