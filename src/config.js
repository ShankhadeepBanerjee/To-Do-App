
// import React from "react";
import firebase from "firebase/app";
import firestore from "firebase"

  // Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyAnipA5-nB3ir-xjYC_6z0z3bI6S6ch074",
    authDomain: "todo-app-21b75.firebaseapp.com",
    databaseURL: "https://todo-app-21b75-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "todo-app-21b75",
    storageBucket: "todo-app-21b75.appspot.com",
    messagingSenderId: "1000443677882",
    appId: "1:1000443677882:web:ba28a8c31086ed71370683"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default firebase; 
export {db, firestore };