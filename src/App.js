import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Result from './components/Result';

const secretNum = Math.floor(Math.random() *10) +1

function App() {

const [term, setTerm] = useState("")

function handlechange (e) {

setTerm(e.target.value)

}


  return (
    <div className="container">

      <div className='innerbox'>
        <label htmlFor='term'>Guessing the numbers between 1 to 10 :  </label> <br/>
        <input id='term'
         type="text" 
         name='term'
         onChange={handlechange}
        />

      </div>

      <Result secretNum={secretNum} term = {term}/>


  
    </div>
  );
}

export default App;
