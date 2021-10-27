import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PlayerStats from '../views/PlayerStats.vue'
import SquadMaps from '../views/SquadMaps.vue'

import RouterLinks from '../constants/RouterLinks.js'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/playerstats',
      name: 'Player Stats',
      component: PlayerStats
    },
    {
      path: '/squadMaps',
      name: 'SquadMaps',
      component: SquadMaps
    },
    {
      path: '/mortarCalculator',
      name: 'MortarCalculator',
      beforeEnter() {location.href = RouterLinks.MORTAR_CALCULATOR}
    },
    { path: '*', component: Home }
  ]
})
