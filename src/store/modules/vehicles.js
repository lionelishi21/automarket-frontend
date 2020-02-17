
import api from '../../api/service.js'

const state = {
	models: {},
	makes: {},
	years: {},
	details: {},
	carDetails: {},
	user: {
		cars: {}
	},
	cars: {}
}

const getters = {
	AllModels: state => state.models,
	AllMakes: state => state.makes,
	AllYears: state => state.years,
	AllDetails: state => state.details,
	UserCars: state => state.user.cars,
	UserCarDetails: state => state.carDetails,
	FilteredCars: state => state.cars
}


const actions = {
	/**
	 * this function get vehicle makes
	 * @param {[type]} options.commit [description]
	 */
	GET_VEHICLE_MAKE({commit}, param) {

		api.fetchVehicleMakes(param)
			.then( response => {
				console.log(response)
				commit('SET_VEHICLE_MAKE', response.data)
			})
			.catch((err) => {
				console.log(err.response)
			})
	},

	/**
	 * this function get all vehicle model
	 * @param {[type]} options.commit' [description]
	 * @param {[type]} make_id         [description]
	 */
	GET_VEHICLE_MODEL ({commit}, make_id) {
		api.fetchVehicleModel(make_id)
			.then( response => {
				commit('SET_VEHICLE_MODEL', response.data.models)
			})
	},

	/**
	 * [GET_VEHICLE_YEAR description]
	 * @param {[type]} options.commit [description]
	 * @param {[type]} payoad         [description]
	 */
	GET_VEHICLE_YEARS({commit}, payload) {
		var make = payload['make']
		var model = payload['model']

		api.fetchVehicleYear(make, model)
			.then( response => {
				console.log(response.data.years)
				commit('SET_VEHICLE_YEAR', response.data.years)
			})
	},

	/**
	 * [GET_VEHICLE_DETAILS description]
	 * @param {[type]} options.commit [description]
	 * @param {[type]} payload        [description]
	 */
	GET_VEHICLE_DETAILS ( { commit }, payload) {

		 var make  = payload['make']
		 var model = payload['model']
		 var year  = payload['year']

		 api.fetchVehicle(make, model, year)
		 	.then( response => {
		 		console.log(response)
		 		commit ('SET_VEHICLE_DETAILS', response.data.vehicles)
		 	})
	},

	/**
	 * ***************************************************************
	 * This function post all user cars
	 * @param {[type]} options.commit [description]
	 * @param {[type]} payload        [description]
	 * ***************************************************************
	 */
	SAVE_CARS ({commit}, payload) {
		 api.postCars(payload)
		 	.then(response => {

		 	})
	 },

	 /**
	  * this function user cars
	  * @param {[type]} options.commit [description]
	  * @param {[type]} user_id        [description]
	  */
	 GET_USER_CARS ({commit}, user_id) {
	 	api.getchUserCars(user_id)
	 		.then( resp => {
	 			console.log(resp)
	 			commit('SET_USER_CARS', resp.data )
	 		})
	 		.catch((err) => {
	 			console.log(err.response)
	 		})
	 },

	 /**
	  * [GET_CARS description]
	  * @param {[type]} options.commit [description]
	  */
	 GET_CARS ({commit}) {
	 	api.fetchCars()
	 		.then( response => {

	 		})
	 },

	 /**
	  * [DELETE_LISTING description]
	  * @param {[type]} options.commit   [description]
	  * @param {[type]} options.dispatch [description]
	  * @param {[type]} id               [description]
	  */
	 DELETE_LISTING ({commit, dispatch}, id) {
	 	api.detelteListing(id) 
	 		.then(response => {
	 			console.log(resoonse)
	 			dispatch('GET_USER_CARS', id)
	 		})
	 },

	 /**
	  * [GET_USER_CAR_DETAILS description]
	  * @param {[type]} options.commit   [description]
	  * @param {[type]} options.dispatch [description]
	  * @param {[type]} id               [description]
	  */
	 GET_USER_CAR_DETAILS ({commit, dispatch}, id) {
	 	api.fetchCarDetails(id)
	 		.then ( response => {
	 		   console.log(response)
	 		   commit('SET_CAR_DETAILS', response.data)
	 		})
	 		.catch((err) => {
	 			console.log(err.response)
	 		})
	 },

	 /**
	  * [FILTER_CARS description]
	  * @param {[type]} options.commit   [description]
	  * @param {[type]} options.dispatch [description]
	  * @param {[type]} params           [description]
	  */
	 FILTER_CARS ({ commit, dispatch}, params) {
	 	api.filterCarsByUserInput( params )
	 		.then( response => {
	 			console.log( response )
	 			commit ('SET_FILTER_CARS', response.data)
	 		})
	 		.catch ((err) => {
	 			console.log(err.message)
	 		})
	 }
}

const mutations = {

	/**
	 * [SET_VEHICLE_MODEL description]
	 * @param {[type]} state [description]
	 * @param {[type]} model [description]
	 */
	SET_VEHICLE_MODEL(state, model) {
		state.models = model
	},


	/**
	 * [SET_FILTER_CARS description]
	 * @param {[type]} state  [description]
	 * @param {[type]} filter [description]
	 */
	SET_FILTER_CARS(state, filter) {
		state.cars = filter
	},

	/**
	 * [SET_VEHICLE_MAKE description]
	 * @param {[type]} state [description]
	 * @param {[type]} make  [description]
	 */
	SET_VEHICLE_MAKE (state, make) {
		state.makes = make
	},

	/**
	 * [SET_VEHICLE_YEAR description]
	 * @param {[type]} state [description]
	 * @param {[type]} year  [description]
	 */
	SET_VEHICLE_YEAR (state, year) {
		state.years = year
	},

	/**
	 * [SET_VEHICLE_DETAILS description]
	 * @param {[type]} state  [description]
	 * @param {[type]} detail [description]
	 */
	SET_VEHICLE_DETAILS(state, detail) {
		state.details = detail
	},

	/**
	 * s
	 * @param {[type]} state [description]
	 * @param {[type]} car   [description]
	 */
	SET_USER_CARS( state, car) {
		state.user.cars = car
	},

	/**
	 * [SET_CAR_DETAILS description]
	 * @param {[type]} state [description]
	 * @param {[type]} car   [description]
	 */
	SET_CAR_DETAILS(state, car) {
		state.carDetails = car
	}

}


export default {
	state,
	actions,
	getters,
	mutations
}