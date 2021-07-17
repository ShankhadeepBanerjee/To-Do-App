import React, { useContext, useEffect, useState } from "react";
import { user } from "./App";
import { db, storage } from "../firebase";
import ImageIcon from "@material-ui/icons/Image";
import AddIcon from "@material-ui/icons/Add";

function getTimeInHrMin() {
	let today = new Date();
	let hr = today.getHours();
	let min = today.getMinutes();
	let time =
		(hr > 9 ? hr : "0" + hr) +
		":" +
		(min > 9 ? min : "0" + min) +
		(hr > 11 ? " pm" : " am");
	return time;
}

function InputTodo() {
	const [todoObject, setTodoObject] = useState({
		id: "",
		content: "",
		done: null,
		time: "",
	});
	const User = useContext(user);

	// Gets Image Url if any then calls addTodo function
	function getImageUrlAndAddTodo() {
		if (todoObject.content === "") return;

		let newTodo = {
			id: Date.now().toString(),
			image: null,
			imageRef: "",
			content: todoObject.content,
			done: false,
			time: getTimeInHrMin(),
		};
		setTodoObject((prev) => {
			return { ...prev, content: "" };
		});

		let todoFile = document.querySelector(".file-choose");
		if (todoFile.files[0]) {
			const name = Date.now() + " - " + todoFile.files[0].name;
			const metaData = { contentType: todoFile.files[0].type };
			const ref = storage.ref();
			const imageFileRef =
				"Images/" + User.username + User.uid + "/" + name;
			ref.child(imageFileRef)
				.put(todoFile.files[0], metaData)
				.then((ss) => ss.ref.getDownloadURL())
				.then((url) => {
					newTodo.image = url;
					newTodo.imageRef = imageFileRef;
					todoFile.value = "";
					addTodo(newTodo);
				});
		} else {
			addTodo(newTodo);
		}
		let inputImg = document.querySelector(".input-img");
		inputImg.src = "";
	}

	// Addes a new Todo object to database
	function addTodo(newTodo) {
		db.collection(User.uid)
			.doc(newTodo["id"])
			.set(newTodo)
			.then()
			.catch((e) => {
				console.log("Error occured " + e);
			});
	}

	return (
		<div className="input-todo">
			<form
				action=""
				onSubmit={(e) => {
					e.preventDefault();
					getImageUrlAndAddTodo();
				}}
			>
				<div>
					<img src="" alt="" className="input-img" />
				</div>

				<div>
					<input
						type="text"
						placeholder="Add Todo Here..."
						value={todoObject.content}
						onChange={(e) => {
							setTodoObject((prev) => {
								return { ...prev, content: e.target.value };
							});
						}}
					/>
				</div>

				<div>
					<input
						type="file"
						accept="image/*"
						className="file-choose hidden"
						onChange={() => {
							let todoFile = document.querySelector(
								".file-choose"
							);
							if (todoFile.files[0])
								document.querySelector(
									".input-img"
								).src = URL.createObjectURL(todoFile.files[0]);
						}}
					/>

					<ImageIcon
						className="icon"
						onClick={() => {
							document.querySelector(".file-choose").click();
						}}
					/>

					<button
						className="input-submit hidden"
						type="submit"
					></button>
					<AddIcon
						className="icon"
						onClick={() =>
							document.querySelector(".input-submit").click()
						}
					/>
				</div>
			</form>
		</div>
	);
}

export default InputTodo;
