import React, { useState } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { edittask, toggle } from '../Redux/Action/actions';
const Task = ({el}) => {
  const [newdesc, setNewdesc] = useState("");
  const dispatch=useDispatch()
  const handelClick=()=>{
    dispatch(edittask(newdesc,el.id))
  }
  return (
  <>
<div className='cards' style={{width: '300px'}}  >
  <img  style={{width:'300px',height:'250px'}}src={el.ImgUrl} alt="photo" />
    <div className= "card.body">
    <h1>{el.Title}</h1>
    <p>{el.Description}</p>
    <input className='text' style={{marginRight:4}} type="text" name ="Description" onChange={(e)=>setNewdesc(e.target.value)} />
    <button className='butto' onClick={handelClick} >Edit</button>
    <button style={{ width: 70,marginLeft:7}} className='butto' variant="primary" onClick={(e)=>{dispatch(toggle(el.id))}} >{el.isDone? "Done" :"notDone"}</button>
    </div>
 
</div>

  </>
  );
};

export default Task;
