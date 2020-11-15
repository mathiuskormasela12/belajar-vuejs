<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-6">
				<div class="media text-left">
					<img class="mr-3 user-pic" v-bind:src="img">
				<div class="media-body">
				<h5 class="mt-0">{{ firstName }} {{ lastName }}</h5>
				<p>{{ deskripsi }}</p>
				</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import "bootstrap/dist/css/bootstrap.css";
	
	export default {
		name: 'Profiles',
		data: function() {
			return {
					img: require('../assets/10250.jpg'),
					firstName: 'Mathius',
					lastName: 'Kormasela',
					deskripsi: `Cras sit amet nibh libero, in gravida nulla. 
					            Nulla vel metus scelerisque ante sollicitudin.`
				}
		}
	}

</script>

<style scoped>
	
	.user-pic {
		border-radius: 200%;
		width: 80px;
		height: 80px;
	}

</style>