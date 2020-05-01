
import axios from "axios";
import api from '../../api/services/user-services.js'

const state = {
  tokens: {
    access_token: null,
    expires_in: null,
    refresh_token: null,
    token_type: null
  },
  profile: {},
  currentUser: null,
  link: '',
  referees: {},
  points: 0
}

const actions = {
  login( context, user) {
     return new Promise((resolve, reject) => {

        let data = {
          email: user.email,
          password: user.password,
        };

         api.loginUser(data).then(response => {
            let responseData = response.data
            let now = Date.now()

            responseData.expires_in = responseData.expires_in + now
            context.commit('updateTokens', responseData.token)
            localStorage.setItem('access_token', responseData.token )

            resolve(response)
          }).catch( err => { reject(err)})
     })
  },
  getCurrentUser(context) {
    
     let token = localStorage.getItem('access_token')
     axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    
    return new Promise((resolve, reject) => {
     
      api.fetchCurrentUser()
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
      
       api.registerUser(user).then(response => {
        
          let responseData = response.data
          let now = Date.now()

          responseData.expires_in = responseData.expires_in + now
          context.commit('updateTokens', responseData.token)

          resolve(response)
        }).catch( err => { reject(err)})
     })
  },
  AUTH_LOGOUT({commit, dispatch}){
     
    let token = localStorage.getItem('access_token')
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise(( resolve, reject) => {
        
        api.logoutUser().then( response => {
 
             localStorage.removeItem('access_token')
             let user = {}
             context.dispatch('getCurrentUser')
             
            resolve(response)
        }).catch( error => {
            reject(error)
        })
    });
  
   },
  GET_USER_PROFILE({commit}, payload) {

     let token = localStorage.getItem('access_token')
     axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

     return new Promise((resolve, reject) => {

      api.fetchUserProfile().then( response => {
          
           commit('SET_USER_PROFILE', response.data)
           resolve(response)
       
        }).catch( error => {
          console.log(error.response)
          reject(error)
        })
    })
  },
  FETCH_BITLY_LINK({commit}) {

   api.fetchBitlyLink() 
    .then( response => {
      console.log(response.data)
      commit('SET_BITLY_LINK', response.data.bitly_link)
    }) 
    .catch( error => {
       console.log(error.response)
    })
  },

  FETCH_REFEREES({commit}) {
    api.fetchRefs()
      .then( response => {
          console.log(response.data.user)
          commit('SET_REFEREE', response.data.user)
      }) 
      .catch( error => {
        console.log(error.response)
      })
  },

  FETCH_REF_POINTS( {commit} ) {

      api.fetchReferralPoints()
        .then( response => {
          console.log(response)
          commit('SET_REFERRAL_POINTS', response.data)
        })
        .then( error => {
           console.log(error)
           console.log(error.response)
        })
  },

  VERIFY_USER( {commit }) {

    api.verifyAcount()
      .then( response => {
        console.log(response)
      })
      .catch( error => {
        console.log(error)
        console.log(error.response)
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
    },

    SET_BITLY_LINK(state, lin) {
      state.link = lin
    },

    SET_REFEREE(state, ref) {
      state.referees = ref
    },

    SET_REFERRAL_POINTS(state, points) {
      state.points = points
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

    getLink(state) {
      return state.link
    },

    getReferees(state) {
      return state.referees
    },

    getRefPoints(state) {
      return state.points
    }

}

export default {
  state,
  getters,
  actions,
  mutations
}