import Task from "../pure/Task";
import { Link } from "react-router-dom";

export default function TaskList({tasks, deleteTask, completeTask}) {
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
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        )
      })}
      </tbody>
    </table>
      <Link to='/addTask' className="mx-2 nav-item nav-link active">
        <button className="btn btn-primary">Add Task</button>
      </Link>

    </div>
  )
}
