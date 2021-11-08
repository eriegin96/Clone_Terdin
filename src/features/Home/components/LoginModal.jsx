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
import logo from 'resources/img/homepage/logo.svg';
import imgAS from 'resources/img/homepage/app-store.webp';
import imgGP from 'resources/img/homepage/google-play.webp';
import logoGG from 'resources/img/homepage/google.svg';
import logoFB from 'resources/img/homepage/facebook.svg';
import { auth } from 'firebase/config';
import { addUser } from 'firebase/services';

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
				gender: user?.gender || null,
				date: user?.date || null,
				phoneNumber: user.phoneNumber,
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
			onOk={handleOk} onCancel={handleCancel}
		>
			<img src={logo} alt="logo" className="home-page__modal__logo" />
			<h3 className="home-page__modal__title">{hadAccount ? 'Get Started' : 'Create Account'}</h3>
			<div className="home-page__modal__des">
				By clicking Log in, you agree to our{' '}
				<a href="https://policies.tinder.com/terms?lang=en">Terms</a>. Learn how we process your
				data in our <a href="https://policies.tinder.com/privacy?lang=en">Privacy Policy</a> and{' '}
				<a href="https://policies.tinder.com/cookie-policy?lang=en">Cookie Policy</a>
			</div>
			<div className="home-page__modal__btns">
				<button onClick={() => handleLogin(googleProvider)}>
					<img src={logoGG} alt="" />
					Log in with Google
				</button>
				<button onClick={() => handleLogin(facebookProvider)}>
					<img src={logoFB} alt="" />
					Log in with Facebook
				</button>
				<button>
					<FontAwesomeIcon icon="fa-solid fa-comment" />
					Log in with Phone number
				</button>
				<button>Trouble Logging In?</button>
			</div>
			<div className="home-page__modal__app">
				<h3>Get the App!</h3>
				<div>
					<a href="https://open.tinder.com/kgco/af5c38d7">
						<img src={imgAS} alt="" />
					</a>
					<a href="https://open.tinder.com/kgco/c283b688">
						<img src={imgGP} alt="" />
					</a>
				</div>
			</div>
		</Modal>
	);
}
