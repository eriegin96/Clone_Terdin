import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from 'context/AppProvider';
import Chat from './Chat';
import InfoBoard from './InfoBoard';

export default function MessagesMain() {
	const { chatPartner } = useContext(AppContext);
	const params = useParams();
	const partner = chatPartner.find((item) => item.id === params.id);

	return (
		<div className="messages-main h-screen flex bg-white">
			<Chat partner={partner} />
			<InfoBoard partner={partner} />
		</div>
	);
}
