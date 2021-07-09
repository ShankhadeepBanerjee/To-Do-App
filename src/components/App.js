import React, { createContext, useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import "./componentStyle.css";
import {db} from "../firebase"

const listOfTodos = createContext();
const setListOfTodos = createContext();


function numFiller(n) {
  if(n>9)return(n);
  else return('0'+n);
}

function App() {

  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  


  function addToDo() {
    if(input === "")return;
    let today = new Date();
    let hr = numFiller(today.getHours());
    let time = hr + ":" + numFiller(today.getMinutes()) + (hr > 11 ? " pm":" am");
    let dateTime = time;

    let newTodo = {"id": Date.now().toString(), "content":input, "time":dateTime};
    db.collection("List").doc(newTodo["id"]).set(newTodo)
    .then()
    .catch((e)=>{
      console.log("Error occured "+ e);
    });

    setInput("");
  }

  useEffect(()=>{
      db.collection("List")
      .onSnapshot((ss)=>{
      setTodoList(ss.docs.map((item)=>item.data()).sort((a, b)=> (b["id"]-a["id"])));
    })
    },[]);
    
  return(
    <listOfTodos.Provider value={todoList}>
      <setListOfTodos.Provider value={setTodoList}>
        <div className="app">
          <div className="input-todo">
            <form action="" onSubmit={(e)=>{e.preventDefault()}}>
              <input type="text" placeholder="Add todo here" value={input} 
                onChange={(e)=> setInput(e.target.value)}/>
                
                <button onClick={addToDo}>ADD</button>
            </form>
          </div>
            

          <div className="show-todo">
            {todoList.map((elem)=>{
                return(<TodoItem key={elem.id} id={elem.id} todo={elem.content} time={elem.time}/>)
              })}
          </div>
        </div>
      </setListOfTodos.Provider>
    </listOfTodos.Provider>
  );
}



export default App;
export { listOfTodos, setListOfTodos };