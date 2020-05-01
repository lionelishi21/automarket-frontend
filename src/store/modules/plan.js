import axios from 'axios';
import api from '../../api/services/plan-services.js';


const state = {
	plan: null,
	plans: [],
	active_plans: [],
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
	},
	getActivePlans( state ) {
		return state.active_plans
	}
	
}

const actions = {

	/**
	 * **********************************************
	 * Get all user plans
	 * @param {[type]} options.commit   [description]
	 * @param {[type]} options.dispatch [description]
	 * **********************************************
	 */
	GET_ALL_PLANS({commit, dispatch}) {

		let token = localStorage.getItem('access_token')
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
		
		api.fetchPlans().then( response => {
			commit('SET_PLAN', response.data)
		}, error => {
			console.log(error.response)
		});

	},

	/**
	 * ************************************************
	 * This function get user active plan
	 * @param {[type]} options.commit [description]
	 * ************************************************
	 */
	FETCH_USER_ACTIVE_PLANS({commit}) {

		let token = localStorage.getItem('access_token')
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

		api.fetchUserActivePlan().then( response => {
				console.log(response)
				commit('SET_USER_ACTIVE_PLAN', response.data[0])
		}, error => {
				console.log(error.response)
		})

	},

	/**
	 * ***********************************************
	 * this functio get use plan
	 * @param {[type]} options.commit   [description]
	 * @param {[type]} options.dispatch [description]
	 * ************************************************
	 */
	USER_PLAN({commit, dispatch}){

		 return new Promise((resolve, reject) => {
	  		
	  		api.fetchUserPlan().then( response => {
				
				let responseData = response.data
				commit('SET_USER_PLAN', responseData)
				resolve(response)
			
			}, error => {
				reject(error)
			})
	      });
	},

	/**
	 * *************************************************
	 * this function select user plan
	 * @param {[type]} options.commit   [description]
	 * @param {[type]} options.dispatch [description]
	 * @param {[type]} plan_id          [description]
	 * *************************************************
	 */
	SELECT_USER_PLAN({ commit, dispatch}, plan_id) {

		  return new Promise((resolve, reject) => {
	  		api.selectUserPlan(plan_id).then( response => {
				
				let responseData = response.data
				commit('SET_USER_PLAN', responseData)
				
				resolve(response)
			}).catch( err => { 
				reject(err)
			})
		})
	
	},

	/**
	 * ************************************************
	 * This function get plan details
	 * @param {[type]} options.commit   [description]
	 * @param {[type]} options.dispatch [description]
	 * @param {[type]} slug             [description]
	 * ************************************************
	 */
	PLAN_DETAILS ({ commit, dispatch}, slug ) {

		 api.fetchPlanDetails(slug).then( response => {
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
	}, 
	SET_USER_ACTIVE_PLAN(state, plan) {
		console.log(plan)
		state.active_plans = plan
	}
}


export default {
	state,
	actions,
	getters,
	mutations
}