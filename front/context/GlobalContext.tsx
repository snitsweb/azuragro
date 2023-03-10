import {createContext} from 'react'
import Application from '@core/Application'
import {isServer} from '@utils/ts/isServer'
import {isProduction} from '@utils/ts/isProduction'

const app = new Application()
if(!isServer() && !isProduction()) window.app = app
export const GlobalContext = createContext(app)
export const GlobalContextProvider = GlobalContext.Provider