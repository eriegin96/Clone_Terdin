import React from 'react';
import { Modal } from 'antd';
import './modal.scss';

export default function DeleteModal(props) {
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
			className="delete-modal"
		>
			<div className="pt-5"></div>
			<div className="px-15 pt-3 pb-5">
				<h3 className="my-3 text-lg text-text-primary font-medium">Hide My Account</h3>
				<div className="text-text-secondary">
					If you’d rather keep your account but not be shown to others, you can hide your account
					instead. You can turn this off in settings.
				</div>
			</div>
			<div className="px-15 pt-4 pb-9">
				<button className="my-5 px-6 min-h-50 w-full bg-gradient-to-l from-coral to-hot-pink text-white uppercase rounded-25 font-medium text-base">
					Hide My Account
				</button>
				<button
					className="px-6 min-h-50 mx-auto uppercase font-medium text-base text-text-secondary hover:text-text-primary"
				>
					Delete My Account
				</button>
			</div>
		</Modal>
	);
}
