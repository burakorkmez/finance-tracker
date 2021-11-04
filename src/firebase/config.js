import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAFN6t6JVNjd21uBkApDNOhlzZsZm2MM1U',
	authDomain: 'finance-tracker-a7ed9.firebaseapp.com',
	projectId: 'finance-tracker-a7ed9',
	storageBucket: 'finance-tracker-a7ed9.appspot.com',
	messagingSenderId: '234936116403',
	appId: '1:234936116403:web:769a3def128a743b117cc6',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
