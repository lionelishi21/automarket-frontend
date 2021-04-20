import axios from 'axios';
import api from '../../api/services/car-services.js';

const state = {
    automarket_cars: {},
    jacars_cars: {}
}

const getters = {
    ComparedCars: state => state.automarket_cars
}

const actions = {
    COMPARE_FETCH_CARS({commit}, payload) {
        return new Promise((resolve, reject) => {

            api.fetchCompareCars(payload)
                .then( response => {
                    console.log( response ) 
                    commit('SET_COMPARE_CARS', response.data)
                    resolve(response.data);

                })
                .catch( error => {
                    console.log( error.response )
                    reject(error);
                })
        })
    }
}

const mutations = {

    SET_COMPARE_CARS(state, compare) {
        state.automarket_cars = compare;
    }
}


export default {
    state,
    actions,
    getters,
    mutations
}