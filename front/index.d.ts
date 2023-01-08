import Application from '@core/Application'

export {}

declare global {
	interface Window {
		app: Application
	}
}