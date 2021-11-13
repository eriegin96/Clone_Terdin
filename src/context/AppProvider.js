import React, { createContext, useContext, useState } from 'react';
import { AuthContext } from 'context/AuthProvider';

export const AppContext = createContext();

export default function AppProvider({ children }) {
	const { user } = useContext(AuthContext);
	const [email, setEmail] = useState('email@example.com');
	const [phoneNumber, setPhoneNumber] = useState('0123456789');
	const [preferAge, setPreferAge] = useState([18, 28]);
	const [preferDistance, setPreferDistance] = useState(80);
	const [preferGender, setPreferGender] = useState('women');

	const value = {
		email,
		setEmail,
		phoneNumber,
		setPhoneNumber,
		preferAge,
		setPreferAge,
		preferDistance,
		setPreferDistance,
		preferGender,
		setPreferGender,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
