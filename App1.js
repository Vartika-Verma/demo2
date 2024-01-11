import React, { Component } from 'react'
import Person from './Person';
export class App1 extends Component {
  constructor(props){
    super(props);
    this.state={
      persons:[
        {
          name:"swati",
          age:21,
        },
        {
          name:"Priyanka",
          age:20,
        },
        {
          name:"Rina",
          age:31,
        },
        {
          name:"Vartika",
          age:34,
        },
        {
          name:"Vartika",
          age:34,
        },
        {
          name:"Vartika",
          age:34,
        },
      ]
    }
  }
  render() {
    let persons;
    persons=this.state.persons.map((p)=>{
      return<Person name={p.name} age={p.age}/>
    })
    return (
      <div>
        {persons}
      </div>
    )
  }
}

export default App1