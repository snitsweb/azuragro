import s from './BaseContainer.module.scss'
import {FC, ReactNode} from 'react'
export interface IBaseContainer {
	children: ReactNode
}
const BaseContainer: FC<IBaseContainer> = ({children}) => {
	return (
		<div className={s.container}>
			{children}
		</div>
	)
}

export default BaseContainer
