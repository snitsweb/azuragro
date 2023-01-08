export interface Page {
	meta: {
		name: string,
		path: string,
		title: string,
		description: string
	},
	value: {
		sections:
			{
				alias: string,
				value: any
			}[]
	}
}