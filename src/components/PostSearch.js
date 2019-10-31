import React from 'react';
import { connect } from 'react-redux';

import { setPostInputValue, getPosts } from '../actions';
import { status } from '../constants';

class PostSearch extends React.Component {
    handlePostInputChange = value => {
        this.props.setPostInputValue(value);
    }

    handlePostFormSubmit = async event => {
        event.preventDefault();
        await this.props.getPosts(this.props.postInputValue);
    }

    render() {
        const isLoading = this.props.postsStatus === status.loading ? true : false;
        return (
            <form onSubmit={e => this.handlePostFormSubmit(e)}>
                <div className="d-flex">
                    <input
                        className="form-control"
                        type="text"
                        onChange={e => this.handlePostInputChange(e.target.value)}
                        value={this.props.todoInputValue}
                        placeholder="Enter post title..."
                        disabled={isLoading} />
                    <button 
                    type="submit" 
                    className="btn btn-success ml-3 px-5"
                    disabled={isLoading}>Search</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        postInputValue: state.postInputValue,
        posts: state.posts,
        postsStatus: state.postsStatus
    }
}

export default connect(mapStateToProps, { setPostInputValue, getPosts })(PostSearch)