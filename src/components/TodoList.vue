<template>
  <div class="container">
    <div v-if="hasTasks" class="col-md-6 m-auto">
      <table v-for="(task, i) in tasks" :key="i" class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Título</th>
            <th scope="col">Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ task.title }}</td>
            <td>{{ task.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Task } from '@/types/general/task'

@Component({
  name: 'TodoList'
})
export default class TodoList extends Vue {
  @Prop() readonly tasks!: Array<Task>

  get hasTasks (): number {
    return this.tasks.length
  }
}
</script>
