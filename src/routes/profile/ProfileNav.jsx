import React from 'react';
import Products from './Products';
import Settings from './Settings';

export default function ProfileNav() {
	return (
		<div className="nav__profile relative pb-12.5 bg-profile-nav">
			<Products />
			<Settings />
		</div>
	);
}
