module.exports = {
	purge: [],
	// purge: [ './pages/**/*.{js,ts,jsx,tsx}', './modules/**/*.{js,ts,jsx,tsx}' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			spacing: {
				'64': '16rem',
				'80': '20rem',
				'84': '21rem',
				'120': '30rem',
				'132': '33rem',
				'160': '40rem',
				'192': '48rem',
				'200': '50rem',
				'220': '55rem',
				'240': '60rem',
				'320': '80rem'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
