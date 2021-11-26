import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { AuthContext } from 'context/AuthProvider';
import { useFirestoreAllRoomList, useFirestoreAllList, useFirestoreSuggestList } from 'hooks/useFirestore';
import { useFirestore } from '../hooks/useFirestore';

export const AppContext = createContext();

export default function AppProvider({ children }) {
	const {
		user: { uid },
	} = useContext(AuthContext);
	const [devModalOpen, setDevModalOpen] = useState(false);
	const [countdown, setCountdown] = useState(5);
	const [likesCount, setLikesCount] = useState(0);
	const [preferAge, setPreferAge] = useState([18, 28]);
	const [preferDistance, setPreferDistance] = useState(80);
	const [preferGender, setPreferGender] = useState('women');
	const suggestList = useFirestoreSuggestList(uid || '0');
	const allList = useFirestoreAllList(uid || '0');

	// Room
	const roomsCondition = useMemo(() => {
		return {
			fieldName: 'members',
			operator: 'array-contains',
			compareValue: uid,
		};
	}, [uid]);
	const rooms = useFirestore('rooms', roomsCondition);

	const roomsList = rooms.map((room) => {
		const appendItem = allList.find((item) => room.members.includes(item.uid));
		return { ...room, partner: appendItem };
	});
	const recentList = roomsList.filter((item) => item.messagesCount !== 0);
	const matchedList = roomsList.filter((item) => item.messagesCount === 0);

	useEffect(() => {
		if (likesCount === 5) {
			const time = setTimeout(() => {
				if (countdown !== 0) {
					setCountdown((prev) => prev - 1);
				} else {
					setLikesCount(0);
					setCountdown(5)
				}
			}, 1000);

			return () => {
				clearTimeout(time);
			};
		}
	}, [likesCount, countdown]);

	const value = {
		devModalOpen,
		setDevModalOpen,
		countdown,
		setCountdown,
		likesCount,
		setLikesCount,
		preferAge,
		setPreferAge,
		preferDistance,
		setPreferDistance,
		preferGender,
		setPreferGender,
		suggestList,
		matchedList,
		recentList,
		allList,
		roomsList,
		rooms,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
