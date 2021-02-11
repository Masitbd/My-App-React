import React, { Component } from 'react';
import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com/'

class PostForm extends Component {

    state = {
        title: '',
        body: '',
        userId: '112',
        isSubmitted: false
   }
   changeHandler= (e) =>{
    this.setState({
        [e.target.name]: e.target.value
    })

   }

   submitHandler= (e) =>{
       e.preventDefault()

       axios.post('{BASE_URL}/posts',
       {
           title: this.state.title,
           userId: this.state.userId,
           body: this.state.body
       }
       )
       .then(res => {
           this.setState({
               isSubmitted: true,
               error: false
           })
           console.log(res)
           e.target.reset()
       })
       .catch(error => {
           this.setState({
               error: true,
               isSubmitted: false
           })
       })

   }

    render() {
        return (
            <form onSubmit= {this.submitHandler}>
                <input 
                   type="text"
                   className= 'form-control'
                   name='title'
                   value={this.state.title}
                   placeholder= 'Enter your title'
                   onChange={this.changeHandler}

                />  
              <textarea
              className='form-control'
              name='body'
              placeholder='Enter your text'
              value= {this.state.body}
              onChange={this.changeHandler}  
               />  
               <button type='submit' className= 'btn btn-success'>submit</button>

               {this.state.error && <p>Somethis wrong to submittes successfully</p>}
            </form>
        );
    }
}



export default PostForm;