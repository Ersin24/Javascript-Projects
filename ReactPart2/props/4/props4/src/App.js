import React from 'react';
import List from './List';
import Talker from './Talker';
import './App.css';

function App() {

 

  return (
    <div className="App">
      <List type='Güncel Veri'>
        <li>First Item</li>
        <li>Second Item</li>
      </List>
      <List type='Güncel Veri'>
      <li>First Item</li>
      </List>
      <Talker />
    </div>
  );
}

export default App;
