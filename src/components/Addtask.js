
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtask } from '../Redux/Action/actions';

const Addtask = () => {
    const [task, setTask] = useState({
        Title:"",
        Description:"",
        isDone:false,
        ImgUrl:""
    });
    const dispatch=useDispatch()
   const handelClick=()=>{
       dispatch(addtask(task))
   }
  return (

    <div className='heder'>
      <div className='iconn'>
      <i class="fas fa-tasks-alt"></i>
      <p className="taskss">To Do Tasks </p>
       </div>
      
  <div className='flex'>
    
<input style={{ marginRight:4 }} className="inp" type="text" name="Title" onChange={(e)=>setTask({...task,[e.target.name]:e.target.value})} />
<input   className="inp" type="text"  name="Description"   onChange={(e)=>setTask({...task,[e.target.name]:e.target.value})}/>
<input  style={{ marginLeft:4 }} className="inp" type="text" name="ImgUrl"      onChange={(e)=>setTask({...task,[e.target.name]:e.target.value})} />

<button className='bnnt'  onClick={handelClick} >Add</button>
  </div></div>
  );
};

export default Addtask;

