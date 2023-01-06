export const isProduction: () => boolean = () => {
	return process.env.MODE === 'production'
}