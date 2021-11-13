import React from 'react';
import { Link } from 'react-router-dom';
import { Switch } from 'antd';
import AccountSettings from './AccountSetting';
import DiscoverySettings from './DiscoverySettings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TinderSvg } from 'utils/Svg';

export default function Settings() {
	return (
		<>
			<AccountSettings />
			<DiscoverySettings />
			<div className="mt-5">
				<div className="bg-white border-t border-b border-solid border-divider-primary">
					<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50">
						<span className="py-3">Show me on Terdin</span>
						<Switch />
					</div>
				</div>
				<div className="my-3 px-4 text-text-secondary text-13">
					While turned off, you will not be shown in the card stack. You can still see and chat with
					your matches.
				</div>
			</div>
			<div className="mt-5">
				<div className="bg-white border-t border-b border-solid border-divider-primary">
					<Link to="/app/settings/block-contacts/tab-contacts" className="w-full">
						<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50 group">
							<span className="py-3">Block Contacts</span>
							<span className="py-3 text-text-secondary transition-all duration-200">
								<FontAwesomeIcon
									icon="fa-solid fa-angle-right"
									className="ml-2 transition-all duration-200 w-3.5 h-3.5 text-divider-primary group-hover:text-brand-pink"
								/>
							</span>
						</div>
					</Link>
				</div>
				<div className="my-3 px-4 text-text-secondary text-13">
					Select people from your contact list that you don’t want to see or be seen by on Terdin.
				</div>
			</div>
			<div className="mt-5">
				<h3 className="py-2 px-4 text-text-secondary uppercase font-semibold text-13">
					Web Profile
				</h3>
				<div className="bg-white border-t border-b border-solid border-divider-primary">
					<Link to="/app/settings/web-profile" className="w-full">
						<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50 group">
							<span className="py-3">Username</span>
							<span className="py-3 text-text-secondary transition-all duration-200 group-hover:text-brand-pink">
								Claim Yours
								<FontAwesomeIcon
									icon="fa-solid fa-angle-right"
									className="ml-2 transition-all duration-200 w-3.5 h-3.5 text-divider-primary group-hover:text-brand-pink"
								/>
							</span>
						</div>
					</Link>
				</div>
				<div className="my-3 px-4 text-text-secondary text-13">
					Create a username. Share your username. Have people all over the world match with you
					right on Terdin.
				</div>
			</div>
			<div className="mt-5">
				<h3 className="py-2 px-4 text-text-secondary uppercase font-semibold text-13">
					Read Receipts
				</h3>
				<div className="bg-white border-t border-b border-solid border-divider-primary">
					<Link to="/app/settings/read-receipts" className="w-full">
						<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50 group">
							<span className="py-3">Manage Read Receipts</span>
							<span className="py-3 text-text-secondary transition-all duration-200">
								<FontAwesomeIcon
									icon="fa-solid fa-angle-right"
									className="ml-2 transition-all duration-200 w-3.5 h-3.5 text-divider-primary group-hover:text-brand-pink"
								/>
							</span>
						</div>
					</Link>
				</div>
			</div>
			<div className="mt-5">
				<h3 className="py-2 px-4 text-text-secondary uppercase font-semibold text-13">
					Activity Status
				</h3>
				<div className="bg-white border-t border-b border-solid border-divider-primary">
					<Link to="/app/settings/recently-active" className="w-full">
						<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50 group">
							<span className="py-3">Recently Active Status</span>
							<span className="py-3 text-text-secondary transition-all duration-200">
								<FontAwesomeIcon
									icon="fa-solid fa-angle-right"
									className="ml-2 transition-all duration-200 w-3.5 h-3.5 text-divider-primary group-hover:text-brand-pink"
								/>
							</span>
						</div>
					</Link>
				</div>
			</div>
			<div className="mt-5">
				<h3 className="py-2 px-4 text-text-secondary uppercase font-semibold text-13">
					Notifications
				</h3>
				<div className="divide-y divide-divider-primary bg-white border-t border-b border-solid border-divider-primary">
					<Link to="/app/settings/email" className="w-full">
						<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50 group">
							<span className="py-3">Email</span>
							<span className="py-3 text-text-secondary transition-all duration-200">
								<FontAwesomeIcon
									icon="fa-solid fa-angle-right"
									className="ml-2 transition-all duration-200 w-3.5 h-3.5 text-divider-primary group-hover:text-brand-pink"
								/>
							</span>
						</div>
					</Link>
					<Link to="/app/settings/push" className="w-full">
						<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50 group">
							<span className="py-3">Push Notifications</span>
							<span className="py-3 text-text-secondary transition-all duration-200">
								<FontAwesomeIcon
									icon="fa-solid fa-angle-right"
									className="ml-2 transition-all duration-200 w-3.5 h-3.5 text-divider-primary group-hover:text-brand-pink"
								/>
							</span>
						</div>
					</Link>
				</div>
			</div>
			<div className="mt-5">
				<h3 className="py-2 px-4 text-text-secondary uppercase font-semibold text-13">Language</h3>
				<div className="bg-white border-t border-b border-solid border-divider-primary">
					<Link to="/app/settings/languages" className="w-full">
						<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50 group">
							<span className="py-3">Language</span>
							<span className="py-3 text-text-secondary transition-all duration-200 group-hover:text-brand-pink">
								English
								<FontAwesomeIcon
									icon="fa-solid fa-angle-right"
									className="ml-2 transition-all duration-200 w-3.5 h-3.5 text-divider-primary group-hover:text-brand-pink"
								/>
							</span>
						</div>
					</Link>
				</div>
			</div>
			<div className="mt-5">
				<h3 className="py-2 px-4 text-text-secondary uppercase font-semibold text-13">
					Help & Support
				</h3>
				<div className="bg-white border-t border-b border-solid border-divider-primary">
					<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50 group">
						<span className="py-3">Help & Support</span>
						<span className="py-3">
							<FontAwesomeIcon
								icon="fa-solid fa-up-right-from-square"
								className="w-5 h-5 text-divider-primary transition-all duration-200 group-hover:text-brand-pink"
							/>
						</span>
					</div>
				</div>
			</div>
			<div className="mt-5">
				<h3 className="py-2 px-4 text-text-secondary uppercase font-semibold text-13">Safety</h3>
				<div className="divide-y divide-divider-primary bg-white border-t border-b border-solid border-divider-primary">
					<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50 group">
						<span className="py-3">Community Guidlines</span>
						<span className="py-3">
							<FontAwesomeIcon
								icon="fa-solid fa-up-right-from-square"
								className="w-5 h-5 text-divider-primary transition-all duration-200 group-hover:text-brand-pink"
							/>
						</span>
					</div>
					<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50 group">
						<span className="py-3">Safety & Policy</span>
						<span className="py-3">
							<FontAwesomeIcon
								icon="fa-solid fa-up-right-from-square"
								className="w-5 h-5 text-divider-primary transition-all duration-200 group-hover:text-brand-pink"
							/>
						</span>
					</div>
					<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50 group">
						<span className="py-3">Safety Tips</span>
						<span className="py-3">
							<FontAwesomeIcon
								icon="fa-solid fa-up-right-from-square"
								className="w-5 h-5 text-divider-primary transition-all duration-200 group-hover:text-brand-pink"
							/>
						</span>
					</div>
				</div>
			</div>
			<div className="mt-5">
				<h3 className="py-2 px-4 text-text-secondary uppercase font-semibold text-13">Legal</h3>
				<div className="divide-y divide-divider-primary bg-white border-t border-b border-solid border-divider-primary">
					<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50">
						<span className="py-3">Privacy Settings</span>
					</div>
					<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50 group">
						<span className="py-3">Cookie Policy</span>
						<span className="py-3">
							<FontAwesomeIcon
								icon="fa-solid fa-up-right-from-square"
								className="w-5 h-5 text-divider-primary transition-all duration-200 group-hover:text-brand-pink"
							/>
						</span>
					</div>
					<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50 group">
						<span className="py-3">Privacy Policy</span>
						<span className="py-3">
							<FontAwesomeIcon
								icon="fa-solid fa-up-right-from-square"
								className="w-5 h-5 text-divider-primary transition-all duration-200 group-hover:text-brand-pink"
							/>
						</span>
					</div>
					<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50 group">
						<span className="py-3">Terms of Service</span>
						<span className="py-3">
							<FontAwesomeIcon
								icon="fa-solid fa-up-right-from-square"
								className="w-5 h-5 text-divider-primary transition-all duration-200 group-hover:text-brand-pink"
							/>
						</span>
					</div>
				</div>
			</div>
			<div className="mt-5">
				<div className="bg-white border-t border-b border-solid border-divider-primary">
					<div className="flex items-center justify-center min-h-50 cursor-pointer">
						Share Terdin
					</div>
				</div>
			</div>
			<div className="mt-5">
				<div className="bg-white border-t border-b border-solid border-divider-primary">
					<div className="flex items-center justify-center min-h-50 cursor-pointer">Logout</div>
				</div>
			</div>
			<div className="m-4 flex flex-col items-center">
				<TinderSvg />
				<p className="text-15 mt-3 mb-4">Version 3.4.0</p>
			</div>
			<div className="mt-5">
				<div className="bg-white border-t border-b border-solid border-divider-primary">
					<div className="flex items-center justify-center min-h-50 cursor-pointer">
						Delete Account
					</div>
				</div>
			</div>
		</>
	);
}
