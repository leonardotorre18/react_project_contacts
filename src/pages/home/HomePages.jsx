import TaskList from '../../components/containers/TaskList' ;
import { useEffect, useState } from 'react';
import { TaskModel } from '../../models/task.class';
import { LEVELS } from '../../models/enums';
import FormTask from '../../components/pure/form/FormTask'

export default function HomePages() {
  
  const [tasks, setTasks] = useState([]);
  
  
  useEffect(()=>{
        const setTimeoutTask = setTimeout(() => {
          setTasks([
            new TaskModel('Example2', 'Description 2', false, LEVELS.URGENT),
            new TaskModel('Example3', 'Description 3', false, LEVELS.BLOCKING),
            new TaskModel('Example1', 'Description1', true, LEVELS.NORMAL)
          ])
        }, 2000);
        return () => clearTimeout(setTimeoutTask)
      },[])
    
      const addTask = task => {
        setTasks([
          ...tasks,
          task
        ]); 
      }
    
      function deleteTask(task){
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }
    
      function completeTask(task){
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        setTasks(tempTasks);
      } 

  return (
    <div>
      <div className='mb-5'>
      <FormTask
        addTask={addTask}
      ></FormTask>
      </div>

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        completeTask={completeTask}
      ></TaskList>


    </div>
  )
}
