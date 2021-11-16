import React from 'react';

export default function Job() {
	return (
		<>
			<div className="mt-6">
				<div className="ml-2.5 mb-2 relative flex items-center">
					<div className="absolute w-1.5 h-1.5 bg-brand-btn rounded-full"></div>
					<h4 className="flex-grow px-2.5 text-text-secondary uppercase text-13 font-semibold">
						Job Title
					</h4>
					<span className="text-hover mr-3">+3%</span>
				</div>
				<div className="w-full min-h-50 px-6 bg-white flex items-center">
					<div className="h-12.5 w-81.25">
						<input type="text" placeholder="Add Job Title" className="h-full w-85/100 py-4" />
					</div>
				</div>
			</div>
			<div className="mt-6">
				<div className="ml-2.5 mb-2 relative flex items-center">
					<div className="absolute w-1.5 h-1.5 bg-brand-btn rounded-full"></div>
					<h4 className="flex-grow px-2.5 text-text-secondary uppercase text-13 font-semibold">
						Company
					</h4>
					<span className="text-hover mr-3">+3%</span>
				</div>
				<div className="w-full min-h-50 px-6 bg-white flex items-center">
					<div className="h-12.5 w-81.25">
						<input type="text" placeholder="Add Company" className="h-full w-85/100 py-4" />
					</div>
				</div>
			</div>
		</>
	);
}
