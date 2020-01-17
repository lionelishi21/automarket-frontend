
import axios from "axios";
import api from '../../api/service.js'

const state = {
  tokens: {
    access_token: null,
    expires_in: null,
    refresh_token: null,
    token_type: null
  },
  profile: {},
  currentUser: null
}

const actions = {
  login( context, user) {
     return new Promise((resolve, reject) => {

        let data = {
          // client_id: 2,
          // client_secret: 'dOjwKuRQ9DZBSfqVgaIOv5jIWagzQ3iNJj73lTCz',
          // grant_type: 'password',
          email: user.email,
          password: user.password,
        };

         console.log(data)
         axios.post('http://127.0.0.1:8000/api/login', data)
          .then(response => {
            let responseData = response.data
            let now = Date.now()

            responseData.expires_in = responseData.expires_in + now

            console.log(responseData)

            context.commit('updateTokens', responseData.token)
            localStorage.setItem('access_token', responseData.token )

            resolve(response)
          }).catch( err => { reject(err)})
     })
  },
  getCurrentUser(context) {
    
     console.log('getting current user...')
     let token = localStorage.getItem('access_token')

     axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    
    console.log('access_item'+ token)
    return new Promise((resolve, reject) => {
      axios.get('http://127.0.0.1:8000/api/user')
        .then (response => {
          let responseData = response.data
          context.commit('updateCurrentUser', responseData)
          resolve(response)
        }).catch( err => { 
          console.log(err.message)
          reject(err)
        })
    })
  },
  AUTH_REGISTER(context, user) {

    return new Promise((resolve, reject) => {
       console.log('registering user...')
       axios.post('http://127.0.0.1:8000/api/register', user)
      .then(response => {
          let responseData = response.data
          let now = Date.now()

          responseData.expires_in = responseData.expires_in + now

          console.log(responseData)
          context.commit('updateTokens', responseData.token)

          resolve(response)
        }).catch( err => { reject(err)})
     })
  },
  AUTH_LOGOUT({commit}){
    console.log('logging user out...')
     let token = localStorage.getItem('access_token')
     console.log('access_token'+ token)
     axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise(( resolve, reject) => {
        axios.get('http://127.0.0.1:8000/api/logout')
          .then( response => {
            localStorage.removeItem('access_token')
            console.log('logout user...')
             let user = {}
             context.commit('updateCurrentUser', user)
            resolve(response)
          }).catch( error => {
            console.log('fail to logout user...')
            console.log(error)
            reject(error)
          })
    });
  },
  GET_USER_PROFILE({commit}, payload) {

     let token = localStorage.getItem('access_token')
     console.log('access_token'+ token)
     axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    return new Promise((resolve, reject) => {
      console.log('geeting user profile...')
      axios.get('http://127.0.0.1:8000/api/profile')
        .then( response => {
           console.log(response)
           commit('SET_USER_PROFILE', response.data)
           resolve(response)
        }).catch( error => {
          console.log(error.response)
          reject(error)
        })
    })
  }
}


const mutations = {
    updateTokens(state, tokens) {
      state.tokens = tokens
    },
    updateCurrentUser(state, currentUser) {
      state.currentUser = currentUser
    },
    SET_USER_PROFILE(state, profile) {
      state.profile = profile
    }
}

const getters = {
    getAccessToken(state) {
      return state.tokens.access_token
    },
    GetUserProfile(state) {
      return state.profile
    },
    getCurrentUser(state) {
      return state.currentUser
    },
}

export default {
  state,
  getters,
  actions,
  mutations
}