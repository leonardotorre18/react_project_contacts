import './App.scss';
import TaskList from './components/containers/TaskList';
import TaskForm from './components/pure/form/TaskForm';

function App() {
  return (
    <div className="App">
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
