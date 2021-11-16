import React, { useContext } from 'react';
import { Modal } from 'antd';
import { AppContext } from 'context/AppProvider';

export default function DevelopmentModal() {
	const { devModalOpen: open, setDevModalOpen: setOpen } = useContext(AppContext);

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
			className="development-modal"
		>
			<div className="pt-5">
				<h3 className="my-3 text-3xl text-text-primary font-medium">Caution</h3>
				<div className="text-text-secondary text-xl">This feature is under development</div>
				<button
					className="my-5 px-10 min-h-50 bg-gradient-to-l from-coral to-hot-pink text-white uppercase rounded-25 font-medium text-base"
					onClick={handleOk}
				>
					OK
				</button>
			</div>
		</Modal>
	);
}
