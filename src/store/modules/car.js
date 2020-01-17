import axios from 'axios';
import api from '../../api/service.js'

const state = {
	car_details_view: {}
}

const getters = {
   CarDetails: state => state.car_details_view
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
	}
}

const mutations = {
	SET_CAR_DETAILS(state, detail) {
		state.car_details_view  = detail
	}
}

export default {
	state,
	actions,
	getters,
	mutations
}