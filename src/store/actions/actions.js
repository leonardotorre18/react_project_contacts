export const actionsTypes = {
  ADD_TASK: 'ADD_TASK',
  TOGGLE_TASK: 'TOGGLE_TASK',
  SET_FILTER: 'SET_FILTER',
  DELETE_TASK: 'DELETE_TASK'
}

let nextID = 0;
export const actions = {

  addTask: (task)=>{
    return {
      type: actionsTypes.ADD_TASK,
      payload: {
        ...task,
        id: nextID++
      }
    }
  },
  deleteTask: (index) => {
    return {
      type: actionsTypes.DELETE_TASK,
      payload: {
        id: index
      }
    }
  },

  toggleTask: (index) => {
    return {
      type: actionsTypes.TOGGLE_TASK,
      payload: {
        id: index
      }
    }
  },

  setFilter: (filter) => {
    return {
      type: actionsTypes.SET_FILTER,
      payload: {
        filter
      }
    }
  }
}