import Task from "../pure/Task";

export default function TaskList({tasks, deleteTask, completeTask}) {
  
  return tasks.length > 0 ? 
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
  
  : <p>There's not Tasks...</p>
  
}
