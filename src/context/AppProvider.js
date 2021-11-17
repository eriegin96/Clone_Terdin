import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from 'context/AuthProvider';
import axios from 'axios';

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
	const [userPhotos, setUserPhotos] = useState([
		'https://picsum.photos/id/121/640/800',
		'https://picsum.photos/id/122/640/800',
		'https://picsum.photos/id/123/640/800',
	]);
	useEffect(() => {
		axios.get('https://loripsum.net/api/1/short/plaintext').then((res) => console.log(res.data));
	}, []);

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
		userPhotos, setUserPhotos
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
