import { useState } from 'react'

import './App.css'
import Card from './Components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"Udham",
    age:19,
  }
  let newArr = [1,2,3,4]

  return (
   

    <>
      <h1 className ='bg-green-400 text-black p-4 rounded-xl mb-4'>Taiwind test</h1>

      {/* <Card channel="Animeeditz" someObj = {myObj} />    
      <Card/>    
      <Card username="XYZ" someObj = {newArr} />    
      <Card/>     */     
      }
      <Card username="Code" btnText="Click me"/>
      <Card username="Name"/>

      
    </>
  )
}

export default App
