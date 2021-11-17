import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Row, Col } from 'antd';
import About from './About';
import SexualOrientation from './SexualOrientation';
import Passions from './Passions';
import Gender from './Gender';
import JobTitle from './Job';
import Place from './Place';
import Social from './Social';
import Control from './Control';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppContext } from 'context/AppProvider';

export default function Edit() {
	const { photos, setDevModalOpen } = useContext(AppContext);

	return (
		<>
			<div className="h-full pb-4 overflow-scroll rounded-lg">
				<Row gutter={[8, 8]} className="p-1.5">
					{photos.map((item, i) => (
						<Col key={i} span="8" className="h-40">
							{item === '' ? (
								<div
									className="h-full bg-center bg-no-repeat bg-cover bg-gray-15 rounded-lg cursor-pointer"
									onClick={() => setDevModalOpen(true)}
								>
									<FontAwesomeIcon
										icon="fa-solid fa-circle-plus"
										className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-pink"
									/>
								</div>
							) : (
								<div
									className="h-full bg-center bg-no-repeat bg-cover bg-gray-15 rounded-lg"
									style={{ backgroundImage: `url(${item})` }}
								>
									<span
										className="absolute w-6.5 h-6.5 -bottom-1 -right-0.5 bg-white rounded-full flex items-center justify-center shadow-1 cursor-pointer"
										onClick={() => setDevModalOpen(true)}
									>
										<FontAwesomeIcon
											icon="fa-solid fa-plus"
											className="w-5.5 h-5.5 text-hover transform rotate-45"
										/>
									</span>
								</div>
							)}
						</Col>
					))}
				</Row>
				<div className="px-2 mt-2.5 mb-3.5 text-13 text-text-secondary text-center">
					Add a video, pic, or Loop to get 4% closer to completing your profile and you may even get
					more Likes.
				</div>
				<div className="h-10 w-full my-3">
					<button className="w-4/5 h-full px-6 block mx-auto uppercase bg-gradient-to-l from-coral to-hot-pink text-white rounded-25 hover:bg-pink hover:bg-none">
						Add media
					</button>
				</div>
				<div className="min-h-50 px-4 bg-white border-t border-b border-divider-primary flex justify-between items-center">
					<div className="py-3 font-base">Smart Photos</div>
					<Switch />
				</div>
				<div className="my-3 px-4 text-13">
					Smart Photos continuously tests all of your profile photos and picks the best one to show
					first.
				</div>
				<About />
				<Passions />
				<JobTitle />
				<Place />
				<Social />
				<Control />
				<Gender />
				<SexualOrientation />
			</div>
			<div className="absolute bottom-0 pb-4 w-full flex bg-bottom-blur rounded-b-lg">
				<Link
					to="/app/profile"
					className="min-h-40 mx-auto px-6 bg-gradient-to-l from-coral to-hot-pink text-white rounded-25 font-medium inline-flex items-center hover:text-white hover:bg-pink hover:bg-none uppercase shadow-btn-primary"
				>
					Save
				</Link>
			</div>
		</>
	);
}
