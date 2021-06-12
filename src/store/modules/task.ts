import { Task } from '@/types/task'

const state = {
  tasks: []
}

const actions = {
  addTask (context: any, task: any) {
    context.commit('ADD_TASK', task)
  }
}

const mutations = {
  ADD_TASK (state: any, task: any) {
    state.tasks.push(task)
  }
}

const getters = {
  getTasks (state: any) {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}