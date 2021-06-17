import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
         apiKey: "AIzaSyBG_jzWunal_HIc2npcPNlIlntR7GLXe4g",
        authDomain: "shopng-db.firebaseapp.com",
        projectId: "shopng-db",
        storageBucket: "shopng-db.appspot.com",
        messagingSenderId: "64115447208",
        appId: "1:64115447208:web:99d97e1859996c2f42399d",
        measurementId: "G-WC380G5ZQY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;