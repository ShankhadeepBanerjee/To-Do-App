import React, { useContext, useEffect, useState } from "react";
import { user } from "./App";
import { db, storage } from "../firebase";
import AttachmentIcon from '@material-ui/icons/Attachment';
import AddIcon from '@material-ui/icons/Add';


function getTimeInHrMin() {
    let today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let time = (hr > 9? hr : "0"+hr) + ":" + (min > 9? min : "0"+min) + (hr > 11 ? " pm":" am");
    return(time);
}

function InputTodo() {

    const [input, setInput] = useState("");
    const [file, setFile] = useState(null);
    const User = useContext(user);

    function addTodo() {
        if(input === "")return;
        let newTodo = {"id": Date.now().toString(), 
                      "content":input, 
                      "done":false , 
                      "time":getTimeInHrMin(),
                    };

        db.collection(User.uid).doc(newTodo["id"]).set(newTodo)
        .then()
        .catch((e)=>{
          console.log("Error occured "+ e);
        });
    
        setInput("");
      }

      // function fileUpload() {
      //     const name = new Date()+' - '+file;
      //     const metaData = {contentType: file.type};
      //     const ref = storage.ref();
      //     ref.child(name).put(file, metaData)
      //     .then(ss=> ss.ref.getDownloadURL())
      //     .then(url=> console.log((url)));
      // }


      // useEffect(() => {
      //   fileUpload();
      // }, [file])

    return(
        <div className="input-todo">
            <form action="" onSubmit={(e)=>{e.preventDefault(); addTodo()}}>
              <input type="text" placeholder="Add todo here" value={input} 
                onChange={(e)=> setInput(e.target.value)}/>
              
              {/* <input type="file" className="file-upload" />
              <AttachmentIcon className="icon" onClick={()=>{
                const fileUpload = document.querySelector(".file-upload");
                fileUpload.click();
                
              }}/>  */}
              <button className="input-submit-btn"></button>
              <AddIcon className="icon" onClick={()=>{
                // setFile(fileUpload.files[0]);
                const inputFormSubmit = document.querySelector(".input-submit-btn");
                inputFormSubmit.click();
              }}/>
            </form>
          </div>
    );
}


export default InputTodo;