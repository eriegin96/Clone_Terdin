import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Block() {
	return (
		<div className="mt-5">
			<div className="bg-white border-t border-b border-solid border-divider-primary">
				<Link to="/app/settings/block-contacts/tab-contacts" className="w-full">
					<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50 group">
						<span className="py-3">Block Contacts</span>
						<span className="py-3 text-text-secondary transition-all duration-200">
							<FontAwesomeIcon
								icon="fa-solid fa-angle-right"
								className="ml-2 transition-all duration-200 w-3.5 h-3.5 text-divider-primary group-hover:text-brand-pink"
							/>
						</span>
					</div>
				</Link>
			</div>
			<div className="my-3 px-4 text-text-secondary text-13">
				Select people from your contact list that you don’t want to see or be seen by on Terdin.
			</div>
		</div>
	);
}
