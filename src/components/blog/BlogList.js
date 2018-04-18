import React from 'react';
import moment from 'moment';

const socket = io();

export default class BlogList extends React.Component {

  state = {
    err: undefined,
    posts: []
  }

  componentDidMount() {
    socket.emit('readAllPosts', {}, (err, res) => {
      if (err) return this.setState(() => ({ err, posts: [] }));
      if (res) {
        this.setState(() => {
          return {
            err: undefined,
            posts: res
          }
        });
      }
    });
  }

  componentDidUpdate() {
    //clear all previous posts so they don't stack
    const postsDiv = document.getElementById('BlogList__post__container');
    while (postsDiv.firstChild) postsDiv.removeChild(postsDiv.firstChild);

    //for each item, add a div to posts.
    this.state.posts.forEach((post) => {

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
            if (post.editedAt === "DEAL WITH EDITEDATE LATER") {
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
//next thing to do here, optionally, is make the blog update in real time.
  render() {
    return (
      <div id = "BlogList__post__container">
      </div>
    )
  }
};
