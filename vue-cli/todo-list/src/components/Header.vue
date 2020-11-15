<template>
  <header>
    <div class="container">
      <Title>Selamat Datang di Aplikasi Todo List</Title>
    </div>
  </header>
</template>

<script>
  import * as El from "./Title";
  export default {
    name: 'Header',
    components: {
      Title: El.Title
    }
  }
</script>

<style scoped>
  

</style>