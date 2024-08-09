import { useState,useCallback, useEffect, useRef } from 'react'

// for taking reference of any entity we requires useref hook. 

function App() {
 const [length, setLength] = useState(8);
 const [numAllowed , setNumAllowed] = useState(false)
 const [charAllowed, setCharAllowed] = useState(false)
 const [password, setPassword] = useState("")

 // useRef hook
 const passwordRef = useRef(null)

 // const cachedFn = useCallback(fn, dependencies)
 // dependencies should be in array formate
 const passwordGenerator = useCallback(()=>{
  let pass=""
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(numAllowed) str += "0123456789"
  if(charAllowed) str += "!@#$%^&*()_-+=[]{}~`"

  for(let i = 1; i<=length; i++){
    let char = Math.floor(Math.random() * str.length + 1 )
    pass += str.charAt(char) 
  }
  setPassword(pass)

 }, [length, numAllowed, charAllowed, setPassword]) // Here setPassword is used only for optimization. 
 // if we not use setPassword then the password will change automatically till infinity.
// there the concept of Memoization is used.
//Memoization is a powerful optimization technique used in React to improve the performance of applications by caching the results of expensive function calls and returning the cached result when the same inputs occur again.

 //useEffect(setup, dependencies?)

const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,100) // for copy in range.
  window.navigator.clipboard.writeText(password)
},[password])
// Because we are useing core react so we are able to write window directly. but in NEXT Js, there is server side rendering means all code executed on server and there is no window object.
  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'> 
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
        value ={password}
        className='outline-none w-full px-3 py-1'
        placeholder='Password'
        readOnly
        ref={passwordRef} // for taking reference in any input/argument pass the ref with variable you decleared.
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700
         text-white px-3 py-0.5 shrink-0'> Copy </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked = {numAllowed}
            id='numInput'
            onChange={()=> {setNumAllowed((prev) => !prev);}}
            />
            <label htmlFor='numInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked = {charAllowed}
            id='numInput'
            onChange={()=> {setCharAllowed((prev) => !prev);}}
            />
            <label htmlFor='numInput'>Characters</label>
        </div>
      </div>
    </div>
    </> 
  )
}

export default App
