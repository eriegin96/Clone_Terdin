import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EnterSvg, SpacebarSvg } from 'utils/Svg';
import RecsCard from './Card';
import RecsProfileCard from './profile';
import { AppContext } from 'context/AppProvider';

export default function RecsMain() {
	const { swipePartner } = useContext(AppContext);

	return (
		<div className="recs-main h-full flex flex-col items-center">
			<Routes>
				<Route path="/" element={<RecsCard partner={swipePartner[0]} />}></Route>
				<Route path="/profile" element={<RecsProfileCard partner={swipePartner[0]} />}></Route>
			</Routes>
			<div className="invisible lg:visible w-full py-4 mt-auto flex justify-center items-center text-xs font-semibold overflow-hidden">
				<button className="mx-1 py-1 px-4 bg-text-secondary uppercase text-white rounded-25 font-bold opacity-40 hover:opacity-100">
					hide
				</button>
				<div className="max-w-730 min-h-50 flex opacity-60 text-text-secondary overflow-scroll">
					<div className="uppercase ml-3 flex items-center">
						<FontAwesomeIcon icon="fa-regular fa-square-caret-left" className="w-6 h-6 mr-1" />
						<div>Nope</div>
					</div>
					<div className="uppercase ml-3 flex items-center">
						<FontAwesomeIcon icon="fa-regular fa-square-caret-right" className="w-6 h-6 mr-1" />
						<div>Like</div>
					</div>
					<div className="uppercase ml-3 flex items-center">
						<FontAwesomeIcon icon="fa-regular fa-square-caret-up" className="w-6 h-6 mr-1" />
						<div>Open profile</div>
					</div>
					<div className="uppercase ml-3 flex items-center">
						<FontAwesomeIcon icon="fa-regular fa-square-caret-down" className="w-6 h-6 mr-1" />
						<div>Close profile</div>
					</div>
					<div className="uppercase ml-3 flex items-center">
						<EnterSvg className="w-7 h-5 mr-1" />
						<div>Super Like</div>
					</div>
					<div className="uppercase ml-3 flex items-center">
						<SpacebarSvg className="w-16 h-5 mr-1" />
						<div>Next photo</div>
					</div>
				</div>
			</div>
		</div>
	);
}
