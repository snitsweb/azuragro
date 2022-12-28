import { Layout } from 'core/LayoutController/Layout'

export class LayoutController {
	private _layouts: Layout[] = []
	private _layout: Layout

	constructor () {
    	this.init()
	}

	init () {
    	this.addLayouts()
	}

	addLayouts () {
    	this._layouts.push(new Layout('default'))
	}
}