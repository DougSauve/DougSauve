import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { setPosts } from '../../redux/store';

const socket = io();

class BlogList extends React.Component {

  state = {
    err: undefined,
  }

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

  componentDidUpdate(props) {
    //clear all previous posts so they don't stack
    const postsDiv = document.getElementById('BlogList__post__container');
    while (postsDiv.firstChild) postsDiv.removeChild(postsDiv.firstChild);

    //for each item, add a div to posts.
    this.props.posts.forEach((post) => {

      //part below adds it straight to the page.
      const newPost = document.createElement('div');
      newPost.setAttribute("class", "BlogList__post");

        //title bar
        const postTitleBar = document.createElement('div');
        postTitleBar.setAttribute("class", "BlogList__post__titleBar");

          //name
          const postName = document.createElement('div');
          postName.setAttribute("class", "BlogList__post__name");

            const name = document.createTextNode(post.name);
            postName.appendChild(name);

          postTitleBar.appendChild(postName);

          //timeStamp
          const postTimeStamp = document.createElement('div');
          postTimeStamp.setAttribute("class", "BlogList__post__timeStamp");
            //createdAt text
            const postCreatedAtText = document.createElement('span');
            postCreatedAtText.setAttribute("class", "BlogList__post__timeStamp-text");

              const createdAtText = document.createTextNode('posted on ');
              postCreatedAtText.appendChild(createdAtText);

            postTimeStamp.appendChild(postCreatedAtText);
            //createdAt
            const postCreatedAt = document.createElement('span');
            postCreatedAt.setAttribute("class", "BlogList__post__createdAt");

              const createdAt = document.createTextNode(moment(post.createdAt).format('dddd, MMMM Do, YYYY'));
              postCreatedAt.appendChild(createdAt);

            postTimeStamp.appendChild(postCreatedAt);
            if (post.editedAt === "THIS IS A PROBLEM") {
              //editedAt text
              const postEditedAtText = document.createElement('span');
              postEditedAtText.setAttribute("class", "BlogList__post__timeStamp-text");

                const editedAtText = document.createTextNode('edited on');
                postEditedAtText.appendChild(editedAtText);

              newPost.appendChild(postEditedAtText);
              //editedAt
              const postEditedAt = document.createElement('span');
              postEditedAt.setAttribute("class", "BlogList__post__editedAt");

                const editedAt = document.createTextNode(moment(post.editedAt).format(' dddd, MMMM Do, YYYY'));
                postCreatedAt.appendChild(editedAt);

              newPost.appendChild(postEditedAt);
            }


          postTitleBar.appendChild(postTimeStamp);

        newPost.appendChild(postTitleBar);
        //content
        const postContent = document.createElement('div');
        postContent.setAttribute("class", "BlogList__post__content");

          const content = document.createTextNode(post.content);
          postContent.appendChild(content);

        newPost.appendChild(postContent);

      document.getElementById('BlogList__post__container').appendChild(newPost);

      //stripe
      const stripe = document.createElement('div');
      stripe.setAttribute("class", "BlogList__stripe");
      document.getElementById('BlogList__post__container').appendChild(stripe);
    });
  }

  render() {
    return (
      <div id = "BlogList__post__container">
      </div>
    )
  }
};

const mapStateToProps = (reduxState) => ({ posts: reduxState.posts });

export default connect(mapStateToProps)(BlogList);
