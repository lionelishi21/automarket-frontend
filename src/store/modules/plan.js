import axios from 'axios';
import api from '../../api/service.js'

const state = {
	plan: null,
	plans: [],
	details: []
}

const getters = {
	getUserPlan(state) {
		return state.plan
	},
	getPlans(state) {
		return state.plans
	},
	getPlanDetails( state ) {
		return state.details
	}
}

const actions = {
	GET_ALL_PLANS({commit, dispatch}) {
		axios.get('http://127.0.0.1:8000/api/plans')
		.then( response => {
			console.log(response)
			commit('SET_PLAN', response.data)
		}, error => {
			console.log(error.response)
		});
	},
	USER_PLAN({commit, dispatch}){
		console.log('getting user plan...')
		 return new Promise((resolve, reject) => {
	  		axios.get('http://127.0.0.1:8000/api/user-plan')
			.then( response => {
				let responseData = response.data
				commit('SET_USER_PLAN', responseData)
				resolve(response)
			}, error => {
				console.log(error.response)
				reject(error)
			})
	      });
	},

	SELECT_USER_PLAN({ commit, dispatch}, plan_id) {
		 console.log('selecting user plans...')
		  return new Promise((resolve, reject) => {
	  		axios.get('http://127.0.0.1:8000/api/plans/select-plan/'+plan_id)
			.then( response => {
				console.log(response)
				let responseData = response.data
				commit('SET_USER_PLAN', responseData)
				resolve(response)
			}).catch( err => { 
				console.log(err.response)
				reject(err)
			})
		})
	},

	PLAN_DETAILS ({ commit, dispatch}, slug ) {
		console.log(slug)
		console.log('geeting plan details')
		axios.get('http://127.0.0.1:8000/api/plan-details/'+slug)
			.then( response => {
				console.log(response)
				let responseData = response.data
				commit('SET_PLAN_DETAILS', responseData)
			}, error => {
				console.log(error.response)
			})
	}
}

const mutations = {
	SET_USER_PLAN(state, plan) {
		state.plan = plan
	},
	SET_PLAN(state, pl) {
		console.log(pl)
		state.plans = pl
	},
	SET_PLAN_DETAILS(state, detail) {
		console.log(detail)
		state.details = detail
	}
}


export default {
	state,
	actions,
	getters,
	mutations
}