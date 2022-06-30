import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { getRandomJoke } from '../../services/ChuckNorrisAPI';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';


export default function MediaCard({ toggleLike, toggleDislike }) {

  const [joke, setJoke] = useState({})
    
  function requestJoke () {
    getRandomJoke().then(res => setJoke(res.data))
  }
  useEffect(()=>{
    requestJoke();
  },[])

  return (
    <div style={{
      'maxWidth': '345px',
      'backgroundImage': 'linear-gradient(343deg, rgba(124,185,232,1) 0%, rgba(240,248,255,1) 100%)',
      'borderRadius': '5px',
      'margin': '4em auto'

    }}>
      <div style={{
        'width': '100%'
      }}>
        <img 
          src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/08/26164724/Chuck-Norris-1-2.jpg" 
          alt="Chuck Norris Icon" 
          style={{
            'width': '100%',
            'objectFit' : 'cover'
          }}
        />
      </div>

      <p
        style={{
          // 'color': '#fff',
          'padding': '.7em'
        }}
      >{ joke.value }</p>
      <div style={{
        'display': 'flex',
        'justifyContent': 'space-between',
        'padding': '.4em'
      }}>
        <Button 
          size="median"
          variant="contained"
          onClick={requestJoke}
        >Change Joke</Button>
        <div>
        <Button 
          size="small" 
          variant="contained" 
          color="success"
          onClick={()=>{
            toggleLike()
          }}
        >
          <ThumbUpIcon />
        </Button>
        <Button 
          size="small" 
          variant="contained" 
          color="error"
          onClick={()=>{
            toggleDislike()
          }}
        >
          <ThumbDownAltIcon />
        </Button>
        </div>
      </div>
    </div>
  );
}

      