import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PRODUCT } from 'utils/constants';

export default function ProductMain() {
	const [selectPrice, setSelectPrice] = useState(1);
	const params = useParams();
	const path = params['*'];
	const { features, get, prices } = PRODUCT[path];

	useEffect(() => {
		setSelectPrice(1);
	}, [path]);

	return (
		<>
			<div className="h-full flex bg-white">
				<div className="h-full flex-grow overflow-scroll border-r border-divider-primary cursor-default select-none">
					<h3 className="py-5 mb-1 uppercase text-text-secondary font-semibold text-center tracking-widest">
						Your Subscription includes
					</h3>
					<div className="border-t border-divider-primary divide-y divide-divider-primary">
						{features.map((item, i) => (
							<div key={i} className="px-8 py-14 flex items-center">
								<div className="pr-14">
									{path === 'platinum' ? (
										<item.svg className="w-18 h-18" />
									) : (
										<div className="w-18 h-18 p-2.5 shadow-1 rounded-full">
											<item.svg className="w-13 h-13" />
										</div>
									)}
								</div>
								<div>
									<h3 className={`mb-1.5 text-${item.color} text-22 font-medium`}>{item.title}</h3>
									<div className="max-w-420 text-text-secondary text-sm">{item.content}</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="h-full overflow-scroll min-w-364 w-2/5 flex-grow-0">
					<div className="h-full pt-2.5 px-6 pb-6 ">
						<div className="w-full">
							<div className="mb-5 text-center">
								<h3 className={`mb-2 text-3xl font-medium text-${get.titleColor} leading-10`}>
									Get Tinder {get.title}™
								</h3>
								<div className="text-text-secondary">{get.sub}</div>
							</div>
							<div className="py-1 flex flex-col">
								{prices.map((item, i) => (
									<button key={i} className="pl-1.5 w-full" onClick={() => setSelectPrice(i)}>
										<div
											className={`relative py-6 px-12 min-w-200 text-center flex flex-col justify-center transition-colors rounded-2xl ${
												selectPrice === i
													? `border-3 border-${get.priceBorderColor} bg-${get.priceBg} text-${get.priceColor}`
													: `text-gray-15 hover:text-${get.priceHoverColor}`
											}`}
										>
											{selectPrice === i && item.tag && (
												<div className="absolute top-0 left-0 right-0">
													<div
														className={`inline-block py-1 px-2.5 mx-auto bg-${get.tagBg} rounded-2xl font-semibold text-${get.tagColor} text-13 tracking-wide uppercase transform -translate-y-1/2`}
													>
														{item.tag}
													</div>
												</div>
											)}

											<h3 className="mb-2 text-3xl text-current">
												<span className="relative -top-1 mr-3.5 inline-flex items-center">
													<span className="absolute top-1/2 -left-1/2 transform -translate-y-1/2 w-7 h-7 opacity-30 border-3 border-current rounded-full"></span>
													<FontAwesomeIcon icon="fa-solid fa-circle" className="w-3.5 h-3.5" />
												</span>
												{item.month}
											</h3>
											<h3 className="mb-1 opacity-70 text-lg text-current">
												<span className="font-medium">{item.price}</span>
												<span>/mo {item.save && `Save ${item.save}`}</span>
											</h3>
										</div>
									</button>
								))}
							</div>
							<div className="pt-2.5 text-center">
								<div
									className={`mt-5 py-5 rounded-25 text-white uppercase font-semibold bg-${get.checkoutBg} hover:shadow-${get.checkoutShadow} transition-all ease-in cursor-pointer`}
								>
									Checkout
								</div>
								<Link
									to="/app/profile"
									className="py-5 uppercase text-text-secondary text-base font-semibold"
								>
									No Thanks
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
