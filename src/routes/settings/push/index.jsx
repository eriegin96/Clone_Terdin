import React, { useMemo } from 'react';
import { Switch } from 'antd';

export default function Push() {
	const list = useMemo(
		() => [
			{ title: 'New Matches', content: 'You just got a new match' },
			{ title: 'Messages', content: 'Someone sent you a new message.' },
			{ title: 'Message Likes', content: 'Someone liked your message.' },
			{ title: 'Super Likes', content: "You've been Super Liked." },
		],
		[]
	);

	return (
		<div className="mt-5">
			<h3 className="py-2 px-4 uppercase font-medium text-text-secondary text-sm">
				Push Notifications
			</h3>
			<div className="bg-white border-t border-b border-divider-primary divide-y divide-divider-primary">
				{list.map((item, i) => (
					<div key={i} className="px-4 flex justify-between items-center cursor-pointer">
						<div className="max-w-4/5 py-3">
							<div className="text-text-primary">{item.title}</div>
							<div className="my-0.5 text-text-secondary text-xs">{item.content}</div>
						</div>
						<Switch checked className="my-3 self-start" />
					</div>
				))}
			</div>
		</div>
	);
}
