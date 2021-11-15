import React, { useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Language() {
	const list = useMemo(
		() => [
			'English',
			'العربية',
			'Български',
			'বাংলা',
			'Čeština',
			'Ελληνικά',
			'עברית',
			'हिन्दी',
			'日本語',
			'ქართული ენა',
			'қазақ тілі',
			'ខ្មែរ',
			'한국어',
			'Русский',
			'தமிழ்',
			'తెలుగు',
			'ภาษาไทย',
			'Tiếng Việt',
			'中文 (简体)',
			'中文 (台灣)',
		],
		[]
	);

	return (
		<div className="mt-5">
			<div className="bg-white border-t border-b border-divider-primary divide-y divide-divider-primary">
				{list.map((item, i) => (
					<div className="px-4 min-h-50 text-text-primary flex justify-between items-center">
						<div key={i} className="py-3">
							{item}
						</div>
						{i === 0 && <FontAwesomeIcon icon="fa-solid fa-check" className="w-5 h-5 text-hover" />}
					</div>
				))}
			</div>
		</div>
	);
}
