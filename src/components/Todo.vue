

<template>
  <li :class="props.todo.checked ? 'completed' : ''">
    <div class="view">
      <input class="toggle" type="checkbox" :checked="props.todo.checked" />
      <label>{{ props.todo.message }}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template" />
  </li>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { Todo } from "../domain/Todo";
const props = defineProps({
  todo: { type: Object as PropType<Todo>, required: true },
});
</script>
