<template>
	<div class="container">
		<p>Berikut Daftar Kegiatan Yang Harus Anda Lakukan :</p>
		<ol>
			<li v-for="(x, i) in data" :key="i">{{ x }}</li>
		</ol>
	</div>
</template>

<script>
	export default {
		name: 'ListActions',
		props: {
			data: Array
		}
	}
</script>