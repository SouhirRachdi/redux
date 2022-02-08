import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { filtretask } from '../Redux/Action/actions';


const Filtertask = () => { 
const dispatch=useDispatch();
  
  const Tasks=useSelector(state=>state.Tasks);
  return (
  <div className='taskk'>
  <button className="bttn" onClick={()=>dispatch(filtretask("done"))} >Done</button>
  <button className="bttn" onClick= {()=>dispatch(filtretask("NotDone"))}>NotDone</button>
  <button className="bttn" onClick={()=>dispatch(filtretask("All"))} >All</button> 
  </div>
  
  );
};

export default Filtertask;
