import BaseFont from '@components/atoms/BaseFont/BaseFont'
import s from './Header.module.scss'
import {useContext} from 'react'
import Application from '@core/Application'
import {GlobalContext} from '@context/GlobalContext'

const Header = () => {
	const app = useContext<Application>(GlobalContext)
	return (
		<header className={s.header}>
			<div className="logo">
				<BaseFont tag="span">Logo</BaseFont>
			</div>
		</header>
	)
}

export default Header
