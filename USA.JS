var input = document.querySelector("#input");
var button = document.querySelector("#btn");
var teeth = document.querySelector("#teeth");
var one = document.querySelectorAll(".ek");
var eyeleft = document.querySelector("#eye-left");
var eyeright = document.querySelector("#eye-right");
var handright = document.querySelector("#hand-right");
var smile = document.querySelector("#smile");
var face = document.querySelector("#face");

input.addEventListener("input", () => {
  if (input.value === `You won't`) {
    face.classList.add("soch");
    var music = document.getElementById("background-music-question");
    music.play();
  }
  if (input.value === `You won't get Greenland`) {
    face.classList.remove("soch");
    var a = Array.from(one);
    a.forEach((elem) => {
      elem.classList.add("visible");
    });
    eyeleft.classList.add("eyebrow-left-sad");
    eyeright.classList.add("eyebrow-right-sad");
    var music = document.getElementById("background-music-cry");
    music.play();
    smile.classList.add("sad");
  }
  if (input.value === "") {
    var a = Array.from(one);
    a.forEach((elem) => {
      elem.classList.remove("visible");
    });
    smile.classList.remove("sad");
    eyeleft.classList.remove("eyebrow-left-sad");
    eyeright.classList.remove("eyebrow-right-sad");
  }
  if (input.value === "You will get Greenland!") {
    setTimeout(() => {
      eyeleft.classList.add("eyebrow-left-happy");
      eyeright.classList.add("eyebrow-right-happy");
      smile.classList.add("smile");
      teeth.style.opacity = 1;
      input.disabled = true;
    }, 200);
    var music = document.getElementById("background-music-aah");
    music.play();
    button.addEventListener("click", () => {
      setTimeout(() => {
        handright.classList.add("visible");
      }, 500);
      var music = document.getElementById("background-music-ding");
      music.play();
    });
  }
});
