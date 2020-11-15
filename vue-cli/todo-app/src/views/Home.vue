<template>
	<div>
		<Navbar className="bg-transparent"/>
		<header class="hero">
			<div class="container">
				<div class="row justify-content-center align-items-center">
					<div class="col-md text-center">
						<h1 class="display-5 text-white">Welcome in Todo List Application</h1>
					</div>
				</div>
			</div>
		</header>
	</div>
</template>

<script type="text/javascript">
	
	import Navbar from "@/components/Navbar.vue";

	export default {
		name: 'Home',
		components: {
			Navbar
		},
		data: function() {
			return {
				page: 'home'
			}
		}
	}

</script>

<style scoped>
	
	header.hero {
		height: 100vh;
		background: linear-gradient(
			rgba(0, 0, 0, 0.5),
			rgba(0, 0, 0, 0.5)
		), url('../assets/wkw.jpg') center no-repeat;
		background-size: cover;
	}

	.hero > .container {
		height: 100%;
	}

	.hero .row {
		height: 100%;
	}

</style>