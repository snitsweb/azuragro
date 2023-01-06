import BaseContainer from '@components/atoms/BaseContainer/BaseContainer'
import BaseFont from '@components/atoms/BaseFont/BaseFont'
import s from './Footer.module.scss'
import {FC, useContext} from 'react'
import {GlobalContext} from '@context/GlobalContext'
import Application from '@core/Application'

const Footer: FC = () => {
	const app = useContext<Application>(GlobalContext)
	return (
		<footer className={s.footer}>
			<BaseContainer>
				<BaseFont tag='span'>Footer</BaseFont>
			</BaseContainer>
		</footer>
	)
}

export default Footer
