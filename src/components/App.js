import React, { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import "../style.css"
import firebase, {db, firestore } from "../config"
// import firestore from "firebase"




function App() {

  const [inputText, setInputText] = useState({"title": "","content": "","id":"",});
  const [items, setItems] = useState([]);

  function fetchTodos() {
    db.collection("Todos").get()
    .then((ss)=>{
      let lis = [];
      ss.forEach((item)=>{lis.push(item.data())});
      setItems(lis);
    }
    )
    .catch()
    
  }

  

  function handleChange(event) {
    const {name, value} = event.target;
    setInputText((prev)=>{
      return({
        ...prev,
        [name]:value,
      });
    });
  }

  function addItem() {
    if (inputText.content === "")return
    db.collection("Todos").add(inputText)
    .then((docref)=>{
      inputText.id = docref.id;
      setItems((prev) => {
        return [inputText, ...prev];
      });
    })
    .catch();

    setInputText({
      "title": "",
      "content": "",
      "id":""
    });

    console.log(items);
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return item.id !== id;
      });
    });
    db.collection("Todos").doc(id).delete();
  }


  //Fetches all todos from database
  useEffect(fetchTodos, []);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onChange={handleChange} onClick={addItem} text={inputText} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={todoItem.id}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
