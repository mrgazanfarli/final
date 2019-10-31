import React from 'react';
import { connect } from 'react-redux';

import { setPostInputValue, searchPosts } from '../actions';

class PostSearch extends React.Component {
    handlePostInputChange = value => {
        this.props.setPostInputValue(value);
    }

    handlePostFormSubmit = async event => {
        event.preventDefault();
        await this.props.searchPosts(this.props.postInputValue);
    }

    render() {
        return (
            <form onSubmit={e => this.handlePostFormSubmit(e)}>
                <div className="d-flex">
                    <input
                        className="form-control"
                        type="text"
                        onChange={e => this.handlePostInputChange(e.target.value)}
                        value={this.props.todoInputValue}
                        placeholder="Enter post title..." />
                    <button type="submit" className="btn btn-success ml-3 px-5">Search</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        postInputValue: state.postInputValue,
        posts: state.posts
    }
}

export default connect(mapStateToProps, { setPostInputValue, searchPosts })(PostSearch)