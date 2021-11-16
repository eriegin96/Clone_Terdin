import React from 'react';
import { Outlet } from 'react-router-dom';
import './main.scss';

export default function Main() {
	return (
		<div className="main w-3/4 h-full bg-bg-secondary border-l border-gray-15 border-solid">
			<Outlet />
		</div>
	);
}
