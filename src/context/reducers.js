import { actionsTypes } from "./actions";

export const TaskReducer = (state, action) =>{
  switch (action.type) {
    case actionsTypes.ADD_TASK:
      return [
        ...state,
        action.payload
      ];
    
    case actionsTypes.DELETE_TASK:
      return state.filter(task => task.id !== action.payload.id)

    case actionsTypes.TOGGLE_TASK:
      return state.map(task => task.id === action.payload.id ?
        { ...task, completed: !task.completed } :
        task
      );

    default:
      return state;
  }
}
export const FilterReducer = (state, action) => {
  switch (action.type) {
    case actionsTypes.SET_FILTER:
      
      return action.payload.filter;
  
    default:
      return state;
  }
}

