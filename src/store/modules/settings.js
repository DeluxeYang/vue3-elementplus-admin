import variables from '@/styles/element-variables.scss'
import defaultSettings from '@/settings'

const { showSettings, tagsView, fixedHeader, sidebarLogo } = defaultSettings

export default {
  namespaced: true,
  state: () => ({
    theme: variables.theme,
    showSettings: showSettings,
    tagsView: tagsView,
    fixedHeader: fixedHeader,
    sidebarLogo: sidebarLogo
  }),
  mutations: {
    CHANGE_SETTING: (state, { key, value }) => {
      // eslint-disable-next-line no-prototype-builtins
      if (state.hasOwnProperty(key)) {
        state[key] = value
      }
    }
  },
  actions: {
    changeSetting({ commit }, data) {
      commit('CHANGE_SETTING', data)
    }
  }
}
