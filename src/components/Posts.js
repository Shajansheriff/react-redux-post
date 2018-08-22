import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
    componentWillMount() {
        this.props.fetchPosts()
    }
    
    render() {
        let posts = this.props.posts.map(post => (
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

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(Posts);