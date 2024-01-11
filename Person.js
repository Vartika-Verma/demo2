import React, { Component } from 'react'

export class Person extends Component {
    constructor(props){
        super(props);
        this.props=props;
    }
  render() {
    return (
      <div>
        <h1>{this.props.name} - {this.props.age}</h1>
      </div>
    )
  }
}

export default Person