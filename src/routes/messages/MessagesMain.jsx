import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Chat from './Chat';
import InfoBoard from './InfoBoard';
import { AppContext } from 'context/AppProvider';

export default function MessagesMain() {
	const { roomsList } = useContext(AppContext);
	const params = useParams();
	const room = roomsList.find((item) => item?.id=== params.id);

	return (
		<div className="messages-main h-screen flex bg-white">
			<Chat partner={room?.partner} room={room} />
			<InfoBoard partner={room?.partner} />
		</div>
	);
}
