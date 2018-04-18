const {createPost} = require('./crud/createPost');
const {readPost, readAllPosts} = require('./crud/readPost');
const {updatePost, updateName} = require('./crud/updatePost');
const {deletePost, deleteAllPosts} = require('./crud/deletePost');

module.exports = {
  createPost,
  readPost,
  readAllPosts,
  updatePost,
  updateName,
  deletePost,
  deleteAllPosts
};
