import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBQcUVUz10TXijOAKgHleFRsaM2AgeFP_s",
  authDomain: "clone-24481.firebaseapp.com",
  projectId: "clone-24481",
  storageBucket: "clone-24481.appspot.com",
  messagingSenderId: "1092291441120",
  appId: "1:1092291441120:web:4333479e1eb573080b3b85",
  measurementId: "G-K2V6Z9KCJJ"
});

const auth = firebase.auth();

export { auth };