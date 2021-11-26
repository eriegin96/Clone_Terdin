import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar } from 'antd';
import { format } from 'date-fns';
import axios from 'axios';
import { useFirestoreMessages } from 'hooks/useFirestore';
import { AuthContext } from 'context/AuthProvider';
import { addMessage } from 'firebase/services';

export default function OldConv({ partner }) {
	const { user } = useContext(AuthContext);
	const params = useParams();
	const messages = useFirestoreMessages(params.id);
	const botDiv = document.querySelector('#bot-div');

	useEffect(() => {
		const partnerMess = document.querySelectorAll('.messages-main__partner-mess');
		partnerMess.forEach((item) => {
			if (!item.nextSibling?.classList.contains('messages-main__partner-mess')) {
				item.firstChild.classList.remove('hidden');
			}
		});
	}, [messages]);

	useEffect(() => {
		if (messages[messages.length - 1]?.sentId === user.uid) {
			const time = setTimeout(() => {
				axios.get('https://loripsum.net/api/1/short/plaintext').then((res) =>
					addMessage(params.id, {
						text: res.data,
						sentBy: partner?.displayName,
						sentId: partner?.uid,
					})
				);
			}, 2000);

			return () => {
				clearTimeout(time);
			};
		}
	}, [messages, params, partner, user]);

	useEffect(() => {
		botDiv?.scrollIntoView({ behavior: 'smooth' });
	}, [messages, botDiv]);

	return (
		<div className="py-2.5 px-5 flex-grow-2 overflow-auto">
			<div className="w-full ">
				{messages.map((item, i) => {
					if (item?.sentId === user.uid) {
						return (
							<div
								key={i}
								className="messages-main__user-mess relative w-full my-2 pl-25 text-right select-none group"
							>
								<div className="inline-block px-2.5 text-11 uppercase text-text-secondary opacity-0 group-hover:opacity-100 transition-all ease-in">
									{format(item?.createdAt?.seconds * 1000 || 0, 'H:mm aa')}
								</div>
								<div className="inline-block px-3 py-2.5 max-w-1/2 bg-blue-40 text-white rounded-2xl">
									{item?.text}
								</div>
							</div>
						);
					}
					return (
						<div key={i} className="messages-main__partner-mess relative">
							<Avatar size={40} src={partner?.photos[0]} className="hidden absolute">
								{partner?.displayName}
							</Avatar>
							<div className="relative w-full my-2 pl-15 pr-22 select-none group">
								<div className="inline-block px-3 py-2.5 max-w-1/2 bg-gray-10 text-black rounded-2xl">
									{item?.text}
								</div>
								<div className="inline-block px-2.5 text-11 uppercase text-text-secondary opacity-0 group-hover:opacity-100 transition-all ease-in">
									{format(item?.createdAt?.seconds * 1000 || 0, 'H:mm aa')}
								</div>
							</div>
						</div>
					);
				})}
				<div id="bot-div"></div>
			</div>
		</div>
	);
}
