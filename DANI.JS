var input = document.querySelector("#input");
var button = document.querySelector("#btn");
var mainhandleft = document.querySelector("#hand-left-hand");
var handright = document.querySelector("#hand-right");
var thumb = document.querySelector("#thumb");
var finger = document.querySelector("#finger-right");
var one = document.querySelectorAll(".ek");
var lips = document.querySelector("#smile");
var eyeright = document.querySelector("#eye-right");
var eyeleft = document.querySelector("#eye-left");
var swordhand = document.querySelector("#hand-left");

input.addEventListener("input", () => {
  if (input.value === "Why do you") {
    eyeright.classList.add("soch");
    var music = document.getElementById("hmmm");
    music.play();
  } else if (input.value === "Why do you skip core workout?") {
    eyeright.classList.remove("soch");
    var a = Array.from(one);
    a.forEach((elem) => {
      elem.classList.add("visible");
    });
    eyeleft.classList.add("eye-left-sad");
    eyeright.classList.add("eye-right-sad");
    lips.classList.add("sad");
    var music = document.getElementById("cry");
    music.play();
  } else if (input.value === "") {
    eyeleft.classList.remove("eye-left-sad");
    eyeright.classList.remove("eye-right-sad");
    lips.classList.remove("sad");
    var a = Array.from(one);
    a.forEach((elem) => {
      elem.classList.remove("visible");
    });
  } else if (input.value === "Why does your") {
    eyeright.classList.add("soch");
    var music = document.getElementById("hmmm");
    music.play();
  } else if (input.value === "Why does your sword look dangerous?") {
    setTimeout(() => {
      eyeleft.classList.add("eye-left-happy");
      eyeright.classList.add("eye-right-happy");
      lips.classList.add("smile");
      mainhandleft.classList.add("opacity");
      swordhand.style.opacity = "1";
      eyeright.classList.remove("soch");
    }, 200);
    var music = document.getElementById("aah");
    music.play();
    input.disabled = true;
    button.addEventListener("click", () => {
      handright.classList.add("done");
      finger.classList.add("opacity");
      thumb.classList.add("thumb-done");
      handright.classList.add("border");
      setTimeout(() => {
        thumb.classList.add("visible");
      }, 300);
      var music = document.getElementById("ding");
      music.play();
    });
  }
});
