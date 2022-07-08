import { createStore } from 'vuex'
import CounterModule from './CounterModule'
import EmployeeModule from './EmployeeModule'
export default createStore({
  state: {
  counterState: CounterModule.state,
  employeeState: EmployeeModule.state
  },
  getters: {
    getCounterState:(state)=>{
       return state.counterState.counter
    },
    getEmployeeState:(state)=>{
      return state.employeeState.employeeList
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    CounterModule,
    EmployeeModule
  }
})
