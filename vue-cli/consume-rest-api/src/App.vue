<template>
  <div>
    <p>Daftar Artikel</p>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <h3>{{ article.judul }}</h3>
        <p>{{ article.content }}</p>
      </li>
    </ul>

    <button type="button" @click="load">Load</button>
    <br><br>

    <form @submit.prevent="save">
      <input type="text" v-model="form.judul" placeholder="Judul Artikel"><br><br>
      <input type="text" v-model="form.content" placeholder="Isi Artikel"><br><br>
      <button type="submit">Simpan</button>
    </form>
  </div>
</template>

<script type="text/javascript">
  
  import axios from "axios";

  export default {

    name: 'App',

    data() {
      return {
        articles: [],
        form: {
          judul: '',
          content: ''
        }
      }
    },

    mounted() {
      
    },

    methods: {

      async save() {
        try {
          await axios.post('http://localhost:3000/articles', this.form);
          this.load();
          this.judul = '';
          this.content = '';  
        } catch(err) {
          console.log(err);
        }
        
      },

      async load() {
        try {
          const response = await axios.get('http://localhost:3000/articles');
          this.articles = response.data;
        } catch(err) {
          console.log(err);
        }
      }

    }
  }

</script>