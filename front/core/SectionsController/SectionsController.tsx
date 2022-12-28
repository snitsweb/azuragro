import ExampleSection from '@sections/ExampleSection/ExampleSection'
import SliderSection from '@sections/SliderSection/SliderSection'
import GallerySection from '@sections/GallerySection/GallerySection'
import JumbotronSection from '@sections/JumbotronSection/JumbotronSection'
import TextFieldSection from '@sections/TextFieldSection/TextFieldSection'
import {Section} from 'core/SectionsController/Section'

export class SectionsController {
	private _sections: Section[] = []

	constructor () {
    	this.init()
	}

	get sections () {
    	return this._sections
	}

	getByAlias(alias: string) {
    	return this._sections.find(section => section.alias === alias)
	}

	init() {
    	this.readyToAddSections()
	}

	readyToAddSections () {
    	this._sections.push(new Section('example_section', ExampleSection))
    	this._sections.push(new Section('slider_section', SliderSection))
    	this._sections.push(new Section('gallery_section', GallerySection))
    	this._sections.push(new Section('jumbotron_section', JumbotronSection))
    	this._sections.push(new Section('textfield_section', TextFieldSection))
	}
}