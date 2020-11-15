const app = new Vue({
	el: "#app",
	data: {
		int1: 1,
		int2: 2,
		message: "Vue Js"
	},
	/*
		===== Belajar Computed Properties =====

		Computed Properties adalah sebuah
		object dalam Vue Js yang berisi method
		method yang mengembalikan sebuah nilai dan 
		berfungsi untuk mengolah data-data yang
		berada dalam property data dan juga
		v-model.
	*/
	computed: {
		sum: function() {
			return this.int1 + this.int2;
		},
		reverseMessage: function() {
			return this.message.split('').reverse().join('');
		}
	}
});