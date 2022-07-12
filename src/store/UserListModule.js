import axios from "axios"

export default{
    namespaced: true,
    state:{
      usersList:{
          loading: false,
          users: [],
          errorMessage: null
      }
    },
    mutations:{
      GET_USERS_REQUEST: (state)=>{
           state.usersList.loading = true
      },
      GET_USERS_SUCCESS: (state, payload)=>{
         state.usersList.loading = false
         state.usersList.users = payload.users
      },
      GET_USERS_FAILURE:(state, payload)=>{
         state.usersList.loading = false
         state.usersList.errorMessage = payload.error
      }
    },
    actions:{
        getUsers:async function({commit}){
          try {
              commit("GET_USERS_REQUEST")
              let url = `https://jsonplaceholder.typicode.com/users`
              let response = await axios.get(url)
              commit("GET_USERS_SUCCESS", {users: response.data})

          } catch (error) {
              commit("GET_USERS_FAILURE", {error: error})
          }
        }
    }
}