<template>
	<footer class="footer">
    <span class="todo-count">
      <strong>3</strong> todo
    </span>
    <ul class="filters">
      <li><router-link to="/all" 
      	:class="{selected: filter === 'all'}">All</router-link>
      </li>
      <li><router-link to="/active" 
      	:class="{selected: filter === 'active'}">Active</router-link>
      </li>
      <li><router-link to="/completed" 
      	:class="{selected: filter === 'conpleted'}">Completed</router-link>
      </li>
    </ul>
    <button class="clear-completed" 
      v-show="hasCompleted" 
      @click="handleRemoveAllCompletedTodo" >Clear completed</button>
  </footer>
</template>
<script>
	export default {
	  name: 'TheFooter',
	  // props: {
	  //   todos: {
	  //     type: Array,
	  //     default: () => []
	  //   },
	  //   filter: {
	  //     type: String,
	  //     default: 'all'
	  //   }
	  // },
	  created(){
	  	this.fetchFilter();
	  },
	  watch: {
	  	'$route':'fetchFilter'
	  },
	  computed: {
	  	filter() {
	      return this.$store.state.filter
	    },
	    todosCount() {
	      return this.$store.getters.todosCount
	    },
	    hasCompleted() {
	      return this.$store.getters.hasCompleted
	    },
	    // hasCompleted() {
	    //   return this.todos.some(data => data.completed);
	    // }
	  },
	  methods: {
	  	handleRemoveAllCompletedTodo: function() {
	      this.$store.commit('removeCompleted')
	    },
	    fetchFilter: function() {
	      let filter = this.$route.params.filter
	      this.$store.commit('changeFilter', filter)
	    }
	    // handleChangeFilter: function(filter) {
	    //   this.$emit('update:filter', filter);
	    // },
	    // handleRemoveAllCompletedTodo: function() {
	    //   let todos = [...this.todos];
	    //   todos = todos.filter(data => !data.completed);
	    //   this.$emit('update:todos', todos);
	    // }
	  }
	}

</script>