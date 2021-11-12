import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Slider, Switch } from 'antd';

export default function DiscoverySettings() {
	const [distance, setDistance] = useState(80);
	const [age, setAge] = useState([18, 28]);

	return (
		<>
			<div className="mt-5">
				<h3 className="py-2 px-4 text-text-secondary uppercase font-semibold text-13">
					Discovery Settings
				</h3>
				<div className="divide-y divide-divider-primary bg-white border-t border-b border-solid border-divider-primary">
					<Link to="/app/settings/plus/passport">
						<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50 group">
							<span className="py-3">Location</span>
							<span className="py-3 text-text-secondary transition-all duration-200 group-hover:text-brand-pink">
								Phường 15, VietNam
								<FontAwesomeIcon
									icon="fa-solid fa-angle-right"
									className="ml-2 transition-all duration-200 w-3.5 h-3.5 text-divider-primary group-hover:text-brand-pink"
								/>
							</span>
						</div>
					</Link>
					<div className="flex-col cursor-default flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50">
						<div className="w-full flex justify-between items-center cursor-default">
							<span className="py-3">Distance Preference</span>
							<span className="py-3">{distance} km.</span>
						</div>
						<Slider
							min={2}
							max={161}
							defaultValue={distance}
							tooltipVisible={false}
							onChange={(value) => setDistance(value)}
						/>
						<div className="w-full flex justify-between items-center cursor-pointer">
							<span className="py-3">Only show people in this range</span>
							<Switch />
						</div>
					</div>
					<Link to="/app/settings/gender">
						<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50 group">
							<span className="py-3">Looking for</span>
							<span className="py-3 text-text-secondary transition-all duration-200 group-hover:text-brand-pink">
								Women
								<FontAwesomeIcon
									icon="fa-solid fa-angle-right"
									className="ml-2 transition-all duration-200 w-3.5 h-3.5 text-divider-primary group-hover:text-brand-pink"
								/>
							</span>
						</div>
					</Link>
					<div className="flex-col cursor-default flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50">
						<div className="w-full flex justify-between items-center cursor-default">
							<span className="py-3">Age Preference</span>
							<span className="py-3">
								{age[0]} - {age[1] === 100 ? '100+' : age[1]}
							</span>
						</div>
						<Slider
							range
							min={18}
							max={100}
							defaultValue={age}
							tooltipVisible={false}
							onChange={(value) => setAge(value)}
						/>
						<div className="w-full flex justify-between items-center cursor-pointer">
							<span className="py-3">Only show people in this range</span>
							<Switch />
						</div>
					</div>
					<div className="flex justify-between items-center text-text-primary px-4 cursor-pointer min-h-50">
						<span className="py-3">Global</span>
						<Switch />
					</div>
				</div>
				<div className="my-3 px-4 text-text-secondary text-13">
					Going global will allow you to see people from around the world after you’ve run out of
					profiles nearby.
				</div>
			</div>
		</>
	);
}
