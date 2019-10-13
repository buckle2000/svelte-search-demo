import { csvParse } from 'd3-dsv'
import App from './App.svelte';

const app = new App({
	target: document.body,
});

fetch('anime.csv')
	.then(resp => resp.text())
	.then(content => app.$set({ dataset: csvParse(content) }))

export default app;