import React, { useState } from "react";

export const UserContext=React.createContext()

export const UserContextProvider=({children})=>{
const [todo,setTodo]=useState([]);
return(
    <UserContext.Provider value={{todo,setTodo}}>
        {children}
    </UserContext.Provider>
)
}