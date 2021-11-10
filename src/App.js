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
import {
	faEarthAmericas,
	faCircleXmark,
	faComment,
	faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { AuthContext } from 'context/AuthProvider';
import HomePage from 'components/Home/pages';
import MainPage from 'routes';
import RecsPage from 'routes/recs';
import ProfilePage from 'routes/profile';
import MessagesPage from 'routes/messages';
import ProductPage from 'routes/product';

library.add(
	faInstagram,
	faTwitter,
	faTiktok,
	faYoutube,
	faFacebookF,
	faEarthAmericas,
	faCircleXmark,
	faComment,
	faAddressBook,
	faBriefcase
);

function App() {
	const {
		user: { uid },
	} = useContext(AuthContext);

	return (
		<React.Fragment>
			{uid ? (
				<Routes>
					<Route path="app" element={<MainPage />}>
						<Route path="recs" element={<RecsPage />} />
						<Route path="matches" element={<ProfilePage />} />
						<Route path="profile" element={<ProfilePage />} />
						<Route path="messages">
							<Route path=":id" element={<MessagesPage />} />
						</Route>
						<Route path="product">
							<Route path="subscription" element={<ProductPage />}>
								<Route path="platinum" element={<ProductPage />} />
								<Route path="gold" element={<ProductPage />} />
								<Route path="plus" element={<ProductPage />} />
							</Route>
						</Route>
						<Route path="settings">
							<Route path="platinum" element={<ProfilePage />} />
							<Route path="gold" element={<ProfilePage />} />
							<Route path="plus" element={<ProfilePage />} />
						</Route>
					</Route>
					<Route path="*" element={<Navigate to="/app/recs" />} />
				</Routes>
			) : (
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			)}
		</React.Fragment>
	);
}

export default App;
