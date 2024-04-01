/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'fondo': '#0a192f',
				'primary': '#64ffda !important',
				'primary-100': '#ECFFFA80',
				'primary-400': '#59E3C0',
				'primary-700': '#3DD1C2',
				'secondary': '#ccd6f6',
				'secondary-100': '#EEFFFB',
				'gray': '#8892b0',
			},
			fontFamily: {
				
			},
		},
	},
	plugins: [],
}
