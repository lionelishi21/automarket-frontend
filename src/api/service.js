import Api from './index.js';

export default {
	loginUser(email, pass) {
		return Api().post('/api/login')
	},

	fetchVehicleMakes(params) {
		return Api().get('/api/vehicles/makes?make_type='+params)
	},

	fetchVehicleModel(make) {
		return Api().get('/api/vehicles/'+make+'/models')
	},

	fetchVehicleYear(make, model) {
		return Api().get('/api/vehicles/'+make+'/'+model+'/years')
	},

	fetchVehicle( make, model, year) {
		return Api().get('/api/vehicles/'+make+'/'+model+'/'+year+'/vehicles')
	},

	fetchVehicleDetails(vehicles) {
		return Api().get('/api/vehicles/{vehicle}/vehicle')
	},

	fetchCars(filter)  {
		return Api().get('/api/cars{/filter}')
	},

	fetchUserCars(filter) {
		return Api().get('/api/get/{id}')
	},

	postUserCar(params) {
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
		return Api().post('/api/cars/post', params, config)
	},

	updateUserCar (params) {
		return Api().post('/api/cars{/params}')
	},

	deleteUserCars (id) {
		return Api().post('/api/cars{/id}')
	},

	getchUserCars(car ) {
		return Api().get('/api/cars/user')
	},

	fetchCarDetails(id) {
		return Api().get('/api/cars/car-details/'+id)
	},

	FetchMakeById(id) {
		return Api().get('/api/name/make-name/'+id)
	},

	FetchModelById ( id ) {
		return Api().get('/api/name/model-name/'+id)
	},

	FetchYearById ( id ) {
		return Api().get ('/api/name/year-name/'+id)
	},

	FetchVehicleById ( id ) {
		return Api().get ('/api/name/vehicles/'+id)
	},

	filterCarsByUserInput( payload ) {
		 return Api().post('/api/cars/filter', payload)
	},

	fetchCarDetails ( id ){
		 return Api().get('/api/cars/details/'+id)
	}
}