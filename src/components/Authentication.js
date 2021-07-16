import { auth } from "../firebase"
import firebase from "firebase/app";
var provider = new firebase.auth.GoogleAuthProvider();


function signIn() {
    // auth.signInWithRedirect(provider);
    auth.signInWithPopup(provider)
    .then((result) => {

    }).catch((error) => {
        console.log(error);
    });
}

function signOut() {
    auth.signOut();
}



export { signIn, signOut };