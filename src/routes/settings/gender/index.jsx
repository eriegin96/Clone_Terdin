import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppContext } from 'context/AppProvider';

export default function Gender() {
	const { preferGender, setPreferGender } = useContext(AppContext);

	return (
		<>
			<div className="mt-5 divide-y divide-divider-primary border-t border-b border-divider-primary">
				<div className="px-4 bg-white min-h-50 flex items-center cursor-pointer">
					<div
						className="flex items-center justify-between w-full"
						onClick={() => setPreferGender('men')}
					>
						<div className="py-3 text-sm text-text-primary">Men</div>
						<FontAwesomeIcon
							icon="fa-solid fa-check"
							className={`w-5 h-5 text-hover ${preferGender !== 'men' && 'hidden'}`}
						/>
					</div>
				</div>
				<div className="px-4 bg-white min-h-50  flex items-center cursor-pointer">
					<div
						className="flex items-center justify-between w-full"
						onClick={() => setPreferGender('women')}
					>
						<div className="py-3 text-sm text-text-primary">Women</div>
						<FontAwesomeIcon
							icon="fa-solid fa-check"
							className={`w-5 h-5 text-hover ${preferGender !== 'women' && 'hidden'}`}
						/>
					</div>
				</div>
				<div className="px-4 bg-white min-h-50  flex items-center cursor-pointer">
					<div
						className="flex items-center justify-between w-full"
						onClick={() => setPreferGender('everyone')}
					>
						<div className="py-3 text-sm text-text-primary">Everyone</div>
						<FontAwesomeIcon
							icon="fa-solid fa-check"
							className={`w-5 h-5 text-hover ${preferGender !== 'everyone' && 'hidden'}`}
						/>
					</div>
				</div>
			</div>
			<div className="p-3">
				You will {`${preferGender !== 'everyone' ? 'only' : ''} see ${preferGender}`} in discovery.
			</div>
		</>
	);
}
