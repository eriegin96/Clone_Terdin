import React, { useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imgAS from 'resources/img/homepage/app-store.webp';
import imgGP from 'resources/img/homepage/google-play.webp';

export default function Footer() {
	const infoList = useMemo(
		() => [
			{ title: 'LEGAL', list: ['Privary', 'Terms', 'Cookie Policy', 'Intellectual Property'] },
			{ title: 'CAREERS', list: ['Careers Portal', 'Tech Blog'] },
			{
				title: 'SOCIAL',
				list: ['fa-instagram', 'fa-tiktok', 'fa-youtube', 'fa-twitter', 'fa-facebook-f'],
			},
			{
				list: ['FAQ', 'Destinations', 'Press Room', 'Contact', 'Promo Code'],
			},
		],
		[]
	);

	const footerList = useMemo(
		() => ['FAQ', 'Safety Tips', 'Terms', 'Cookie Policy', 'Privacy Settings'],
		[]
	);

	return (
		<div className="max-w-9/10 m-auto p-5">
			<div className="h-42 my-3 flex items-center text-text-primary border-b border-solid border-divider-primary">
				{infoList.map((item, i) => (
					<div key={i} className="h-full w-1/5 mb-2 pr-3">
						{item.title && (
							<h3 className="text-text-primary font-semibold mb-3 text-xl">{item.title}</h3>
						)}
						<ul>
							{item.list.map((listItem, li) => {
								if (item.title === 'SOCIAL')
									return (
										<li key={li} className="inline-block h-10 w-10">
											<FontAwesomeIcon
												icon={`fa-brands ${listItem}`}
												className="hover:text-hover w-6 h-6 cursor-pointer"
											/>
										</li>
									);
								return (
									<li key={li} className="h-8">
										<span className="text-sm cursor-pointer hover:text-hover">{listItem}</span>
									</li>
								);
							})}
						</ul>
					</div>
				))}
			</div>
			<div className="my-4 flex items-center">
				<h3 className="uppercase mr-3 mb-1.25 text-xl font-semibold">Get the App!</h3>
				<div className="flex justify-center items-center">
					<a href="https://open.tinder.com/kgco/af5c38d7" className="p-4 mr-4">
						<img src={imgAS} alt="" className="object-contain h-12" />
					</a>
					<a href="https://open.tinder.com/kgco/c283b688" className="mr-2">
						<img src={imgGP} alt="" className="object-contain h-20 w-45" />
					</a>
				</div>
			</div>
			<div>
				<p className="mb-3 text-text-secondary text-xs">
					Single people, listen up: If you’re looking for love, want to start dating, or just keep
					it casual, you need to be on Tinder. With over 55 billion matches made, it’s the place to
					be to meet your next best match. Let’s be real, the dating landscape looks very different
					today, as most people are meeting online. With Tinder, the world’s most popular free
					dating app, you have millions of other single people at your fingertips and they’re all
					ready to meet someone like you. Whether you’re straight or in the LGBTQIA community,
					Tinder’s here to bring you all the sparks.
				</p>
				<p className="mb-3 text-text-secondary text-xs">
					There really is something for everyone on Tinder. Want to get into a relationship? You got
					it. Trying to find some new friends? Say no more. New kid on campus and looking to make
					the most of your college experience? Tinder U’s got you covered. Tinder isn’t your average
					dating site — it’s the most diverse dating app, where adults of all backgrounds and
					experiences are invited to make connections, memories, and everything in between.
				</p>
			</div>
			<div className="py-4 border-t border-solid border-divider-primary text-text-secondary flex justify-between items-center">
				<div className="my-2 text-xs">
					{footerList.map((item, i) => {
						if (i !== footerList.length - 1)
							return (
								<React.Fragment key={i}>
									<span className="cursor-pointer hover:text-hover">{item}</span>
									<span className="mx-2">/</span>
								</React.Fragment>
							);
						return (
							<span key={i} className="cursor-pointer hover:text-hover">
								{item}
							</span>
						);
					})}
				</div>
				<div>© 2021 Match Group, LLC, All Rights Reserved.</div>
			</div>
		</div>
	);
}
