<template>
  <div>
    <TodoForm @add-task="addTask" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoForm from '@/components/TodoForm.vue'
import { namespace } from 'vuex-class'
import { Task } from '@/types/general/task'

const taskModule = namespace('tasks')

@Component({
  components: {
    TodoForm
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
