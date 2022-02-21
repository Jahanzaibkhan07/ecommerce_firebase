import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAjChMl5OCfz6XC4EqMCB0Yp6nqUbtchOQ",
  authDomain: "e-commerce-ce6e4.firebaseapp.com",
  projectId: "e-commerce-ce6e4",
  storageBucket: "e-commerce-ce6e4.appspot.com",
  messagingSenderId: "187134719796",
  appId: "1:187134719796:web:64c9dc0e3e63b517ff1761",
  measurementId: "G-XFVQM3Y0F5",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
export { db, auth };
