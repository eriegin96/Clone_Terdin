import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoogleSvg } from 'utils/Svg';
import { AppContext } from 'context/AppProvider';

export default function EmailAccount() {
	const { email, setEmail } = useContext(AppContext);

	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	return (
		<>
			<div className="mt-5">
				<h3 className="px-4 py-2 uppercase">Email</h3>
				<div className="px-4 bg-white border-t border-b border-solid border-divider-primary min-h-50">
					<div className="flex items-center">
						<div className="w-85/100">
							<input
								type="text"
								value={email}
								className="py-4 text-sm outline-none"
								onChange={handleChangeEmail}
							/>
						</div>
						<FontAwesomeIcon icon="fa-solid fa-check" className="w-5 h-5 text-blue-50" />
					</div>
				</div>
				<div className="my-3 px-4 text-blue-50 text-xs select-none">Verified Email Address</div>
			</div>
			<div className="mt-5">
				<div className="px-4 bg-white border-t border-b border-solid border-divider-primary min-h-50 cursor-pointer">
					<div className="py-3 flex items-center">
						<GoogleSvg className="mr-3 w-6 h-6" />
						<div className="">Sign in with Google</div>
					</div>
				</div>
				<div className="my-3 px-4 text-13 select-none">
					Verify instantly by connecting your Google Account
				</div>
			</div>
			<div className="mt-5">
				<div className="px-4 bg-white border-t border-b border-solid border-divider-primary min-h-50 flex items-center">
					<div className="py-3 flex items-center text-sm text-gray-15 select-none">
						Send me a Verification Email
					</div>
				</div>
				<div className="my-3 px-4 text-13 ">
					<div className="flex justify-center">
						<input type="checkbox" className="mr-2 cursor-pointer w-8 h-5" />
						<span className="text-text-secondary text-13 select-none">
							I would like to receive emails about promotions and marketing campaigns
						</span>
					</div>
				</div>
			</div>
		</>
	);
}
