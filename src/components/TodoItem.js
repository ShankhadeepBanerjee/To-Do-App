import React, { useContext } from "react";
import "./componentStyle.css";
import DeleteIcon from '@material-ui/icons/Delete';
import {db} from "../firebase"


function TodoItem(props) {
    function deleteTodo() {
        db.collection("List").doc(props.id).delete()
        .then()
        .catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    return(
        <div className="todo-item" data-key={props.id}>
            <div>
                <span>{props.todo}</span>
                <DeleteIcon className="delete" onClick={deleteTodo}/>
            </div>
            <div>
                <span>{props.time}</span>
            </div>
            
        </div>
    );
}


export default TodoItem;