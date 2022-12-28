import {getDatabase} from './database'
import {SectionsController} from '@core/SectionsController/SectionsController'
import {LayoutController} from '@core/LayoutController/LayoutController'
import {PagesController} from "@core/PagesController/PagesController";

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

	get pagesController () {
		return this.#controllers.pagesController
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
		this.#controllers.pagesController = new PagesController(this.#db)
	}
}

export default Application