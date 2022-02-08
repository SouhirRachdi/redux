import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';


const ListTask = () => {
  const Tasks=useSelector(state=>state.Tasks);
  const filtre=useSelector(state=>state.filtre);
  return (
  <div className='contain'>
 { filtre=="All" ? 
 Tasks.map((el,i)=> <Task  el={el} key={i}/>):filtre=="done"?Tasks.filter(el=>el.isDone)
 .map((el,i)=> <Task  el={el} key={i}/>):Tasks.filter(el=>!el.isDone).map((el,i)=> <Task  el={el} key={i}/>)}
  </div>
  
  );
};

export default ListTask;
