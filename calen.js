var input = document.querySelector("#input");
var blackleft = document.querySelector("#black-left");
var blackright = document.querySelector("#black-right");
var lips = document.querySelector("#smile");
var handright = document.querySelector("#hand-right");
var pala = document.querySelector("#parda-right");
var button = document.querySelector("#btn");
var ball = document.querySelector("#ball");

input.addEventListener("input", () => {
  if (input.value === "Why are you") {
    ball.style.animation = "upDown 2s infinite";
    var music = document.getElementById("background-music-question");
    music.play();
  } else if (input.value === "Why are you looking fake sage?") {
    blackleft.classList.add("sad-eyebrow-left");
    blackright.classList.add("sad-eyebrow-right");
    blackleft.classList.add("visible");
    blackright.classList.add("visible");
    lips.classList.add("sad");
    var music = document.getElementById("background-music-cry");
    music.play();
  } else if (input.value === "") {
    blackleft.classList.remove("sad-eyebrow-left");
    blackright.classList.remove("sad-eyebrow-right");
    blackleft.classList.remove("visible");
    blackright.classList.remove("visible");
    lips.classList.remove("sad");
  } else if (input.value === "Your dress looks like a real sage!") {
    setTimeout(() => {
      lips.classList.add("smile");
    }, 200);
    var music = document.getElementById("background-music-aah");
    music.play();
    input.disabled = true;
    button.addEventListener("click", () => {
      handright.classList.add("hand-right-done");
      pala.classList.add("parda-right-done");
      setTimeout(() => {
        handright.classList.add("visible");
      }, 500);
      var music = document.getElementById("background-music-ding");
      music.play();
    });
  }
});
