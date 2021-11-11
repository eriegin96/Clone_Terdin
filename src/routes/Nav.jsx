import React, { useContext } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Avatar } from 'antd';
import './nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TinderSvg } from 'utils/Svg';
import { AuthContext } from 'context/AuthProvider';

export default function Nav() {
	const { user } = useContext(AuthContext);
	const { pathname } = useLocation();

	return (
		<aside className="nav">
			<div className="nav__header">
				<Link to="profile" className={pathname === '/app/profile' ? 'nav__header--active' : ''}>
					<Avatar size={32} src={user.photoURL}>
						{user.displayName.charAt(0)}
					</Avatar>
					<span>{user.displayName.split(' ')[0]}</span>
				</Link>
				<div>
					<Link to="recs" className={pathname !== '/app/recs' ? '' : 'none'}>
						<TinderSvg />
					</Link>
					<button>
						<FontAwesomeIcon icon="fa-solid fa-briefcase" />
					</button>
				</div>
			</div>
			<div className="nav__content">
				<CSSTransition in={pathname === '/app/profile'} timeout={300} classNames="nav__left">
					<Outlet />
				</CSSTransition>
			</div>
		</aside>
	);
}
