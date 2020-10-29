import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config={
    apiKey: process.env.REACT_APP_FIREBASE_apiKey||"",
    authDomain: process.env.REACT_APP_FIREBASE_authDomain||"",
    databaseURL: process.env.REACT_APP_FIREBASE_databaseURL||"",
    projectId: process.env.REACT_APP_FIREBASE_projectId||"",
    storageBucket: process.env.REACT_APP_FIREBASE_storageBucket||"",
    messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId||"",
    appId: process.env.REACT_APP_FIREBASE_appId||"",
    measurementId: process.env.REACT_APP_FIREBASE_measurementId||""
};

firebase.initializeApp(config);

export const auth =firebase.auth();
export const firestore=firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);


export default firebase;