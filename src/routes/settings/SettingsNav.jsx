import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Account from './account';
import EmailAccount from './email-account';
import Gender from './gender';
import PhoneAccount from './phone-account';

export default function SettingsNav() {

	return (
		<div className="nav__settings relative h-full">
			<div className="h-full pb-12.5 overflow-scroll">
				<Routes>
					<Route path="account" element={<Account />} />
					<Route path="email-account" element={<EmailAccount />} />
					<Route path="phone-account" element={<PhoneAccount />} />
					<Route path="gender" element={<Gender />} />
				</Routes>
			</div>
		</div>
	);
}
