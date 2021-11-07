import React from 'react';

export default function HeaderNav() {
	return (
		<nav className="home-page__header__nav">
			<ul>
				<li className="home-page__header__nav__item">
					<span>Products</span>
					<ul className="home-page__header__nav-list">
						<li className="home-page__header__nav-list__item">
							<span>Premium Features</span>
						</li>
						<li className="home-page__header__nav-list__item">
							<span>Subscription Tiers</span>
						</li>
						<ul>
							<li className="home-page__header__nav-list__item">
								<span>Tinder Plus®</span>
							</li>
							<li className="home-page__header__nav-list__item">
								<span>Tinder Gold™</span>
							</li>
							<li className="home-page__header__nav-list__item">
								<span>Tinder Platinum™</span>
							</li>
						</ul>
						<li className="home-page__header__nav-list__item">
							<span>Download</span>
						</li>
					</ul>
				</li>
				<li className="home-page__header__nav__item">
					<span>Learn</span>
				</li>
				<li className="home-page__header__nav__item">
					<span>Safety</span>
					<ul className="home-page__header__nav-list">
						<li className="home-page__header__nav-list__item">
							<span>Community Guidlines</span>
						</li>
						<li className="home-page__header__nav-list__item">
							<span>Safety Tips</span>
						</li>
						<li className="home-page__header__nav-list__item">
							<span>Safety & Policy</span>
						</li>
						<li className="home-page__header__nav-list__item">
							<span>Safety & Reporting</span>
						</li>
						<li className="home-page__header__nav-list__item">
							<span>Security</span>
						</li>
					</ul>
				</li>
				<li className="home-page__header__nav__item">
					<span>Support</span>
				</li>
				<li className="home-page__header__nav__item">
					<span>Swipe <br/> Night</span>
				</li>
			</ul>
		</nav>
	);
}
