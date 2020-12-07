import React from 'react';
import './App.css';
import Message from "./Message/Message";
import Affairs from "./Affairs/Affairs";
import {Greeting} from "./Greeting/Greeting";

function App() {
  return (
    <div className="App">
        <Message name='Крош' text='Hi! How are you?' time='6:00'/>
        <Affairs/>
        <Greeting/>
    </div>
  );
}

export default App;
