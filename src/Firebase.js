import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
const firebaseConfig = {
  apiKey: "AIzaSyB1cYJO7ZqPI4SXNpw46uWRUf74w6Y8lQQ",
  authDomain: "e-commerce-569c8.firebaseapp.com",
  projectId: "e-commerce-569c8",
  storageBucket: "e-commerce-569c8.appspot.com",
  messagingSenderId: "663349475609",
  appId: "1:663349475609:web:bb9c6b44584d19d2092d88",
  measurementId: "G-TLCLLBJ88L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
