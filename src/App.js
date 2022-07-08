import './App.scss';
import TaskList from './components/containers/TaskList';
import TaskForm from './components/pure/form/TaskForm';
import LoginForm from './components/pure/form/LoginForm';
import HeaderBar from './components/pure/HeaderBar';


function App() {
  return (
    <div className="App">
      <HeaderBar />
      {/* Email Login is "eve.holt@reqres.in" */}
      <LoginForm />
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
