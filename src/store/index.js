import { createStore } from 'vuex'
import CounterModule from './CounterModule'
import EmployeeModule from './EmployeeModule'
import UserListModule from './UserListModule'
export default createStore({
  state: {
  counterState: CounterModule.state,
  employeeState: EmployeeModule.state,
  usersState:  UserListModule.state
  },
  getters: {
    getCounterState:(state)=>{
       return state.counterState.counter
    },
    getEmployeeState:(state)=>{
      return state.employeeState.employeeList
    },
    getUsersState:(state)=>{
      return state.usersState.usersList
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    CounterModule,
    EmployeeModule,
    UserListModule
  }
})
