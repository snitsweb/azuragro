import {getDatabase} from './database'
import {SectionsController} from '@core/SectionsController/SectionsController'
import {LayoutController} from '@core/LayoutController/LayoutController'
import {IPagesData, PagesController} from '@core/PagesController/PagesController'

class Application {
	private readonly _db: IPagesData

	private _controllers: {
		sectionsController: SectionsController;
		pagesController: PagesController;
		layoutController: LayoutController;
	}

	constructor () {

		this._db = getDatabase()
		this._controllers = {
			sectionsController: new SectionsController(),
			layoutController: new LayoutController(),
			pagesController: new PagesController(this._db)
		}
	}

	get sectionsController () {
		return this._controllers.sectionsController
	}

	get layoutController () {
		return this._controllers.layoutController
	}

	get pagesController () {
		return this._controllers.pagesController
	}
}

export default Application