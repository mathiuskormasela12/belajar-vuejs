const app = new Vue({
	el: '#app',
	data: {
		content: '',
		frameworks: ['Vue Js', 'React Js', 'Angular Js']
	},
	methods: {
		addFramework: function() {
			this.frameworks.push(this.content);
		},
		removeFramework: function(index) {
			this.frameworks.splice(index, 1);
		}
	}
});