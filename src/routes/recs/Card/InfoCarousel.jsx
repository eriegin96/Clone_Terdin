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

export default function InfoCarousel({ photos }) {
	const settings = {
		arrows: true,
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
			<div className="w-full h-full py-1 opacity-20">
				<div className="h-1 bg-gray-80 rounded-25"></div>
			</div>
		),
	};

	return (
		<div className="h-full">
			<Slider {...settings}>
				{photos.map(
					(item, i) =>
						item !== '' && (
							<img
								key={i}
								src={item}
								alt=''
								className="w-full h-full bg-gray-30 bg-center bg-cover bg-no-repeat rounded-t-lg"
							/>
						)
				)}
			</Slider>
		</div>
	);
}
