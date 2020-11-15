Vue.component('blog-post', {
	props: ['post'],
	template: `
		<div>
			<h1>{{ post.title }}</h1>
			<p>{{ post.content }}</p>
		</div>
	`
});

const app = new Vue({
	el: '#app',
	data: {
		posts: [
			{ id: 1, title: 'What is Vue Js ?', content: 'Vue Js is a Progressive Javascript Framework' },
			{ id: 2, title: 'Why use Vue Js ?', content: 'Because Vue have easy learning curve' },
			{ id: 3, title: 'React Js', content: 'React Js is a Library For Build UI' }
		]
	}
});