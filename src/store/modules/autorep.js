import axios from 'axios';
import api from '../../api/services/autorep-services.js'


const state = {
	autoreps: {}
}

const actions = {

	FETCH_AUTOREPS({commit}, params) {

		api.fetchAutoreps(params)
			.then( response => {
				console.log(response)
				commit('SET_AUTOREPS', response.data)
			})
			.catch( error => {
				console.log(error.response)
			})
	}

}


const mutations = {

	SET_AUTOREPS(state, rep) {
		state.autoreps = rep
	}
}

const getters = {
	GetAutoReps: state => state.autoreps
}


export default {
	state,
	mutations,
	actions,
	getters
}