<template>
	<header class="header">
	  <h1>todos</h1>
	  <input class="new-todo"
	   autofocus 
	   autocomplete="off" 
	   placeholder="What needs to be done?" 
	   v-model="newTodo" 
	   @keyup.enter="addTodo">
	</header>
</template>

<script>
	export default {
  name: 'TheHeader',
  // props: {
  // 	todos: {
  // 		type:Array,
  // 		default: () => []
  // 	}
  // },
  data(){
    return{ 
      newTodo: '' 
    }
  },
  methods:{
  	addTodo: function(){
      this.$store.commit('addTodo',{
        title: this.newTodo,
        completed: false
      })
      this.newTodo = '';
  		// let todos = [...this.todos];
  		// todos.push({
  		// 	title: this.newTodo,
  		// 	completed: false
  		// })
  		// this.$emit('update:todos',todos);	
  	}
  }
};
</script>