import React from 'react'
const initialState = {
    name: '',
    email: '',
    password: '',
    bio: '', 
    country: '',
    gender: '',
    skils: []
}
class PostForm extends React.Component {

    constructor(){
        super()
        this.myForm = React.createRef()
    }
    state = initialState

   changeHandler = event => {
       if(event.trget.type=== 'checkbox'){
           if(event.target.checked){
               this.setState({
                   ... this.state,
                   skils: this.skils.concat(event.target.value)
               })

           }
           else{
               this.setState({
                ... this.state,
                skils: this.state.skils.filter(skill => skill != event.target.value)
               })
           }


       }
       else {
       this.setState({
        [event.target.name]: event.target.value  

       })
    }

   }

   submitHandler = event => {
    event.preventDefault()
    console.log(this.state)
    this.myForm.current.reset()
    this.setState({
        ...initialState
    })
   }
    render() {

        return(

            <form ref={this.myForm} onSubmit = {this.submitHandler}>
            <div className='form-group'>
                <label htmlFor> Enter your full name</label>
                <input
                    className='form-control'
                    type="text" 
                    placeholder='Enter your name' name='name' id ='name'
                    value= {this.state.name}
                    onChange = {this.changeHandler}
                 />
            </div>

            <div className='form-group'>
                <label htmlFor> Enter your email</label>
                <input
                    className='form-control'
                    type="text" 
                    placeholder='Enter your email' name='email' id ='email'
                    value= {this.state.email}
                    onChange = {this.changeHandler}
                 />
            </div>
            <div className='form-group'>
                <label htmlFor> Enter your password</label>
                <input
                    className='form-control'
                    type="text" 
                    placeholder='Enter your password' name='password' id ='password'
                    value= {this.state.password}
                    onChange = {this.changeHandler}
                 />
            </div>
            <div className='form-group'>
                <label htmlFor> Enter your short bio</label>
                <textarea
                    className='form-control'
                    type="text" 
                    placeholder='Enter your bio' bio='bio' id ='bio'
                    value= {this.state.bio}
                    onChange = {this.changeHandler}
                 />
            </div>
            
            <div className='form-group'>
                <label htmlFor='country'>Choose your country</label>
                <select className='form-control' onChange= {this.changeHandler} name='country' id='country'>
                    <option value="Bangladesh">Bangladesh </option>
                    <option value="Australia">Australia </option>
                    <option value="Germany">Germany </option>
                    <option value="Sweden">Sweden </option>
                </select>
                </div>  
                <div className='form-group'>
                <div className='form-check'>
                   <input onChange= {this.changeHandler} type='radio' name='gender' id='gender1' value='Male'/>
                   <label htmlFor='gender'>Male</label>
                </div>
                <div className='form-check'>
                   <input onChange= {this.changeHandler} type='radio' name='gender' id='gender2' value='Female'/>
                   <label htmlFor='gender'>Femle</label>
                </div>
                <div className='form-check'>
                   <input onChange= {this.changeHandler} type='radio' name='gender' id='gender3' value='Other'/>
                   <label htmlFor='gender'>Other</label>
                </div>
            </div>
            <div className='form-group'>
                <div className='form-check'>
                  <input name='skils' onChange= {this.changeHandler}  className='form-check-input' id='js1' value='javascript' type='checkbox' />
                  <labe htmlFor='js'>javascript</labe> 
                </div>  

                <div className='form-check'>
                  <input name='skils' onChange= {this.changeHandler}  className='form-check-input' id='js2' value='Java' type='checkbox' />
                  <labe htmlFor='java'>Java</labe> 
                </div>  

                <div className='form-check'>
                  <input name='skils' onChange= {this.changeHandler}  className='form-check-input' id='js3' value='React' type='checkbox' />
                  <labe htmlFor='React'>javascript</labe> 
                </div>  

            </div>

             <button className='btn btn-primary' tyoe='submit'>submit</button>
            </form>

        )
       
    }
}

export default PostForm;

