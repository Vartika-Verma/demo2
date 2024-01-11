import React, { Component } from 'react'
import Person from './Person'
import Propsfunction from './Propsfunction'
export class App2 extends Component {
  render() {
    return (
      <div>
        <h1>This is heading</h1>
        <Person name="Johan" age="34"/>
        <Person name="Bhagirath" age="50"/>
        <Propsfunction number="44"/>
        <Propsfunction text="Apple"/>
      </div>
    )
  }
}

export default App2