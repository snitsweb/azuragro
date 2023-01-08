import {AxiosInstance, default as axios} from 'axios'
import qs from 'qs'

export class NetworkController {
	private axios: AxiosInstance
	constructor() {
		this.axios = axios.create({
			baseURL: process.env.ADMIN_API_URL
		})
	}
	async getPages () {
		return await this.axios.get('/storinkas?populate=*')
			.then((res) => res)
			.catch((err) => err)
	}
}