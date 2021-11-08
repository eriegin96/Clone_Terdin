import React from 'react';
import { HOME_TESTIMONIALS } from 'utils/const';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export default function HomeCarousel() {
	const settings = {
		arrows: false,
		autoplay: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	};

	return (
		<div className="home-page__slider__container">
			<Slider {...settings}>
				{HOME_TESTIMONIALS.map((item, i) => (
					<div key={i} className="home-page__slider__item">
						<span>“</span>
						<div className="home-page__slider__item__title">{item.title}</div>
						<hr />
						<div className="home-page__slider__item__content">{item.content}</div>
					</div>
				))}
			</Slider>
		</div>
	);
}
