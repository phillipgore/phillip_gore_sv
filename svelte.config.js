import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: dev ? '' : '/phillip_gore_sv'
		}
	}
};

export default config;
