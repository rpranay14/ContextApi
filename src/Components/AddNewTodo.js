import React, { useContext, useState} from 'react'
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const AddNewTodo = () => {
   const navigate=useNavigate()
    const {todo,setTodo}=useContext(UserContext)
    const [newtodo,setNewtodo]=useState();
    const handleSubmit=()=>{

        const temp=[...todo]
        temp.push(newtodo);
        setTodo(temp);
        navigate('/')
    }
  return (
    <div><p>Add New Todo</p>
    <input value={newtodo} onChange={(e)=>setNewtodo(e.target.value)}/>
    <button onClick={()=>handleSubmit()}>Add</button>
    
    </div>
  )
}

export default AddNewTodo