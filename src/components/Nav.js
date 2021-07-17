import React, { useContext } from "react";
import { signIn, signOut } from "./Authentication";
import { user, userSetter } from "./App";
import { auth } from "../firebase";

function Nav() {
	const User = useContext(user);
	const setUser = useContext(userSetter);

	return (
		<div className="nav">
			{User ? (
				<span className="user">
					<h2>{User.username}</h2>
					<img
						src={User.userPhoto}
						alt=""
						onClick={() => {
							auth.signOut();
							setUser(null);
						}}
					/>
				</span>
			) : (
				<button onClick={signIn}>Sign In</button>
			)}
		</div>
	);
}

export default Nav;
