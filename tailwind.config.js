/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	darkMode: 'class', // or 'media' or 'class'
	daisyui: {
		themes: ['light']
	},
	plugins: [require('daisyui')]
};
