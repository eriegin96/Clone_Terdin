import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Account from './account';
import BlockContact from './block-contact';
import EmailAccount from './email-account';
import Gender from './gender';
import PhoneAccount from './phone-account';
import WebProfile from './web-profile';
import ReadReceipts from './read-receipts';
import RecentlyActive from './recently-active';
import Email from './email';
import Push from './push';
import Language from './language';

export default function SettingsNav() {
	return (
		<div className="nav__settings relative h-full">
			<div className="h-full pb-12.5 overflow-scroll">
				<Routes>
					<Route path="account" element={<Account />} />
					<Route path="email-account" element={<EmailAccount />} />
					<Route path="phone-account" element={<PhoneAccount />} />
					<Route path="gender" element={<Gender />} />
					<Route path="block-contacts/tab-contacts" element={<BlockContact />} />
					<Route path="web-profile" element={<WebProfile />} />
					<Route path="read-receipts" element={<ReadReceipts />} />
					<Route path="recently-active" element={<RecentlyActive />} />
					<Route path="email" element={<Email />} />
					<Route path="push" element={<Push />} />
					<Route path="language" element={<Language />} />
				</Routes>
			</div>
		</div>
	);
}
