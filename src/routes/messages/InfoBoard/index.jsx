import React from 'react';
import Info from './Info';

export default function InfoBoard({ partner }) {
	return (
		<div className="hidden lg:block h-full w-1/3 min-w-325 border-l border-divider-primary overflow-scroll select-none">
			<div className="h-full flex flex-col items-center justify-center">
				<Info partner={partner} />
				<div className="w-full flex border-t border-divider-primary h-18 bg-bg-secondary">
					<button className="w-1/2 px-1.5 border-r border-divider-primary uppercase font-semibold text-13 text-text-secondary hover:text-white hover:bg-pink transition-all ease-in">
						Unmatch
					</button>
					<button className="w-1/2 px-1.5 uppercase font-semibold text-13 text-text-secondary hover:text-white hover:bg-pink transition-all ease-in">
						Report
					</button>
				</div>
			</div>
		</div>
	);
}
