<template>
	<div class="logos-wrapper">
		<h2 class="title-header">Find Best Logo</h2>
		<div class="item-logos">
			<img class="logos" src="../assets/angular-seeklogo.com.svg" alt="">
		</div>
		<div class="item-logos">
			<img class="logos" src="../assets/javascript-js-seeklogo.com.svg" alt="">
		</div>
		<div class="item-logos">
			<img class="logos" src="../assets/logo.png" alt="">
		</div>
		<div class="item-logos">
			<img class="logos" src="../assets/angular-seeklogo.com.svg" alt="">
		</div>
		<div class="item-logos">
			<img class="logos" src="../assets/javascript-js-seeklogo.com.svg" alt="">
		</div>
		<div class="item-logos">
			<img class="logos" src="../assets/logo.png" alt="">
		</div>
		<div class="item-logos">
			<img class="logos" src="../assets/angular-seeklogo.com.svg" alt="">
		</div>
	</div>
</template>

<script type="text/javascript">
		
	export default {
		name: 'Logos'
	}

</script>

<style scoped>

	.title-header {
		margin-bottom: 80px;
		text-align: left;
	}
	
	.logos-wrapper {
		width: 62%;
		overflow: hidden;
		margin: auto;
	}

	.item-logos {
		height: 150px;
		width: 150px;
		float: left;
		margin-right: 70px;
		margin-bottom: 70px;
	}

	.item-logos .logos {
		width: 150px;
		height: 150px;
	}

</style>