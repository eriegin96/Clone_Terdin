import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VerifiedSvg } from 'utils/Svg';
import ProfileCarousel from './ProfileCarousel';
import { NopeSvg, StarSvg, Like2Svg } from 'utils/Svg';

export default function RecsProfileCard({ partner }) {
	return (
		<>
			<div className="max-w-375 max-h-recs h-167 w-full mt-auto flex-grow">
				<div className="relative h-full w-full flex">
					<div className="h-full bg-white overflow-scroll rounded-lg">
						<ProfileCarousel photos={partner.photos} />
						<div className="pb-25 text-base text-text-secondary divide-y divide-divider-primary border-b border-divider-primary select-none">
							<div className="w-full py-2.5 px-4">
								<div className="min-h-40 flex items-center text-text-primary">
									<div className="pr-2 text-3xl font-semibold">{partner.displayName}</div>
									<div className="text-2xl">{partner.age}</div>
									{partner.verified && <VerifiedSvg className="ml-1 mb-0.5" />}
								</div>
								{partner.school && (
									<div className="flex">
										<FontAwesomeIcon
											icon="fa-solid fa-graduation-cap"
											className="w-3.5 h-3.5 mr-1"
										/>
										<div className="my-0.5">{partner.school}</div>
									</div>
								)}
								{partner.location && (
									<div className="flex">
										<FontAwesomeIcon icon="fa-solid fa-house" className="w-3.5 h-3.5 mr-1" />
										<div className="my-0.5">{partner.location}</div>
									</div>
								)}
								{partner.distance && (
									<div className="flex">
										<FontAwesomeIcon icon="fa-solid fa-partner" className="w-3.5 h-3.5 mr-1" />
										<div className="my-0.5">{partner.distance}</div>
									</div>
								)}
							</div>
							{partner.status && (
								<div className="p-4 border-t border-b border-divider-primary">{partner.status}</div>
							)}
							<div className="p-4">
								<h3 className="text-text-primary font-medium">Passions</h3>
								<div className="mt-4">
									{partner.passions.map((item, i) => (
										<div
											key={i}
											className="inline-block mr-2 mb-2 px-2 py-1 border border-text-secondary rounded-25 text-xs"
										>
											{item}
										</div>
									))}
								</div>
							</div>
							<div className="border-b text-center">
								<button className="px-1.5 py-5 mx-auto uppercase opacity-40 font-semibold text-13 hover:opacity-100 cursor-pointer transition-all">
									Report {partner.displayName}
								</button>
							</div>
              <div></div>
						</div>
					</div>
					<div className="absolute bottom-0 pb-4 w-full flex justify-center items-center bg-bottom-blur rounded-b-lg z-1">
						<div className="w-17.5 h-17.5 mx-auto"></div>
						<div className="w-17.5 h-17.5 mx-auto rounded-full bg-white shadow-1 hover:scale-110 transform transition-all duration-200 ease-in">
							<button className="w-full h-full flex items-center justify-center">
								<NopeSvg className="w-8.5 h-8.5" />
							</button>
						</div>
						<div className="w-15 h-15 mx-auto rounded-full bg-white shadow-1 hover:scale-110 transform transition-all duration-200 ease-in">
							<button className="w-full h-full flex items-center justify-center">
								<StarSvg className="w-8.5 h-8.5" />
							</button>
						</div>
						<div className="w-17.5 h-17.5 mx-auto rounded-full bg-white shadow-1 hover:scale-110 transform transition-all duration-200 ease-in">
							<button className="w-full h-full flex items-center justify-center">
								<Like2Svg className="w-8.5 h-8.5" />
							</button>
						</div>
						<div className="w-17.5 h-17.5 mx-auto"></div>
					</div>
				</div>
			</div>
		</>
	);
}
