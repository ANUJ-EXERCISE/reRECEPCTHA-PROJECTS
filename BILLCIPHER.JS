var face = document.querySelector("#face");
var eye = document.querySelector("#eye");
var handleft = document.querySelector("#hand-left");
var handright = document.querySelector("#hand-right");
var fingerleft = document.querySelector("#finger-left");
var fingerright = document.querySelector("#finger-right");
var thumbleft = document.querySelector("#thumb-left");
var thumbright = document.querySelector("#thumb-right");
var button = document.querySelector("#btn");
var hatline = document.querySelector("#hat-line");
var hatflat = document.querySelector("#hat-flat");
var column = document.querySelectorAll("#column");
var line = document.querySelectorAll("#line");
var cipher = document.querySelector("#cipher");
var input = document.querySelector("input");
var black = document.querySelector("#black");
var legleft = document.querySelector("#leg-left");
var legright = document.querySelector("#leg-right");

input.addEventListener("input", () => {
  if (input.value === "You are smart") {
    black.classList.add("soch");
    var music = document.getElementById("background-music-question");
    music.play();
  } else if (input.value === "You are smart and powerful") {
    var music = document.getElementById("background-music-aah");
    music.play();
  } else if (input.value === "You are just a crazy triangle!") {
    var music = document.getElementById("background-music-fear");
    music.play();
    cipher.style.animation = "none";
    face.classList.add("red");
    var a = Array.from(column);
    a.forEach((elem) => {
      elem.style.border = "1px solid red";
    });
    var b = Array.from(line);
    b.forEach((elem) => {
      elem.style.border = "1px solid red";
    });
    document.body.style.backgroundColor = 'black';
    hatline.classList.add("yellow");
    hatflat.classList.add("yellow");
    handleft.classList.add("yellow");
    handright.classList.add("yellow");
    thumbleft.classList.add("yellow");
    thumbright.classList.add("yellow");
    fingerleft.classList.add("yellow");
    fingerright.classList.add("yellow");
    eye.style.backgroundColor = "black";
    black.classList.add("yellow");
    legleft.classList.add("yellow");
    legright.classList.add("yellow");
    button.addEventListener("click", () => {
      setTimeout(() => {
        cipher.classList.add("angry");
        var music = document.getElementById("background-music-shouting");
        document.querySelector("#write").classList.add("opacity");
        music.play();
      }, 500);
    });
  }
});
