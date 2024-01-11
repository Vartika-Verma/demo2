import React from 'react'

export default function Propsfunction(props) {
  return (
    <div>
        <h1>{props.number}</h1>
        <h1>{props.text}</h1>
    </div>
  )
}