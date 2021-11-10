import React, { useEffect, useState } from 'react';
import './homePage.scss';
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
		<div className="home-page">
			<div className="home-page__bg">
				<div className="home-page__bg1"></div>
				<div className="home-page__bg2"></div>
				<div className="home-page__bg3"></div>
			</div>
			<div className="home-page__main">
				<header className="home-page__header">
					<div>
						<span className="home-page__header__logo">
							<TinderTextSvg />
						</span>
						<HeaderNav />
					</div>
					<div>
						<span className="home-page__header__lang">
							<FontAwesomeIcon icon="fa-solid fa-earth-americas" />
							English
						</span>
						<span className="home-page__header__login">
							<button
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
				<div className="home-page__content" style={{ opacity: mainOpacity }}>
					<div>Swipe Right®</div>
					<button
						onClick={() => {
							setHadAccount(false);
							setLoginModalOpen(true);
						}}
					>
						Create Account
					</button>
					<div>All photos are of models and used for illustrative purposes only</div>
				</div>
			</div>
			<div className="home-page__slider">
				<HomeCarousel />
			</div>
			<footer className="home-page__footer">
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
