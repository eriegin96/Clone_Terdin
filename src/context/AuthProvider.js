import React, { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'firebase/config';
import Auth from 'components/Auth';
import { getUserData } from 'firebase/services';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
	const [user, setUser] = useState({});
	const [isAuthLoading, setIsAuthLoading] = useState(true);

	useEffect(() => {
		// const unsubscribed = onAuthStateChanged(auth, (user) => {
		// 	if (user) {
		// 		getUserData(user.uid).then((data) => {
		// 			setUser(data);
		// 			setIsAuthLoading(false);
		// 		});
		// 	} else {
		// 		setUser({});
		// 		setIsAuthLoading(false);
		// 	}
		// });
				setUser({});

				// setUser({uid: 1, displayName: 'a'});


		// return () => {
		// 	unsubscribed();
		// };
	}, []);

	return (
		<AuthContext.Provider value={{ user }}>
			{/* {isAuthLoading ? <Auth /> : children} */}
			{children}
		</AuthContext.Provider>
	);
}
