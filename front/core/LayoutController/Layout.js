export class Layout {
    #alias
    #style

    constructor ({alias, style}) {
        this.#alias = alias
        this.#style = style
    }

    get style () {
        return this.#style
    }

    get alias () {
        return this.#alias
    }
}