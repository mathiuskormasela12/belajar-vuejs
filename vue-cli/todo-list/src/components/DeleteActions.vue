<template>
	<div class="container">
		<p>Hapus Kegiatan Yang Sudah Dilakukan !</p>
		<ol>
			<li v-for="(x, i) in data" :key="i">
				<button type="button" @click="deleteAction(i)">X</button>
				{{ x }}
			</li>
		</ol>
	</div>
</template>

<script>
	
	export default {
		name: 'DeleteActions',
		props: {
			data: Array
		},
		methods: {
			deleteAction(i) {
				this.data.splice(i, 1);
			}
		}
	}

</script>