import axios from 'axios'
import api from '../../api/services/payment-services.js'

const state = {
	payments: {},
	invoice: {},
	credits: {}
}

const getters = {
	GetPayments: state => state.payments,
	Invoice: state => state.invoice,
	GetCredits: state => state.credits
}

const actions = {
	 
	 GET_PAYMENTS_ACTIVITY({ commit }) {
	 	
	 	api.fetchPaymentActivity().then( res => {
	 		commit('SET_PAYMENT_ACTIVITY', res.data)
	    }, error => {
	 		console.log(error.response)
	 	})
	
	 },
	
	 GET_PAYMENT_INVOICE({commit}, id) {
	 	
	 	fetchPaymentInvoice(id).then( res => {
	 		commit('SET_INVOICE_DETAILS', res.data)
	 	}, error => {
	 		console.log(error.response)
	 	})

	 },

	 CREATE_SUBSCRIPTION({commit}, params) {

	 	return new Promise(( resolve, reject) => {
	 		api.fetchSubscription(params).then(response => {
	 			resolve( response )
	 		})
	 		.catch( error => {
	 			reject( error )
	 		})
	 	});
	 },

	 BUY_CREDIT({commit, dispatch}, params) {
	 	
        let token = localStorage.getItem('access_token')
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

	 	return new Promise((resolve, reject) => {
	 		api.postCredit(params).then( response => {
	 			console.log(response)
	 			resolve( response )
	 		})
	 		.catch( error => {	
	 			console.log(error.response)
	 			reject( error)
	 		})
	 	});
	
	 },
	 GET_CREDIT({commit}) {
	 	api.fetchUserCredit()
	 		.then( response => {
	 			console.log(response.data)
	 			commit('SET_CREDIT', response.data)
	 		})
	 		.catch( error => {
	 			console.log(error.response)
	 		})
	 }

}

const mutations = {
	SET_PAYMENT_ACTIVITY(state, activity) {
		state.payments = activity
	},
	SET_INVOICE_DETAILS(state, detail) {
		state.invoice = detail
	},
	SET_CREDIT(state, credit) {
		state.credits = credit
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}




