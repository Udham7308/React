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
      //setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1); 
      // UseState send all updates in batches. in upper task all update will become a batch which doing a same work. 
      //So there will be only one update. on click counter's value will be 4 not 7.
      // for this type task we define our setCounter as it's a call back fuction

      setCounter(prevCounter=> prevCounter+1);
      setCounter(prevCounter=> prevCounter+1);
      setCounter(prevCounter=> prevCounter+1);
      setCounter(prevCounter=> prevCounter+1);
      //They all are not same because there states will be different based on previous state.
      // now on update value will be 7. // prevCounter inputs it's previous value.

      
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
