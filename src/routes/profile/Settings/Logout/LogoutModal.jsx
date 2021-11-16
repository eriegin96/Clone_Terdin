import React from 'react';
import { Modal } from 'antd';

export default function LogoutModal(props) {
	const { open, setOpen } = props;

	const handleOk = () => {
		setOpen(false);
	};

	const handleCancel = () => {
		setOpen(false);
	};

	return (
		<Modal
			footer={null}
			visible={open}
			closable={false}
			destroyOnClose={true}
			onOk={handleOk}
			onCancel={handleCancel}
			className="logout-modal"
		>
			<div className="pt-5"></div>
			<div className="px-15 pt-3 pb-5">
				<h3 className="my-3 text-lg text-text-primary font-medium">
					Are you sure you want to logout?
				</h3>
				<div className="text-text-secondary">
					You will continue to be seen by compatible users in your last known location.
				</div>
			</div>
			<div className="px-15 pt-4 pb-9">
				<button className="my-5 px-6 min-h-50 w-full bg-gradient-to-l from-coral to-hot-pink text-white uppercase rounded-25 font-medium text-base">
					Logout
				</button>
				<button
					className="px-6 min-h-50 mx-auto uppercase font-medium text-base text-text-secondary hover:text-text-primary"
					onClick={() => setOpen(false)}
				>
					Cancel
				</button>
			</div>
		</Modal>
	);
}
