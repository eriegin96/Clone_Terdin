import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SettingsMain() {
	return (
		<>
			<div className="w-full h-full flex items-center justify-center">
				<div
					className="max-h-667 w-93.75 pb-12.5 bg-bg-secondary shadow-2 rounded-lg"
					style={{ height: 'calc(100% - 48px)' }}
				>
					<div className="relative h-12 border-b border-divider-primary bg-white rounded-t-lg flex items-center justify-center">
						<div className="text-text-primary font-medium text-base">Location</div>
						<Link
							to="/app/profile"
							className="absolute h-full top-0 right-0 px-3 text-hover font-medium flex items-center hover:text-hover"
						>
							Done
						</Link>
					</div>
					<h3 className="py-1 mt-3 mx-2.5 uppercase text-text-secondary text-13  font-medium">
						Current Location
					</h3>
					<div className="mb-6 py-2.5 border-t border-b border-divider-primary bg-white flex items-center cursor-pointer">
						<FontAwesomeIcon icon="fa-solid fa-location-dot" className="w-5 h-5 px-4 text-blue-50" />
						<div className="">
							<div>My Current Location</div>
							<div className="text-13">Phường 15, Bình Thạnh, Ho Chi Minh City...</div>
						</div>
						<FontAwesomeIcon icon="fa-solid fa-check" className="w-6 h-6 px-4 text-blue-50" />
					</div>
					<button className="w-full h-13 px-6 mb-5 text-white bg-gradient-to-r from-blue-40 to-blue-70 flex justify-center items-center hover:from-blue-70">
						<FontAwesomeIcon icon="fa-solid fa-plane" className='w-5 h-5 transform -rotate-45 mr-2.5 mb-1'/>
						<span>Add New Location</span>
					</button>
				</div>
			</div>
		</>
	);
}
