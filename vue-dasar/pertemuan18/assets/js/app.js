Vue.component('subject-title', {
	template: '<h4>Belajar Property Data Pada Component</h4>'
});

Vue.component('button-counter', {
	/*
		Property Data berisi data-data
		yang akan kita gunakan didalam
		component, namun untuk membuatnya
		property data harus berisi sebuah anonymous
		function yg mereturn object yg
		property-propertynya akan kita
		gunakan sebagai variable di dalam
		component kita (sama seperti property
		data pada object Vue).
	*/
	data: function() {
		return {
			count: 0
		}
	},
	template: '<button @click="count++">Click Me ! {{ count }} times</button>'
});

const app = new Vue({
	el: '#root'
});