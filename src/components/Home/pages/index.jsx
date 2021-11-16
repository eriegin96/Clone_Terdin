import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderNav from '../components/HeaderNav';
import HomeCarousel from '../components/HomeCarousel';
import Footer from '../components/Footer';
import LoginModal from '../components/LoginModal';
import { TinderTextSvg } from 'utils/Svg';

export default function HomePage() {
	const [pos, setPos] = useState(0);
	const [mainOpacity, setMainOpacity] = useState(1);
	const [hadAccount, setHadAccount] = useState(true);
	const [loginModalOpen, setLoginModalOpen] = useState(false);

	useEffect(() => {
		const mainHeight = document.querySelector('.home-page__main').clientHeight - 310;
		const handleScroll = () => {
			setPos(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);

		mainHeight > pos ? setMainOpacity((mainHeight - pos) / mainHeight) : setMainOpacity(0);
	}, [pos]);

	return (
		<div className="home-page w-full overflow-hidden">
			<div className="fixed inset-0 -z-1">
				<div className="absolute w-full h-full bg-main-background bg-center bg-no-repeat bg-cover transform scale-110"></div>
				<div className="absolute w-full h-full bg-bg4"></div>
				<div className="h-45 absolute w-full bg-gradient-to-b from-black"></div>
			</div>
			<div className="home-page__main h-screen w-full">
				<header className="sticky top-0 w-full flex justify-between items-center z-1">
					<div className="flex items-center mx-7">
						<span className="cursor-pointer">
							<TinderTextSvg />
						</span>
						<HeaderNav />
					</div>
					<div className="flex items-center">
						<span className="cursor-pointer bg-transparent uppercase text-white px-3 text-15 flex items-center">
							<FontAwesomeIcon icon="fa-solid fa-earth-americas" className="mr-2" />
							English
						</span>
						<span className="px-7">
							<button
								className="w-26 outline-none bg-white text-hover px-6 rounded-3 text-17 font-semibold leading-loose tracking-1"
								onClick={() => {
									setHadAccount(true);
									setLoginModalOpen(true);
								}}
							>
								Log in
							</button>
						</span>
					</div>
				</header>
				<div
					className="relative w-full flex flex-col justify-center items-center text-white"
					style={{ opacity: mainOpacity, height: 'calc(100% - 84px)' }}
				>
					<div className="text-110 font-semibold">Swipe Right®</div>
					<button
						className="uppercase text-white text-base font-semibold py-4.25 px-12.5 rounded-7.5 bg-gradient-to-r from-hot-pink to-coral"
						onClick={() => {
							setHadAccount(false);
							setLoginModalOpen(true);
						}}
					>
						Create Account
					</button>
					<div className="absolute text-xs right-5 bottom-2.5">
						All photos are of models and used for illustrative purposes only
					</div>
				</div>
			</div>
			<div className="pt-5 pb-4 bg-white">
				<HomeCarousel />
			</div>
			<footer className="bg-white">
				<Footer />
			</footer>
			<LoginModal
				hadAccount={hadAccount}
				loginModalOpen={loginModalOpen}
				setLoginModalOpen={setLoginModalOpen}
			/>
		</div>
	);
}
