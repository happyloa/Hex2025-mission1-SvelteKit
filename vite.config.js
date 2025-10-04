import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Unfonts from 'unplugin-fonts/vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		Unfonts({
			google: {
				display: 'swap',
				families: [{ name: 'Noto Sans TC', styles: 'wght@400;500;700;900', defer: true }]
			}
		})
	]
});
