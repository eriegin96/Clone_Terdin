import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AuthContext } from 'context/AuthProvider';

export default function Place() {
	const { user } = useContext(AuthContext);

	return (
		<>
			<div className="mt-6">
				<div className="mb-2 relative flex items-center">
					<h4 className="flex-grow px-2.5 text-text-secondary uppercase text-13 font-semibold">
						School
					</h4>
				</div>
				<Link to="#" className="w-full group">
					<div className="min-h-50 bg-white px-6">
						<div className="py-3 flex justify-between items-center">
							<div className="text-text-primary max-w-4/5 truncate">{user.displayInfo.school || 'Add School'}</div>
							<FontAwesomeIcon
								icon="fa-solid fa-angle-right"
								className="text-divider-primary transition-all duration-200 ease-in group-hover:text-pink"
							/>
						</div>
					</div>
				</Link>
			</div>
			<div className="mt-6">
				<div className="mb-2 relative flex items-center">
					<h4 className="flex-grow px-2.5 text-text-secondary uppercase text-13 font-semibold">
						Living In
					</h4>
				</div>
				<Link to="#" className="w-full group">
					<div className="min-h-50 bg-white px-6">
						<div className="py-3 flex justify-between items-center">
							<div className="text-text-primary max-w-4/5 truncate">
								{user.displayInfo.location || 'Add Location'}
							</div>
							<FontAwesomeIcon
								icon="fa-solid fa-angle-right"
								className="text-divider-primary transition-all duration-200 ease-in group-hover:text-pink"
							/>
						</div>
					</div>
				</Link>
			</div>
		</>
	);
}
