import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import './main.scss'

function Window() {
	return (
		<div className='window'>
			<Outlet />
		</div>
	);
}

export default function MainPage() {
	return (
		<div className='page'>
			<Nav />
			<Window />
		</div>
	);
}
