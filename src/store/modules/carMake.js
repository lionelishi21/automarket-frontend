// import api from '../../api/service.js'

// const state = {

// 	makeName: '',
// 	modelName:'',
// 	vehicleName:'',
// 	year:''
// }

// const getters = {
// 	MakeName: state => state.makeName
// }

// const actions = {

// 	GET_MAKE_NAME_BY_ID({dispatch, commit}, make_id) {

// 		/** This Action get make name by id */
// 		axios.FetchMakeById( make_id )
// 			.then ( response => {
// 				console.log( response )
// 				dispatch('SET_MAKE_NAME', response);
// 			})
// 	},

// 	/** This action get model name by id */
// 	GET_MODEL_NAME_BY_ID({dispatch, commit}, model_id) {

// 		axios.FetchModelById( model_id )
// 			.then ( response => {
// 				console.log( response)
// 				dispatch( 'SET_MODEL_NAME', response)
// 			})
// 	},

// 	/** @ This Action get the vehicle year name by id */
// 	GET_YEAR_NAME_BY_ID (	{dispatch, commit}, year_id) {
// 		axios.FetchYearById ( year_id )
// 			.then ( response => {
// 				dispatch ('SET_YEAR_NAME', response)
// 			})
// 			.catch ( error => {
// 				console.log( error )
// 			})
// 	},

// 	/**
// 	 * This action get vehicle  description by vehicle id
// 	 * @param {[type]} options.dispatch [description]
// 	 * @param {[type]} options.commit   [description]
// 	 * @param {[type]} vehicle_id       [description]
// 	 */
// 	GET_VEHICLE_NAME_BY_ID ( {dispatch, commit}, vehicle_id) {

// 		axios.FetchVehicleById( vehicle_id ) 
// 			.then ( response => {
// 				console.log( response )
// 				dispatch ('SET_VEHICLE_NAME', response)
// 			})
// 			.catch( error => {
// 				console.log (error)
// 			})
// 	},


// }

// const mutations = {

// 	/** @ **/
// 	SET_MAKE_NAME( state, make ) {
// 		state.makeName = make
// 	},

// 	/** @ */
// 	SET_MODEL_NAME ( state, model ) {
// 		state.modelName = model
// 	},

// 	/** @ **/
// 	SET_VEHICLE_NAME ( state, vehicle ) {
// 		state.vehicleName = vehicle
// 	},

// 	/** @ **/
// 	SET_YEAR_NAME ( state, year) {
// 		state.year = year
// 	}


// }

// export default{
// 	state,
// 	getters,
// 	actions,
// 	mutations
// }