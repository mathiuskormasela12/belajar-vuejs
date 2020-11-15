const app = new Vue({
	el: '#app',
	data: {
		meters:0,
		kilometers: 0
	},
	/*
		=== Belajar Watch ===

		Watch adalah object pada Vue Js
		yg berisi method-method yang memiliki
		nama yg sama dengan beberapa 
		property-property di object data.
		Method-method ini berkaitan
		denga directive v-model input.

		ket :
		nama method pada object
		watch harus sama dengan 
		nama property pada object data.
	*/
	watch: {
		// Ketika input meter ditulis
		// maka jalankan function meters
		meters: function(val) {
			// val adalah value dari inputannya
			this.meters = val;
			this.kilometers = val / 1000;
		},
		// Ketika input kilometer ditulis
		// maka jalankan functin kilometers
		kilometers: function(val) {
			this.kilometers = val;
			this.meters = val * 1000;
		}
	}
});