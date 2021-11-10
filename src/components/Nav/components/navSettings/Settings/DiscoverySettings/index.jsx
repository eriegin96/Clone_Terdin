import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DiscoverySettings() {
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
					<div>
						<span>Distance Preference</span>
						<div>
							<span>Only show people in this range</span>
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
					<div>
						<span>Age Preference</span>
						<div>
							<span>Only show people in this range</span>
						</div>
					</div>
					<div>
						<span>Global</span>
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
