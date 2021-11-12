import React from 'react';
import {
	signInWithPopup,
	GoogleAuthProvider,
	FacebookAuthProvider,
	fetchSignInMethodsForEmail,
} from 'firebase/auth';
import { Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fontsource/poppins/700-italic.css';
import imgAS from 'resources/img/homepage/app-store.webp';
import imgGP from 'resources/img/homepage/google-play.webp';
import { auth } from 'firebase/config';
import { addUser } from 'firebase/services';
import { FacebookSvg, GoogleSvg, TinderSvg } from 'utils/Svg';

export default function LoginModal(props) {
	const { hadAccount, loginModalOpen, setLoginModalOpen } = props;
	const facebookProvider = new FacebookAuthProvider();
	const googleProvider = new GoogleAuthProvider();

	const handleOk = () => {
		setLoginModalOpen(false);
	};

	const handleCancel = () => {
		setLoginModalOpen(false);
	};

	const checkUserExist = (additionalUserInfo, user) => {
		if (additionalUserInfo?.isNewUser) {
			addUser(user.uid, {
				displayName: user.displayName,
				email: user.email,
				photoURL: user.photoURL,
				uid: user.uid,
				providerId: additionalUserInfo.providerId,
			});
			return;
		}
	};

	const handleLogin = async (provider) => {
		signInWithPopup(auth, provider)
			.then((result) => {
				const { _tokenResponse, user } = result;
				checkUserExist(_tokenResponse, user);
			})
			.catch((error) => {
				const pendingCred = error.credential;
				const email = error.email;

				if (error.code === 'auth/account-exists-with-different-credential') {
					fetchSignInMethodsForEmail(auth, email).then((methods) => {
						const confirmation = window.confirm(
							'Your email is already connected with another provider. Do you want to link to that account?'
						);

						if (confirmation === true) {
							signInWithPopup(auth, methods).then((result) =>
								result.user.linkWithCredential(pendingCred)
							);
							return;
						}
					});
				}
			});
	};

	return (
		<Modal
			footer={null}
			visible={loginModalOpen}
			closeIcon={<FontAwesomeIcon icon="fa-solid fa-circle-xmark" />}
			destroyOnClose={true}
			onOk={handleOk}
			onCancel={handleCancel}
		>
			<TinderSvg className="w-9 h-9 m-auto" />
			<h3 className="mt-5 mb-4 text-text-primary italic text-2xl uppercase ">
				{hadAccount ? 'Get Started' : 'Create Account'}
			</h3>
			<div className="text-xs mt-5 mb-7.5">
				By clicking Log in, you agree to our{' '}
				<a
					href="https://policies.tinder.com/terms?lang=en"
					className="text-text-secondary font-semibold underline hover:no-underline"
				>
					Terms
				</a>
				. Learn how we process your data in our{' '}
				<a
					href="https://policies.tinder.com/privacy?lang=en"
					className="text-text-secondary font-semibold underline hover:no-underline"
				>
					Privacy Policy
				</a>{' '}
				and{' '}
				<a
					href="https://policies.tinder.com/cookie-policy?lang=en"
					className="text-text-secondary font-semibold underline hover:no-underline"
				>
					Cookie Policy
				</a>
			</div>
			<div className="">
				<button
					className="relative w-full border-2 border-solid border-text-secondary px-12 mb-5 rounded-25 uppercase bg-white text-15 font-semibold tracking-1 text-text-secondary leading-12.5 transition-all duration-200 ease-linear hover:border-text-primary hover:text-text-primary"
					onClick={() => handleLogin(googleProvider)}
				>
					<GoogleSvg className="w-6 h-6 absolute left-4 top-1/2 transition-all duration-200 ease-linear transform -translate-y-1/2 text-text-secondary" />
					Log in with Google
				</button>
				<button
					className="relative w-full border-2 border-solid border-text-secondary px-12 mb-5 rounded-25 uppercase bg-white text-15 font-semibold tracking-1 text-text-secondary leading-12.5 transition-all duration-200 ease-linear hover:border-text-primary hover:text-text-primary"
					onClick={() => handleLogin(facebookProvider)}
				>
					<FacebookSvg className="w-6 h-6 absolute left-4 top-1/2 transition-all duration-200 ease-linear transform -translate-y-1/2 text-text-secondary" />
					Log in with Facebook
				</button>
				<button className="relative w-full border-2 border-solid border-text-secondary px-12 mb-5 rounded-25 uppercase bg-white text-15 font-semibold tracking-1 text-text-secondary leading-12.5 transition-all duration-200 ease-linear hover:border-text-primary hover:text-text-primary group">
					<FontAwesomeIcon
						icon="fa-solid fa-comment"
						className="w-6 h-6 absolute left-4 top-1/2 transition-all duration-200 ease-linear transform -translate-y-1/2 text-text-secondary group-hover:text-text-primary"
					/>
					Log in with Phone number
				</button>
				<button className="underline text-text-secondary bg-transparent">
					Trouble Logging In?
				</button>
			</div>
			<div className="mt-6 border-t border-solid border-divider-primary">
				<h3 className="mt-6 mb-3 text-text-primary italic text-2xl uppercase">Get the App!</h3>
				<div className="flex justify-center items-center">
					<a href="https://open.tinder.com/kgco/af5c38d7" className="py-2 px-4">
						<img src={imgAS} alt="" className="object-contain h-12" />
					</a>
					<a href="https://open.tinder.com/kgco/c283b688">
						<img src={imgGP} alt="" className="object-contain h-20 w-44" />
					</a>
				</div>
			</div>
		</Modal>
	);
}
