import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
const socket = io();

import sanitize from '../../../utils/sanitize';
import { setBorderMarginHeight, setBorderMarginWidth } from '../../../utils/borderMargins';
import { setPosts } from '../../redux/store';


class Dashboard extends React.Component {

  state = {
    message: undefined,
    resetForm: false
  };

  componentDidMount() {
    socket.on('connect', () => {
      console.log('connected from client.');
    });

    //border margin styling
    document.getElementById('dash__post').style.width = setBorderMarginWidth(20);
    document.getElementById('dash__post').style.height = setBorderMarginHeight(20);
    document.getElementById('dash__posts').style.width = setBorderMarginWidth(20);

    //add the submit button dynamically
    const button = document.createElement('button');
    const buttonText = document.createTextNode('submit');
    button.appendChild(buttonText);
    button.setAttribute("class", "dash__button dash__form__width");
    button.addEventListener("click", this.handleSubmitPost);
    document.getElementById('dash__post__form').appendChild(button);
  }
  componentDidUpdate () {

    if (this.state.resetForm) {
      //empty the form
      const postFormElements =  document.getElementById('dash__post__form').elements;
      postFormElements.action.value = "";
      postFormElements.name.value = "";
      postFormElements.content.value = "";
    }

    //clear all previous posts so they don't stack
    while (document.getElementById('dash__posts').firstChild) dash__posts.removeChild(dash__posts.firstChild);

    if (this.props.posts[0]) {
      document.getElementById('dash__posts').style.display = "flex";
    } else {
      document.getElementById('dash__posts').style.display = "none";
    }

    //for each item, add a div to dash__posts.
    this.props.posts.forEach((post) => {

      const newPost = document.createElement('div');
      newPost.setAttribute("class", "dash__post");

        const newPostHeader = document.createElement('div');
        newPostHeader.setAttribute("class", "dash__post__header");

          const name = document.createTextNode(`${post.name}  `);
          newPostHeader.appendChild(name);

          const createdAt = document.createTextNode(` ${moment(post.createdAt).format('dddd, MMMM Do, YYYY')} `);
          newPostHeader.appendChild(createdAt);

          const editedAt = document.createTextNode((post.editedAt === undefined) ? '' : moment(post.editedAt).format('dddd, MMMM Do, YYYY'));
          newPostHeader.appendChild(editedAt);

          newPost.appendChild(newPostHeader);

        const content = document.createTextNode(post.content);
        newPost.appendChild(content);


      document.getElementById('dash__posts').appendChild(newPost);
    });

  }

