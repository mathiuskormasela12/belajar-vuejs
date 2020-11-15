import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/apps',
		name: 'Apps',
		component: () => import('../views/Apps.vue')
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;