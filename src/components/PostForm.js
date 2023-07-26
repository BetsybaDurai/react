import axios from 'axios'
import React, { Component } from 'react'

class PostForm extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
          userId: '',
          title: '',
          body:''
      }
    }
    
    changeHandler=(e) => {
        this.setState({[e.target.name]: e.target.value})  // to handle every values from form
    }

    submitHandler = (e) => {
        e.preventDefault(); // to avoid page refresh
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
      const {userId, title, body}= this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <input type="text" name="userId" value={userId} placeholder='UserId'
                onChange={this.changeHandler}    />
            </div> 
            
            <div>
                <input type="text" name="title" value={title} placeholder='Title'
                onChange={this.changeHandler} />
            </div> 

            <div>
                <input type="text" name="body" value={body} placeholder='Body'
                onChange={this.changeHandler} />
                </div>     
                <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm
