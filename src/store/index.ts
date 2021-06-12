import { RootState } from '@/types/vuex/RootState';
import Vue from 'vue'
import Vuex, { StoreOptions }  from 'vuex'
import { tasks } from './modules/tasks'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0'
  },
  modules: {
    tasks
  }
};

export default new Vuex.Store<RootState>(store);
