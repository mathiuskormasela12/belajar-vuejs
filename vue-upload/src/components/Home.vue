<template>
  <form enctype="multipart/form-data" v-on:submit.prevent="send">
    <label for="foto">Foto</label> <br><br>
    <input type="file" id="foto" v-on:change="changeInput" ref="img"/>
    <button type="submit">Kirim</button>
    <p style="color:blue;">{{ message }}</p>
  </form>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Home',
    data: function() {
      return {
        file: '',
        message: ''
      }
    },
    methods: {
      changeInput: function() {
        this.file = this.$refs.img.files[0]
      },
      send: async function() {
        try {
          const formData = new FormData()
          formData.append('foto', this.file)
					console.log(formData)
          let res = await axios.post('http://127.0.0.1:3000/upload', formData)
          this.message = res.data.message
        }catch(err) {
          console.log(err)
        }
      }
    }
  }
</script>
