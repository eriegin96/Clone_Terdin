import React, { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'firebase/config';
import Auth from 'components/Auth';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
	const [user, setUser] = useState({});
	const [isAuthLoading, setIsAuthLoading] = useState(true);

	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({});
				setIsAuthLoading(false);
			} else {
				setUser({});
				setIsAuthLoading(false);
			}
		});

		// clean function
		return () => {
			unsubscribed();
		};
	}, []);

	return (
		<AuthContext.Provider value={{ user }}>
			{isAuthLoading ? <Auth /> : children}
		</AuthContext.Provider>
	);
}
