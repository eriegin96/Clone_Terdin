import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Main() {
	return (
		<div className="w-3/4 bg-bg-secondary border-l border-gray-15 border-solid">
			<Outlet />
		</div>
	);
}
