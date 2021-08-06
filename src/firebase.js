// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAbzhlHRDpSENwf_zDIBwp1utL0YTM28vw",
  authDomain: "whatsapp-clone-70ad1.firebaseapp.com",
  projectId: "whatsapp-clone-70ad1",
  storageBucket: "whatsapp-clone-70ad1.appspot.com",
  messagingSenderId: "1049201033956",
  appId: "1:1049201033956:web:d209db9017016a2f1822f1",
  measurementId: "G-HWWGGBVXHH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;