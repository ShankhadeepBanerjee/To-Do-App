import React, { useContext, useEffect, useState } from "react";
import "./componentStyle.css";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {db} from "../firebase";
import { user } from "./App";


function getTimeInHrMin() {
    let today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let time = (hr > 9? hr : "0"+hr) + ":" + (min > 9? min : "0"+min) + (hr > 11 ? " pm":" am");
    return(time);
}

function TodoItem(props) {
    const User = useContext(user);

    const [todo, setTodo] = useState(props.todoObject.content);
    const [done, setDone] = useState(props.todoObject.done);
    const [editing, setEditing] = useState(false);

    function deleteTodo() {
        db.collection(User.uid).doc(props.todoObject.id).delete()
        .then()
        .catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    function updateTodo() {
        setEditing(false);
        db.collection(User.uid).doc(props.todoObject.id).update({
            "content": todo,
            "time": getTimeInHrMin(),
            "done": done,
        })
        .then()
        .catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    useEffect(() => {
        updateTodo();
    }, [done])

    return(
        <div className="todo-item" data-key={props.todoObject.id}>
            <div>
                
                {editing ? 
                 <div className="edit-todo">
                    <form action="" onSubmit={(e)=>{e.preventDefault(); updateTodo()}}>
                        <input type="text"  value={todo} onChange={(e)=>setTodo(e.target.value)}/>
                        <button>Update</button>
                    </form>
                </div>
                 :
                 <span style={done ? {"textDecoration":"line-through", "opacity":"0.6"} : {}}>{todo}</span>
                 }
                
                {!editing && <input type="checkbox" className="icon" checked={done} onChange={()=>{done ? setDone(false):setDone(true);}}/>}
                {!editing && <EditIcon className="icon" onClick={()=> setEditing(true)}></EditIcon>}
                <DeleteIcon className="icon" onClick={deleteTodo}/>
            </div>
            <div>
                <span>{props.todoObject.time}</span>
            </div>
        </div>
    );
}


export default TodoItem;