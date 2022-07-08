import { actionsTypes } from '../actions/actions'

const initialState = []

export const TaskReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionsTypes.ADD_TASK:
      return [
        ...state,
        action.payload
      ];
      
    case actionsTypes.TOGGLE_TASK:
      return state.map(task => task.id === action.payload.id ?
        { ...task, completed: !task.completed } :
        task
      );

    case actionsTypes.DELETE_TASK:
      return state.filter(task => task.id !== action.payload.id)

    default:
      return state;
  }
}
