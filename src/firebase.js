import firebase from "firebase/app";
import firestore from "firebase";
import firebaseConfig from "./config";

// Your web app's Firebase configuration
let Config = {
    apiKey: firebaseConfig.apiKey,
    authDomain: firebaseConfig.authDomain,
    databaseURL: firebaseConfig.databaseURL,
    projectId: firebaseConfig.projectId,
    storageBucket: firebaseConfig.storageBucket,
    messagingSenderId: firebaseConfig.messagingSenderId,
    appId: firebaseConfig.appId,
  };


  
firebase.initializeApp(Config);

const db = firebase.firestore();
const auth = firebase.auth();
export default firebase; 
export {db, auth, firestore };