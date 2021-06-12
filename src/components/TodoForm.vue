<template>
  <div class="container">
    <div class="form-group col-md-6 m-auto mt-3">
      <label>Título da Tarefa</label>
      <input
        v-model="task.title"
        class="form-control my-2"
        type="text"
      >
      <label>Descrição da tarefa</label>
      <textarea
        v-model="task.description"
        class="form-control"
        cols="30"
        rows="10"
      ></textarea>
      <button
        @click="addTask"
        class="btn btn-success mt-3"
      >Add task</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'
import { Task } from '@/types/task'

@Component({
  name: 'TodoForm'
})

export default class TodoForm extends Vue {
  task: Task = {
    title: '',
    description: ''
  }

  @Emit()
  addTask (): Task {
    return this.task
  }
}
</script>
