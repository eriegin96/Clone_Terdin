import React from 'react';
import { TinderSvg } from 'utils/Svg';

export default function Auth() {
	return (
		<div id="auth" className="h-screen bg-gradient-to-b from-hot-pink to-coral">
			<TinderSvg className="relative left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-zoomInOut" />
		</div>
	);
}
