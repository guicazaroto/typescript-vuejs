import { Task } from '@/types/general/task'
import { RootState } from '@/types/vuex/RootState';
import { TaskState } from '@/types/vuex/TaskState'
import Vuex, {
  StoreOptions,
  Module,
  ActionTree,
  ActionContext,
  MutationTree,
  GetterTree
} from 'vuex'

const namespaced: boolean = true;

const state: TaskState = {
  tasks: []
}

const actions: ActionTree<TaskState, RootState> = {
  addTask (context, task: Task) {
    context.commit('ADD_TASK', task)
  }
}

const mutations: MutationTree<TaskState>  = {
  ADD_TASK (state, task) {
    state.tasks.push(task)
  }
}

const getters: GetterTree<TaskState, RootState> = {
  getTasks (state) {
    return state.tasks
  }
}

export const tasks: Module<TaskState, RootState> = {
  namespaced,
  state,
  actions,
  mutations,
  getters
};

