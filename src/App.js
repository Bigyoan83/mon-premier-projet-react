import React from 'react';
import List from './cardList.js';
import './style/card.css';
import './style/App.css';


function App() {
  return (
    <div className="App">
      <h1>Jeu de Memory</h1>
      <List/>
    </div>
  );
}

export default App;