import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';
import { RewindSvg, NopeSvg, StarSvg, Like2Svg, BoostSvg } from 'utils/Svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VerifiedSvg } from 'utils/Svg';
import InfoCarousel from './InfoCarousel';
import { AuthContext } from 'context/AuthProvider';
import { addRoom, matchPartner } from 'firebase/services';

export default function RecsCard({ suggestList }) {
	const { user } = useContext(AuthContext);
	const [likeOpacity, setLikeOpacity] = useState(0);
	const [nopeOpacity, setNopeOpacity] = useState(0);

	const handleMatch = (userId, partnerId) => {
		setLikeOpacity(1);
		matchPartner(userId, partnerId);
		addRoom({ members: [userId, partnerId] });
		setTimeout(() => {
			setLikeOpacity(0);
		}, 1000);
	};

	const handleNope = (userId, partnerId) => {
		setNopeOpacity(1);
		// matchPartner(userId, partnerId);
		setTimeout(() => {
			setNopeOpacity(0);
		}, 1000);
	};

	return (
		<div className="max-w-375 max-h-recs h-167 w-full mt-auto flex-grow">
			<div className="relative h-full w-full flex">
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<Avatar src={user.photos[0]} size={100} gap={4}></Avatar>
				</div>
				{suggestList.map((item, i) => (
					<React.Fragment key={i}>
						<div className="absolute w-full h-full inset-0 border-b-25 border-transparent bg-black shadow-profile rounded-lg ">
							<div className="absolute h-full w-full">
								<InfoCarousel photos={item.photos} />
								<div className="bg-dark-gradient h-3/10 absolute bottom-0 left-0 right-0"></div>
								<div className="absolute w-full bottom-0 p-4 flex items-end">
									<div className="flex-grow text-white">
										<div className="max-w-4/5 flex items-center">
											<div className="text-3xl font-semibold truncate">{item.displayName}</div>
											<div className="text-2xl ml-2">{item.age}</div>
											{item.verified && <VerifiedSvg className="ml-2" />}
										</div>
										<div>
											{Object.keys(item.displayInfo).length === 0 ? (
												<div className="pt-4 text-13">
													{item.passions.map((itemPassion, iP) => (
														<div
															key={iP}
															className="inline-block px-2 py-1 mb-2 mr-2 rounded-25 backdrop-filter backdrop-blur-sm bg-bg3"
														>
															{itemPassion}
														</div>
													))}
												</div>
											) : (
												<div className="text-17">
													{item.displayInfo.school && (
														<div className="w-full">
															<FontAwesomeIcon
																icon="fa-solid fa-graduation-cap"
																className="text-white w-4 h-4 mr-1"
															/>
															<span>{item.displayInfo.school}</span>
														</div>
													)}
													{item.displayInfo.location && (
														<div className="w-full">
															<FontAwesomeIcon
																icon="fa-solid fa-house"
																className="text-white w-4 h-4 mr-1"
															/>
															<span>{item.displayInfo.location}</span>
														</div>
													)}
													{item.displayInfo.distance && (
														<div className="w-full">
															<FontAwesomeIcon
																icon="fa-solid fa-location-dot"
																className="text-white w-4 h-4 mr-1"
															/>
															<span>{item.displayInfo.distance}</span>
														</div>
													)}
												</div>
											)}
										</div>
									</div>
									<Link to="profile" className="mb-3 w-7 h-7">
										<FontAwesomeIcon
											icon="fa-solid fa-circle-info"
											className="text-white w-6 h-6 transform hover:scale-110 transition-all ease-in"
										/>
									</Link>
								</div>
							</div>
						</div>
						<div className="absolute bottom-0 left-0 right-0 w-full">
							<div className="py-4 px-2 flex justify-between items-center">
								<div className="w-15 h-15 rounded-full border border-yellow-orange-30">
									<button className="w-full h-full flex items-center justify-center group">
										<RewindSvg className="w-8.5 h-8.5 transform group-hover:scale-110 transition-all duration-200 ease-in" />
									</button>
								</div>
								<div className="w-17.5 h-17.5 rounded-full border border-pink">
									<button
										className="w-full h-full flex items-center justify-center group"
										onClick={() => handleNope(user.uid, item.uid)}
									>
										<NopeSvg className="w-8.5 h-8.5 transform group-hover:scale-110 transition-all duration-200 ease-in" />
									</button>
								</div>
								<div className="w-15 h-15 rounded-full border border-blue-40">
									<button className="w-full h-full flex items-center justify-center group">
										<StarSvg className="w-8.5 h-8.5 transform group-hover:scale-110 transition-all duration-200 ease-in" />
									</button>
								</div>
								<div className="w-17.5 h-17.5 rounded-full border border-green-30">
									<button
										className="w-full h-full flex items-center justify-center group"
										onClick={() => handleMatch(user.uid, item.uid)}
									>
										<Like2Svg className="w-8.5 h-8.5 transform group-hover:scale-110 transition-all duration-200 ease-in" />
									</button>
								</div>
								<div className="w-15 h-15 rounded-full border border-purple-60">
									<button className="w-full h-full flex items-center justify-center group">
										<BoostSvg className="w-8.5 h-8.5 transform group-hover:scale-110 transition-all duration-200 ease-in" />
									</button>
								</div>
							</div>
						</div>
					</React.Fragment>
				))}
				<div
					className="absolute p-1 top-1/10 right-1/10 border-4 border-red-50 rounded text-4xl text-red-50 font-semibold uppercase transform rotate-20 transition-all duration-200 ease-in"
					style={{ opacity: nopeOpacity }}
				>
					Nope
				</div>
				<div
					className="absolute p-1 top-1/10 left-1/10 border-4 border-green-30 rounded text-4xl text-green-30 font-semibold uppercase transform -rotate-20 transition-all duration-200 ease-in"
					style={{ opacity: likeOpacity }}
				>
					Like
				</div>
			</div>
		</div>
	);
}
