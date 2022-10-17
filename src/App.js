import { useState } from 'react';
import './App.css';

function App() {
  const[num,setnum] = useState(1);
 
  return (
    <div className='center'>
   <h1 className='counter'>Counter {num}</h1>
   <button className='add' onClick={()=>{
    setnum(num + 1);
   }}> Add</button>
   <button className='minus' onClick={()=>{
    setnum(num - 1);
   }}>Minus</button>
    </div>
  );
}

export default App;
