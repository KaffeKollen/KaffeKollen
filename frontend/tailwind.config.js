module.exports = {
	purge: [],
	// purge: [ './pages/**/*.{js,ts,jsx,tsx}', './modules/**/*.{js,ts,jsx,tsx}' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			dropShadow: {
				'2xl': '0 1px 5px rgba(0, 0, 0, 0.12)',
				'3xl': '0 0 8px rgba(0, 0, 0, 0.07)',
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
				'15': '3.63rem',
				'320': '60rem'
			},
			maxWidth: {
				'xs': '16rem',
			   }
		},
		borderRadius: {
			'lg': '0.5rem',
			'3xl': '1.5rem',
			'4xl': '2rem'
		  },
		  screens: {
			'md': '1000px',
		  }
	},
	variants: {
		extend: {}
	},
	plugins: []
};
