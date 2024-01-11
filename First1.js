import React, { Component } from 'react'

export class First1 extends Component {
    title="Swati Mishra"
    courses=["Hindi","Math","English","Geography"]
  render() {
    return (
      <div>
       <p>{this.title}</p>
       <ul>
         {this.courses.map((val,ind)=>
         <li key={ind}>{val}</li>
         )}
       </ul>
      </div>
    )
  }
}

export default First1