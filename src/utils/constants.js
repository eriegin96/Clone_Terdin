import {
	MessagePlaSvg,
	Like1PlaSvg,
	Like2PlaSvg,
	MorePlaSvg,
	Like1Svg,
	Like2Svg,
	BoostSvg,
	ControlSvg,
	KeySvg,
	LocationSvg,
	StarSvg,
	RewindSvg,
	HideSvg,
} from './Svg';

export const HOME_NAVS = [
	{
		title: 'Products',
		list: [
			{ title: 'Premium Features' },
			{ title: 'Subscription Tiers' },
			{
				subList: [
					{ title: 'Tinder Plus®' },
					{ title: 'Tinder Gold™' },
					{ title: 'Tinder Platinum™' },
				],
			},
			{ title: 'Download' },
		],
	},
	{ title: 'Learn' },
	{
		title: 'Safety',
		list: [
			{ title: 'Community Guidlines' },
			{ title: 'Safety Tips' },
			{ title: 'Safety & Policy' },
			{ title: 'Safety & Reporting' },
			{ title: 'Security' },
		],
	},
	{ title: 'Support' },
	{ title: 'Swipe Night' },
];

export const HOME_TESTIMONIALS = [
	{
		title: 'Shannon & Julian',
		content:
			'I was feeling lonely back in my hometown because most of my friends had started romantic relationships while I was abroad. We both decided to download Tinder and see what happened.\n\nWithout the app we may have never met and embarked on this wild, wonderful journey. Thank you for bringing us and so many other couples together around the world. I will forever be grateful.',
	},
	{
		title: 'Courtney & Miranda',
		content:
			'Thanks to Tinder I have found the love of my life and we are to be married.\n\nAfter going on a few dates and having a few fun nights I came across Miranda. After reading her profile I couldn’t resist swiping right after reading her final sentence... ‘Looking for my super babe for life.’ After talking for about a week we went out on our first date and I knew there was something special about her!',
	},
	{
		title: 'Gabriel & Fiance',
		content:
			'I met my fiancé on tinder during the quarantine for COVID. She is from Lafayette, Indiana and I am from Cleveland, Ohio. We are both Christians who fell madly in love.',
	},
	{
		title: 'Kenneth & Elliot',
		content:
			'I honestly had been on many Tinder dates and was absolutely sure I was meeting a fling to get a free meal and have some fun…3 years and sooo many dates and memories later, I am married to my Tinder guy, Kenny!',
	},
	{
		title: 'Victoria and Bayleigh Rodriquez ❤️',
		content:
			'THANK YOU for making it possible for me to meet my soulmate. Five minutes into our first conversation, my now-wife mentioned how we would have an amazing wedding.',
	},
	{
		title: 'Ryan and Lindsey Walsh',
		content:
			'...just gotten out of a bad breakup and created a Tinder account to keep my mind off the breakup. After about a week of talking, we decided to meet up at a local bar for drinks...we decided to tie the knot in an 18 person ceremony in New Jersey on June 27th 2020.',
	},
	{
		title: 'Shannon Escobar',
		content:
			"We were at a crossroads and so after a few months of casually dating, we decided to end things. I was in love, but thought this love story wasn't meant to last. Fast forward 9 months, and we had become inseparable.",
	},
	{
		title: 'Rebecca Lawton',
		content:
			'He hit me with one the WORST pick up lines I had ever seen, but being bored at work, I decided to reply. From there we never stopped talking, dating each other and falling deeper in love.',
	},
	{
		title: 'Lauren Delarmente',
		content:
			'For all the single people out there, especially introverted ones like us: do not be afraid to travel outside of your comfort zone. That’s where you’ll make a genuine connection. Tinder brought us together and for that, I am forever grateful. ❤',
	},
];

