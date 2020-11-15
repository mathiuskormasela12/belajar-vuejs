<template>
	<Profiles />
</template>

<script>
	
	import "bootstrap/dist/css/bootstrap.css";
	import Profiles from "@/components/Profiles.vue";

	export default {
		name: 'Profile',
		components: {
			Profiles
		}
		// data: function() {
		// 	return {
		// 		imgFile: '../assets/10250.JPG',
		// 		nama: 'Mathius Kormasela',
		// 		deskripsi: `Cras sit amet nibh libero, in gravida nulla. 
		// 		            Nulla vel metus scelerisque ante sollicitudin.`
		// 	}
		// }
	}

</script>