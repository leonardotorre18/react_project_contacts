import { useReducer } from 'react';
import './App.scss';
import { TaskReducer, FilterReducer } from './context/reducers';
import TaskList from './components/containers/TaskList';
import globalContext from './context/config';
import TaskForm from './components/pure/form/TaskForm';

function App() {

  const [ TasksState, TasksDispatch ] = useReducer(TaskReducer, []);
  const [ FilterState, FilterDispatch ] = useReducer(FilterReducer, 'SHOW_ALL');

  return (
    <div className="App">
      <globalContext.Provider value={{
        TasksState, TasksDispatch,
        FilterState, FilterDispatch
      }}>
        <TaskForm />
        <TaskList />
      </globalContext.Provider> 
    </div>
  );
}

export default App;
