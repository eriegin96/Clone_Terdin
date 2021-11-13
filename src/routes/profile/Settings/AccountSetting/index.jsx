import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PromoModal from './PromoModal';
import { AppContext } from 'context/AppProvider';

export default function AccountSettings() {
	const { email, phoneNumber, preferGender } = useContext(AppContext);
	const [promoModalOpen, setPromoModalOpen] = useState(false);

	return (
		<>
			<div className="mt-5">
				<h3 className="py-2 px-4 text-text-secondary uppercase font-semibold text-13">
					Account Settings
				</h3>
				<div className="divide-y divide-divider-primary bg-white border-t border-b border-solid border-divider-primary">
					<Link to="/app/settings/account" className="w-full">
						<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50 group">
							<span className="py-3">Manage Payment Account</span>
							<span className="py-3 text-text-secondary transition-all duration-200 ">
								<FontAwesomeIcon
									icon="fa-solid fa-angle-right"
									className="ml-2 transition-all duration-200 w-3.5 h-3.5 text-divider-primary group-hover:text-brand-pink"
								/>
							</span>
						</div>
					</Link>
					<div className="flex justify-between items-center  text-text-primary px-4 cursor-pointer min-h-50">
						<span className="py-3">Restore Purchases</span>
					</div>
					<Link to="/app/settings/email-account" className="w-full">
						<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50 group">
							<span className="py-3">Email</span>
							<span className="py-3 text-text-secondary transition-all duration-200 group-hover:text-brand-pink">
								{email}
								<FontAwesomeIcon
									icon="fa-solid fa-angle-right"
									className="ml-2 transition-all duration-200 w-3.5 h-3.5 text-divider-primary group-hover:text-brand-pink"
								/>
							</span>
						</div>
					</Link>
					<Link to="/app/settings/phone-account" className="w-full">
						<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50 group">
							<span className="py-3">Phone Number</span>
							<span className="py-3 text-text-secondary transition-all duration-200 group-hover:text-brand-pink">
								{phoneNumber}
								<FontAwesomeIcon
									icon="fa-solid fa-angle-right"
									className="ml-2 transition-all duration-200 w-3.5 h-3.5 text-divider-primary group-hover:text-brand-pink"
								/>
							</span>
						</div>
					</Link>
					<div
						className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50"
						onClick={() => setPromoModalOpen(true)}
					>
						<span className="py-3">Promo Code</span>
					</div>
				</div>
				<div className="my-3 px-4 text-text-secondary text-13">
					Verified Phone Number and Email help secure your account.
				</div>
			</div>
			<PromoModal promoModalOpen={promoModalOpen} setPromoModalOpen={setPromoModalOpen} />
		</>
	);
}
