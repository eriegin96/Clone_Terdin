import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SexualOrientation() {
	return (
		<div className="mt-6 pb-12.5">
			<div className="mb-2 relative flex items-center">
				<h4 className="flex-grow px-2.5 text-text-secondary uppercase text-13 font-semibold">
					Sexual Orientation
				</h4>
			</div>
			<Link to="#" className="w-full group">
				<div className="min-h-50 bg-white px-6">
					<div className="py-3 flex justify-between items-center">
						<div className="text-text-primary">Straight</div>
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
