import { ADD_TASK, EDIT_TASK,FILTRE_TASK, TOGGLE } from "../ActionsTypes/actions-types";


const initialState = {
    Tasks:[
    {
      id:0,
      Title:"YoGa",
      Description:"The purpose of yoga is to build strength, awareness and harmony in both the mind and body",
      isDone:false,
      ImgUrl:"https://www.yay-yoga.com/wp-content/uploads/2021/06/Carrousel-6.jpg"
    },
    {
      id:1,
      Title:"Breakfast",
      Description:"A healthy breakfast has many health benefits,Breakfast replenishes the stores of energy and nutrients in your body",
      isDone:true,
      ImgUrl:"https://i.pinimg.com/564x/9a/42/9b/9a429b856793570067aa26aabbbbb981.jpg"
    }, 
    {
      id:2,
      Title:"Work",
      Description:"Benefits can be quite valuable. Medical insurance alone can cost several hundred dollars a month",
       isDone:false,
      ImgUrl:"https://assets1.chainstoreage.com/styles/content_sm/s3/2021-05/Remote_working_0.jpg?itok=PbIxwaf9"
    },
    {
      id:3,
      Title:"Relaxing Time",
      Description:"Relaxation techniques can reduce stress symptoms and help you enjoy a better quality of life",
       isDone:false,
      ImgUrl:"https://images.squarespace-cdn.com/content/v1/57b5ef68c534a5cc06edc769/1568922172965-QFOV8XY4LIUWN5H1BZ9I/3.jpg?format=2500w"
    }
  
],
filtre:"All"
   };

 export const taskReducer=(state = initialState, action)=> {
      switch(action.type) {
        case ADD_TASK:
            return { ...state,Tasks:[...state.Tasks,{Title:action.payload.Title,Description:action.payload.Description,id:state.Tasks.length,ImgUrl:action.payload.ImgUrl}] };

        case TOGGLE:
            return{ Tasks:state.Tasks.map((el,i)=>el.id==action.payload.id? {...el,isDone:!el.isDone}:el)}

        case EDIT_TASK:
          console.log(action.payload.id,action.payload.desc);
            return { Tasks:state.Tasks.map((el,i)=>el.id==action.payload.id? {...el,Description:action.payload.desc}:el)};
        
       case FILTRE_TASK: 
       return { ...state,filtre:action.payload}

        default:
            return state;  
      }
   
   };
   
   export default taskReducer;