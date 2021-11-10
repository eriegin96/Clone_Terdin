import React from 'react';
import { Avatar, Card, Col, Row, Tabs } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const matchList = [
	{ displayName: '1 Like' },
	{ displayName: 'Dâu Dâu' },
	{ displayName: 'Uyên' },
	{ displayName: 'Truccshyy' },
	{ displayName: 'Xuân' },
	{ displayName: 'Anh' },
	{ displayName: 'Anh' },
	{ displayName: 'Tâm' },
	{ displayName: 'Thuy' },
];

const messageList = [
	{ displayName: 'Linh', message: 'Oh ^^' },
	{ displayName: 'Minnie', message: 'Chịu đấy' },
	{ displayName: 'Embe', message: 'Yub' },
	{ displayName: 'Nhi', message: 'Liked your message' },
];

export default function NavTabs() {
	const { pathname } = useLocation();

	function handleChange(key) {
		console.log(key);
	}

	function handleClickMessage(i) {
		const nodeList = document.querySelectorAll('.nav__message');
		nodeList.forEach((item) => item.classList.remove('nav__message--active'));
		nodeList[i].classList.add('nav__message--active');
	}

	return (
		<Tabs defaultActiveKey="1" onChange={handleChange}>
			<Tabs.TabPane tab="Matches" key="1">
				<Row gutter={[16, 16]}>
					{matchList.map((item, i) => (
						<Col key={i} span={8}>
							<Card
								hoverable
                style={{backgroundImage: `url(https://picsum.photos/id/${i * 100}/100/120)`}}
							>
								<div>{item.displayName}</div>
							</Card>
						</Col>
					))}
				</Row>
			</Tabs.TabPane>
			<Tabs.TabPane
				tab="Messages"
				key="2"
				className={pathname.slice(5, 13) === 'messages' ? 'nav__tab-pane2--active' : ''}
			>
				{messageList.map((item, i) => (
					<Link
						key={i}
						to={`messages/${i + 1}`}
						className="nav__message"
						onClick={() => handleClickMessage(i)}
					>
						<div>
							<Avatar size={74}>{item.displayName.charAt(0)}</Avatar>
						</div>
						<div>
							<div>{item.displayName}</div>
							<div>{item.message}</div>
						</div>
					</Link>
				))}
			</Tabs.TabPane>
		</Tabs>
	);
}
