import React, { useContext } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Avatar } from 'antd';
import './nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TinderWhiteSvg } from 'utils/Svg';
import { AuthContext } from 'context/AuthProvider';

export default function Nav() {
	const { user } = useContext(AuthContext);
	const { pathname } = useLocation();

	return (
		<aside className="nav min-w-325 max-w-375 h-full w-1/4 bg-bg-secondary">
			<div className="h-18.25 flex justify-between items-center bg-gradient-to-l from-coral to-hot-pink">
				<Link
					to="profile"
					className={
						pathname === '/app/profile'
							? 'p-1 mx-3 text-white rounded-25 transition-all duration-300 ease-linear flex items-center bg-bg4'
							: 'p-1 mx-3 rounded-25 transition-all duration-300 ease-linear flex items-center hover:bg-bg4'
					}
				>
					<Avatar size={32} src={user.photoURL} className="mr-2">
						{user.displayName.charAt(0)}
					</Avatar>
					<span className="mx-1 text-white">{user.displayName.split(' ')[0]}</span>
				</Link>
				<div className="mx-3 flex justify-end">
					<Link
						to="recs"
						className={
							pathname !== '/app/recs'
								? 'w-9 h-9 p-1 mr-2 ml-1 rounded-full flex justify-center items-center transition-all duration-200 ease-linear bg-bg1 hover:bg-bg3'
								: 'hidden'
						}
					>
						<TinderWhiteSvg />
					</Link>
					<button className="w-9 h-9 p-1 mr-1 ml-2 bg-bg1 rounded-full transition-all duration-200 ease-linear leading-9 hover:bg-bg3">
						<FontAwesomeIcon icon="fa-solid fa-briefcase" className="text-white w-5 h-5" />
					</button>
				</div>
			</div>
			<div className="overflow-auto" style={{ height: 'calc(100% - 73px)' }}>
				{/* <CSSTransition in={pathname === '/app/profile'} timeout={300} classNames="nav__left"> */}
					<Outlet />
				{/* </CSSTransition> */}
			</div>
		</aside>
	);
}
