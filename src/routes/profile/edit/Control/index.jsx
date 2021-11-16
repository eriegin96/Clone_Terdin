import { Switch } from 'antd';
import React from 'react';

export default function Control() {
	return (
		<div className="mt-6">
			<div className="px-4 py-2 relative flex items-center">
				<h4 className="text-text-secondary uppercase text-13 font-semibold">
					Control your profile
				</h4>
				<div className="mx-2 px-2 bg-hover text-white text-xs rounded-25">Tinder Plus®</div>
			</div>
			<div className="w-full border-t border-b border-divider-primary divide-y divide-divider-primary">
				<div className="min-h-50 w-full bg-white px-6 cursor-pointer">
					<div className="py-3 flex justify-between items-center">
						<div className="text-text-primary">Don't Show My Age</div>
						<Switch />
					</div>
				</div>
				<div className="min-h-50 w-full bg-white px-6 cursor-pointer">
					<div className="py-3 flex justify-between items-center">
						<div className="text-text-primary">Don't Show My Distance</div>
						<Switch />
					</div>
				</div>
			</div>
		</div>
	);
}
