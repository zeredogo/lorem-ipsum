import React, { useState } from 'react';
import './App.css';
import data from './data';


function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.prevenDefault();
    console.log('hello world');
  }
  
  return (
  <section className='sction-center'>
    <h3>tired of boring lorem ipsum?</h3>
    <form className='lorem-form' onSubmit={handleSubmit}></form>
  </section>
    )
}

export default App;
