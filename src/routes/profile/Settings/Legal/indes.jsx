import React, { useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Legal() {
	const list = useMemo(() => ['Cookie Policy', 'Privacy Policy', 'Terms of Service'], []);

	return (
		<div className="mt-5">
			<h3 className="py-2 px-4 text-text-secondary uppercase font-semibold text-13">Legal</h3>
			<div className="divide-y divide-divider-primary bg-white border-t border-b border-solid border-divider-primary">
				<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50">
					<span className="py-3">Privacy Settings</span>
				</div>
				{list.map((item, i) => (
					<div
						key={i}
						className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50 group"
					>
						<span className="py-3">{item}</span>
						<span className="py-3">
							<FontAwesomeIcon
								icon="fa-solid fa-up-right-from-square"
								className="w-5 h-5 text-divider-primary transition-all duration-200 group-hover:text-brand-pink"
							/>
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
