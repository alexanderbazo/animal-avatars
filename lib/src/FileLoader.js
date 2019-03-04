/* eslint-env browser */

var AnimalAvatars = AnimalAvatars || {};

AnimalAvatars.FileLoader = (function() {
  "use strict";
  var that = {};

  function loadFile(transform, url) {
    return new Promise(function(resolve) {
      fetch(url).then(response => response[transform]()).then(text => resolve(text));
    });
  }

  that.loadJSON = loadFile.bind(this, "json");
  return that;
}());