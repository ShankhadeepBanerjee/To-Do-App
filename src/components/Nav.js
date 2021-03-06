import React, { useContext, useEffect, useState } from "react";
import {
	signInWithGoogle,
	signUpWithEmail,
	signInWithEmail,
} from "./Authentication";

import { user, userSetter, themeContext } from "./App";
import { auth } from "../firebase";
import Modal from "@material-ui/core/Modal";
import Tooltip from "@material-ui/core/Tooltip";

import back1 from "../assets/trees/back1.png";
import back2 from "../assets/trees/back2.png";

function Nav() {
	const User = useContext(user);
	const setUser = useContext(userSetter);
	const { theme, setTheme } = useContext(themeContext);

	const [navUser, setNavUser] = useState({
		username: "",
		email: "",
		password: "",
	});

	const [option, setOption] = useState(null);
	const [modalOpen, setModalOpen] = useState(false);

	function handleNavUserChange(e) {
		const { name, value } = e.target;
		setNavUser((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	}

	function handleModal(n) {
		n === 1 ? setModalOpen(true) : setModalOpen(false);
	}

	function handleSubmit(e, option) {
		e.preventDefault();
		if (!(navUser.email && navUser.password)) return;
		if (option === "Sign Up") signUpWithEmail(navUser, setUser);
		else signInWithEmail(navUser);
	}

	useEffect(() => {
		if (!modalOpen)
			setNavUser({
				username: "",
				email: "",
				password: "",
			});
	}, [modalOpen]);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				console.log(user.uid);
				setUser({
					username: user.displayName.split(" ")[0],
					userPhoto: null,
					uid: user.uid,
				});
				if ("photoURL" in user) {
					setUser((prev) => {
						return {
							...prev,
							userPhoto: user.photoURL,
						};
					});
				}
			} else {
				console.log("signed Out");
				setUser(null);
			}
		});
	}, []);

	useEffect(() => {
		let path = `url(${theme ? back1 : back2})`;
		document.querySelector("#root").style.setProperty("background", path);
	}, [theme]);

	return (
		<div className="nav">
			<Tooltip title="Theme">
				<span
					className="theme"
					onClick={() => {
						setTheme((prev) => !prev);
					}}
				>
					{theme ? (
						<i className="fas fa-moon fa-2x"></i>
					) : (
						<i
							className="fas fa-sun fa-2x"
							style={{ color: "#fff" }}
						></i>
					)}
				</span>
			</Tooltip>

			{User ? (
				<span className="user">
					<h2>{User.username}</h2>
					<Tooltip
						title="Sign Out"
						style={{ backGround: "White", color: "Black" }}
					>
						<img
							src={User.userPhoto}
							alt=""
							onClick={() => {
								auth.signOut();
								setUser(null);
							}}
						/>
					</Tooltip>
				</span>
			) : (
				<span>
					<button
						onClick={() => {
							setOption("Sign Up");
							handleModal(1);
						}}
					>
						Sign Up
					</button>
					<button
						onClick={() => {
							setOption("Sign In");
							handleModal(1);
						}}
					>
						Sign In
					</button>
					<Modal
						open={modalOpen}
						onClose={() => {
							handleModal(0);
						}}
						aria-labelledby="simple-modal-title"
						aria-describedby="simple-modal-description"
						style={{
							width: "50%",
							height: "50%",
							margin: "auto",
						}}
					>
						{
							<div className="auth-modal">
								<div>
									<h1>{option}</h1>
									<form action="">
										{option === "Sign Up" && (
											<>
												<label htmlFor="userName">
													Username:
												</label>
												<input
													type="text"
													name="username"
													value={navUser.username}
													onChange={
														handleNavUserChange
													}
												/>
											</>
										)}
										<label htmlFor="email">Email:</label>
										<input
											type="email"
											name="email"
											value={navUser.email}
											onChange={handleNavUserChange}
										/>
										<label htmlFor="password">
											Password:{" "}
										</label>
										<input
											type="password"
											name="password"
											value={navUser.password}
											onChange={handleNavUserChange}
										/>

										<button
											onClick={(e) => {
												handleModal(0);
												handleSubmit(e, option);
											}}
										>
											{option}
										</button>
									</form>

									<h3>Or</h3>
									<button
										onClick={() => {
											handleModal(0);
											signInWithGoogle();
										}}
									>
										Sign in With Google Account
									</button>
								</div>
							</div>
						}
					</Modal>
				</span>
			)}
		</div>
	);
}

export default Nav;
