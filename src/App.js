import Navbar from './components/layout/Navbar';
import './App.scss';
import Routes from './routes/index';

function App() {


  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes></Routes>
    </div>
  );
}

export default App;
