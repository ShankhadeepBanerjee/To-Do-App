import React, { useContext, useEffect, useState } from "react";
import { user } from "./App";
import { db, storage } from "../firebase";
import ImageIcon from "@material-ui/icons/Image";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";

function getTimeInHrMin() {
	let today = new Date();
	let hr = today.getHours();
	let min = today.getMinutes();
	let date =
		" " +
		today.getDate() +
		"." +
		(today.getMonth() + 1) +
		"." +
		today.getFullYear();
	let time =
		(hr % 12 > 9 ? hr % 12 : "0" + (hr % 12)) +
		":" +
		(min > 9 ? min : "0" + min) +
		(hr > 11 ? " pm" : " am") +
		date;
	return time;
}

function removeToDoInputImage() {
	let inputImg = document.querySelector(".input-img");
	inputImg.src = "";
	let todoFile = document.querySelector(".file-choose");
	todoFile.value = ""; // making The upload file empty
}

function InputTodo() {
	const [todoObject, setTodoObject] = useState({
		id: "",
		content: "",
		done: null,
		time: "",
	});

	const [deleteIcon, setDeleteIcon] = useState(null); //handles Delete Icon's Visisbility if user chooses image to upload

	const User = useContext(user); // User Context from App.js

	// Gets Image Url if any, then calls addTodo function
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
			const imgObj = todoFile.files[0];
			const name = Date.now() + " - " + imgObj.name;
			const metaData = { contentType: imgObj.type };
			const ref = storage.ref();
			const imageFileRef =
				"Images/" + User.username + User.uid + "/" + name;
			ref.child(imageFileRef)
				.put(imgObj, metaData)
				.then((ss) => ss.ref.getDownloadURL())
				.then((url) => {
					newTodo.image = url;
					newTodo.imageRef = imageFileRef;
					addTodo(newTodo);
				});
		} else {
			addTodo(newTodo);
		}
		removeToDoInputImage();
		setDeleteIcon(null);
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
					<textarea
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
							if (todoFile.files[0]) {
								let fileSize = (
									todoFile.files[0].size /
									1024 /
									1024
								).toFixed(4);
								if (fileSize < 1) {
									document.querySelector(
										".input-img"
									).src = URL.createObjectURL(
										todoFile.files[0]
									);

									setDeleteIcon(1);
								} else {
									alert(
										"Please Select a file with size less than 1MB"
									);
									todoFile.value = "";
								}
							}
						}}
					/>

					<Tooltip title="Upload Image">
						<ImageIcon
							className="icon"
							onClick={() => {
								document.querySelector(".file-choose").click();
							}}
						/>
					</Tooltip>

					{deleteIcon && (
						<Tooltip title="Delete Image">
							<DeleteIcon
								className="icon"
								onClick={() => {
									removeToDoInputImage();
									setDeleteIcon(null);
								}}
							/>
						</Tooltip>
					)}

					<button
						className="input-submit hidden"
						type="submit"
					></button>
					<Tooltip title="Add ToDo">
						<AddIcon
							className="icon"
							onClick={() =>
								document.querySelector(".input-submit").click()
							}
						/>
					</Tooltip>
				</div>
			</form>
		</div>
	);
}

export default InputTodo;
