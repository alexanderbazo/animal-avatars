/* eslint-env browser */
/* global AnimalAvatars */

(function() {
  "use strict";

  var avatarTemplate = document.querySelector("#avatar-template").innerHTML.trim(),
    avatarGallery = document.querySelector("#avatars");

  AnimalAvatars.init().then(generateAvatars);

  function generateAvatars() {
    for (let i = 0; i < 8; i++) {
      let avatar = new AnimalAvatars.Avatar(),
        el = createAvatarElement(avatar);
      avatarGallery.appendChild(el);
    }
  }

  function createAvatarElement(avatar) {
    let container = document.createElement("div");
    container.innerHTML = avatarTemplate;
    container.querySelector(".image").src = avatar.getAvatarUrl();
    container.querySelector(".name").innerHTML = avatar.getAvatarName();
    return container.firstChild;
  }

}());