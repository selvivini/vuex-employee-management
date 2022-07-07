import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CounterComponent from '../components/CounterComponent'
import EmployeesComponent from '../components/EmployeesComponent'
import UserList from '../components/UserList'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/counter',
    name: 'CounterComponent',
    component: CounterComponent
  },
  {
    path: '/employees',
    name: 'EmployeesComponent',
    component: EmployeesComponent
  },

  {
    path: '/user',
    name: 'UserList',
    component: UserList
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
