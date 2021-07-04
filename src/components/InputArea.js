import React from "react";
import "../style.css"


function InputArea(props) {
  return (
    <div className="form">
      <h1><input onChange={props.onChange} type="text" name="title" placeholder="Title" value={props.text.title} /></h1> 
      <input onChange={props.onChange} type="text" name="content" placeholder="Content" value={props.text.content} />
      <button onClick={props.onClick}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
