import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Avatar } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RewindSvg, NopeSvg, StarSvg, Like2Svg, BoostSvg, VerifiedSvg } from 'utils/Svg';
import { addRoom, seenPartner } from 'firebase/services';
import InfoCarousel from './InfoCarousel';
import { AuthContext } from 'context/AuthProvider';
import { AppContext } from 'context/AppProvider';

export default function RecsCard({ suggestList }) {
	const { user } = useContext(AuthContext);
	const { countdown, likesCount, setLikesCount, setDevModalOpen } = useContext(AppContext);
	const [likeOpacity, setLikeOpacity] = useState(0);
	const [nopeOpacity, setNopeOpacity] = useState(0);

	const handleMatch = (userId, partnerId) => {
		setLikeOpacity(1);
		setLikesCount((prev) => prev + 1);
		seenPartner(userId, partnerId);
		addRoom({ members: [userId, partnerId] });
		setTimeout(() => {
			setLikeOpacity(0);
		}, 500);
	};

	const handleNope = (userId, partnerId) => {
		setNopeOpacity(1);
		seenPartner(userId, partnerId);
		setTimeout(() => {
			setNopeOpacity(0);
		}, 500);
	};

	return (
		<div className="max-w-375 max-h-recs h-167 w-full mt-auto flex-grow">
			<div className="relative h-full w-full flex">
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<Avatar src={user.photos[0]} size={100} gap={4}></Avatar>
				</div>
				{likesCount === 5 && (
					<div className="relative w-full h-full bg-white rounded-lg flex flex-col items-center justify-center">
						<div className="text-3xl text-text-primary font-semibold">You're out of likes</div>
						<div className="text-2xl text-text-secondary">Get more likes in:</div>
						<div className="text-2xl text-text-secondary">{format(countdown * 1000, 'mm:ss')}</div>
					</div>
				)}
				{suggestList.length === 0 && (
					<div className="relative w-full h-full bg-white rounded-lg flex flex-col items-center justify-center">
						<div className="text-3xl text-text-primary font-semibold">You're out of partners</div>
						<div className="my-10 text-2xl text-text-secondary">Get more partners</div>
						<button
							className="py-2 px-4 bg-brand-btn text-white rounded-25"
							onClick={() => setDevModalOpen(true)}
						>
							Get Terdin Plus
						</button>
					</div>
				)}
				{likesCount !== 5 &&
					suggestList.length !== 0 &&
					suggestList.map((item, i) => (
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
