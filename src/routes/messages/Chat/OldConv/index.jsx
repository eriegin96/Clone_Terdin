import React, { useEffect } from 'react';
import { Avatar } from 'antd';

export default function OldConv({ partner }) {
	useEffect(() => {
		const partnerMess = document.querySelectorAll('.messages-main__partner-mess');
		partnerMess.forEach((item) => {
			if (!item.nextSibling?.classList.contains('messages-main__partner-mess')) {
				item.firstChild.classList.remove('hidden');
			}
		});
	}, []);

	return (
		<div className="py-2.5 px-5 flex-grow-2 overflow-scroll">
			<div className="w-full ">
				<div className="messages-main__partner-mess relative">
					<Avatar size={40} src={partner.photos[0]} className="hidden absolute">
						{partner.displayName}
					</Avatar>
					<div className="relative w-full my-2 pl-15 pr-22 select-none group">
						<div className="inline-block px-3 py-2.5 max-w-1/2 bg-gray-10 text-black rounded-2xl">
							dạ bơ này chín ảo
						</div>
						<div className="inline-block px-2.5 text-11 uppercase text-text-secondary opacity-0 group-hover:opacity-100 transition-all ease-in">
							3:55 PM
						</div>
					</div>
				</div>
				<div className="messages-main__partner-mess relative">
					<Avatar size={40} src={partner.photos[0]} className="hidden absolute">
						{partner.displayName}
					</Avatar>
					<div className="relative w-full my-2 pl-15 pr-22 select-none group">
						<div className="inline-block px-3 py-2.5 max-w-1/2 bg-gray-10 text-black rounded-2xl">
							dạ bơ này chín ảo
						</div>
						<div className="inline-block px-2.5 text-11 uppercase text-text-secondary opacity-0 group-hover:opacity-100 transition-all ease-in">
							3:55 PM
						</div>
					</div>
				</div>
				<div className="messages-main__user-mess relative w-full my-2 pl-25 text-right select-none group">
					<div className="inline-block px-2.5 text-11 uppercase text-text-secondary opacity-0 group-hover:opacity-100 transition-all ease-in">
						3:55 PM
					</div>
					<div className="inline-block px-3 py-2.5 max-w-1/2 bg-blue-40 text-white rounded-2xl">
						Bơ đã chín chưa
					</div>
				</div>
				<div className="messages-main__partner-mess relative">
					<Avatar size={40} src={partner.photos[0]} className="hidden absolute">
						{partner.displayName}
					</Avatar>
					<div className="relative w-full my-2 pl-15 pr-22 select-none group">
						<div className="inline-block px-3 py-2.5 max-w-1/2 bg-gray-10 text-black rounded-2xl">
							dạ bơ này chín ảo
						</div>
						<div className="inline-block px-2.5 text-11 uppercase text-text-secondary opacity-0 group-hover:opacity-100 transition-all ease-in">
							3:55 PM
						</div>
					</div>
				</div>
				<div className="messages-main__partner-mess relative">
					<Avatar size={40} src={partner.photos[0]} className="hidden absolute">
						{partner.displayName}
					</Avatar>
					<div className="relative w-full my-2 pl-15 pr-22 select-none group">
						<div className="inline-block px-3 py-2.5 max-w-1/2 bg-gray-10 text-black rounded-2xl">
							dạ bơ này chín ảo
						</div>
						<div className="inline-block px-2.5 text-11 uppercase text-text-secondary opacity-0 group-hover:opacity-100 transition-all ease-in">
							3:55 PM
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
