import React, { useEffect, useState } from 'react';
import './homePage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderNav from '../components/HeaderNav';
import Logo from 'resources/img/homepage/logo.svg';

export default function HomePage() {
	const [pos, setPos] = useState();
	const [mainOpacity, setMainOpacity] = useState(1);

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
							<img src={Logo} alt="" />
							terdin
						</span>
						<HeaderNav />
					</div>
					<div>
						<button className="home-page__header__lang">
							<FontAwesomeIcon icon="globe-americas" />
							<br />
							English
						</button>
						<button className="home-page__header__login">Log in</button>
					</div>
				</header>
				<div className="home-page__content" style={{ opacity: mainOpacity }}>
					<div>Swipe Right®</div>
					<button>Create Account</button>
					<div>All photos are of models and used for illustrative purposes only</div>
				</div>
			</div>
			<div className="home-page__slider">
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Sociis natoque penatibus et magnis dis. Turpis egestas
					sed tempus urna et pharetra pharetra. Enim praesent elementum facilisis leo vel fringilla
					est. Semper feugiat nibh sed pulvinar proin gravida hendrerit. In nulla posuere
					sollicitudin aliquam ultrices sagittis orci. At consectetur lorem donec massa sapien.
					Etiam erat velit scelerisque in dictum non consectetur a erat. Arcu cursus euismod quis
					viverra. Elit pellentesque habitant morbi tristique. Dui ut ornare lectus sit amet est. Id
					aliquet risus feugiat in ante. Urna cursus eget nunc scelerisque viverra mauris in. Dui
					accumsan sit amet nulla facilisi morbi tempus iaculis urna. Fermentum posuere urna nec
					tincidunt. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Nullam eget felis
					eget nunc. Mauris commodo quis imperdiet massa tincidunt nunc. Fames ac turpis egestas
					maecenas pharetra convallis. Cursus eget nunc scelerisque viverra mauris in aliquam sem.
					Viverra accumsan in nisl nisi. Fringilla est ullamcorper eget nulla facilisi etiam
					dignissim diam quis. Ultrices in iaculis nunc sed augue lacus. Nunc congue nisi vitae
					suscipit tellus mauris a diam maecenas. Neque vitae tempus quam pellentesque nec nam
					aliquam sem. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit.
					Varius sit amet mattis vulputate. Ut faucibus pulvinar elementum integer enim neque
					volutpat. Feugiat pretium nibh ipsum consequat nisl. Iaculis eu non diam phasellus
					vestibulum. Odio morbi quis commodo odio aenean sed adipiscing. Arcu vitae elementum
					curabitur vitae nunc sed velit. Dolor sit amet consectetur adipiscing elit pellentesque
					habitant morbi. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum
					dui. Ut eu sem integer vitae justo eget magna fermentum iaculis. Adipiscing vitae proin
					sagittis nisl rhoncus mattis rhoncus urna. Turpis cursus in hac habitasse platea dictumst.
					Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Risus quis varius
					quam quisque id diam vel quam. Feugiat scelerisque varius morbi enim. Eget est lorem ipsum
					dolor sit amet consectetur. Sed pulvinar proin gravida hendrerit lectus. Fermentum odio eu
					feugiat pretium nibh ipsum. Egestas quis ipsum suspendisse ultrices. Id diam vel quam
					elementum pulvinar etiam non quam. Tincidunt praesent semper feugiat nibh sed pulvinar
					proin gravida hendrerit. Dolor sit amet consectetur adipiscing. Duis at tellus at urna
					condimentum mattis pellentesque. Nisl tincidunt eget nullam non nisi est sit amet
					facilisis. Morbi tristique senectus et netus. Adipiscing commodo elit at imperdiet dui
					accumsan. Duis ultricies lacus sed turpis tincidunt id aliquet risus. Vel quam elementum
					pulvinar etiam non. In dictum non consectetur a erat. Placerat orci nulla pellentesque
					dignissim enim sit amet venenatis urna. Tellus pellentesque eu tincidunt tortor aliquam
					nulla facilisi. Pretium fusce id velit ut tortor. Nam aliquam sem et tortor consequat id
					porta nibh. Sodales ut etiam sit amet nisl purus in mollis nunc. Tortor condimentum
					lacinia quis vel eros donec. Mauris commodo quis imperdiet massa tincidunt nunc. Posuere
					ac ut consequat semper viverra nam. Tincidunt lobortis feugiat vivamus at.
				</div>
			</div>
			<footer className="home-page__footer">Footer</footer>
		</div>
	);
}
