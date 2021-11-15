import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Notifications() {
	return (
		<div className="mt-5">
			<h3 className="py-2 px-4 text-text-secondary uppercase font-semibold text-13">
				Notifications
			</h3>
			<div className="divide-y divide-divider-primary bg-white border-t border-b border-solid border-divider-primary">
				<Link to="/app/settings/email" className="w-full">
					<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50 group">
						<span className="py-3">Email</span>
						<span className="py-3 text-text-secondary transition-all duration-200">
							<FontAwesomeIcon
								icon="fa-solid fa-angle-right"
								className="ml-2 transition-all duration-200 w-3.5 h-3.5 text-divider-primary group-hover:text-brand-pink"
							/>
						</span>
					</div>
				</Link>
				<Link to="/app/settings/push" className="w-full">
					<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50 group">
						<span className="py-3">Push Notifications</span>
						<span className="py-3 text-text-secondary transition-all duration-200">
							<FontAwesomeIcon
								icon="fa-solid fa-angle-right"
								className="ml-2 transition-all duration-200 w-3.5 h-3.5 text-divider-primary group-hover:text-brand-pink"
							/>
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}
