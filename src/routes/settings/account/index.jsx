import React from 'react';

export default function Account() {
	return (
		<>
			<div className="p-2.5 mb-2.5 text-sm font-extrabold">
				You have no cards saved. To add a card, make a purchase.
			</div>
			<div className="p-6 bg-white border-solid border-t border-b border-divider-primary">
				<div className="w-full">
					<div className="mb-4 font-semibold uppercase">Contact us</div>
					<div className='flex justify-between items-start'>
						<div className="max-w-3/5 text-text-secondary float-left">
							Get answers to any of your questions about your purchases or payments.
						</div>
						<div className="w-3/10 uppercase text-sm text-blue-50 font-semibold border-2 border-blue-50 border-solid flex justify-center items-center min-h-50 cursor-pointer hover:bg-blue-50 hover:text-white transition-all duration-200 ease-linear float-right rounded-lg">Help</div>
					</div>
				</div>
			</div>
		</>
	);
}
