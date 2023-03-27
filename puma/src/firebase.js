import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";



const firebaseConfig = {
  apiKey: "AIzaSyD1DGRnBtl6_rIocIHzdfXldC5lBmsiX1g",
  authDomain: "puma-clone.firebaseapp.com",
  projectId: "puma-clone",
  storageBucket: "puma-clone.appspot.com",
  messagingSenderId: "1073923284620",
  appId: "1:1073923284620:web:d4057b3bca23de90a825a9",
  measurementId: "G-5T3JRT000S"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;