export const PRODUCT = {
	platinum: {
		features: [
			{
				title: 'Message before Matching',
				content: 'Add a message for free with every Super Like you send.',
				svg: MessagePlaSvg,
				color: 'text-primary',
			},
			{
				title: 'Prioritized Likes',
				content: 'Everyone you like will see you sooner',
				svg: Like1PlaSvg,
				color: 'text-primary',
			},
			{
				title: 'See Who Likes You',
				content: 'Match instantly with people who already like you',
				svg: Like2PlaSvg,
				color: 'text-primary',
			},
			{
				title: 'And Much More!',
				content:
					'Including Top Picks, Unlimited Likes, 1 free Boost a month, 5 Super Likes a week, Rewind & Passport™',
				svg: MorePlaSvg,
				color: 'text-primary',
			},
		],
		get: {
			title: 'Platinum',
			titleColor: 'text-secondary',
			sub: 'A First Class Dating Experience',
			tagColor: 'black',
			tagBg: 'divider-primary',
			priceColor: 'white',
			priceHoverColor: 'gray-15',
			priceBg: 'text-primary',
			priceBorderColor: 'divider-primary',
			checkoutBg: 'checkout-platinum',
			checkoutShadow: 'checkout-platinum',
		},
		prices: [
			{ month: '12 months', price: '₫84,939', save: '69%', tag: 'Best Value' },
			{ month: '6 months', price: '₫120,791.33', save: '56%', tag: 'Most Popular' },
			{ month: '1 month', price: '₫237,656' },
		],
	},
	gold: {
		features: [
			{
				title: 'Likes You',
				content: 'See Who Likes You & More!',
				svg: Like1Svg,
				color: 'text-gold',
			},
			{
				title: 'Unlimited Likes',
				content: 'Send as many Likes as you want.',
				svg: Like2Svg,
				color: 'green-20',
			},
			{
				title: '1 free Boost a month',
				content: 'Be a top profile in your area for 30 minutes to get more matches.',
				svg: BoostSvg,
				color: 'purple-60',
			},
			{
				title: 'Control Your Profile',
				content: 'Limit what others see about you',
				svg: ControlSvg,
				color: 'yellow-orange-60',
			},
			{
				title: 'Control Who Sees You',
				content: 'Only be shown to people you have liked',
				svg: KeySvg,
				color: 'text-brand-normal',
			},
			{
				title: 'Like Profiles Around the World',
				content: 'Passport™ To Any Location',
				svg: LocationSvg,
				color: 'blue-80',
			},
			{
				title: '5 Super Likes a week',
				content: 'Get 5 Super Likes a week and increase your chance at a match by 3x',
				svg: StarSvg,
				color: 'blue-40',
			},
			{
				title: 'Unlimited Rewinds',
				content: 'Go back and try again!',
				svg: RewindSvg,
				color: 'text-gold',
			},
			{
				title: 'Hide Advertisements',
				content: 'Enjoy a completely ad free experience',
				svg: HideSvg,
				color: 'gray-60',
			},
		],
		get: {
			title: 'Gold',
			titleColor: 'text-gold',
			sub: 'See Who Likes You & More!',
			tagColor: 'white',
			tagBg: 'gold-30',
			priceColor: 'text-gold',
			priceHoverColor: 'text-gold',
			priceBg: 'gold-5',
			priceBorderColor: 'gold-30',
			checkoutBg: 'gold-30',
			checkoutShadow: 'checkout-gold',
		},
		prices: [
			{ month: '12 months', price: '₫55,675.75', save: '69%', tag: 'Best Value' },
			{ month: '6 months', price: '₫81,144.33', save: '55%', tag: 'Most Popular' },
			{ month: '1 month', price: '₫158,362' },
		],
	},
	plus: {
		features: [
			{
				title: 'Unlimited Likes',
				content: 'Send as many Likes as you want.',
				svg: Like2Svg,
				color: 'green-20',
			},
			{
				title: 'Control Your Profile',
				content: 'Limit what others see about you',
				svg: ControlSvg,
				color: 'yellow-orange-60',
			},
			{
				title: 'Control Who Sees You',
				content: 'Only be shown to people you have liked',
				svg: KeySvg,
				color: 'text-brand-normal',
			},
			{
				title: 'Like Profiles Around the World',
				content: 'Passport™ To Any Location',
				svg: LocationSvg,
				color: 'blue-80',
			},
			{
				title: 'Unlimited Rewinds',
				content: 'Go back and try again!',
				svg: RewindSvg,
				color: 'text-gold',
			},
			{
				title: 'Hide Advertisements',
				content: 'Enjoy a completely ad free experience',
				svg: HideSvg,
				color: 'gray-60',
			},
		],
		get: {
			title: 'Plus',
			titleColor: 'text-brand-normal',
			sub: 'Unlimited Likes & More!',
			tagColor: 'white',
			tagBg: 'pink',
			priceColor: 'text-brand-normal',
			priceHoverColor: 'text-brand-normal',
			priceBg: 'pink-5',
			priceBorderColor: 'border-brand',
			checkoutBg: 'brand-btn',
			checkoutShadow: 'checkout-plus',
		},
		prices: [
			{ month: '12 months', price: '₫33,964.33', save: '70%', tag: 'Best Value' },
			{ month: '6 months', price: '₫50,937', save: '55%', tag: 'Most Popular' },
			{ month: '1 month', price: '₫101,723' },
		],
	},
};

