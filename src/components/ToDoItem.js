import React from "react";
// import "../components/TD"


function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.text.id);
      }}
    >
      <li>
      <h4>{props.text.title}</h4>
      <p>{props.text.content}</p>
      </li>
    </div>
  );
}

export default ToDoItem;
