import './App.scss';
import Navbar from './components/layout/Navbar';
import FormLogin from './components/pure/form/FormLogin';
import FormRegister from './components/pure/form/FormRegister';
import { Route, BrowserRouter as Router, Routes, Navigate as Redirect } from 'react-router-dom';
import { useState } from 'react';

import HomePages from './pages/home/HomePages';

function App() {

  const [logged, setLogged] = useState(
    localStorage.getItem('password') && localStorage.getItem('email') ?
    true : false
  );


  return (
    <Router>
    <div className="App">
      <Navbar
        isLogged={logged}
        setLogged={setLogged}
      />
      <main className='main'>
        <Routes>
          <Route exact path='/' element={
            logged ? 
            <HomePages
              isLogged={logged}
            /> : <Redirect to='/login'></Redirect>
          } 
          />
          <Route path='/login' element={<FormLogin
            setLogged={setLogged}
          />} />
          <Route path='/register' element={<FormRegister
            setLogged={setLogged}
          />} />
        </Routes>
      </main>
    </div>
    </Router>
  );
}

export default App;
