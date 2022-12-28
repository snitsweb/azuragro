export class Layout {
	private readonly _alias: string
	private readonly _style: string

	constructor ({alias, style}) {
		this._alias = alias
		this._style = style
	}

	get style () {
		return this._style
	}

	get alias () {
		return this._alias
	}
}