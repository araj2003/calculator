import { useState } from 'react'

import './App.css'

function App() {
  const [calc,setCalc] = useState("");
  const [res,setRes] = useState("");

  const ops = ['/','*','+','-','.'];

  const deleteLast = () => {
    if(calc === ''){
      return;
    }
    const value = calc.slice(0,-1);
    setCalc(value);
  }

  const evaluate = () => {
    setCalc(eval(calc).toString());
    setRes("");
  }
  
  const updateCalc = (val) => {
    if(ops.includes(val) && calc === '' || ops.includes(val) && ops.includes(calc.slice(-1))){
      return;
    }

    setCalc(calc + val);
    if(!ops.includes(val)){
      setRes(eval(calc + val).toString());
    }
  }



  const createDigits = () => {
    const digits = [];

    for(let i = 1;i < 10;i++){
      digits.push(
        <button key={i} 
        onClick={() => updateCalc(i.toString())}
        >{i}</button>
       )
    }

    return digits;
  }

  return (
    <div className='App'>
      <div className="calculator">
        <div className="display">
          {
            res?<span>({res})</span>:''
          }
           {calc}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={() => evaluate()}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
