import React from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../actions';

class PostList extends React.Component {
    async componentDidMount() {
        await this.props.getPosts();
    }

    render() {
        if (this.props.postsStatus === 'LOADING') {
            return (
                <h3>Loading...</h3>
            )
        } else if (this.props.postsStatus === 'SUCCEEDED') {
            return (
                this.props.posts.map((post, index) => {
                    return (
                        <div>
                            <h5 key={post.id}>{index + 1}. {post.title}</h5>
                            <p>{post.body}</p>
                        </div>
                    )
                })
            )
        } else {
            return (
                <h3>Error occured!</h3>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        postsStatus: state.postsStatus
    };
}

export default connect(mapStateToProps, { getPosts })(PostList);