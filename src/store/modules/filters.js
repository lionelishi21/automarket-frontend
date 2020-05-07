import axios from 'axios';
import api from '../../api/services/user-services.js';

const state = {
	filters: {},
	parishes: {},
	bodystyles: {} 
}

const actions = {

	SAVE_USER_FILTER( {dispatch, commit}, payload) {

		var filters = payload['form'];
		var make_type = payload['make']
		axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
		
		api.saveUserFilter(payload).then( response => {
			dispatch('GET_VEHICLE_MAKE', make_type)
			console.log(response)
		}, error => {
			console.log(error.response)
		})

	},

	GET_USER_FILTER( {dispatch, commit }) {
		
		api.fetchUserFilter().then( response => { 
			console.log(response)
		}, error => {
			console.log(error.response)
		})

	},

	GET_PARISHES( {commit}) {
			
		api.fetchParishes().then( response => {
			commit('SET_PARISHES', response.data)
		}, error => {
			console.log(error.response)
		})

	},

	GET_BODYSTYLES({ dispatch, commit}) {
		
		api.fetchBodystyles().then( response => {
			commit('SET_BODYSTYLES', response.data)
		}, error => {
			console.log(error.response)
		})

	},

	SAVE_USER_PARISH_FILTER({dispatch}, parish_id) {
	
		api.saveParishFilter(parish_id).then( response => {
			console.log(response.data)
		}, error => {
			console.log(error.response)
		})

	}
}

const mutations = {
	SET_USER_FILTER(state, filter) {
		state.filters = filter
	},
	SET_BODYSTYLES(state, body) {
		state.bodystyles = body
	},
	SET_PARISHES (state, parish) {
		state.parishes = parish
	}
}


const getters = {
	getUserFilters( state ) {
		return state.filters
	}, 
	getParishes( state ) {
		return state.parishes
	},
	getBodystyles( state ) {
		return state.bodystyles
	}
}


export default {
	state,
	getters,
	actions,
	mutations
}