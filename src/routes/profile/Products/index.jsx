import React from 'react';
import imgPlatinum from 'resources/img/nav/tinder-platinum.svg';
import imgGold from 'resources/img/nav/tinder-gold.svg';
import imgPlus from 'resources/img/nav/tinder-plus.svg';
import { Link } from 'react-router-dom';
import { BoostSvg, StarSvg } from 'utils/Svg';

export default function Products() {
	return (
		<>
			<div className="pt-6 px-6">
				<Link
					to="/app/product/subscription/platinum"
					className="w-full h-full inline-flex flex-col justify-center items-center p-4 text-center bg-white rounded-lg text-text-secondary shadow-1"
				>
					<img src={imgPlatinum} alt="" className="pb-2.5" />
					<div>Priority Likes, See who Likes you & More</div>
				</Link>
			</div>
			<div className="pt-6 px-6">
				<Link
					to="/app/product/subscription/gold"
					className="w-full h-full inline-flex flex-col justify-center items-center p-4 text-center bg-white rounded-lg text-text-secondary shadow-1"
				>
					<img src={imgGold} alt="" className="pb-2.5" />
					<div>See Who Likes You & More!</div>
				</Link>
			</div>
			<div className="pt-6 px-6">
				<Link
					to="/app/product/subscription/plus"
					className="w-full h-full inline-flex flex-col justify-center items-center p-4 text-center bg-white rounded-lg text-text-secondary shadow-1"
				>
					<img src={imgPlus} alt="" className="pb-2.5" />
					<div>See Who Likes You & More!</div>
				</Link>
			</div>
			<div className="mt-9 flex">
				<div className="pt-7 px-4 pb-4 bg-white relative text-center w-1/2 flex flex-col justify-center shadow-1 mr-1 ml-6">
					<span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 p-2 shadow-1 bg-white rounded-full ">
						<BoostSvg className="w-8 h-8" />
					</span>
					<div>
						<p className="my-1 text-text-primary font-semibold">0 remaining</p>
						<div className="text-xs text-boost">Get More Boosts</div>
					</div>
				</div>
				<div className="pt-7 px-4 pb-4 bg-white relative text-center w-1/2 flex flex-col justify-center shadow-1 mr-6 ml-1">
					<span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 p-2 shadow-1 bg-white rounded-full ">
						<StarSvg className="w-8 h-8" />
					</span>
					<div>
						<p className="my-1 text-text-primary font-semibold">0 remaining</p>
						<div className="text-xs text-star">Get More Super Likes</div>
					</div>
				</div>
			</div>
		</>
	);
}
