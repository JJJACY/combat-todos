<template>

<html>
<head>
  <title>TodoDemo</title>

</head>
<body>
  <div class="todoapp">
    
    <!-- <header class="header">
      <h1>todos</h1>
      <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" v-model="newTodo" @keyup.enter="handleAddTodo">
    </header> -->
    <!-- <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allCompleted" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li :class="['todo',{completed: todo.completed},{editing: editTodo === todo}]"
          v-for="(todo,index) in showTodos" 
          :key="index">
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed"/>
            <label @dblclick="handleEdit(todo)">{{todo.title}}</label>
            <button class="destroy" @click="handleRemoveTodo(todo)"></button>
          </div>
          <input 
            class="edit" 
            type="text" 
            v-model="todo.title" 
            v-todo-focus="editTodo === todo" 
            @blur="handleEditDone(todo)" 
            @keyup.enter="handleEditDone(todo)" 
            @keyup.esc="handleEditCancel(todo)"/>
        </li>
      </ul>
    </section> -->
    <!-- <footer class="footer">
      <span class="todo-count">
        <strong>3</strong> todo
      </span>
      <ul class="filters">
        <li><a href="#/all" :class="{selected: filter === 'all'}" @click="handleChangeFilter('all')">All</a></li>
        <li><a href="#/active" :class="{selected: filter === 'active'}" @click="handleChangeFilter('active')">Active</a></li>
        <li><a href="#/completed" :class="{selected: filter === 'conpleted'}" @click="handleChangeFilter('conpleted')">Completed</a></li>
      </ul>
      <button class="clear-completed" v-show="hasCompleted" @click="handleRemoveAllCompletedTodo" >Clear completed</button>
    </footer> -->
    <!-- <the-header :todos.sync="todos"/>
    <the-list :todos.sync="todos" :filter="filter"/>
    <the-footer :todos.sync="todos" :filter.sync="filter"/> -->
    <the-header />
    <the-list />
    <the-footer />
  </div>
</body>
</html>
</template>

<script>

import "@/assets/base.css";
import "@/assets/index.css";
import TheHeader from "@/components/TheHeader";
import TheList from "@/components/TheList";
import TheFooter from "@/components/TheFooter";

export default {
  // data(){
  //   return{
  //     todos:[{
  //       title:'任务 一',
  //       completed: false
  //     },{
  //       title:'任务 二',
  //       completed: true
  //     }],
  //     editTodo: null ,
  //     beforeEditCache: '',
  //     newTodo: null,
  //     filter: 'all'
  //   }
  // },
  // created(){
  //   this.fetchFilter();
  // },
  // watch:{
  //   '$route': 'fetchFilter'
  // },
  // methods:{
  //   handleEdit(todo){
  //     this.editTodo = todo;
  //     this.beforeEditCache = todo.title;
  //   },
  //   handleEditDone(todo){
  //     if(todo.title.trim()){
  //       this.editTodo = null;
  //       this.beforeEditCache = null;
  //     }
  //   },
  //   handleEditCancel(todo){
  //     todo.title = this.beforeEditCache;
  //     this.editTodo= null;
  //     this.beforeEditCache = null;
  //   },
  //   handleUpdateTodos(todos){
  //     this.todos =todos;
  //   },
  //   handleRemoveTodo(todo){
  //     let index = this.todos.indexOf(todo);
  //     this.todos.splice(index,1);
  //   },
  //   handleRemoveAllCompletedTodo(){
  //     this.todos = this.todos.filter(data => !data.completed);
  //   },
  //   handleChangeFilter(filter){
  //     this.filter= filter;
  //   },
  //   fetchFilter:function(){
  //     let filter = this.$route.params.filter;
  //     this.filter = filter;
  //   }
  // },
  // directives:{
  //   'todo-focus':function(el, binding){
  //     if(binding.value){
  //       el.focus();
  //     }
  //   }
  // },
  // computed: {
  //   allCompleted: {
  //     get: function(){
  //       return this.todos.every( data => data.completed);
  //     },
  //     set: function(value){
  //       this.todos.forEach(todo => todo.completed = value);
  //     }
  //   },
  //   hasCompleted(){
  //     return this.todos.some(data => data.completed);
  //   },
  //   showTodos(){
  //     let filter  =this.filter;
  //     return this.todos.filter(data =>{
  //       if(filter === 'all'){
  //         return true
  //       }else if(filter ==='active'){
  //         return !data.completed
  //       }else if(filter ==='completed'){
  //         return data.completed
  //       }
  //     })
  //   }
  // },
  components:{
    'the-header': TheHeader,
    'the-list': TheList,
    'the-footer': TheFooter
  }
}
</script>

