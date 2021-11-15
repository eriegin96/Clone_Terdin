const colorVars = require('./tailwind/variables');

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
				'checkout-platinum':
					'linear-gradient(86deg,var(--color-gray-95) 20%,var(--color-gray-70),var(--color-gray-95) 80%)',
				'checkout-plus':
					'linear-gradient(225deg,var(--color-brand-coral),var(--color-brand-hot-pink))',
			},
			borderRadius: {
				3: '0.1875rem',
				7.5: '1.875rem',
				25: '6.25rem',
			},
			borderWidth: {
				3: '3px',
			},
			boxShadow: {
				1: '0 2px 6px 0 rgb(101 110 123 / 14%)',
				2: '0 5px 13px 1px rgb(0 0 0 / 9%)',
				'checkout-platinum': '0 1px 20px 0 #999',
				'checkout-gold': '0 1px 20px 0 #e9aa43',
				'checkout-plus': '0 1px 20px 0 rgb(255 67 92 / 38%)',
			},
			colors: { ...colorVars, 'gold-5': 'rgb(193 146 15 / 4%)', 'pink-5': 'rgba(255,68,88,.04)' },
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
				22: '1.375rem',
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
				40: '40px',
				50: '50px',
				54: '54px',
				320: '320px',
			},
			minWidth: {
				200: '200px',
				325: '325px',
				364: '364',
			},
			maxWidth: {
				'3/5': '60%',
				'4/5': '80%',
				'9/10': '90%',
				315: '315px',
				375: '375px',
				420: '420px',
				667: '667px',
			},
			spacing: {
				'3/10': '30%',
				'85/100': '85%',
				0.75: '0.1875rem',
				1.25: '0.3125rem',
				4.25: '1.0625rem',
				7.5: '1.875rem',
				12.5: '3.125rem',
				13: '3.25rem',
				15: '3.75rem',
				18: '4.5rem',
				18.25: '4.5625rem',
				26: '6.5rem',
				42: '10.5rem',
				45: '11.25rem',
				93.75: '23.4375rem',
				110: '27.5rem',
			},
			zIndex: {
				1: 1,
				'-1': -1,
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ['active'],
			backgroundImage: ['hover', 'focus'],
			cursor: ['hover'],
			display: ['group-hover'],
		},
	},
	plugins: [],
};
