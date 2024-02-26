import React, { useCallback, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Link } from 'react-router-dom';

const HomeComponent = () => {
    const {todo,setTodo}=useContext(UserContext);
    if(todo){
        return (
            <div>
                <h1>TodoList</h1>
                <div>
                    {todo?.map((x)=>(
                        <p>{x}</p>
                    ))}
                </div>
                <Link to="/addnew">Add new Todo</Link>
            </div>
          )
    }
    else{
        return(
            <>
            <div>No todo</div>
            <Link to="/addnew">Add new Todo</Link>
            </>
        )
    }
 
}

export default HomeComponent