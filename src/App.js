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
	faAngleRight,
	faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { AuthContext } from 'context/AuthProvider';
import HomePage from 'components/Home/pages';
import Nav from 'routes/Nav';
import Main from 'routes/Main';
import RecsNav from 'routes/recs/RecsNav';
import RecsMain from 'routes/recs/RecsMain';
import ProfileNav from 'routes/profile/ProfileNav';
import ProfileMain from 'routes/profile/ProfileMain';
import MessagesNav from 'routes/messages/MessagesNav';
import MessagesMain from 'routes/messages/MessagesMain';
import ProductNav from 'routes/product/ProductNav';
import ProductMain from 'routes/product/ProductMain';
import SettingsNav from 'routes/settings/SettingsNav';
import SettingsMain from 'routes/settings/SettingsMain';

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
	faBriefcase,
	faAngleRight,
	faUpRightFromSquare
);

function App() {
	const {
		user: { uid },
	} = useContext(AuthContext);

	return (
		<React.Fragment>
			{uid ? (
				<div className="h-screen flex">
					<>
						<Routes>
							<Route path="app" element={<Nav />}>
								<Route path="recs" element={<RecsNav />} />
								<Route path="matches" element={<ProfileNav />} />
								<Route path="profile" element={<ProfileNav />} />
								<Route path="messages">
									<Route path=":id" element={<MessagesNav />} />
								</Route>
								<Route path="product">
									<Route path="subscription" element={<ProductNav />}>
										<Route path="platinum" element={<ProductNav />} />
										<Route path="gold" element={<ProductNav />} />
										<Route path="plus" element={<ProductNav />} />
									</Route>
								</Route>
								<Route path="settings">
									<Route path="plus/passport" element={<SettingsNav />} />
									<Route path="*" element={<SettingsNav />} />
								</Route>
							</Route>
							<Route path="*" element={<Navigate to="/app/recs" />} />
						</Routes>
					</>
					<>
						<Routes>
							<Route path="app" element={<Main />}>
								<Route path="recs" element={<RecsMain />} />
								<Route path="matches" element={<ProfileMain />} />
								<Route path="profile" element={<ProfileMain />} />
								<Route path="messages">
									<Route path=":id" element={<MessagesMain />} />
								</Route>
								<Route path="product">
									<Route path="subscription" element={<ProductMain />}>
										<Route path="platinum" element={<ProductMain />} />
										<Route path="gold" element={<ProductMain />} />
										<Route path="plus" element={<ProductMain />} />
									</Route>
								</Route>
								<Route path="settings" element={<ProfileMain />}>
									<Route path="plus/passport" element={<ProfileMain />} />
									<Route path="*" element={<ProfileMain />} />
								</Route>
								<Route path="*" element={<Navigate to="/app/recs" />} />
							</Route>
						</Routes>
					</>
				</div>
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
