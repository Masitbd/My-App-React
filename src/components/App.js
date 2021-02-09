import axios from 'axios';
import React, { Component } from 'react'
import './App.css';


class App extends Component{

  state = {
    posts: []
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(respose => {
      this.setState(
        {posts: respose.data}
      )
    })
    .catch( error => console.log(error))


  }
 
render(){

  let {posts} = this.state

  if(this.state.posts.length === 0 ){
    return <h1 style={{textAlign: 'center'}}>loading...</h1>
    
  } else{
    return (
      <div className='container'>
      <ul className='list-group'>
          {posts.map(post =><li key= {post.id} className= 'list-group-item'>{post.title}</li> )}
      </ul>
  </div>
    )
  }
}

}

export default App;