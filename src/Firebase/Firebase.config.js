// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAunNROWYS2qDS7YsMUjnRTWHkCKpOI46w',
	authDomain: 'reactjs-edu-camp-auth-app.firebaseapp.com',
	projectId: 'reactjs-edu-camp-auth-app',
	storageBucket: 'reactjs-edu-camp-auth-app.appspot.com',
	messagingSenderId: '628127978256',
	appId: '1:628127978256:web:a46f8d6997d252f9e38b95'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
