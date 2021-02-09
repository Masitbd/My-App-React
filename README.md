import React, { Component } from 'react'
import './App.css';
import Example from './example';
class App extends Component{
  state = {
    books:[
      {
        id:1,
        title: "Study File Structure",
        completed:false
      },
      {
        id:2,
        title: "Create Component",
        completed:false
      },
      {
        id:3,
        title: "Study State",
        completed:false
      }
    ]
  }

  render(){
    return ( 
      <div className="App">

        <h1>Hello</h1>
        <books/>
      </div>
    );
  }
}

export default App;






import React, { Component } from "react";


class Books extends Component{
 
  render() {
      return (
        <li className= 'list-group-item d-flex'>
            <p>{this.props.name}</p>
               <span className='ml-auto'>{this.props.price}</span>
        </li>
      )
  }
}
