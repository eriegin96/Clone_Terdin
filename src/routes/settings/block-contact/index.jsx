import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BlockContact() {
	const [left, setLeft] = useState(true);

	return (
		<>
			<div className="px-4 my-3.5 text-13 text-text-secondary">
				Select people from your contact list that you don’t want to see or be seen by on Tinder.
				<a href="https://tinder.com" className="text-text-primary hover:text-hover">
					Learn more
				</a>
			</div>
			<div className="h-full bg-white flex flex-col">
				<div className="flex items-center ">
					<button
						className={`px-1.5 py-4 w-1/2 text-center text-17 font-medium ${
							left ? 'border-b border-text-primary border-solid text-black' : 'text-gray-50'
						}`}
						onClick={() => setLeft(true)}
					>
						Contacts
					</button>
					<button
						className={`px-1.5 py-4 w-1/2 text-center text-17 font-medium ${
							left ? 'text-gray-50' : 'border-b border-text-primary border-solid text-black'
						}`}
						onClick={() => setLeft(false)}
					>
						Blocked
					</button>
				</div>
				<div className="flex justify-center items-center">
					<div className="max-w-4/5 min-h-320 my-4 mx-auto px-4 py-5 flex items-center justify-center">
						{left ? (
							<Link
								to="/app/settings/add-contacts"
								className="px-6 min-h-40 uppercase text-white bg-gradient-to-l from-coral to-hot-pink hover:text-white rounded-25 font-semibold flex items-center"
							>
								Add Contact
							</Link>
						) : (
							<div className="text-text-secondary text-sm">
								Members signed in to Tinder with the contact information you add here will be
								blocked.
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
