/* Framework */
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD2Cp01jLYJKdDB48W9zLib5oi92PP9LHE",
  authDomain: "shopping-cart-d9382.firebaseapp.com",
  databaseURL: "https://shopping-cart-d9382.firebaseio.com",
  projectId: "shopping-cart-d9382",
  storageBucket: "shopping-cart-d9382.appspot.com",
  messagingSenderId: "524162714334",
  appId: "1:524162714334:web:d60472de7411036f22104f",
  measurementId: "G-Z7MJMDQYZP"
};

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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
