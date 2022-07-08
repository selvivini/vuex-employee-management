import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//only for local state
// import CounterComponent from '../components/CounterComponent'
import VuexCounter from '../components/vuex/VuexCounter'
// import EmployeesComponent from '../components/EmployeesComponent'
import VuexEmployeesComponent from '../components/vuex/VuexEmployeesComponent'
import UserList from '../components/UserList'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/counter',
    name: 'VuexCounter',
    component: VuexCounter
  },
  {
    path: '/employees',
    name: 'VuexEmployeesComponent',
    component: VuexEmployeesComponent
  },

  {
    path: '/users',
    name: 'UserList',
    component: UserList
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
