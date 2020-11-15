const app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue',
		int1: 1,
		int2: 2,
		result: null,
		hasil: null
	},
	// methodnya akan langsung dijalankan
	// tidak perlu dipanggil
	// Bisa dipanggil menggunakan declarative rendering
	// Bisa dipanggil menggunkan v-text & v-html
	// Tidak bisa dipanggil menggunakn v-on
	computed: {
		sum: function() {
			return this.int1 + this.int2;
		}
	},
	/*
		=== Directive On ===

		Directive On ditulis v-on:event="function"
		adalah sebuah directive untuk memanggil
		sebuah method yg terdapat dalam
		object methods.

		rumus :
		<elementHTML v-on:event="namaMethod di object methods"></elementHTML>
	*/
	// Methodnya harus dipanggil dulu
	// tidak langsung dijalankan
	// Bisa dipanggil dengan declarative rendering
	// Bisa dipanggil dengan v-html & v-text
	methods: {
		sum2: function() {
			return this.result = this.int1 + this.int2;
		},
		sum3: function(int3) {
			return this.result = this.int1 + this.int2 + int3;
		},
		jikoshoukai: function(nawa) {
			return this.hasil = `<b>Mina-san konnichiwa, watashi wa ${nawa} desu</b>`;
		}
	}
});