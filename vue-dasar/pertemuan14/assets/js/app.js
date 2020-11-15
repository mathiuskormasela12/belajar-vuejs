const app = new Vue({
	el: '#app',
	data: {
		message: ''
	},
	methods: {
		pressEsc: function() {
			this.message = 'You press Esc key';
		},
		pressUp: function() {
			this.message = 'You press Up key';
		},
		pressDown: function() {
			this.message = 'You press Down key';
		},
		pressA: function() {
			this.message = 'You press A key';
		}
	}
});