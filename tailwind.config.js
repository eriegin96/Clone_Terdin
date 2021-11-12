module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			animation: {
				zoomInOut: 'zoomInOut 1s ease infinite',
			},
			backgroundColor: (theme) => ({
				...theme('colors'),
				bg1: 'rgba(0, 0, 0, 0.1)',
				bg3: 'rgba(0, 0, 0, 0.3)',
				bg4: 'rgba(0, 0, 0, 0.4)',
				'profile-nav': 'var(--color-bg-secondary)',
			}),
			backgroundImage: {
				'main-background': "url('./resources/img/homepage/bg.webp')",
			},
			borderRadius: {
				3: '0.1875rem',
				7.5: '1.875rem',
				25: '6.25rem',
			},
			boxShadow: {
				1: '0 2px 6px 0 rgb(101 110 123 / 14%)',
			},
			colors: {
				'bg-secondary': 'var(--color-bg-secondary)',
				'gray-15': 'var(--color-gray-15)',
				coral: 'var(--color-coral)',
				hover: 'var(--color-hover)',
				boost: 'var(--color-boost)',
				star: 'var(--color-star)',
				'brand-pink': 'var(--color-brand-pink)',
				'hot-pink': 'var(--color-hot-pink)',
				'divider-primary': 'var(--color-divider-primary)',
				'text-primary': 'var(--color-text-primary)',
				'text-secondary': 'var(--color-text-secondary)',
			},
			fill: {
				current: 'currentColor',
				white: '#fff',
			},
			flexGrow: {
				3: 3,
			},
			fontSize: {
				13: '.8125rem',
				15: '.9375rem',
				17: '1.0625rem',
				110: '6.875rem',
				180: '11.25rem',
			},
			inset: {
				'1/5': '20%',
				'2/5': '40%',
				'3/5': '60%',
				'4/5': '80%',
			},
			keyframes: {
				zoomInOut: {
					'0%, 100%': { width: '80px', height: '80px' },
					'50%': { width: '100px', height: '100px' },
				},
			},
			letterSpacing: {
				1: '1px',
			},
			lineHeight: {
				12.5: '3.125rem',
			},
			minHeight: {
				50: '50px',
			},
			minWidth: {
				325: '325px',
			},
			maxWidth: {
				'9/10': '90%',
				375: '375px',
			},
			spacing: {
				0.75: '0.1875rem',
				1.25: '0.3125rem',
				4.25: '1.0625rem',
				7.5: '1.875rem',
				12.5: '3.125rem',
				13: '3.25rem',
				15: '3.75rem',
				18.25: '4.5625rem',
				26: '6.5rem',
				42: '10.5rem',
				45: '11.25rem',
			},
			zIndex: {
				1: 1,
				'-1': -1,
			},
		},
	},
	variants: {
		extend: {
			cursor: ['hover'],
			display: ['group-hover'],
		},
	},
	plugins: [],
};
