import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Slider, Switch } from 'antd';

export default function DiscoverySettings() {
	const [distance, setDistance] = useState(80);
	const [age, setAge] = useState([18, 28]);

	return (
		<>
			<div className="nav__settings__setting">
				<h3>Discovery Settings</h3>
				<div className="nav__settings__setting__container">
					<Link to="settings/plus/passport">
						<div>
							<span>Location</span>
							<span>
								Phường 15, VietNam
								<FontAwesomeIcon icon="fa-solid fa-angle-right" />
							</span>
						</div>
					</Link>
					<div className="nav__settings__setting__distance">
						<div>
							<span>Distance Preference</span>
							<span>{distance} km.</span>
						</div>
						<Slider
							min={2}
							max={161}
							defaultValue={distance}
							tooltipVisible={false}
							onChange={(value) => setDistance(value)}
						/>
						<div>
							<span>Only show people in this range</span>
							<Switch />
						</div>
					</div>
					<Link to="settings/gender">
						<div>
							<span>Looking for</span>
							<span>
								Women
								<FontAwesomeIcon icon="fa-solid fa-angle-right" />
							</span>
						</div>
					</Link>
					<div className="nav__settings__setting__gender">
						<div>
							<span>Age Preference</span>
							<span>{age[0]} - {age[1] === 100 ? '100+' : age[1]}</span>
						</div>
						<Slider range min={18} max={100} defaultValue={age} tooltipVisible={false} onChange={(value) => setAge(value)} />
						<div>
							<span>Only show people in this range</span>
							<Switch />
						</div>
					</div>
					<div>
						<span>Global</span>
						<Switch />
					</div>
				</div>
				<div className="nav__settings__setting__sub">
					Going global will allow you to see people from around the world after you’ve run out of
					profiles nearby.
				</div>
			</div>
		</>
	);
}
