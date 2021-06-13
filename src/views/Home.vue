<template>
  <div>
    <TodoForm @add-task="addTask" />
    <TodoList :tasks="getTasks" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class'
import { Task } from '@/types/general/task'
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'

const taskModule = namespace('tasks')

@Component({
  components: {
    TodoForm,
    TodoList
  },
})
export default class Home extends Vue {
  @taskModule.State
  public tasks!: Array<Task>

  @taskModule.Getter
  public getTasks!: Array<Task>


  @taskModule.Action
  public addTask!: (task: Task) => void
}

</script>
