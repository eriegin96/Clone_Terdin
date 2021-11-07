import React, { useEffect, useRef, useState } from 'react';
import { Row, Col } from 'antd';
import { HOME_TESTIMONIALS } from 'utils/const';

export default function HomeCarousel() {
	const [itemHeight, setItemHeight] = useState('350px');
	const itemRef = useRef()

	useEffect(() => {
		const itemSelector = document.querySelector('.home-page__slider__item')
		console.log(itemSelector.clientHeight)
		console.log(itemRef.current.clientHeight)
	}, [])

	return (
		<div className="home-page__slider__container">
			<Row gutter={[16, 16]}>
				{HOME_TESTIMONIALS.map((item, i) => (
					<Col span={8} key={i}>
						<div ref={itemRef} className="home-page__slider__item" /* style={{ height: itemHeight }} */>
							<span>“</span>
							<div className="home-page__slider__item__title">{item.title}</div>
							<hr />
							<div className="home-page__slider__item__content">{item.content}</div>
						</div>
					</Col>
				))}
				{/* <Col span={8}>col2</Col>
				<Col span={8}>col3</Col> */}
			</Row>
		</div>
	);
}
