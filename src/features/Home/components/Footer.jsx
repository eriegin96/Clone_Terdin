import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imgAS from 'resources/img/homepage/app-store.webp';
import imgGP from 'resources/img/homepage/google-play.webp';

export default function Footer() {
	return (
		<div className="home-page__footer__container">
			<div className="home-page__footer__info1">
				<div>
					<h3>LEGAL</h3>
					<ul>
						<li>
							<span>Privacy</span>
						</li>
						<li>
							<span>Terms</span>
						</li>
						<li>
							<span>Cookie Policy</span>
						</li>
						<li>
							<span>Intellectual Property</span>
						</li>
					</ul>
				</div>
				<div>
					<h3>CAREERS</h3>
					<ul>
						<li>
							<span>Careers Portal</span>
						</li>
						<li>
							<span>Tech Blog</span>
						</li>
					</ul>
				</div>
				<div>
					<h3>SOCIAL</h3>
					<ul>
						<li>
							<FontAwesomeIcon icon="fa-brands fa-instagram" />
						</li>
						<li>
							<FontAwesomeIcon icon="fa-brands fa-tiktok" />
						</li>
						<li>
							<FontAwesomeIcon icon="fa-brands fa-youtube" />
						</li>
						<li>
							<FontAwesomeIcon icon="fa-brands fa-twitter" />
						</li>
						<li>
							<FontAwesomeIcon icon="fa-brands fa-facebook-f" />
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>
							<span>FAQ</span>
						</li>
						<li>
							<span>Destinations</span>
						</li>
						<li>
							<span>Press Room</span>
						</li>
						<li>
							<span>Contact</span>
						</li>
						<li>
							<span>Promo Code</span>
						</li>
					</ul>
				</div>
			</div>
			<div className="home-page__footer__app">
				<h3>Get the App!</h3>
				<div>
					<a href="https://open.tinder.com/kgco/af5c38d7">
						<img src={imgAS} alt="" />
					</a>
					<a href="https://open.tinder.com/kgco/c283b688">
						<img src={imgGP} alt="" />
					</a>
				</div>
			</div>
			<div className="home-page__footer__des">
				<p>
					Single people, listen up: If you’re looking for love, want to start dating, or just keep
					it casual, you need to be on Tinder. With over 55 billion matches made, it’s the place to
					be to meet your next best match. Let’s be real, the dating landscape looks very different
					today, as most people are meeting online. With Tinder, the world’s most popular free
					dating app, you have millions of other single people at your fingertips and they’re all
					ready to meet someone like you. Whether you’re straight or in the LGBTQIA community,
					Tinder’s here to bring you all the sparks.
				</p>
				<p>
					There really is something for everyone on Tinder. Want to get into a relationship? You got
					it. Trying to find some new friends? Say no more. New kid on campus and looking to make
					the most of your college experience? Tinder U’s got you covered. Tinder isn’t your average
					dating site — it’s the most diverse dating app, where adults of all backgrounds and
					experiences are invited to make connections, memories, and everything in between.
				</p>
			</div>
			<div className="home-page__footer__info2">
				<div>
					<span>FAQ</span>
					<span>/</span>
					<span>Safety Tips</span>
					<span>/</span>
					<span>Terms</span>
					<span>/</span>
					<span>Cookie Policy</span>
					<span>/</span>
					<span>Privacy Settings</span>
				</div>
				<div>© 2021 Match Group, LLC, All Rights Reserved.</div>
			</div>
		</div>
	);
}
