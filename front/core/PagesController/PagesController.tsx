import {Page} from '@core/Types'

export interface IPagesData {
	layout: {
		alias: string
	},
	pages:
		Page[]
}

export class PagesController {
	private readonly _pagesData: IPagesData
	private routes = []

	constructor(pagesData: IPagesData) {
		this._pagesData = pagesData
		this.init()
	}

	getByPath(path: string) {
		return this._pagesData.pages.find(page => page.meta.path === path)
	}

	get pagesData() {
		return this._pagesData
	}

	private init() {
	}

}