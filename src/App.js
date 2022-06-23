import './App.scss';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import TaskList from './components/containers/TaskList';
import Navbar from './components/layout/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import FormTask from './components/pure/form/FormTask';
import { useEffect, useState } from 'react';
import { TaskModel } from './models/task.class';
import { LEVELS } from './models/enums';

function App() {

  const [tasks, setTasks] = useState([]) 

  useEffect(()=>{
    setTimeout(() => {
      setTasks([
        new TaskModel('Example2', 'Description 2', false, LEVELS.URGENT),
        new TaskModel('Example3', 'Description 3', false, LEVELS.BLOCKING),
        new TaskModel('Example1', 'Description1', true, LEVELS.NORMAL)
      ])
    }, 4000);
  },[])

  const addTask = task => {
    setTasks([
      ...tasks,
      task
    ]); 
  }

  function deleteTask(task){
    console.log('Detele this Task:', task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index,1);
    setTasks(tempTasks);
}

  function completeTask(task){
    console.log('Complete this Task:', task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    setTasks(tempTasks);
  }


  return (
    <Router>
    <div className="App">
      <Navbar />
      <main className='main'>
        <Routes>
          <Route exact path='/' element={
            tasks.length > 0 ?
            <TaskList
              tasks={tasks}
              deleteTask={deleteTask}
              completeTask={completeTask}
            /> :
            <p>There's not Task</p>
          
          } 
          />
          <Route path='/addTask' element={
            <FormTask 
              addTask={addTask}
            />}
          />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </main>
    </div>
    </Router>
  );
}

export default App;
