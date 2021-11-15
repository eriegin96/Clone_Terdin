import React from 'react';

export default function WebProfile() {
	return (
		<>
			<div className="mt-5">
				<h3 className="py-2 px-4 uppercase text-13 text-text-secondary font-medium tracking-wide">
					username
				</h3>
				<div className="px-4 bg-white border-b border-t border-divider-primary">
					<span>@</span>
					<input type="text" className="py-4" />
				</div>
			</div>
			<div className="mt-5">
				<div className="px-4 bg-white border-b border-t border-divider-primary">
					<div className="py-4 text-gray-15">
            Confirm
          </div>
				</div>
			</div>
		</>
	);
}
