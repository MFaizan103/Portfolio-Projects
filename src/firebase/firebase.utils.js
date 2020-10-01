import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC10MkbIjuUNP-8PjYSNT5XHquMoVdsPVo",
  authDomain: "ecom-db-3aa9b.firebaseapp.com",
  databaseURL: "https://ecom-db-3aa9b.firebaseio.com",
  projectId: "ecom-db-3aa9b",
  storageBucket: "ecom-db-3aa9b.appspot.com",
  messagingSenderId: "701400124655",
  appId: "1:701400124655:web:12112ad43de9541f021f1a",
  measurementId: "G-GRNLVVGF9F"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
