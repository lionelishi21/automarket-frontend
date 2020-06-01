import axios from 'axios';
import api from '../../api/services/car-services.js'

const state = {
	car_details_view: {},
	hot_cars: {},
	inactive_cars: {},
	active_cars: {}
}

const getters = {
   CarDetails: state => state.car_details_view,
   HotCars: state => state.hot_cars,
   InactiveCars: state => state.inactive_cars,
   ActiveCars: state => state.active_cars
}

const actions = {

	POST_USER_CAR({commit, dispatch}, payload) {
		api.postUserCar( payload)
			.then( response => {
				console.log(response)
			}, error => {
				console.log(error.response)
			})
	},

	UPDATE_USER_CAR({commit, dispatch}, payload ) {
		return new Promise((resolve, reject) => {
			api.updateCarDetails(payload)
			.then( response => {
				console.log(response)
				resolve(response)
			})
			.catch(error => {
				consol.log(error.response)
				reject(error)
			})
		});
	},

	GET_CAR_DETAILS({commit, dispatch}, batchId) {
		console.log('detail loading....')
		
		api.fetchCarDetails( batchId )
			.then( res => {
				console.log('details loaded')
				console.log( res.data)
				commit('SET_CAR_DETAILS', res.data)
			}, error => {
				console.log(error.response)
			})
	},

	COUNT_PAGE_VISTS({commit},car_id) {
		console.log('hit counter....')
		api.fetchPage(car_id)
		   .then( res => {
				console.log(res)
				console.log('hit confirmed...')
			}, error => {
				console.log('error')
				console.log(error.response);
			})
	},

	GET_HOT_CARS({commit}) {

		console.log('...getting hot cars')
		api.fetchHotCar()
			.then( res => {
				console.log( res )
				commit('SET_HOT_CARS', res.data)	
				console.log('...getting cars')
			}, error => {
				console.log('error')
				console.log(error.response)
			})
	},

	GET_INACTIVE_CARS( { commit }) {
		
		console.log('...getting inactive cars')
		api.fetchInactiveCar()
			.then( res => {
				commit('SET_INACTIVE_CARS', res.data)
			}, error => {
				console.log(error.response)
			})
	},

	GET_ACTIVE_CARS ({ commit }) {
		console.log('...getting active car details')
		api.fetchActiveCar()
			.then ( res => {
				console.log(res)
				commit('SET_ACTIVE_CARS', res.data)
			}, error => {
				console.log(error.response)
			})
	},
	ROTATE_IMAGE( context , id) {
		return new Promise((resolve, reject) => {
			console.log('...rotating images')
			api.rotateAutoImage(id)
				.then( response => {
					console.log(response)
					resolve(response)
				})
				.catch(error => {
					console.log(error.response)
				})

			}) 
	},
	SET_SOLD(context, id) {
		return new Promise((resolve, reject) => {
			console.log('sold')
			api.postSold(id)
				.then( response => {
					resolve(response)
				})
				.catch(error => {
					console.log(error.response)
					reject(error)
				})
		})
	}

}

const mutations = {
	SET_CAR_DETAILS(state, detail) {
		state.car_details_view = detail
	},
	SET_HOT_CARS(state, car) {
		state.hot_cars = car
	}, 
	SET_INACTIVE_CARS(state, car) {
		state.inactive_cars = car
	},
	SET_ACTIVE_CARS(state, car) {
		state.active_cars = car
	}
}

export default {
	state,
	actions,
	getters,
	mutations
}