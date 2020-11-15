/*
	===== Belajar Membuat Component =====

	Didalam Vue Js memungkinkan kita
	untuk membuat sebuah element html
	baru (custome element) yang berisi
	element-element html. Hal itu disebut
	sebagai component.

	rumus pembuatan component :
	Vue.component('nama-component', {
		template: 'kode html disini'
	});
*/

// Mendefinisikan component judul
Vue.component('judul', {
	template: '<h3>Apa itu Vue Js ?</h3>'
});

// Mendefinisikan component subjudul
Vue.component('subjudul', {
	template: `
		<p>
			Vue Js adalah Progresive Javascript
			Framework yang berfungsu untuk
			membangun user interface.
		</p>
	`
})

const app = new Vue({
	el: '#app'
});