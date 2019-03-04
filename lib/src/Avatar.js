/* eslint-env browser */

var AnimalAvatars = AnimalAvatars || {};

AnimalAvatars.Avatar = (function() {
  "use strict";

  function Avatar() {
    this.name = getRandomName();
  }

  Avatar.prototype.getAvatarName = function() {
    return this.name;
  };

  Avatar.prototype.getAvatarUrl = function(size) {
    let avatarSize = (!size ||size < 50 || size > 285) ? 250 : size;
    return createAvatarUrl(this.name).replace(":size", avatarSize);
  };

  function getRandomName() {
    // TODO: Prevent duplicates
    let animal = getRandomAnimal(),
    adjective = getRandomAdjectiveFor(animal);
    return adjective + " " + animal;
  }

  function getRandomAnimal() {
    let source = AnimalAvatars.Animals.values,
      index = Math.floor(Math.random() * source.length);
    return source[index];
  }

  function getRandomAdjectiveFor(animal) {
    let source = AnimalAvatars.Adjectives.values.filter(adj => adj.startsWith(animal.charAt(0))),
    index = Math.floor(Math.random() * source.length);
    return source[index];
  }

  function createAvatarUrl(name) {
    return "https://api.adorable.io/avatars/:size/" + name.replace(" ", "-");
  }

  return Avatar;
}());