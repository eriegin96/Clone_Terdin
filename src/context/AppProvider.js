import React, { createContext, useContext, useState } from 'react';
import { AuthContext } from 'context/AuthProvider';

export const AppContext = createContext();

export default function AppProvider({ children }) {
	const { user } = useContext(AuthContext);
	const [isVN, setIsVN] = useState(true);

	return <AppContext.Provider value={{ isVN, setIsVN }}>{children}</AppContext.Provider>;
}
