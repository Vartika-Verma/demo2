import React,{useState} from 'react'

export default function Propsfunction() {
    const[count,setCount]=useState(1);
    const counter=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={counter}>Click here</button>
    </div>
  )
}