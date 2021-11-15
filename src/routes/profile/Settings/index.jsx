import React from 'react';
import { TinderSvg } from 'utils/Svg';
import AccountSettings from './AccountSetting';
import DiscoverySettings from './DiscoverySettings';
import Show from './Show';
import Block from './Block';
import WebProfile from './WebProfile';
import ReadReceipts from './ReadReceipts';
import ActivityStatus from './ActivityStatus';
import Notifications from './Notifications';
import Language from './Language';
import Help from './Help';
import Safety from './Safety';
import Legal from './Legal/indes';
import Logout from './Logout';
import DeleteAccount from './DeleteAccount';

export default function Settings() {
	return (
		<>
			<AccountSettings />
			<DiscoverySettings />
			<Show />
			<Block />
			<WebProfile />
			<ReadReceipts />
			<ActivityStatus />
			<Notifications />
			<Language />
			<Help />
			<Safety />
			<Legal />
			<div className="mt-5">
				<div className="bg-white border-t border-b border-solid border-divider-primary">
					<div className="flex items-center justify-center min-h-50 cursor-pointer">
						Share Terdin
					</div>
				</div>
			</div>
			<Logout />
			<div className="m-4 flex flex-col items-center">
				<TinderSvg />
				<p className="text-15 mt-3 mb-4">Version 3.4.0</p>
			</div>
			<DeleteAccount />
		</>
	);
}
