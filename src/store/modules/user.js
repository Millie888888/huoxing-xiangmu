import API from '../../api/index'
import { setItem, removeAllItem } from '@/utils/storage'

export default {
  namespaced: true,
  state: {
    token: '',
    menu: {}
  },
  mutations: {
    settoken(state, token) {
      state.token = token
      setItem('token', token)
    },
    setmenu(state, res) {
      state.menu = res
      setItem('menu', res)
    }
  },
  actions: {
    async login({ commit }, payload) {
      try {
        const response = await API.getlogin(payload)
        commit('settoken', response.data.data.token)
        return response
      } catch (error) {
        console.log(error)
      }
    },
    async menu({ commit }) {
      try {
        const response = await API.getInfo()
        console.log(response.data.data)
        commit('setmenu', response.data.data)
        return response
      } catch (error) {
        console.log(error)
      }
    },
    logOut({ commit }) {
      removeAllItem('token')
      removeAllItem('menu')
    }
  }
}