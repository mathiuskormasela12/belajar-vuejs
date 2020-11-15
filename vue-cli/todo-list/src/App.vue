<template>
  <div id="app">
    <Header />
    <Form :data="actions"/>
    <ListActions :data="actions"/>
    <DeleteActions :data="actions"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Form from "./components/Form.vue";
import ListActions from "./components/ListActions.vue";
import DeleteActions from "./components/DeleteActions.vue";

export default {
  name: 'App',
  components: {
   Header,
   Form,
   ListActions,
   DeleteActions
  },
  data: () => {
    return {
      content: '',
      actions: ['Berdoa', 'Tidur','PDKT']
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

  .container {
    width: 80%;
    margin: auto;
  }

</style>
