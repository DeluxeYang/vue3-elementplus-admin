import { asyncRoutes, constantRoutes } from '@/router'

export default {
  namespaced: true,
  state: () => ({
    routes: [],
    addRoutes: []
  }),
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes
      state.routes = constantRoutes.concat(routes)
    }
  },
  actions: {
    generateRoutes({ commit }) {
      return new Promise(resolve => {
        commit('SET_ROUTES', asyncRoutes)
        resolve(asyncRoutes)
      })
    }
  }
}
