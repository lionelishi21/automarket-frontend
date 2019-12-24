import axios from 'axios';
import api from '../../api/service.js'

const state = {
	plan: null
}

const getters = {
	getUserPlan(state) {
		return state.plan
	}
}

const actions = {
	USER_PLAN({commit, dispatch}){
		console.log('getting user plan...')
		 return new Promise((resolve, reject) => {
	  		axios.get('http://127.0.0.1:8000/api/user-plan')
			.then( response => {
				console.log(response)
				let responseData = response.data
				commit('SET_USER_PLAN', responseData)
			}, error => {
				console.log(error.response)
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
	}
}

const mutations = {
	SET_USER_PLAN(state, plan) {
		state.plan = plan
	}
}


export default {
	state,
	actions,
	getters,
	mutations
}