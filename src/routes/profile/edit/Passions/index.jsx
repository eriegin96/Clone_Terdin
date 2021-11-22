import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from 'context/AuthProvider';

export default function Passions() {
	const { user } = useContext(AuthContext);

	return (
		<div className="mt-6">
			<div className="ml-2.5 mb-2 relative flex items-center">
				<div className="absolute w-1.5 h-1.5 bg-brand-btn rounded-full"></div>
				<h4 className="flex-grow px-2.5 text-text-secondary uppercase text-13 font-semibold">
					Passions
				</h4>
				<span className="text-hover mr-3">+6%</span>
			</div>
			<Link to="#" className="w-full group">
				<div className="min-h-50 bg-white px-6">
					<div className="py-3 flex justify-between items-center">
						<div className="text-text-primary">{user.passions.join(', ') || 'Add Passions'}</div>
						<FontAwesomeIcon
							icon="fa-solid fa-angle-right"
							className="text-divider-primary transition-all duration-200 ease-in group-hover:text-pink"
						/>
					</div>
				</div>
			</Link>
		</div>
	);
}
