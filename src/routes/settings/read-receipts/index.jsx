import React from 'react';
import { Switch } from 'antd';

export default function ReadReceipts() {
	return (
		<>
			<div className="mt-5">
				<div className="px-4 bg-white border-t border-b border-divider-primary flex justify-between items-center cursor-pointer">
					<div className='py-4'>Send Read Receipts</div>
					<Switch checked/>
				</div>
			</div>
			<div className="my-3.5 px-4 text-xs text-text-secondary">
				Turning this off will prevent any matches from activating read receipts in your conversation
				from this moment forward.
			</div>
		</>
	);
}
