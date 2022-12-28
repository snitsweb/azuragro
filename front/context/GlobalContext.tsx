import {createContext} from 'react'
import Application from '@core/Application'
import {isServer} from '@utils/ts/isServer'

const app = new Application()
if(!isServer()) window.app = app
export const GlobalContext = createContext(app)
export const GlobalContextProvider = GlobalContext.Provider