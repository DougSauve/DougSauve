import React from 'react';
import { connect } from 'react-redux';
import { setPosts } from '../../redux/store';

import BlogPost from './BlogPost';

const socket = io();

class BlogList extends React.Component {

  state = {
    err: undefined,
  }

  //props: {
//   post [
//     name,
//     createdAt,
//     content,
//     editedAt (possibly)
//   ]
// }

  componentDidMount() {
    socket.emit('readAllPosts', '', (err, res) => {
      if (err) {
        this.props.dispatch(setPosts());
        return this.setState(() => ({ err }));
      }
      if (res) {
        this.props.dispatch(setPosts({ posts: res }));
        return this.setState(() => ({ err: undefined }));
      }
    });
  }

  render() {
    return (
      <div id = "BlogList">
        {/* Stripe */}
        <div id = "BlogList__Stripe"></div>

        {/* BlogPosts */}
        {this.props.posts.map((post) => {
          return <BlogPost
            key = {post.name}
            title = {post.name}
            createdAt = {post.createdAt}
            editedAt = {post.editedAt}
            content = {post.content}
          />
        })}
      </div>
    );
  }
};

const mapStateToProps = (reduxState) => ({ posts: reduxState.posts });

export default connect(mapStateToProps)(BlogList);
