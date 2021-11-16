import React from 'react';
import { HOME_TESTIMONIALS } from 'utils/constants';
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
		<div className="max-w-9/10 m-auto">
			<Slider {...settings}>
				{HOME_TESTIMONIALS.map((item, i) => (
					<div
						key={i}
						className="w-full h-full p-6 relative border border-solid border-divider-primary rounded-lg shadow-1"
					>
						<span className="absolute top-0 right-0 h-1/2 text-180 mr-2 text-divider-primary leading-none">
							“
						</span>
						<div className="home-page__slider__item__title text-base font-semibold text-text-primary mb-2">{item.title}</div>
						<hr className='w-4/5 border-divider-primary'/>
						<div className="my-3 border-text-secondary text-text-secondary whitespace-pre-wrap">{item.content}</div>
					</div>
				))}
			</Slider>
		</div>
	);
}
