import Api from '../index.js';

export default {

	fetchPage(car_id) {
		return Api().get('/viewcounts/'+car_id)
	},

	fetchHotCar() {
		return Api().get('/hot-cars')
	},

	fetchInactiveCar() {
		return Api().get('/cars/inactive')
	},

	fetchActiveCar() {
		return Api().get('/cars/active')
	},

	fetchCarDetails(id) {
		return Api().get('/cars/details/'+id)
	},

	fetchEditCarDetails(id) {
		return Api().get('/cars/car-details/'+id)
	},

	postUserCar(params) {
        const config = { headers: { 'content-type': 'multipart/form-data' } }
		return Api().post('/cars/post', params, config)
	},

	rotateAutoImage(id) {
		return Api().get('/cars/rotate/image/'+id)
	},

	updateCarDetails(params) {
		console.log(params['params'])
		return Api().post('/cars/edit/'+params['id'], params['params'])
	},

	postSold(batch) {
		return Api().get('/cars/sold/'+batch)
	},

	activatePlan(id) {
		return Api().get('/cars/activate-credit/'+id)
	}
}