export const USER = [
	{
		id: '101',
		photos: ['https://picsum.photos/id/171/640/800', 'https://picsum.photos/id/172/640/800'],
		displayName: 'nttramy',
		verified: false,
		age: 18,
		displayInfo: {},
		passions: ['Travel', 'Movies', "Chatting When I'm Bored", 'Esports', 'Street Food'],
		messages: [],
	},
	{
		id: '102',
		photos: [
			'https://picsum.photos/id/151/640/800',
			'https://picsum.photos/id/152/640/800',
			'https://picsum.photos/id/153/640/800',
			'https://picsum.photos/id/154/640/800',
			'https://picsum.photos/id/155/640/800',
			'https://picsum.photos/id/156/640/800',
		],
		displayName: 'Hân',
		verified: true,
		age: 22,
		displayInfo: {
			location: 'Lives in Ho Chi Minh City',
			distance: '5 kilometers away',
		},
		status: `là chái bơ thích ún cf đen 🥑 và tin vào câu chuyện đi tìm một nửa mặt trăng 🌗… 
		/instagram/. @bo.wxxan_`,
		passions: ['Grab a drink', 'Brunch', '90s Kid', 'Instagram'],
		messages: [],
	},
];

export const CHAT_USER = [
	{
		id: '103',
		photos: ['https://picsum.photos/id/141/640/800', 'https://picsum.photos/id/142/640/800'],
		displayName: 'Tyra',
		verified: false,
		age: 25,
		displayInfo: {
			school: 'Đại Học Quốc Gia Tp. Hồ Chí Minh',
			gender: 'Woman',
			distance: '3 kilometers away',
		},
		passions: ['Travel', 'Foodie', 'Language Exchange', 'Libra', 'Trying New Things'],
		messages: [
			{ id: '103', message: 'Hé lô nè' },
			{ id: 'aaa', message: '^^' },
		],
	},
	{
		id: '104',
		photos: [
			'https://picsum.photos/id/161/640/800',
			'https://picsum.photos/id/162/640/800',
			'https://picsum.photos/id/163/640/800',
		],
		displayName: 'Linh',
		verified: false,
		age: 27,
		displayInfo: {},
		status: `Tên - Tuổi có để, làm về giáo dục
		Khá dam và hư
		
		Thích kể chuyện dam ^^
		
		@callmejasmint`,
		passions: ['Board Games', "Chatting When I'm Bored", 'Intimate Chat'],
		messages: [
			{ id: 'aaa', message: 'hi' },
			{ id: '104', message: 'Oh ^^' },
		],
	},
];
