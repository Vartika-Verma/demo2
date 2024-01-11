import React, { Component } from 'react'

export class Person1 extends Component {
    constructor(props){
        super(props)
        this.props=props;
        this.state={
            name:"John",
            age:22,
        }
    }
    namechangehandler(){
        console.log(this.state)
        this.setState({name:"Bhagirath",age:25},()=>{
            console.log(this.state)
        })
    }
  render() {
    return (
      <div>
         
        <h2>{this.state.name}{this.state.age}</h2>
        <button onClick={()=>this.namechangehandler()}>Click Here</button>
      </div>
    )
  }
}

export default Person1