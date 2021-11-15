import React from 'react';
import { Switch } from 'antd';

export default function Show() {
	return (
		<div className="mt-5">
			<div className="bg-white border-t border-b border-solid border-divider-primary">
				<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50">
					<span className="py-3">Show me on Terdin</span>
					<Switch />
				</div>
			</div>
			<div className="my-3 px-4 text-text-secondary text-13">
				While turned off, you will not be shown in the card stack. You can still see and chat with
				your matches.
			</div>
		</div>
	);
}
