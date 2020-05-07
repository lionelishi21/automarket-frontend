import Api from '../index.js';

export default {

	fetchPlans() {
		return Api().get('/plans')
	},

	fetchUserActivePlan() {
		return Api().get('/plans/get-userplans')
	},

	fetchUserPlan() {
		return Api().get('/user-plan')
	},

	selectUserPlan(plan_id) {
		return Api().get('/plans/select-plan/'+plan_id)
	},

	fetchPlanDetails(slug) {
		return Api().get('/plan-details/'+slug)
	}
}