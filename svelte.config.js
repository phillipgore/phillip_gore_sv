import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/phillip_gore_sv'
		}
	},
    preprocess: [vitePreprocess()],
};

export default config;
