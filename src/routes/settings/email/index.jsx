import { Switch } from 'antd';
import React from 'react';

export default function Email() {
	return (
		<div className="mt-5 text-text-secondary">
			<h3 className="py-2 px-4 uppercase text-13 font-medium">Email</h3>
			<div className="bg-white border-t border-b border-divider-primary divide-y divide-divider-primary cursor-pointer">
				<div className="px-4 min-h-50 flex justify-between items-center">
					<div className="py-3 text-text-primary">New Matches</div>
					<Switch />
				</div>
				<div className="px-4 min-h-50 flex justify-between items-center">
					<div className="py-3 text-text-primary">Messages</div>
					<Switch />
				</div>
				<div className="px-4 min-h-50 flex justify-between items-center">
					<div className="py-3 max-w-4/5">
						<div className="text-text-primary">Promotions</div>
						<div className="my-0.5 text-text-secondary text-xs">
							I want to receive news, updates, and offers from Tinder
						</div>
					</div>
					<Switch className="my-3 self-start" />
				</div>
			</div>
			<div className="my-3 px-4 text-xs ">
				Control the emails you want to get — all of them, just the important stuff, or the bare
				minimum. You can always unsubscribe from the bottom of any email.
			</div>
		</div>
	);
}
