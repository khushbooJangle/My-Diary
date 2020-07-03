import React from 'react';
import './App.css';
import MyEntry from './Components/MyEntry';

function App() {
  return (
    <div className="App">
      <h1>My Diary!</h1>
      <p>Pen down your thoughts and save them here....</p>
      <MyEntry />
    </div>
  );
}

export default App;
