import {FC, ReactNode} from 'react'

export class Section {
	alias: string = ''
	component: FC<any>

	constructor(alias: string, component: FC<any>) {
		this.alias = alias
		this.component = component
	}
}