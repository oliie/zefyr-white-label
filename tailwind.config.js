/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Quicksand', 'sans-serif']
			},
			colors: {
				zefyr: {
					teal: '#799aa7',
					orange: '#fb8500',
					red: '#e87051',
					blue: '#2b7dc0',
					turquoise: '#56b9c6',
					'pale-orange': '#d3974e'
				}
			}
		}
	},
	daisyui: {
		themes: [
			{
				dark: {
					// eslint-disable-next-line @typescript-eslint/no-var-requires
					...require('daisyui/src/theming/themes')['[data-theme=dark]'],
					// primary: '#fb8500',
					primary: '#e76f51',
					secondary: '#799aa7'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
