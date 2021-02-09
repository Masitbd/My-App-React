import React, { Component } from "react";


class Book extends Component{
  state = {
    isEditable: false
  } 

  changeHandler =(event) => {
    if (event.key === 'Enter'){
      this.setState({
        isEditable: false
      })
      

    }
  }
 
  render() {
    let output = this.state.isEditable ?
        <input onChange= {(e) => this.props.changeHandler(e.target.value, this.props.book.id ) } 
        onKeyPress = { this.changeHandler }
        type='text' placeholder='Enter Name' value= {this.props.book.name} />
        : <p> {this.props.book.name} </p>

      return (
        <li className= 'list-group-item d-flex'>
            {output}
               <span className='ml-auto'>${this.props.book.price}</span>
            <div className= 'ml-4'>
              <span style= {{cursor: 'pointer'}} onClick = { () => this.setState({isEditable: true}) } 
              className="mx-4">
              <i className="far fa-edit"></i>
              </span>
            <span style= {{cursor: 'pointer'}} onClick = { () => this.props.deleteHandler(this.props.book.id) }> 
              <i className="fas fa-trash-alt"></i>
              </span>
            </div>   
        </li>
      )
  }
}

export default Book;
