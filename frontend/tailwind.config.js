module.exports = {
	purge: [],
	// purge: [ './pages/**/*.{js,ts,jsx,tsx}', './modules/**/*.{js,ts,jsx,tsx}' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			dropShadow: {
				'3xl': '0 0 8px rgba(0, 0, 0, 0.1)',
			},
			sans: [
				"sans-serif",
				"custom-font",
				"BlinkMacSystemFont",
				"-apple-system",
				"Segoe UI",
				"Roboto",
				"Oxygen",
				"Ubuntu",
				"Cantarell",
				"Fira Sans",
				"Droid Sans",
				"Helvetica Neue",
				"Helvetica",
				"Arial",
			],
			mono: ["Source Code Pro", "Menlo", "monospace"],
			spacing: {
				'row1': '13rem',
				'box1w': '19rem',
				'box2w': '26rem',
				'table1h': '44rem',
				'table1w': '14rem',
				'chart1h': '23rem',
				'chart1w': '52rem',
				'64': '16rem',
				'80': '20rem',
				'120': '30rem',
				'132': '33rem',
				'160': '40rem',
				'200': '50rem',
				'220': '55rem',
				'240': '60rem',
				'320': '80rem'
			}
		},
		borderRadius: {
			'3xl': '1.5rem',
			'4xl': '2rem'
		  }
	},
	variants: {
		extend: {}
	},
	plugins: []
};
