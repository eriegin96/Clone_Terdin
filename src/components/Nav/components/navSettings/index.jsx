import React from 'react';
import Products from './Products';
import Settings from './Settings';

export default function NavSettings() {
	return (
		<div className="nav__settings">
			<Products />
      <Settings />
		</div>
	);
}
