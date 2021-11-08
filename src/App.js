import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faInstagram,
	faTiktok,
	faYoutube,
	faTwitter,
	faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import { faEarthAmericas, faCircleXmark, faComment } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { AuthContext } from 'context/AuthProvider';
import HomePage from 'features/Home/pages/HomePage';
import SwipePage from 'features/Swipe/pages/SwipePage';

library.add(
	faInstagram,
	faTwitter,
	faTiktok,
	faYoutube,
	faFacebookF,
	faEarthAmericas,
	faCircleXmark,
	faComment,
	faAddressBook
);

function App() {
	const {
		user: { uid },
	} = useContext(AuthContext);

	return (
		<React.Fragment>
			{uid ? (
				<Routes>
					{/* <Route exact path="/app" component={ChatPage} />
					<Route path="/login" component={LoginPage} /> */}
					<Route path="/" element={<SwipePage />} />
					<Route path="*" element={<Navigate to="/app" />} />
				</Routes>
			) : (
				<Routes>
					<Route path="/" element={<HomePage />} />
					{/* <Route path="*" element={<Navigate to="/" />} /> */}
				</Routes>
			)}
		</React.Fragment>
	);
}

export default App;
