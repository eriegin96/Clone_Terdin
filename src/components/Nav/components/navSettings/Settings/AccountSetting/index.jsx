import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AccountSettings() {
	return (
		<>
			<div className="nav__settings__setting">
				<h3>Account Settings</h3>
				<div className="nav__settings__setting__container">
					<Link to="settings/account">
						<div>
							<span>Manage Payment Account</span>
							<span>
								<FontAwesomeIcon icon="fa-solid fa-angle-right" />
							</span>
						</div>
					</Link>
					<div>
						<span>Restore Purchases</span>
					</div>
					<Link to="settings/email-account">
						<div>
							<span>Email</span>
							<span>
								tritintruong@gmail.com
								<FontAwesomeIcon icon="fa-solid fa-angle-right" />
							</span>
						</div>
					</Link>
					<Link to="settings/phone-account">
						<div>
							<span>Phone Number</span>
							<span>
								84907607638
								<FontAwesomeIcon icon="fa-solid fa-angle-right" />
							</span>
						</div>
					</Link>
					<div>
						<span>Promo Code</span>
					</div>
				</div>
				<div className="nav__settings__setting__sub">
					Verified Phone Number and Email help secure your account.
				</div>
			</div>
		</>
	);
}
