<template>
	<h1>Honey-dos</h1>
  <section class="todoapp">
    <header class="header">
      <input class="new-todo" placeholder="What does Jared need to do?" autofocus />
    </header>
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <!-- These are here just to show the structure of the list items -->
        <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
        <Todo v-for="(todo,index) in todos" :key="index" :todo="todo"/>
      </ul>
    </section>
    <!-- This footer should be hidden by default and shown when there are todos -->
    <footer class="footer">
      <!-- This should be `0 items left` by default -->
      <span class="todo-count"><strong>0</strong> item left</span>
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        <li>
          <a class="selected" href="#/">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button class="clear-completed">Clear completed</button>
    </footer>
  </section>
{{todos.length}}
</template>

<script setup lang="ts">
import type {Todo} from "./domain/Todo"
let message:string = "whateveryouwant"
const numbers = [78,99,13]
const todos:Todo[] = [
	{checked: false, message: "things"},
	{checked: false, message: "stuff"},
	{checked: false, message: "and more"}
]
console.log(message,1,2,numbers,todos);
</script>
