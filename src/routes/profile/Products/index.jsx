import React, { useMemo } from 'react';
import imgPlatinum from 'resources/img/nav/terdin-platinum.svg';
import imgGold from 'resources/img/nav/terdin-gold.svg';
import imgPlus from 'resources/img/nav/terdin-plus.svg';
import { Link } from 'react-router-dom';
import { BoostSvg, StarSvg } from 'utils/Svg';

export default function Products() {
	const list = useMemo(
		() => [
			{
				title: 'Priority Likes, See who Likes you & More',
				img: imgPlatinum,
				link: '/app/product/subscription/platinum',
			},
			{
				title: 'See Who Likes You & More!',
				img: imgGold,
				link: '/app/product/subscription/gold',
			},
			{
				title: 'See Who Likes You & More!',
				img: imgPlus,
				link: '/app/product/subscription/plus',
			},
		],
		[]
	);

	return (
		<>
			{list.map((item, i) => (
				<div key={i} className="pt-6 px-6">
					<Link
						to={item.link}
						className="w-full h-full inline-flex flex-col justify-center items-center p-4 text-center bg-white rounded-lg text-text-secondary shadow-1"
					>
						<img src={item.img} alt="" className="pb-2.5" />
						<div>{item.title}</div>
					</Link>
				</div>
			))}
			<div className="mt-9 flex">
				<div className="pt-7 px-4 pb-4 bg-white relative text-center w-1/2 flex flex-col justify-center shadow-1 mr-1 ml-6">
					<span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 p-2 shadow-1 bg-white rounded-full ">
						<BoostSvg className="w-8 h-8" />
					</span>
					<div>
						<p className="my-1 text-text-primary font-semibold">0 remaining</p>
						<div className="text-xs text-text-boost">Get More Boosts</div>
					</div>
				</div>
				<div className="pt-7 px-4 pb-4 bg-white relative text-center w-1/2 flex flex-col justify-center shadow-1 mr-6 ml-1">
					<span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 p-2 shadow-1 bg-white rounded-full ">
						<StarSvg className="w-8 h-8" />
					</span>
					<div>
						<p className="my-1 text-text-primary font-semibold">0 remaining</p>
						<div className="text-xs text-text-super-like">Get More Super Likes</div>
					</div>
				</div>
			</div>
		</>
	);
}
