import React from 'react';
import { Link } from 'react-router-dom';
import AccountSettings from './AccountSetting';
import DiscoverySettings from './DiscoverySettings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TinderSvg } from 'utils/Svg';

export default function Settings() {
	return (
		<>
			<AccountSettings />
			<DiscoverySettings />
			<div className="nav__settings__setting">
				<div className="nav__settings__setting__container">
					<div>Show me on Tinder</div>
				</div>
				<div className="nav__settings__setting__sub">
					While turned off, you will not be shown in the card stack. You can still see and chat with
					your matches.
				</div>
			</div>
			<div className="nav__settings__setting">
				<div className="nav__settings__setting__container">
					<Link to="/settings/block-contacts/tab-contacts">
						<div>
							<span>Block Contacts</span>
							<span>
								<FontAwesomeIcon icon="fa-solid fa-angle-right" />
							</span>
						</div>
					</Link>
				</div>
				<div className="nav__settings__setting__sub">
					Select people from your contact list that you don’t want to see or be seen by on Tinder.
				</div>
			</div>
			<div className="nav__settings__setting">
				<h3>Web Profile</h3>
				<div className="nav__settings__setting__container">
					<Link to="/settings/web-profile">
						<div>
							<span>Username</span>
							<span>
								Claim Yours
								<FontAwesomeIcon icon="fa-solid fa-angle-right" />
							</span>
						</div>
					</Link>
				</div>
				<div className="nav__settings__setting__sub">
					Create a username. Share your username. Have people all over the world match with you
					right on Tinder.
				</div>
			</div>
			<div className="nav__settings__setting">
				<h3>Read Receipts</h3>
				<div className="nav__settings__setting__container">
					<Link to="/settings/read-receipts">
						<div>
							<span>Manage Read Receipts</span>
							<span>
								<FontAwesomeIcon icon="fa-solid fa-angle-right" />
							</span>
						</div>
					</Link>
				</div>
			</div>
			<div className="nav__settings__setting">
				<h3>Activity Status</h3>
				<div className="nav__settings__setting__container">
					<Link to="/settings/recently-active">
						<div>
							<span>Recently Active Status</span>
							<span>
								<FontAwesomeIcon icon="fa-solid fa-angle-right" />
							</span>
						</div>
					</Link>
				</div>
			</div>
			<div className="nav__settings__setting">
				<h3>Notifications</h3>
				<div className="nav__settings__setting__container">
					<Link to="/settings/email">
						<div>
							<span>Email</span>
							<span>
								<FontAwesomeIcon icon="fa-solid fa-angle-right" />
							</span>
						</div>
					</Link>
					<Link to="/settings/push">
						<div>
							<span>Push Notifications</span>
							<span>
								<FontAwesomeIcon icon="fa-solid fa-angle-right" />
							</span>
						</div>
					</Link>
				</div>
			</div>
			<div className="nav__settings__setting">
				<h3>Language</h3>
				<div className="nav__settings__setting__container">
					<Link to="/settings/languages">
						<div>
							<span>Language</span>
							<span>
								English
								<FontAwesomeIcon icon="fa-solid fa-angle-right" />
							</span>
						</div>
					</Link>
				</div>
			</div>
			<div className="nav__settings__setting">
				<h3>Help & Support</h3>
				<div className="nav__settings__setting__container">
					<div>
						<span>Help & Support</span>
						<span className="nav__settings__setting__link">
							<FontAwesomeIcon icon="fa-solid fa-up-right-from-square" />
						</span>
					</div>
				</div>
			</div>
			<div className="nav__settings__setting">
				<h3>Safety</h3>
				<div className="nav__settings__setting__container">
					<div>
						<span>Community Guidlines</span>
						<span className="nav__settings__setting__link">
							<FontAwesomeIcon icon="fa-solid fa-up-right-from-square" />
						</span>
					</div>
					<div>
						<span>Safety & Policy</span>
						<span className="nav__settings__setting__link">
							<FontAwesomeIcon icon="fa-solid fa-up-right-from-square" />
						</span>
					</div>
					<div>
						<span>Safety Tips</span>
						<span className="nav__settings__setting__link">
							<FontAwesomeIcon icon="fa-solid fa-up-right-from-square" />
						</span>
					</div>
				</div>
			</div>
			<div className="nav__settings__setting">
				<h3>Legal</h3>
				<div className="nav__settings__setting__container">
					<div>
						<span>Privacy Settings</span>
					</div>
					<div>
						<span>Cookie Policty</span>
						<span className="nav__settings__setting__link">
							<FontAwesomeIcon icon="fa-solid fa-up-right-from-square" />
						</span>
					</div>
					<div>
						<span>Privacy Policy</span>
						<span className="nav__settings__setting__link">
							<FontAwesomeIcon icon="fa-solid fa-up-right-from-square" />
						</span>
					</div>
					<div>
						<span>Terms of Service</span>
						<span className="nav__settings__setting__link">
							<FontAwesomeIcon icon="fa-solid fa-up-right-from-square" />
						</span>
					</div>
				</div>
			</div>
			<div className="nav__settings__setting">
				<div className="nav__settings__setting__container">
					<div className="nav__settings__setting__btn">Share Tinder</div>
				</div>
			</div>
			<div className="nav__settings__setting">
				<div className="nav__settings__setting__container">
					<div className="nav__settings__setting__btn">Logout</div>
				</div>
			</div>
			<div className="nav__settings__info">
				<TinderSvg />
				<p>Version 3.4.0</p>
			</div>
			<div className="nav__settings__setting">
				<div className="nav__settings__setting__container">
					<div className="nav__settings__setting__btn">Delete Account</div>
				</div>
			</div>
		</>
	);
}
