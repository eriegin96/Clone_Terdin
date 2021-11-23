import React, { useContext } from 'react';
import { Avatar, Card, Col, Row, Tabs } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from 'context/AppProvider';

export default function RecsNav() {
	const { pathname } = useLocation();
	const { matchedList, recentList } = useContext(AppContext);

	function handleClickMessage(i) {
		const nodeList = document.querySelectorAll('.nav__message');
		nodeList.forEach((item) => item.classList.remove('nav__message--active'));
		nodeList[i].classList.add('nav__message--active');
	}

	return (
		<Tabs defaultActiveKey="1" onChange={() => {}}>
			<Tabs.TabPane tab="Matches" key="1">
				{matchedList.length === 0 ? (
					<div className="mt-25 h-full w-full text-center">
						<div className="font-semibold text-lg text-text-primary">You have no matches yet</div>
						<div className="text-text-secondary">Swipe more people to get more matches</div>
					</div>
				) : (
					<Row gutter={[16, 16]}>
						{matchedList.map((item, i) => (
							<Col key={i} span={8}>
								<Link to={`/app/messages/${item?.id}`}>
									<Card
										hoverable
										className="bg-gray-30"
										style={{ backgroundImage: `url(${item?.partner?.photos[0]})` }}
									>
										<div className="text-white font-semibold">{item?.partner?.displayName}</div>
									</Card>
								</Link>
							</Col>
						))}
					</Row>
				)}
			</Tabs.TabPane>
			<Tabs.TabPane
				tab="Messages"
				key="2"
				className={pathname.slice(5, 13) === 'messages' ? 'nav__tab-pane2--active' : ''}
			>
				{recentList.length === 0 ? (
					<div className="mt-25 h-full w-full text-center">
						<div className="font-semibold text-lg text-text-primary">You have no messages yet</div>
						<div className="text-text-secondary">Swipe more people to get more messages</div>
					</div>
				) : (
					recentList.map((item, i) => (
						<Link
							key={i}
							to={`/app/messages/${item?.id}`}
							className="nav__message mr-1.25 flex items-center border-transparent transition-all duration-200"
							onClick={() => handleClickMessage(i)}
						>
							<div className="py-3 px-6">
								<Avatar src={item?.partner?.photos[0]} size={74}></Avatar>
							</div>
							<div className="flex-grow text-text-primary">
								<div className="text-17 font-semibold">{item?.partner?.displayName}</div>
								{/* <div>{item?.messages[item?.messages?.length - 1].message}</div> */}
							</div>
						</Link>
					))
				)}
			</Tabs.TabPane>
		</Tabs>
	);
}
