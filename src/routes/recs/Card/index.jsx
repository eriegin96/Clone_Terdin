import React from 'react';
import { Avatar } from 'antd';
import { RewindSvg, NopeSvg, StarSvg, Like2Svg, BoostSvg } from 'utils/Svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VerifiedSvg } from 'utils/Svg';
import CardCarousel from './CardCarousel';

export default function RecsCard() {
	return (
		<div className="max-w-375 max-h-recs h-167 w-full mt-auto flex-grow">
			<div className="relative h-full w-full flex">
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<Avatar size={100} gap={4}>
						Trương
					</Avatar>
				</div>
				<div className="absolute w-full h-full inset-0 border-b-25 border-transparent bg-black shadow-profile rounded-lg ">
					<CardCarousel />
					<div className="bg-dark-gradient h-3/10 absolute bottom-0 left-0 right-0"></div>
					<div className="absolute w-full bottom-0 p-4 flex items-end">
						<div className="flex-grow text-white">
							<div className="max-w-4/5 absolute bottom-0 flex items-center  transform -translate-y-24">
								<div className="text-3xl font-semibold">Ai Duyen</div>
								<div className="text-2xl ml-2">19</div>
								<VerifiedSvg className="ml-2" />
							</div>
							<div>
								{/* <div className="mb-1 flex items-center">
									<div className="w-2 h-2 my-1 mr-1 bg-green-20 rounded-full"></div>
									<div className="text-13">Recently Active</div>
								</div>
								<div className="text-17 whitespace-pre-line">
									Minh kha la nhat nheooo ✨ ig: _hellomimi18
								</div> */}
								<div className="text-17">
									<div className="w-full">
										<FontAwesomeIcon
											icon="fa-solid fa-graduation-cap"
											className="text-white w-4 h-4 mr-1"
										/>
										<span>Trường Đại học Văn Hiến</span>
									</div>
									<div className="w-full">
										<FontAwesomeIcon icon="fa-solid fa-house" className="text-white w-4 h-4 mr-1" />
										<span>Lives in Hồ Chí Minh</span>
									</div>
									<div className="w-full">
										<FontAwesomeIcon
											icon="fa-solid fa-location-dot"
											className="text-white w-4 h-4 mr-1"
										/>
										<span>19 kilometers away</span>
									</div>
								</div>
							</div>
						</div>
						<button className="mb-3 w-7 h-7">
							<FontAwesomeIcon icon="fa-solid fa-circle-info" className="text-white w-7 h-7" />
						</button>
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
							<button className="w-full h-full flex items-center justify-center group">
								<NopeSvg className="w-8.5 h-8.5 transform group-hover:scale-110 transition-all duration-200 ease-in" />
							</button>
						</div>
						<div className="w-15 h-15 rounded-full border border-blue-40">
							<button className="w-full h-full flex items-center justify-center group">
								<StarSvg className="w-8.5 h-8.5 transform group-hover:scale-110 transition-all duration-200 ease-in" />
							</button>
						</div>
						<div className="w-17.5 h-17.5 rounded-full border border-green-30">
							<button className="w-full h-full flex items-center justify-center group">
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
			</div>
		</div>
	);
}
