<template>
  <div>
    <TodoForm @add-task="addTask" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoForm from '@/components/TodoForm.vue'
import { mapState, mapActions } from 'vuex'
import { namespace } from 'vuex-class'
import { Task } from '@/types/task'

const taskModule = namespace('task')

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
