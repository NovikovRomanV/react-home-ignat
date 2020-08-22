import React from 'react';
import './App.css';
import Message from "./Message/Message";

function App() {
  return (
    <div className="App">
        <Message name='Alex' text='Hi! How are you?' time='20:00'/>
    </div>
  );
}

export default App;
