import api from '../../api/services/dealer-service.js'



const state = {
	 dealers: {}
}


const actions = {

	FILTER_DEALER({dispatch, commit}, payload) {

		var filters = payload['search'];  

		api.filterDealer(filter).then( response => {

			commit('SAVE_DEALER', response.data_)
		})
	}
}


const mutations = {

	SET_DEALER(state, filter) {
		state.dealers = filter
	}
}


const getters = {

}

export default {
	state,
	getters,
	actions,
	mutations
}