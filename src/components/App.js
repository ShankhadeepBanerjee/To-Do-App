import React, { createContext, useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import Nav from "./Nav";
import InputTodo from "./InputTodo";
import "./componentStyle.css";
import { auth, db } from "../firebase";
// import firebase from "firebase/app";

const listOfTodos = createContext();
const setListOfTodos = createContext();
const user = createContext();
const userSetter = createContext();

function App() {
	const [todoList, setTodoList] = useState([]);
	const [User, setUser] = useState(null);

	useEffect(() => {
		if (User) {
			db.collection(User.uid).onSnapshot((ss) => {
				setTodoList(
					ss.docs
						.map((item) => item.data())
						.sort((a, b) => b["id"] - a["id"])
				);
			});
		} else {
			setTodoList([]);
		}
	}, [User]);

	return (
		<user.Provider value={User}>
			<userSetter.Provider value={setUser}>
				<listOfTodos.Provider value={todoList}>
					<setListOfTodos.Provider value={setTodoList}>
						<div className="app">
							<Nav />
							{User && (
								<>
									<InputTodo />
									<div className="show-todo">
										{todoList.map((elem) => {
											return (
												<TodoItem
													key={elem.id}
													todoObject={elem}
												/>
											);
										})}
									</div>
								</>
							)}
						</div>
					</setListOfTodos.Provider>
				</listOfTodos.Provider>
			</userSetter.Provider>
		</user.Provider>
	);
}

export default App;
export { listOfTodos, setListOfTodos, userSetter, user };
