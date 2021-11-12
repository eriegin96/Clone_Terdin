import React, { useMemo } from 'react';
import { HOME_NAVS } from 'utils/constants';

export default function HeaderNav() {
	const navList = useMemo(() => HOME_NAVS, []);

	return (
		<nav className="inline-block pl-10">
			<ul className="flex items-center my-4">
				{navList.map((item, i) => (
					<li key={i} className="group relative h-13 flex items-center">
						<span className="group-hover:underline group-hover:text-hover text-white text-lg font-medium cursor-pointer mr-10">
							{item.title}
						</span>
						{item.list && (
							<ul className="group-hover:flex hidden absolute w-max top-4/5 left-0 flex-col items-start">
								{item.list.map((listItem, li) => {
									if (listItem.title) {
										return (
											<li key={li} className="py-0.75">
												<span className="text-white text-lg font-medium cursor-pointer hover:text-hover block font-semibold">
													{listItem.title}
												</span>
											</li>
										);
									} else {
										return (
											<ul key={li} className="pl-9 flex flex-col items-start">
												{listItem.subList.map((subListItem, sli) => (
													<li key={sli} className="py-0.75">
														<span className="text-white text-lg font-medium cursor-pointer hover:text-hover block font-semibold">
															{subListItem.title}
														</span>
													</li>
												))}
											</ul>
										);
									}
								})}
							</ul>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
}
