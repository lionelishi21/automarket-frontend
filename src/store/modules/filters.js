import axios from 'axios';
import api from '../../api/service.js';

const state = {
	filters: {}
}


const actions = {

	SAVE_USER_FILTER( {dispatch, commit}, filters) {

		axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
		axios.post('http://127.0.0.1:8000/api/user/save-userfilter', filters)
			.then( response => {
				console.log(response)
			}, error => {
				console.log(error.response)
			})
	}
}

const mutations = {

}


const getters = {

}


export default {
	state,
	getters,
	actions,
	mutations
}