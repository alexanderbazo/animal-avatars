/* eslint-env node */

"use strict";

const MIN_AVATAR_SIZE = 50,
  MAX_AVATAR_SIZE = 285,
  DEFAULT_AVATAR_SIZE = 250,
  Adjectives = require("./data/animal-adjectives.js"),
  Animals = require("./data/animal-names.js");

function AnimalAvatar() {
  this.name = getRandomName();
}

AnimalAvatar.prototype.getAvatarName = function() {
  return this.name;
};

AnimalAvatar.prototype.getAvatarUrl = function(size) {
  let avatarSize = (!size || size < MIN_AVATAR_SIZE || size > MAX_AVATAR_SIZE) ?
    DEFAULT_AVATAR_SIZE : size;
  return createAvatarUrl(this.name).replace(":size", avatarSize);
};

function getRandomName() {
  // TODO: Prevent duplicates
  let animal = getRandomAnimal(),
    adjective = getRandomAdjectiveFor(animal);
  return adjective + " " + animal;
}

function getRandomAnimal() {
  let source = Animals.values,
    index = Math.floor(Math.random() * source.length);
  return source[index];
}

function getRandomAdjectiveFor(animal) {
  let source = Adjectives.values.filter(adj => adj.startsWith(animal.charAt(0))),
    index = Math.floor(Math.random() * source.length);
  return source[index];
}

function createAvatarUrl(name) {
  return "https://api.adorable.io/avatars/:size/" + name.replace(" ", "-");
}

module.exports = AnimalAvatar;