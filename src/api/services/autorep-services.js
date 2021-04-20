import Api from '../index.js';  

export default {
	
	fetchAutoreps (params) {
		return Api().get('/autoreps?filter='+params)
	}


}