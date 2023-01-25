/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./node_modules/flowbite/**/*.js',
	],
	theme: {
		extend: {
			fontFamily: {
				brandFont: ['Roboto', 'sans-serif'],
			},
			colors: {
				mayaz: '#A69F98',
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
