import React, { Component } from 'react';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handlSubmit = this.handlSubmit.bind(this)
    }
    handleInputChange(e) {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }

    handlSubmit(e) {
        e.preventDefault()
        const postData = {
            title: this.state.title,
            body: this.state.body
        }
        fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(result => result.json())
        .then(data => console.log(data))
    }
    
    render() {
        return (
            <div>
                <form>
                    <label>Title:</label>
                    <br />
                    <input type="text" name="title" onChange={this.handleInputChange} value={this.state.title}/>
                    <br/>
                    <label>Body:</label>
                    <br />
                    <textarea name="body" onChange={this.handleInputChange} value={this.state.body}></textarea>
                    <br/>
                    <input type="submit" onClick={this.handlSubmit} value="Submit" />
                </form>
            </div>
        );
    }
}

export default PostForm;