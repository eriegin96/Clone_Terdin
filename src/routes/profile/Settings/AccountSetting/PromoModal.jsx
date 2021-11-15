import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { TinderSvg } from 'utils/Svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './modal.scss';

export default function PromoModal(props) {
	const { open, setOpen } = props;
	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		const promoBtn = document.querySelector('#promo__btn');
		if (inputValue !== '') {
			promoBtn?.classList.remove(
				'bg-gray-15',
				'text-text-secondary',
				'select-none',
				'cursor-default'
			);
			promoBtn?.classList.add('bg-gradient-to-l', 'from-coral', 'to-hot-pink', 'text-white');
		} else {
			promoBtn?.classList.remove('bg-gradient-to-l', 'from-coral', 'to-hot-pink', 'text-white');
			promoBtn?.classList.add('bg-gray-15', 'text-text-secondary', 'select-none', 'cursor-default');
		}
	}, [inputValue]);

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

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
			closeIcon={
				<FontAwesomeIcon
					icon="fa-solid fa-circle-xmark"
					className="w-6 h-6 cursor-pointer transition-all duration-100 ease-in transform hover:-rotate-90"
				/>
			}
			destroyOnClose={true}
			onOk={handleOk}
			onCancel={handleCancel}
			className="promo-modal"
		>
			<div className="p-6">
				<TinderSvg className="w-20 h-20 m-auto" />
				<h3 className="mt-4 mb-1.25 text-text-primary text-lg font-bold uppercase tracking-wide">
					Enter your promo code
				</h3>
				<div className="text-center text-text-secondary font-semibold">Unlock In-App Rewards</div>
				<input
					type="text"
					value={inputValue}
					onChange={handleInputChange}
					placeholder="Promo Code"
					className="mt-7.5 mb-7.5 p-2 w-full border-2 border-solid border-gray-15 rounded text-center text-xl"
				/>
				<div className="text-xs mt-5">
					By clicking Log in, you agree to our{' '}
					<a
						href="https://policies.tinder.com/terms?lang=en"
						className="text-text-secondary font-semibold underline hover:no-underline inline-block"
					>
						Terms
					</a>
					. Learn how we process your data in our{' '}
					<a
						href="https://policies.tinder.com/privacy?lang=en"
						className="text-text-secondary font-semibold underline hover:no-underline inline-block"
					>
						Privacy Policy
					</a>{' '}
					and{' '}
					<a
						href="https://policies.tinder.com/cookie-policy?lang=en"
						className="text-text-secondary font-semibold underline hover:no-underline inline-block"
					>
						Cookie Policy
					</a>
				</div>
				<div className="">
					<button
						id="promo__btn"
						className="my-5 mx-auto px-6 w-full uppercase max-w-315 min-h-54 bg-gray-15 text-text-secondary rounded-25 font-semibold text-15 select-none cursor-default"
					>
						Submit
					</button>
				</div>
			</div>
		</Modal>
	);
}
