import Api from '../index.js';

export default {

	saveUserFilter(filters) {
		return Api().post('/user/save-userfilter', filters)
	},

	fetchUserFilter() {
		return Api().get('/user/filters')
	},

	fetchParishes() {
		return Api().get('/parishes')
	},

	fetchBodystyles() {
		return Api().get('/bodystyles')
	},

	saveParishFilter(parish_id) {
	    return Api().post('/save-parish-filter', parish_id)
	},
	
	loginUser(params) {
		return Api().post('/login', params)
	},

	fetchCurrentUser() {
		return Api().get('/user')
	},

	registerUser( params ) {
		return Api().post('/register', params)
	},

	logoutUser() {
		return Api().get('/logout')
	},

	fetchUserProfile() {
		return Api().get('/profile')
	},

	fetchBitlyLink() {
		return Api().get('/referral')
	},

	fetchRefs() {
		return Api().get('/referees')
	},

	fetchReferralPoints() {
		return Api().get('/referral-points')
	},

	verifyAcount() {
		return Api().get('/email/resend')
	}
}