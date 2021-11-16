import React, { createContext, useContext, useState } from 'react';
import { AuthContext } from 'context/AuthProvider';

export const AppContext = createContext();

export default function AppProvider({ children }) {
	const { user } = useContext(AuthContext);
	const [devModalOpen, setDevModalOpen] = useState(false);
	const [email, setEmail] = useState('email@example.com');
	const [phoneNumber, setPhoneNumber] = useState('0123456789');
	const [preferAge, setPreferAge] = useState([18, 28]);
	const [preferDistance, setPreferDistance] = useState(80);
	const [preferGender, setPreferGender] = useState('women');
	const [photos, setPhotos] = useState([
		'https://picsum.photos/id/111/640/800',
		'https://picsum.photos/id/112/640/800',
		'https://picsum.photos/id/113/640/800',
		'',
		'',
		'',
		'',
		'',
		'',
	]);

	const value = {
		devModalOpen,
		setDevModalOpen,
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
		photos,
		setPhotos,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
