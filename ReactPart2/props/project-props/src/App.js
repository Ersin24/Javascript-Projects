import React from 'react';
import {comments} from './commentData.js';
import Card from './Card.js';


import './App.css';

function App() {
  return (
    <div className="App">
      {
        comments.map(comment => 
          <Card commentObject={comment} />
       )
      }
    </div>
  );
}

export default App;
