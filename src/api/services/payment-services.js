import Api from '../index.js';

export default {

	fetchPaymentActivity() {
		return Api().get('/payments/activity')
	},

	fetchPaymentInvoice(id) {
		return Api().get('/payments/invoice/'+id)
	},
	
	fetchSubscription(params) {
		return Api().post('/subscriptions/create', params)
	},
	
	postCredit( params ) {
		return Api().post('/credits/create', params)
	},

	fetchUserCredit() {
		return Api().get('/credits',)
	},

}