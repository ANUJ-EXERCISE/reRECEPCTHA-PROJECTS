let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let handleft = document.querySelector("#hand-left");
let handright = document.querySelector("#hand-right");
var lips = document.querySelector("#smile");
var head = document.querySelector("#head");
var eye = document.querySelectorAll("#eye");

input.addEventListener("input", () => {
  if (input.value === "Where is your") {
    head.classList.add("soch");
    var music = document.getElementById("background-music-question");
    music.play();
  } else if (input.value === "Where is your fashion sense?") {
    handleft.classList.add("uper");
    handright.classList.add("uper");
    head.classList.remove("soch");
    var music = document.getElementById("background-music-cry");
    music.play();
    setTimeout(() => {
      handleft.classList.remove("uper");
      handright.classList.remove("uper");
    }, 800);
    lips.classList.add("sad");
    var a = Array.from(eye);
    a.forEach((elem) => {
      elem.classList.add("visible");
    });
  }else if(input.value === ''){
    lips.classList.remove("sad");
    var a = Array.from(eye);
    a.forEach((elem) => {
      elem.classList.remove("visible");
    });
  } else if (input.value === "Why are you so legendary?") {
    setTimeout(() => {
      handright.style.transition = "none";
      lips.classList.add('smile');
    }, 200);
    input.disabled = true;
    var music = document.getElementById("background-music-aah");
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
