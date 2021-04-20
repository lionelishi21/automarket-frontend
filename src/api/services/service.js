import Api from '../index.js';

export default {
	loginUser(email, pass) {
		return Api().post('/login')
	},

	fetchVehicleMakes(params) {
		return Api().get('/vehicles/makes?make_type='+params)
	},

	fetchVehicleModel(make, params = 'all') {
		return Api().get('/vehicles/'+make+'/models?model_types='+params)
	},

	fetchVehicleYear(make, model) {
		return Api().get('/vehicles/'+make+'/'+model+'/years')
	},
	fetchVehicle( make, model, year) {
		return Api().get('/vehicles/'+make+'/'+model+'/'+year+'/vehicles')
	},
	fetchVehicleDetails(vehicles) {
		return Api().get('/vehicles/{vehicle}/vehicle')
	},

	fetchCars(filter)  {
		return Api().get('/cars{/filter}')
	},

	fetchUserCars(filter) {
		return Api().get('/get/{id}')
	},

	updateUserCar (params) {
		return Api().post('/cars{/params}')
	},

	deleteUserCars (id) {
		return Api().post('/cars{/id}')
	},

	getchUserCars(car ) {
		return Api().get('/cars/user')
	},

	

	FetchMakeById(id) {
		return Api().get('/name/make-name/'+id)
	},

	FetchModelById ( id ) {
		return Api().get('/name/model-name/'+id)
	},

	FetchYearById ( id ) {
		return Api().get ('/name/year-name/'+id)
	},

	FetchVehicleById ( id ) {
		return Api().get ('/name/vehicles/'+id)
	},

	filterCarsByUserInput( payload ) {
		 return Api().post('/cars/filter', payload)
	},

	fetchCarDetails ( id ){
		 return Api().get('/cars/details/'+id)
	},

	hitCounter( id ) {
		return Api().get('/count-views/'+id)
	}
}