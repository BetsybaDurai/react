import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)

      this.state = {
          username: '',
          comments: '',
          topic:'react'
      }
    }

    handlerUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
        
    }
    handlerCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    
    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
  render() {
    return (
        <form>
            <div>
                <label>UserName</label>
                <input type='text' value={this.state.username}
                    onChange={this.handlerUsernameChange} />
            </div>

            <div>
                <label>Comments</label>
                <textarea value={this.state.comments}
                    onChange={this.handlerCommentsChange}>
                    
                    </textarea>
            </div>

            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handleTopicChange}>
                    <option value="React"> React</option>
                    <option value="Anguar"> Angular</option>
                    <option value="Vue"> Vue</option>
                </select>
            </div>
     </form>
    )
  }
}

export default Form
