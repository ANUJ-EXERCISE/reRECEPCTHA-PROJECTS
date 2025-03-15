var input = document.querySelector("#input");
var button = document.querySelector("#btn");
var handright = document.querySelector("#hand-right");
var one = document.querySelectorAll("#eye");
var smile = document.querySelector("#smiling");
var face = document.querySelector("#face");

input.addEventListener("input", () => {
  if (input.value === `You're not as`) {
    face.classList.add("soch");
  } else if (input.value === `You're not as funny as you think`) {
    face.classList.remove("soch");
    var a = Array.from(one);
    a.forEach((elem) => {
      elem.classList.add("visible");
    });
    var music = document.getElementById("background-music-cry");
    music.play();
  } else if (input.value === "") {
    var a = Array.from(one);
    a.forEach((elem) => {
      elem.classList.remove("visible");
    });
  } else if (input.value === "Your jokes are pun-derful") {
   smile.style.opacity = '1';
   var music = document.getElementById("background-music-sans");
   music.play();
    button.addEventListener("click", () => {
      handright.classList.add("done");
      setTimeout(() => {
        handright.classList.add("visible");
      }, 500);
      var music = document.getElementById("background-music-ding");
      music.play();
    });
  }
});
