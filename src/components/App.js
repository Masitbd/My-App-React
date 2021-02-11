import axios from 'axios';
import React, { Component } from 'react'
import './App.css';
import PostForm from './PostForm'


class App extends Component{

render(){
  return (
      <div className='container'>
        <h1>this is app.js</h1>
        <PostForm/>
        </div>
  )
    
}

}

export default App;