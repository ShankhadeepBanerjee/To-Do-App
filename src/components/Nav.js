import React, { useContext } from "react";
import { signIn, signOut } from "./Authentication";
import { user } from "./App";


function Nav() {
    const User = useContext(user);

    return(
        <div className="nav">
            {User ? 
            <span className="user">
            <h2>{User.username}</h2>
            <img src={User.userPhoto} alt="" onClick={signOut}/>
            </span>
            :
            <button onClick={signIn}>Sign In</button>
            }
        </div>
    );
}


export default Nav;