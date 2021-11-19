import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChatContactSvg, ChatGifSvg, ChatStickerSvg, ChatMusicSvg, ChatEmojiSvg } from 'utils/Svg';
import NewConv from './NewConv';
import OldConv from './OldConv';

export default function Chat({ partner }) {
	const [textValue, setTextValue] = useState('');

	const handleTextChange = (e) => {
		setTextValue(e.target.value);
	};

	return (
		<div className="h-full flex-grow relative flex flex-col">
			<div className="py-5 px-6 border-b border-divider-primary flex items-center justify-between">
				<div className="py-1 flex-grow flex items-center">
					<Avatar src={partner.photos[0]} size={50}>
						{partner.displayName}
					</Avatar>
					<div className="pl-6 text-text-secondary text-base font-medium">
						You matched with {partner.displayName} on 11/17/2021
					</div>
				</div>
				<Link to="/app/matches">
					<FontAwesomeIcon
						icon="fa-solid fa-circle-xmark"
						className="w-7.5 h-7.5 text-divider-primary cursor-pointer transition-all duration-100 ease-in transform hover:-rotate-90"
					/>
				</Link>
			</div>
			{partner.messages.length === 0 ? <NewConv partner={partner} /> : <OldConv partner={partner} />}
			<div className="border-t border-divider-primary flex">
				<div className="px-3 flex items-center justify-center items-center">
					<button className="w-10 cursor-pointer">
						<ChatContactSvg className="w-10 h-10 my-2" />
					</button>
					<button className="w-10 cursor-pointer">
						<ChatGifSvg className="w-10 h-10 my-2" />
					</button>
					<button className="w-10 cursor-pointer">
						<ChatStickerSvg className="w-10 h-10 my-2" />
					</button>
					<button className="w-10 cursor-pointer">
						<ChatMusicSvg className="w-10 h-10 my-2" />
					</button>
				</div>
				<div className="flex-grow min-h-72 pr-6 flex ">
					<textarea
						value={textValue}
						onChange={handleTextChange}
						placeholder="Type a message"
						name=""
						id="messases-main-textarea"
						className="flex-grow p-2 self-center resize-none text-15"
						style={{ height: '37px' }}
					></textarea>
					<button className="px-1.5">
						<ChatEmojiSvg className="w-10 h-10 my-2" />
					</button>
					<button
						onClick={(e) => {
							e.preventDefault();
						}}
						className={`px-6 mb-4 min-h-40 self-end flex items-center justify-center rounded-25 ${
							textValue !== ''
								? 'text-white bg-brand-btn cursor-pointer'
								: 'text-gray-50 bg-background-button-disabled select-none cursor-default'
						}`}
					>
						<span className="uppercase font-semibold">Send</span>
					</button>
				</div>
			</div>
		</div>
	);
}
