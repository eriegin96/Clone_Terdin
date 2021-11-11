module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		backgroundColor: (theme) => ({
			...theme('colors'),
			bg2: 'rgba(0, 0, 0, 0.4)',
		}),
		zIndex: {
			'-1': -1,
		},
		fill: {
			current: 'currentColor',
			white: '#fff',
		},
		extend: {
			colors: {
				coral: 'var(--color-coral)',
				hover: 'var(--color-hover)',
				'brand-pink': 'var(--color-brand-pink)',
				'hot-pink': 'var(--color-hot-pink)',
				'divider-primary': 'var(--color-divider-primary)',
				'text-primary': 'var(--color-text-primary)',
				'text-secondary': 'var(--color-text-secondary)',
			},
			animation: {
				zoomInOut: 'zoomInOut 1s ease infinite',
			},
			keyframes: {
				zoomInOut: {
					'0%, 100%': { width: '80px', height: '80px' },
					'50%': { width: '100px', height: '100px' },
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
