import preprocess from 'svelte-preprocess'
import node from '@sveltejs/adapter-node'
import replace from "@rollup/plugin-replace"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {

		adapter: node(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			plugins: [
				replace({
					'process.env.NODE_ENV': JSON.stringify('production')
				})
			]
		}
	}
}

export default config
