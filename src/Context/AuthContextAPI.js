import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';

// export FbaseAuthContext for access--------
const FbaseAuthContext = createContext();
const auth = getAuth(app);

const AuthContextAPI = ({ children }) => {
	const [currentUser, setCurrentUser] = useState('');
	const [loading, setLoading] = useState(true);

	//  Register User with email and password
	const methodCreateUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// Sign In Method with email and password
	const methodSignIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// Sign Out Method
	const methodSignOut = () => {
		setLoading(true);
		return auth.signOut(auth);
	};

	//  Update Profile Method
	const methodUpdateProfile = (name, photoUrl) => {
		setLoading(true);
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photoUrl
		});
	};

	//  Email Verification Method
	const methodSendEmailVerification = () => {
		setLoading(true);

		return sendEmailVerification(auth.currentUser);
	};

	//  Password Reset with Email Method
	const methodSendPasswordResetEmail = (email) => {
		setLoading(true);
		return sendPasswordResetEmail(auth, email);
	};

	// Google Sign In Method
	const googleProvider = new GoogleAuthProvider();

	const methodGoogleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	// Github Sign In Method
	const githubProvider = new GithubAuthProvider();

	const methodGithubSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, githubProvider);
	};

	// get the current user is by setting an observer on the Auth object, and adding a callback that gets called whenever the user's sign-in state changes.
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setCurrentUser(user);
				setLoading(false);
			} else {
				setCurrentUser('');
				setLoading(false);
			}
		});
		return () => {
			// cleanup
			unsubscribe();
		};
	}, []);

	const authMethods = {
		currentUser,
		loading,
		methodCreateUser,
		methodSignIn,
		methodSignOut,
		methodUpdateProfile,
		methodSendEmailVerification,
		methodSendPasswordResetEmail,
		methodGoogleSignIn,
		methodGithubSignIn
	};
	return (
		<>
			<FbaseAuthContext.Provider value={authMethods}>
				{children} {/* ---> index.js component */}
			</FbaseAuthContext.Provider>
		</>
	);
};

export { FbaseAuthContext };
export default AuthContextAPI;
