import { RootState } from '@/types/vuex/RootState'
import Vue from 'vue'
import Vuex, { StoreOptions }  from 'vuex'
import task from './modules/task'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  modules: {
    task
  }
}

export default new Vuex.Store<RootState>(store)
