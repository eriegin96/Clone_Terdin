import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppContext } from 'context/AppProvider';

export default function PhoneAccount() {
	const { phoneNumber } = useContext(AppContext);

	return (
		<>
			<div className="mt-5">
				<h3 className="px-4 py-2 uppercase font-semibold text-sm">Phone Number</h3>
				<div className="px-4 bg-white border-t border-b border-solid border-divider-primary min-h-50">
					<div className="flex items-center">
						<div className="w-85/100 py-4">{phoneNumber}</div>
						<FontAwesomeIcon icon="fa-solid fa-check" className="w-5 h-5 text-blue-50" />
					</div>
				</div>
				<div className="my-3 px-4 text-xs select-none">Verified Phone Number</div>
			</div>
			<div className="mt-5">
				<div className="px-4 bg-white border-t border-b border-solid border-divider-primary min-h-50 cursor-pointer">
					<div className="flex items-center">
						<div className="py-3 text-sm text-red-60">Update My Phone Number</div>
					</div>
				</div>
			</div>
		</>
	);
}
