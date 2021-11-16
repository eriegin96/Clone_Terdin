import React from 'react';

export default function About() {
	return (
		<div className="mt-6">
			<h4 className="mb-2 px-3 uppercase font-semibold text-13">About Trương</h4>
			<div className="bg-white">
				<textarea
					id="profile-edit__textarea"
					rows={1}
					className="w-full px-6 py-3"
					style={{ height: '45px' }}
					value='hihi'
					onChange={() => {}}
				>
				</textarea>
				<div className="px-3 pb-3 text-right font-semibold">475</div>
			</div>
			<div className="mt-3 px-4 text-13">
				Do not include social media handles or other contact information in your profile.
			</div>
		</div>
	);
}
