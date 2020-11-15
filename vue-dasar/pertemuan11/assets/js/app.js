const app = new Vue({
	el: '#app',
	data: {
		language: '',
		languages: []
	},
	computed: {
		showLength() {
			return this.languages.length > 0 ? true : false;
		}
	}
});