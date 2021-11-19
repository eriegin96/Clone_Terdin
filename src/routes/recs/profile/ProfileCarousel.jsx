import { AppContext } from 'context/AppProvider';
import React, { useContext } from 'react';
import Slider from 'react-slick';

function NextArrow(props) {
	const { className, style, onClick } = props;
	return <div className={className} style={{ ...style }} onClick={onClick} />;
}

function PrevArrow(props) {
	const { className, style, onClick } = props;
	return <div className={className} style={{ ...style }} onClick={onClick} />;
}

export default function ProfileCarousel({ photos }) {
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
			<div className="w-full h-full py-1 opacity-20">
				<div className="h-1 bg-gray-80 rounded-25"></div>
			</div>
		),
	};

	return (
		<>
			<Slider {...settings}>
				{photos.map(
					(item, i) =>
						item !== '' && (
							<img
								key={i}
								src={item}
								alt=""
								className="w-full h-full bg-center bg-cover bg-no-repeat rounded-t-lg"
							></img>
						)
				)}
			</Slider>
		</>
	);
}
