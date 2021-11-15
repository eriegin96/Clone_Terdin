import React from 'react';
import { Switch } from 'antd';

export default function RecentlyActive() {
	return (
		<>
			<div className="mt-5">
				<div className="px-4 bg-white border-t border-b border-divider-primary flex justify-between items-center cursor-pointer">
					<div className="py-4">Recently Active Status</div>
					<Switch checked/>
				</div>
			</div>
			<div className="my-3.5 px-4 text-xs text-text-secondary">
				Allow Tinder members to see if you were recently active within the last 24 hours on Tinder.
				If you have this turned off, they will not be able to see your recently active status.
			</div>
		</>
	);
}
