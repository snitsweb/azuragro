import {getDatabase} from './database'
import {SectionsController} from '@core/SectionsController/SectionsController'
import {IPagesData, PagesController} from '@core/PagesController/PagesController'

class Application {
	private readonly _db: IPagesData

	private _controllers: {
		sectionsController: SectionsController;
		pagesController: PagesController;
	}

	constructor () {

		this._db = getDatabase()
		this._controllers = {
			sectionsController: new SectionsController(),
			pagesController: new PagesController(this._db)
		}
	}

	get sectionsController () {
		return this._controllers.sectionsController
	}

	get pagesController () {
		return this._controllers.pagesController
	}
}

export default Application