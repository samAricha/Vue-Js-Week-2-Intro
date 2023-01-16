<script>
export default {
  name: "LateNight.vue",

  data(){
    return{
      greetings:"hellow people",
      todos:[],
      newToDo:"",
    }
  },
  methods:{
    //ADD TODOS
    addToDo(){
      this.todos.push({
        todo : this.newToDo,
        isDone : false,
      });
      alert(`${this.newToDo} added to list`);
      this.newToDo='';
    },
    //delete the item
    removeToDo(index){
      this.todos.splice(index,1);
    },
    //mark the item as done
    markDone(index){
      this.todos[index].isDone = !this.todos[index].isDone;
    }

  }
}
</script>

<template>
  <h1>Montana TODOs</h1><br>
  <input type="text" v-model="newToDo" @keyup.enter="addToDo">
  <button @click="addToDo">ADD +</button>

  <div>
    <p>Todos: {{todos.length}}</p>
  </div>
  <br>
  <div v-for="(item, id) in todos" :key="id">
      <p :class="item.isDone ? 'mark':''">{{ item.todo }}</p>
      <button @click="markDone(id)">{{item.isDone ? 'UnMark' : 'Mark'}}</button>
      <button @click="removeToDo(id)">Remove</button>
  </div>
  <br>

</template>

<style scoped>
.mark{
  text-decoration: line-through;
  color: green;
}
</style>