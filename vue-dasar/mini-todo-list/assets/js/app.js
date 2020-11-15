Vue.component('input-todo', {
	data: function() {
		return {
			content: ''
		}
	},
	methods: {
		addTodo() {
			console.log(this.content);
		}
	},
	template: `
		<div>
			<p>Tambah Daftar Aktifitas Anda !</p>
			<input type="text" v-model="content" @keyup.enter="addTodo">
		</div>
	`
});

const app = new Vue({
	el: '#app'
});