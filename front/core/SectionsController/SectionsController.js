import ExampleSection from '@sections/ExampleSection/ExampleSection'
import SliderSection from '@sections/SliderSection/SliderSection'
import GallerySection from '@sections/GallerySection/GallerySection'
import JumbotronSection from '@sections/JumbotronSection/JumbotronSection'
import TextFieldSection from '@sections/TextFieldSection/TextFieldSection'
import {Section} from './Section'

export class SectionsController {
    #sections = []

    constructor () {
        this.init()
    }

    get sections () {
        return this.#sections
    }

    getByAlias(alias) {
        return this.#sections.find(section => section.alias === alias)
    }

    init() {
        this.readyToAddSections()
    }

    readyToAddSections () {
        this.#sections.push(new Section('example_section', ExampleSection))
        this.#sections.push(new Section('slider_section', SliderSection))
        this.#sections.push(new Section('gallery_section', GallerySection))
        this.#sections.push(new Section('jumbotron_section', JumbotronSection))
        this.#sections.push(new Section('textfield_section', TextFieldSection))
    }
}