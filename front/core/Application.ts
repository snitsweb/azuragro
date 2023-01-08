import {getDatabase} from './database'
import {SectionsController} from '@core/SectionsController/SectionsController'
import {IPagesData, PagesController} from '@core/PagesController/PagesController'
import {NetworkController} from '@core/NetworkController/NetworkController'

class Application {
	private readonly _db: IPagesData

	private _controllers: {
		sectionsController: SectionsController;
		pagesController: PagesController;
		networkController: NetworkController
	}

	constructor () {

		this._db = getDatabase()
		this._controllers = {
			sectionsController: new SectionsController(),
			networkController: new NetworkController(),
			pagesController: new PagesController(this._db),
		}
	}

	get networkController () {
		return this._controllers.networkController
	}

	get sectionsController () {
		return this._controllers.sectionsController
	}

	get pagesController () {
		return this._controllers.pagesController
	}
}

export default Application