'use strict';

const repos = require('./repos.json');
const tags = require('./tags.json');
const user = require('./user.json');

function findRepos(count) {
  return Promise.resolve(repos.slice(0, count));
}

function findTags(count) {
  return Promise.resolve(tags.slice(0, count));
}

function findUser() {
  return Promise.resolve(user);
}

module.exports = {
  findRepos,
  findTags,
  findUser,
};
