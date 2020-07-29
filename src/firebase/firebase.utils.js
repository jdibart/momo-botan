import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCfLRgjkujijkpqMXYDIRfgCWhvARsu_BY",
    authDomain: "crwn-db-f9345.firebaseapp.com",
    databaseURL: "https://crwn-db-f9345.firebaseio.com",
    projectId: "crwn-db-f9345",
    storageBucket: "crwn-db-f9345.appspot.com",
    messagingSenderId: "876741124665",
    appId: "1:876741124665:web:4087531d78b0a5b5f763e8"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;