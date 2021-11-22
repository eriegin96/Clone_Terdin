import { db } from './config';
import {
	collection,
	doc,
	addDoc,
	getDoc,
	setDoc,
	updateDoc,
	serverTimestamp,
} from 'firebase/firestore';
import { usersList } from 'resources/data/users-list';
import { randomPassion, randomPhotos, randomStatus } from 'utils/randomize';

export const createUsersData = () => {
	for (let i = 0; i < 10; i++) {
		const {
			dob: { age },
			gender,
			location: { city, state },
			login: { uuid },
			name: { first, last },
		} = usersList[i];
		const userRef = doc(db, 'users', uuid);
		async function asyncUsersData() {
			await setDoc(userRef, {
				age,
				uid: uuid,
				displayInfo: {
					school: `${city} Univeristy`,
					gender,
					location: `${city}, ${state}`,
					distance: '3 kilometers',
				},
				passions: randomPassion(),
				status: randomStatus(),
				displayName: `${first} ${last}`,
				photos: randomPhotos(),
				createdAt: serverTimestamp(),
				modifiedAt: serverTimestamp(),
			});
		}
		asyncUsersData();
	}
};

export const createRooms = (uid, partnerId) => {
	const roomRef = collection(db, 'rooms');

	async function asyncRoomData() {
		await addDoc(roomRef, {
			members: [uid, partnerId],
			createdAt: serverTimestamp(),
			modifiedAt: serverTimestamp(),
		});
	}
	asyncRoomData();
};

export const getUserData = (uid) => {
	const userRef = doc(db, 'users', uid);

	async function asyncGetDoc() {
		const userSnap = await getDoc(userRef);

		if (userSnap.exists()) {
			return userSnap.data();
		} else {
			return {};
		}
	}

	return asyncGetDoc();
};

export const addUser = (uid, data) => {
	const userRef = doc(db, 'users', uid);

	async function asyncSetDoc() {
		await setDoc(userRef, {
			...data,
			photos: randomPhotos(),
			passions: randomPassion(),
			status: randomStatus(),
			displayInfo: {
				school: '',
				gender: '',
				location: '',
				distance: '',
			},
			createdAt: serverTimestamp(),
			modifiedAt: serverTimestamp(),
		});
	}

	asyncSetDoc();
};

export const updateUser = (uid, data) => {
	const userRef = doc(db, 'users', uid);

	async function asyncUpdateDoc() {
		await updateDoc(userRef, {
			...data,
			modifiedAt: serverTimestamp(),
		});
	}

	asyncUpdateDoc();
};

export const matchPartner = (uid, partnerId) => {
	const userRef = doc(db, 'users', uid);
	const matchedOfPartnerRef = doc(db, 'users', partnerId, 'matched', uid);
	const partnerRef = doc(db, 'users', partnerId);
	const matchedOfUserRef = doc(db, 'users', uid, 'matched', partnerId);

	async function asyncAddFriend() {
		// add user to partner
		const userSnap = await getDoc(userRef);
		await setDoc(matchedOfPartnerRef, {
			uid: uid,
			photos: userSnap.data().photos,
			displayName: userSnap.data().displayName,
			createdAt: serverTimestamp(),
			modifiedAt: serverTimestamp(),
		});

		// add partner to user
		const friendSnap = await getDoc(partnerRef);
		await setDoc(matchedOfUserRef, {
			uid: partnerId,
			photos: friendSnap.data().photos,
			displayName: friendSnap.data().displayName,
			createdAt: serverTimestamp(),
			modifiedAt: serverTimestamp(),
		});
	}

	asyncAddFriend();
};

export const addRoom = (data) => {
	const roomRef = collection(db, 'rooms');

	async function asyncAddRoom() {
		await addDoc(roomRef, {
			...data,
			messagesCount: 0,
			createdAt: serverTimestamp(),
			modifiedAt: serverTimestamp(),
		});
	}

	asyncAddRoom();
};

export const addMessage = (roomId, data) => {
	const messageRef = collection(db, 'rooms', roomId, 'messages');
	const roomRef = doc(db, 'rooms', roomId);

	async function asyncAddMessage() {
		const roomSnap = await getDoc(roomRef);
		await addDoc(messageRef, {
			...data,
			createdAt: serverTimestamp(),
			modifiedAt: serverTimestamp(),
		});

		await updateDoc(roomRef, {
			messagesCount: roomSnap.messagesCount + 1,
			lastMessage: data.text,
			modifiedAt: serverTimestamp(),
		});
	}

	asyncAddMessage();
};
