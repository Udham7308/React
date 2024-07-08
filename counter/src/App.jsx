import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {   

 const [counter, setCounter] = useState(3);// counter -> variable; setCounter-> method which controlls the variables.

  //let counter = 3;
  
  const addValue = ()=>{
    if(counter >=20){
      stop;
    }else{
      setCounter(counter+1);
    }
    
        
  }
  const removeValue = ()=>{
    if(counter <=0){
      stop;
    }else{
      setCounter(counter-1);
    }
       
  }

 

  return (
    <>
      <h1>Counter</h1>
      <h3>counter value : {counter}</h3>

      <button
      onClick = {addValue}      
      >Add Value  </button>
      <br />
      <button
      onClick = {removeValue}
      >Decrease Value </button>
      

    </>
  )
}

export default App
