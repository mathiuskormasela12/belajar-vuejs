<template>
	<div>
		<Navbar className="bg-dark"/>
		<div class="container mt-5">
			<h1 class="pt-4">Daftar Aktifitas</h1>
			<div class="row pt-3">
				<div class="col-md-4">
					<ul class="list-group">
						<li class="list-group-item" v-for="(x, i) in data" :key="x.id">
							<span :class="{'coret':x.fullfiled}">{{ x.activity }}</span>
							<span class="s">
								<span class="badge badge-primary mr-3" v-on:click="sudah(i)">Sudah</span>
								<span class="badge badge-danger" v-on:click="hapus(i)">Hapus</span>
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">

	import "bootstrap/dist/css/bootstrap.css";
	import Navbar from "@/components/Navbar.vue";

	export default {
		name: 'Apps',
		components: {
			Navbar
		},
		data: function() {
			return {
				data: [
					{ id: 1, activity: 'PDKT', fullfiled: false },
					{ id: 2, activity: 'Belajar MTK', fullfiled: false },
					{ id: 3, activity: 'Belajar Basing', fullfiled: false },
					{ id: 4, activity: 'Belajar Ngoding', fullfiled: false }
				]
			}
		},
		methods: {
			sudah(i) {
				this.data[i].fullfiled = true;
			},
			hapus(i) {
				this.data.splice(i, 1);
			}
		}
	}

</script>

<style scoped>
	
	.coret {
		text-decoration: line-through;
	}

	.list-group-item {
		position: relative;
	}

	.list-group-item .s {
		cursor: pointer;
		position: absolute;
		right: 10px;
	}
</style>