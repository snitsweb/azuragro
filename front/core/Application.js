import {getDatabase} from './database'
import {SectionsController} from '@core/SectionsController/SectionsController'
import {LayoutController} from '@core/LayoutController/LayoutController'

class Application {
	#db
	#controllers = {}

	constructor () {
		this.init()
	}

	get sectionsController () {
		return this.#controllers.sectionsContoller
	}

	get layoutController () {
		return this.#controllers.layoutController
	}

	init() {
		this.getData()
		this.readyToAddControllers()
	}

	getData () {
		this.#db = getDatabase()
	}

	readyToAddControllers () {
		this.#controllers.sectionsContoller = new SectionsController()
		this.#controllers.layoutController = new LayoutController()
	}
}

export default Application