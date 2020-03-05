
import Vue from 'vue';
import Vuex from 'vuex';
// const Sqlite = require("nativescript-sqlite");

import user from './modules/user.js';
import plan from './modules/plan.js';
import vehicles from './modules/vehicles.js'
import car from './modules/car.js'
import filters from './modules/filters.js'
// import carMake from './modules/carMake.js'

Vue.use(Vuex)
Vue.config.debug = true

export default new Vuex.Store({
    modules: {
    	user,
    	plan,
    	vehicles,
    	car,
    	filters
    	// carMake
    },
});