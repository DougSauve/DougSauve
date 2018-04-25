const {createPost} = require('./blogPosts/createPost');
const {readPost, readAllPosts} = require('./blogPosts/readPost');
const {updatePost, updateName} = require('./blogPosts/updatePost');
const {deletePost, deleteAllPosts} = require('./blogPosts/deletePost');

module.exports = {
  createPost,
  readPost,
  readAllPosts,
  updatePost,
  updateName,
  deletePost,
  deleteAllPosts
};
