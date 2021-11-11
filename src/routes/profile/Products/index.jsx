import React from 'react';
import imgPlatinum from 'resources/img/nav/tinder-platinum.svg';
import imgGold from 'resources/img/nav/tinder-gold.svg';
import imgPlus from 'resources/img/nav/tinder-plus.svg';
import { Link } from 'react-router-dom';
import { BoostSvg, StarSvg } from 'utils/Svg';

export default function Products() {
	return (
		<>
			<div className="nav__profile__product">
				<Link to="/app/product/subscription/platinum">
					<img src={imgPlatinum} alt="" />
					<div>Priority Likes, See who Likes you & More</div>
				</Link>
			</div>
			<div className="nav__profile__product">
				<Link to="/app/product/subscription/gold">
					<img src={imgGold} alt="" />
					<div>See Who Likes You & More!</div>
				</Link>
			</div>
			<div className="nav__profile__product">
				<Link to="/app/product/subscription/plus">
					<img src={imgPlus} alt="" />
					<div>See Who Likes You & More!</div>
				</Link>
			</div>
			<div className="nav__profile__product__extra">
				<div>
					<span>
						<BoostSvg />
					</span>
					<div>
						<p>0 remaining</p>
						<div>Get More Boosts</div>
					</div>
				</div>
				<div>
					<span>
						<StarSvg />
					</span>
					<div>
						<p>0 remaining</p>
						<div>Get More Super Likes</div>
					</div>
				</div>
			</div>
		</>
	);
}
