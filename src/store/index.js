import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
//import * as actions from './actions'
//import * as getters from './getters'
import app from './modules/app'
import books from './modules/books'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
 // actions,
 // getters,
  modules: {
    app,
    books
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})