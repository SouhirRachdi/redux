import { ADD_TASK, EDIT_TASK,FILTRE_TASK, TOGGLE } from "../ActionsTypes/actions-types";

export const addtask = (newTask) => ({
    type:ADD_TASK, payload:newTask })

    
export const toggle=(id)=>{
    return {type:TOGGLE,payload:{id}}
}

export const filtretask= (statut) => ({
        type:  FILTRE_TASK ,payload:statut})
    

export const edittask = (editask,id) => ({
    type:EDIT_TASK, payload:{desc:editask,id } })


  
