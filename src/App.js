import { useState } from 'react';
import './App.scss';
import Card from './components/pure/Card';
import Likebar from './components/pure/Likebar';



function App() {

  const [ likes, setLikes ] = useState(0);
  const [ dislikes, setDislikes ] = useState(0);

  function toggleLike(){
    let newValue = likes + 1
    setLikes(newValue)
  }
  function toggleDislike(){
    let newValue = dislikes + 1
    setDislikes(newValue)
  }

  return (
    <div className="App">
      <Likebar 
        likes={likes}
        dislikes={dislikes}
        ></Likebar>
      <Card
        toggleLike={toggleLike}
        toggleDislike={toggleDislike}
      ></Card>
    </div>
  );
}

export default App;
