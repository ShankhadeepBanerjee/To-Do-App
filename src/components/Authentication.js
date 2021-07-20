import { auth } from "../firebase";
import firebase from "firebase/app";
var provider = new firebase.auth.GoogleAuthProvider();
// import { userSetter } from "./App";
// import { useContext } from "react";

// const setUser = useContext(userSetter);

function signInWithGoogle() {
	auth.signInWithPopup(provider)
		.then((result) => {})
		.catch((error) => {
			console.log(error);
		});
}

function signUpWithEmail(userObj, setUser) {
	auth.createUserWithEmailAndPassword(userObj.email, userObj.password)
		.then((userCredential) => {
			var user = userCredential.user;
			user.updateProfile({
				displayName: userObj.username,
				photoURL: "https://i.redd.it/v0caqchbtn741.jpg",
			})
				.then(() => {
					let user = auth.currentUser;
					setUser((prev) => {
						return {
							...prev,
							username: user.displayName.split(" ")[0],
							userPhoto: user.photoURL,
							uid: user.uid,
						};
					});
				})
				.catch((error) => {
					// An error occurred
					// ...
				});
		})
		.catch((error) => {
			alert(error);
		});
}

function signInWithEmail(user) {
	auth.signInWithEmailAndPassword(user.email, user.password)
		.then((userCredential) => {
			var user = userCredential.user;
			console.log(user);
		})
		.catch((error) => {
			console.log(error);
			alert(error);
		});
}

export { signInWithGoogle, signUpWithEmail, signInWithEmail };
