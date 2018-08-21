import React, { Component } from 'react';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    
    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(result => result.json())
        .then(data => this.setState({posts: data }))
        .catch(() => console.log("Error in fetching posts"));
    }
    
    render() {
        let posts = this.state.posts.map(post => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <hr />
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {posts}
            </div>
        );
    }
}

export default Posts;