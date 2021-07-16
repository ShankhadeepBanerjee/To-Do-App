import React, { createContext, useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import Nav from "./Nav";
import InputTodo from "./InputTodo";
import "./componentStyle.css";
import {auth, db} from "../firebase";
// import firebase from "firebase/app";

const inputCtx = createContext();
const setInputCtx = createContext();
const listOfTodos = createContext();
const setListOfTodos = createContext();
const user = createContext();
const userSetter = createContext();



function App() {

  // const [input, setInput] = useState("");
  // const [file, setFile] = useState(null);
  const [todoList, setTodoList] = useState([]);
  const [User, setUser] = useState(null);
  

  useEffect(()=>{
    if (User){
      db.collection(User.uid)
      .onSnapshot((ss)=>{
      setTodoList(ss.docs.map((item)=>item.data()).sort((a, b)=> (b["id"]-a["id"])));
    })}else{
      setTodoList([]);
    }
  },[User]);

  useEffect(() => {

    auth.onAuthStateChanged(user=>{
      if(user){
        let username = user.displayName.split(" ")[0];
        let userPhoto = user.photoURL;
        setUser({"username":username, "userPhoto":userPhoto, "uid":user.uid});
      }else{
        console.log("signed Out");
        setUser(null);
      }
      })
  }, [])
    
  return(
    // <inputCtx.Provider value={input}>
    // <setInputCtx.Provider value={setInput}>
    <user.Provider value={User}>
    <userSetter.Provider value={setUser}>
    <listOfTodos.Provider value={todoList}>
    <setListOfTodos.Provider value={setTodoList}>
        <div className="app">
          <Nav/>
          <InputTodo />
          <div className="show-todo">
            {todoList.map((elem)=>{
                return(<TodoItem key={elem.id} todoObject={elem}/>)
              })}
          </div>
        </div>
    </setListOfTodos.Provider>
    </listOfTodos.Provider>
    </userSetter.Provider>
    </user.Provider>
    // </setInputCtx.Provider>
    // </inputCtx.Provider>
  );
}



export default App;
export { inputCtx, setInputCtx, listOfTodos, setListOfTodos, userSetter, user };