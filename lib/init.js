/* eslint-env browser */

var AnimalAvatars = AnimalAvatars || {};

(function() {
  "use strict";

  AnimalAvatars.init = function() {
    return new Promise(function(resolve) {
      let adjectives = AnimalAvatars.Data.Adjectives,
        animals = AnimalAvatars.Data.Animals;
      Promise.all([adjectives, animals]).then(
        function(results) {
          AnimalAvatars.Adjectives = results[0];
          AnimalAvatars.Animals = results[1];
          resolve();
        });
    });
  };

}());