  handleSubmitPost = (e) => {
    e.preventDefault();

    const action = sanitize(document.getElementById('dash__post__form').elements.action.value.trim().toLowerCase());

    //error handling
    if (action === "") return this.setState(() => ({message: 'What should I do with this?', resetForm: false }));
    if(['create', 'read', 'read all', 'update', 'update name', 'delete', 'delete all', 'clear'].indexOf(action) < 0) return this.setState(() => ({message: 'Invalid command.', resetForm: false }));

    const name = sanitize(document.getElementById('dash__post__form').elements.name.value);
    const content = sanitize(document.getElementById('dash__post__form').elements.content.value);

    this.chooseAction(action, name, content);
  }
  chooseAction = (action, name, content) => {

    switch (sanitize(action)) {

      case 'create':
      if (!name || !content) return this.setState(() => ({message: 'You need a name and some content to create a post.', resetForm: false }));
      this.writeToDB(name, content);
      break;

      case 'read':
      if (!name) return this.setState(() => ({message: 'Please choose a post to read.', resetForm: false }));
      this.readFromDB(name);
      break;

      case 'read all':
      this.readAllFromDB(name);
      break;

      case 'update':
      if (!name || !content) return this.setState(() => ({message: 'You need a name and the new content to update a post.', resetForm: false }));
      this.updatePostToDB(name, content);
      break;

      case 'update name':
      if (!name || !content) return this.setState(() => ({message: 'You need a name and the new name to update a post\'s name.', resetForm: false }));
      this.updateNameToDB(name, content);
      break;

      case 'delete':
      if (!name) return this.setState(() => ({message: 'Please choose a post to delete.', resetForm: false }));
      this.deleteFromDB(name);
      break;

      case 'delete all':
      if (!name) return this.setState(() => ({message: 'Please enter the password in the name space.', resetForm: false }));
      this.deleteAllFromDB(name);
      break;

      case 'clear':
      this.clearPosts();
      break;
    };
  }
  writeToDB = (name, content) => {
    name = sanitize(name);
    content = sanitize(content);

    socket.emit('createPost', { name, content }, (err, res) => {
      if (err) {
        this.setState(() => ({ message: err, resetForm: false }));
        this.props.dispatch(setPosts());
      } else {
        this.setState(() => ({ message: `${res.name} was saved.`, resetForm: true }));
        this.props.dispatch(setPosts());
      }
    });
  }
  readFromDB = (name) => {
    socket.emit('readPost', name, (err, res) => {
      if (err) {
        this.props.dispatch(setPosts());
        return this.setState(() => ({ message: err, resetForm: false }));
      }
      if (res) {
        this.props.dispatch(setPosts({ posts: res }));
        this.setState(() => {
          return {
            message: undefined,
            resetForm: true
          }
        });
      }
    });
  }
  readAllFromDB = (name) => {
    socket.emit('readAllPosts', name, (err, res) => {
      if (err) {
        this.props.dispatch(setPosts());
        return this.setState(() => ({ message: err, posts: [], resetForm: false }));
      }
      if (res) {
        this.props.dispatch(setPosts({ posts: res }));
        this.setState(() => {
          return {
            message: undefined,
            resetForm: true
          }
        });
      }
    });
  }
  updatePostToDB = (name, content) => {
    socket.emit('updatePost', {name, content}, (err, res) => {
      if (err) {
        this.props.dispatch(setPosts());
        this.setState(() => ({ message: err, resetForm: false }));
      } else {
        this.props.dispatch(setPosts());
        if (res) this.setState(() => ({message: `${res.name} was updated.`, resetForm: true}));
      }
    });
  }
  updateNameToDB = (name, content) => {
    socket.emit('updateName', {name, content}, (err, res) => {
      if (err) {
        this.props.dispatch(setPosts());
        this.setState(() => ({ message: err, resetForm: false }));
      } else {
        this.props.dispatch(setPosts());
        if (res) this.setState(() => ({message: `${name} was changed to ${res.name}.`, resetForm: true}));
      }
    });
  }
  deleteFromDB = (name) => {
    socket.emit('deletePost', name, (err, res) => {
      if (err) {
        this.props.dispatch(setPosts());
        return this.setState(() => ({message: err, resetForm: false }));
      }
      if (res) {
        this.props.dispatch(setPosts());
        this.setState(() => ({ message: `${res.name} was deleted.`, resetForm: true }));
      }
    });
  }
  deleteAllFromDB = (password) => {
    socket.emit('deleteAllPosts', password, (err, res) => {
      if (err) {
        this.props.dispatch(setPosts());
        return this.setState(() => ({message: err, resetForm: false }));
      }
      if (res) {
        this.props.dispatch(setPosts());
        this.setState(() => ({ message: `All posts were deleted.`, resetForm: true }));
      }
    });
  }
  clearPosts = () => {
    this.props.dispatch(setPosts());
    this.setState(() => ({ message: undefined, resetForm: true }));
  }

  render () {
    return (
      <div
        id = "dash__post"
        className = "dash__frame__style dash__frame__positioning"
      >
        <form
          id = "dash__post__form"
          method = "POST"
        >
          <p id = "dash__post__message">
            {this.state.message}
          </p>

          <input
            className = "dash__input dash__form__width"
            type = "text"
            name = "name"
            placeholder = "post name"
            autoFocus
          />

          <textarea
            className = "dash__input dash__form__width"
            rows = {3}
            cols = {50}
            name = "content"
            placeholder = "blogity blog blog..."
          />

          <input
            className = "dash__input dash__form__width"
            type = "text"
            name = "action"
            placeholder = "action"
          />

        </form>
      </div>
    )
  }
};

const mapStateToProps = (reduxState) => ({ posts: reduxState.posts });

export default connect(mapStateToProps)(Dashboard);
