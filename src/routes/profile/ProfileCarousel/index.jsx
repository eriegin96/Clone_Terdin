import React from 'react';
import Slider from 'react-slick';

function NextArrow(props) {
	const { className, style, onClick } = props;
	return <div className={className} style={{ ...style }} onClick={onClick} />;
}

function PrevArrow(props) {
	const { className, style, onClick } = props;
	return <div className={className} style={{ ...style }} onClick={onClick} />;
}

export default function ProfileCarousel() {
	const settings = {
		arrows: true,
		className: 'max-h-profile',
		dots: true,
		infinite: false,
		useCSS: false,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		appendDots: (dots) => (
			<ul
				style={{
					top: 0,
					bottom: 'unset',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				{dots}
			</ul>
		),
		customPaging: () => (
			<div className="w-full h-full py-1 opacity-20 rounded-25">
				<div className="h-1 bg-gray-80"></div>
			</div>
		),
	};

	const imgs = [
		'https://picsum.photos/id/111/640/800',
		'https://picsum.photos/id/112/640/800',
		'https://picsum.photos/id/113/640/800',
	];

	return (
		<>
			<Slider {...settings}>
				{imgs.map((item, i) => (
					<img
						key={i}
						src={item}
						className="w-full h-full bg-center bg-cover bg-no-repeat rounded-t-lg"
					></img>
				))}
			</Slider>
		</>
	);
}
