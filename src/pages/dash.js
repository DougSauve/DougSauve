import React from 'react';
import moment from 'moment';

const socket = io();


export default class Dash extends React.Component {

  state = {
    message: undefined,
    resetForm: false,
    posts: []
  }

  componentDidMount() {
    socket.on('connect', () => {
      console.log('connected from client.');
    });
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

    if (this.state.posts[0]) {
      document.getElementById('dash__posts').style.display = "flex";
    } else {
      document.getElementById('dash__posts').style.display = "none";
    }

    //for each item, add a div to dash__posts.
    this.state.posts.forEach((post) => {

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

  getVMin = () => {
    let vMin = window.innerHeight;

    if (window.innerHeight > window.innerWidth) {
      vMin = window.innerWidth;
    }

    return vMin;
  }
  //move this
  setMarginHeight = (marginSize) => {
    const vMin = this.getVMin();
    const num = Math.floor(window.innerHeight - ((vMin * marginSize) / 100));
    return num + "px";
  }
  setMarginWidth = (marginSize) => {
    const vMin = this.getVMin();
    const num = Math.floor(window.innerWidth - ((vMin * marginSize) / 100));
    return num + "px";
  }

  handleSubmitPassword = (e) => {
    e.preventDefault();

    const passwordElement = document.getElementById('dash__password__form').elements.password;
    const password = passwordElement.value;

    if (password === "Roons") {

      document.getElementById('dash__password').style.display = "none"
      document.getElementById('dash__post').style.display = "block";
      document.getElementById('dash__post').style.width = this.setMarginWidth(20);
      document.getElementById('dash__post').style.height = this.setMarginHeight(20);

      //set dash__posts's width here too
      document.getElementById('dash__posts').style.width = this.setMarginWidth(20);

      //add the submit button dynamically
      const button = document.createElement('button');
      const buttonText = document.createTextNode('submit');
      button.appendChild(buttonText);
      button.setAttribute("class", "dash__button dash__form__width");
      button.addEventListener("click", this.handleSubmitPost);
      document.getElementById('dash__post__form').appendChild(button);

    } else {
      console.log('failed password attempt.');
    }

    passwordElement.value = "";
  }
  handleSubmitPost = (e) => {
    e.preventDefault();

    const action = document.getElementById('dash__post__form').elements.action.value.trim().toLowerCase();

    //error handling
    if (action === "") return this.setState(() => ({message: 'What should I do with this?', resetForm: false }));
    if(['create', 'read', 'read all', 'update', 'update name', 'delete', 'delete all', 'clear'].indexOf(action) < 0) return this.setState(() => ({message: 'Invalid command.', resetForm: false }));

    const name = document.getElementById('dash__post__form').elements.name.value;
    const content = document.getElementById('dash__post__form').elements.content.value;

    this.chooseAction(action, name, content);
  }
  chooseAction = (action, name, content) => {


    switch (action) {

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

    socket.emit('createPost', {name, content}, (err, res) => {
      if (err){
        this.setState(() => ({ message: err, posts: [], resetForm: false }));
      } else {
        this.setState(() => ({ message: `${res.name} was saved.`, posts: [], resetForm: true }));
      }
    });
  }
  readFromDB = (name) => {
    socket.emit('readPost', name, (err, res) => {
      if (err) return this.setState(() => ({ message: err, posts: [], resetForm: false }));
      if (res) {
        this.setState(() => {
          return {
            message: undefined,
            posts: [res],
            resetForm: true
          }
        });
      }
    });
  }
  readAllFromDB = (name) => {
    socket.emit('readAllPosts', name, (err, res) => {
      if (err) return this.setState(() => ({ message: err, posts: [], resetForm: false }));
      if (res) {
        this.setState(() => {
          return {
            message: undefined,
            posts: res,
            resetForm: true
          }
        });
      }
    });
  }
  updatePostToDB = (name, content) => {
    socket.emit('updatePost', {name, content}, (err, res) => {
      if (err){
        this.setState(() => ({ message: err, posts: [], resetForm: false }));
      } else {
        if (res) this.setState(() => ({message: `${res.name} was updated.`, posts: [], resetForm: true}));
      }
    });
  }
  updateNameToDB = (name, content) => {
    socket.emit('updateName', {name, content}, (err, res) => {
      if (err){
        this.setState(() => ({ message: err, posts: [], resetForm: false }));
      } else {
        if (res) this.setState(() => ({message: `${name} was changed to ${res.name}.`, posts: [], resetForm: true}));
      }
    });
  }
  deleteFromDB = (name) => {
    socket.emit('deletePost', name, (err, res) => {
      if (err) return this.setState(() => ({message: err, resetForm: false }));
      if (res) this.setState(() => ({ message: `${res.name} was deleted.`, posts: [], resetForm: true }));
    });
  }
  deleteAllFromDB = (password) => {
    socket.emit('deleteAllPosts', password, (err, res) => {
      if (err) return this.setState(() => ({message: err, resetForm: false }));
      if (res) this.setState(() => ({ message: `All posts were deleted.`, posts: [], resetForm: true }));
    });
  }
  clearPosts = () => {
    this.setState(() => ({ message: undefined, posts: [], resetForm: true }));
  }

  render() {
    return (
      <div id = "dash">
          <div id = "dash__background"></div>


          <div id = "dash__password" className = "dash__frame__style dash__frame__positioning">
          <p id = "dash__password__greeting">Hey dude. What's the password?</p>
          <form id = "dash__password__form" method = "POST">
            <input className = "dash__input" type = "text" name = "password" placeholder = "password" autoFocus autoComplete = "off" />
            <button className = "dash__button" onClick = {this.handleSubmitPassword}>Submit</button>
          </form>
        </div>


        <div id = "dash__post"  className = "dash__frame__style dash__frame__positioning" style = {{ display: 'none' }}>
          <form id = "dash__post__form" method = "POST">
            <p id = "dash__post__message">{this.state.message}</p>
            <input className = "dash__input dash__form__width" type = "text" name = "name" placeholder = "post name" autoFocus />
            <textarea className = "dash__input dash__form__width" rows = {3} cols = {50} name = "content" placeholder = "blogity blog blog..." />
            <input className = "dash__input dash__form__width" type = "text" name = "action" placeholder = "action" />
          </form>
        </div>
        <div id = "dash__posts" className = "dash__frame__style"></div>
      </div>
    )
  }
}
