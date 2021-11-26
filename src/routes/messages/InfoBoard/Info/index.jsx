import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VerifiedSvg } from 'utils/Svg';
import CardCarousel from './CardCarousel';

export default function Info({ partner }) {
	return (
		<div className="max-h-y-12 min-h-375 w-full h-full overflow-auto bg-white">
			<CardCarousel photos={partner?.photos} />
			<div className="w-full pb-4 divide-y divide-divider-primary">
				<div className="py-2.5 px-4 text-text-secondary text-17">
					<div className="max-w-9/10 my-0.5 flex items-baseline text-text-primary">
						<div className="pr-2 text-3xl font-semibold truncate">{partner?.displayName}</div>
						<div className="text-2xl">{partner?.age}</div>
						{partner?.verified && <VerifiedSvg className="w-7.5 h-7.5 ml-1 self-center" />}
					</div>
					<div className="w-full">
						{partner?.displayInfo?.school && (
							<div className="w-full my-0.5">
								<FontAwesomeIcon icon="fa-solid fa-graduation-cap" className="w-4 h-4 mr-1" />
								<span className="w-x-5">{partner?.displayInfo?.school}</span>
							</div>
						)}
						{partner?.displayInfo?.location && (
							<div className="my-0.5">
								<FontAwesomeIcon icon="fa-solid fa-house" className="w-4 h-4 mr-1" />
								<span>{partner?.displayInfo?.location}</span>
							</div>
						)}
						{partner?.displayInfo?.gender && (
							<div className="my-0.5">
								<FontAwesomeIcon icon="fa-solid fa-user" className="w-4 h-4 mr-1" />
								<span>{partner?.displayInfo?.gender}</span>
							</div>
						)}
						{partner?.displayInfo?.distance && (
							<div className="my-0.5">
								<FontAwesomeIcon icon="fa-solid fa-location-dot" className="w-4 h-4 mr-1" />
								<span>{partner?.displayInfo?.distance}</span>
							</div>
						)}
					</div>
				</div>
				{partner?.displayInfo?.status && (
					<div className="py-2.5 px-4 text-text-secondary text-17">{partner?.displayInfo?.status}</div>
				)}
				<div className="py-2.5 px-4 text-text-secondary text-17">
					<h4 className="mb-1 text-text-primary font-medium">Passions</h4>
					<div className="pt-4 text-13">
						{partner?.passions.map((item, i) => (
							<div
								key={i}
								className="inline-block px-2 py-1 mb-2 mr-2 border border-text-secondary rounded-25"
							>
								{item}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
