const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyA3emHoh7ghhyBFPYHyz28PahSEoATUf28",
  authDomain: "estiloyclass.firebaseapp.com",
  databaseURL: "https://estiloyclass.firebaseio.com",
  projectId: "estiloyclass",
  storageBucket: "estiloyclass.appspot.com",
  messagingSenderId: "224762477288",
  appId: "1:224762477288:web:2fce5972fd93c10ce7e75d",
  measurementId: "G-0LSLP8W4XL"
};

// Initialize Firebase
firebase.initializeApp(config);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { firebase, db, auth, storage }
