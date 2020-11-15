/*
	======= Belajar Vue Js =======

	A. Pengertian

	   Vue Js adalah Progressive Web Framework
	   yang berfungsi untuk membangun User Interface.

	B. Dasar

	   Untuk menulis Vue Js, kita harus
	   mendefinisikan element baru (ex: div)
	   dan memberinya id (ex: app) pada file
	   index.html dan pada file app.js,
	   kita harus mendefinisikan (instansiasi) 
	   object Vue untuk menjalankan Vue js-nya.
	   pada bagian parameternya, kita harus
	   menulis object yang berisi property el
	   yang isinya adalah id app dari index.html,
	   dan property data yg berisi data-data 
	   yang ingin kita tampilkan di browser.
	   Untuk menampilkan data pada browser kita
	   bisa menggunakan notasi {{ datanya }}
	   di dalam file index.js dan di dalam 
	   element div berid app.
*/

const app = new Vue({
	// untuk memilih element yg memiliki id app
	el: '#app',
	// untuk menulis data-data yg ingin kita tampilkan di index.html
	data: {
		message: 'Hello Vue Js'
	}
});