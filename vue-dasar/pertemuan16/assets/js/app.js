const app = new Vue({
	el: '#app',
	data: {
		frameworks: [
			{ nama: "Vue Js", platform: "Web App", language: "Javascript" },
			{ nama: "React Native", platform: "Mobile App", language: "Javascript" },
			{ nama: "Flutter", platform: "Mobile App", language: "Dart" },
			{ nama: "Django", platform: "Web App", language: "Python" }
		],
		language: {
			nama: "Javascript",
			frameworks: "Vue Js",
			platform: "Web App"
		}
	}
});