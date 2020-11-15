<template>
	<div class="container">
		<form>
			<label for="add-action">Tambah Action</label><br><br>
			<input type="text" id="add-action" placeholder="Action....." v-model="content"/><br><br>
			<button type="button" v-on:click="addAction">Tambah</button>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'Form',
		props: {
			data: Array
		},
		data: () => {
			return { content: '' }
		},
		methods: {
			addAction() {
				this.data.push(this.content);
			}
		}
	}
</script>