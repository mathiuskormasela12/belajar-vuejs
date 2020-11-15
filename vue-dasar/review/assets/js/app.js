new Vue({
	el: '#root',
	data: {
		message: "<b>Hello Vue</b>",
		nama: "Mathius",
		x: 5,
		y: 10,
		baru: '',
		mulai: '',
		wk: '',
		alamat: '',
		fm: [],
		bahasa: '',
		os: []
	},
	/*
		Object yg berisi method-method
		yang berfungsi untuk mengelolah
		data dalam property data dan menghasilkan
		sebuah nilai serta method-method tersebut
		akan langsung di jalankan dan return valuenya
		akan menjadi nilai dari property methodnya (methodnya
		akan jadi property biasa)
	*/
	computed: {
		kalikan() {
			return this.x * this.y;
		}
	},
	methods: {
		tambahkan(x) {
			this.baru = x.concat(this.x + this.y);
		}
	},
	watch: {
		mulai(val) {
			this.mulai = val;
		}
	}
});