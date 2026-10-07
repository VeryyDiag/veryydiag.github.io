import { mdsvex } from 'mdsvex';
import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    mdsvex({ extensions: ['.svx', '.md'], components: '#lib/components/markdown.ts', component_mode: 'all' }),
    tailwindcss(),
    sveltekit({
      compilerOptions: {
			  // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
			  runes: ({ filename }) =>
			    filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
		  adapter: adapter(),
		  preprocess: [],
		  extensions: ['.svelte', '.svx', '.md']
		})
]
});
