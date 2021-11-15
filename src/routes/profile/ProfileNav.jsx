import React from 'react';
import { useLocation } from 'react-router-dom';
import Products from './Products';
import Settings from './Settings';

export default function ProfileNav() {
	const { pathname } = useLocation();

	return (
		<>
			<div className="nav__profile relative pb-12.5 text-base">
				<Products />
				{pathname.slice(0, 12) === '/app/product' ? (
					<div className="relative">
						<Settings />
						<div className="absolute top-0 bottom-0 left-0 right-0 bg-bg-secondary opacity-60 cursor-pointer"></div>
					</div>
				) : (
					<Settings />
				)}
				{pathname === '/app/settings/plus/passport' && (
					<div className="absolute top-0 bottom-0 left-0 right-0 bg-bg-secondary opacity-60 cursor-pointer"></div>
				)}
			</div>
		</>
	);
}
