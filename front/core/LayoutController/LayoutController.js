import { Layout } from "./Layout"

export class LayoutController {
    #layouts = []
    #layout

    constructor () {
        this.init()
    }

    init () {
        this.addLayouts()
    }

    addLayouts () {
        this.#layouts.push(new Layout('default'))
    }
}