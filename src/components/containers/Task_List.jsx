import { useState } from "react";
import Task from "../pure/Task";
import {TaskModel} from '../models/task.class'
import { ROLES } from "../models/roles.enum";
import FormTask from "../pure/form/FormTask";


export default function Task_List() {
  const [tasks, setTasks] = useState([
    new TaskModel('Example2', 'Description 2', false, ROLES.URGENT),
    new TaskModel('Example3', 'Description 3', false, ROLES.BLOCKING),
    new TaskModel('Example1', 'Description1', true, ROLES.NORMAL)
  ]) 

  const addTask = task => {
    setTasks([
      ...tasks,
      task
    ]); 
  }
  
  return (
      <div>
    <table>
    <thead>
        <tr>
            <th scope='col'>Title</th>
            <th scope='col'>Description</th>
            <th scope='col'>Priority</th>
            <th scope='col'>Actions</th>
        </tr>
    </thead>
    <tbody>
        { tasks.map((task, index) => {
            return (
                    <Task
                        key={index} 
                        task={task}
                    >
                    </Task>
                )
            }
        )}
    </tbody>
    </table>
            <FormTask
              addTask={addTask}
            ></FormTask>
      </div>


  )
}
