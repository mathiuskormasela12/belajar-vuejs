<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" :class="className">
    <div class="container">
      <a class="navbar-brand" href="#">Todo App</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-item nav-link active" to="/">
            Home <span class="sr-only">(current)</span>
          </router-link>
          <router-link to="/apps" class="nav-item nav-link">
            Apps
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script type="text/javascript">
  
  import "bootstrap/dist/css/bootstrap.css";

  export default {
    name: 'Navbar',
    props: ['className']
  }
  
</script>

<style scoped></style>