/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./components/**/*.{html,js}', './pages/**/*.{html,js}', './index.html', './node_modules/@my-company/tailwind-components/**/*.js'],
	daisyui: {
		themes: ['light']
	},
	plugins: [require('daisyui')]
};

module.exports = {
	// ...
};
