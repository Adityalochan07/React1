import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const[state,setState]=useState(0)
 
  

  function dec(){
    setState(state-1)
  }

  function inc(){
    setState(state+1)
  }
  function re(){
    setState(0)
  }
  return (
    
    <>
    <div className="container" >
    <button onClick={dec} className='btn' id='bu'>-</button>
    <span>{state}</span>
    <button onClick={inc}className='btn'  id='bu'>+</button><br></br>
    <button onClick={re} className='btn' id='bu' >reset</button>
    </div>
    </>
  );
}

export default App;
