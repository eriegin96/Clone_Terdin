import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Help() {
	return (
		<div className="mt-5">
			<h3 className="py-2 px-4 text-text-secondary uppercase font-semibold text-13">
				Help & Support
			</h3>
			<div className="bg-white border-t border-b border-solid border-divider-primary">
				<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50 group">
					<span className="py-3">Help & Support</span>
					<span className="py-3">
						<FontAwesomeIcon
							icon="fa-solid fa-up-right-from-square"
							className="w-5 h-5 text-divider-primary transition-all duration-200 group-hover:text-brand-pink"
						/>
					</span>
				</div>
			</div>
		</div>
	);
}
