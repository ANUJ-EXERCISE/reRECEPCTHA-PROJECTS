let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let handleft = document.querySelector("#hand-left");
let handright = document.querySelector("#hand-right");
var lips = document.querySelector("#smile");
var head = document.querySelector("#head");
var eye = document.querySelectorAll("#white");

input.addEventListener("input", () => {
  if (input.value === "You look like") {
    head.classList.add("soch");
    var music = document.getElementById("background-music-question");
    music.play();
  } else if (input.value === "You look like a default Avatar!") {
    setTimeout(() => {
      handleft.classList.add("uper");
      handright.classList.add("uper");
      head.classList.remove("soch");
    }, 200);
    var music = document.getElementById("background-music-aah");
    music.play();
    setTimeout(() => {
      handleft.classList.remove("uper");
      handright.classList.remove("uper");
    }, 800);
  } else if (input.value === "Why you look Minecraft character?") {
    var a = Array.from(eye);
    a.forEach((elem) => {
      elem.classList.add("visible");
    });
    lips.classList.add("sad");
    input.disabled = true;
    handright.style.transition = "none";
    var music = document.getElementById("background-music-cry");
    music.play();
    btn.addEventListener("click", () => {
      handright.classList.add("done");
      setTimeout(() => {
        handright.classList.add("visible");
      }, 500);
      var music = document.getElementById("background-music-ding");
      music.play();
    });
  }
});
