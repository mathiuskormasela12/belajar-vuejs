const app = new Vue({
	el: '#app',
	data: {
		message: ''
	},
	methods: {
		showAlert: function(x) {
			alert(x);
		}
	}
})