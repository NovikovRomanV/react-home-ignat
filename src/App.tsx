import React from 'react';
import './App.css';
import Message from "./Message/Message";
import Affairs from "./Affairs/Affairs";

function App() {
  return (
    <div className="App">
        <Message name='Alex' text='Hi! How are you?' time='20:00'/>
        <Affairs/>
    </div>
  );
}

export default App;
