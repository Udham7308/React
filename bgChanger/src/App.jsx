import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
   <div className=' w-full h-screen duration-200'
   style={{backgroundColor:color}}
   >  <div className='fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2 '>
        <div className ="flex flex-wrap justify-center gap-3
        shadow-lg bg-white rounded-3xl px-3 py-2 "> 
          <button
          onClick = {() => setColor("red")}
          className="outline-none px-5 py-1 rounded-full shadow-lg "
          style={{backgroundColor:"red"}}
          >Red</button>
          <button
          onClick = {() => setColor("orange")} 
          className="outline-none px-5 py-1 rounded-full shadow-lg "
          style={{backgroundColor:"orange"}}
          >Orange</button>
          <button 
          onClick = {() => setColor("yellow")}
          className="outline-none px-5 py-1 rounded-full shadow-lg "
          style={{backgroundColor:"yellow"}}
          >Yellow</button>
          <button 
          onClick = {() => setColor("green")}
          className="outline-none px-5 py-1 rounded-full shadow-lg "
          style={{backgroundColor:"green"}}
          >Green</button>
          <button 
          onClick = {() => setColor("cyan")}
          className="outline-none px-5 py-1 rounded-full shadow-lg "
          style={{backgroundColor:"cyan"}}
          >Cyan</button>
          <button 
          onClick = {() => setColor("blue")}
          className="outline-none px-5 py-1 rounded-full shadow-lg "
          style={{backgroundColor:"blue"}}
          >Blue</button>
          <button 
          onClick = {() => setColor("purple")}
          className="outline-none px-5 py-1 rounded-full shadow-lg "
          style={{backgroundColor:"purple"}}
          >Purple</button>         
        </div>
      </div>
   </div>
  )
}
//The onClick method in React expects a function reference
//You can't directly pass parameters inside the function, instead, you need to pass it as a reference or use arrow function syntax

export default App
