var input = document.querySelector("#input");
var button = document.querySelector("#btn");
var eyebrowleft = document.querySelector("#eyebrow-left");
var eyebrowright = document.querySelector("#eyebrow-right");
var eye = document.querySelectorAll("#purple-eye");
var lips = document.querySelector("#smile");
var thumb = document.querySelector("#thumb-finger");
var ringfinger = document.querySelector("#ring-finger");
var mainglove = document.querySelector("#main-glove");
var handright = document.querySelector("#hand-right");

input.addEventListener("input", () => {
  if (input.value === "Why did you") {
    eyebrowleft.classList.add("soch");
    var music = document.getElementById("hmmm");
    music.play();
  } else if (input.value === "Why did you skip leg day?") {
    eyebrowleft.classList.remove("soch");
    eyebrowleft.classList.add("sad-eyebrow-left");
    eyebrowright.classList.add("sad-eyebrow-right");
    var a = Array.from(eye);
    a.forEach((elem) => {
      elem.classList.add("visible");
    });
    lips.classList.add("sad");
    var music = document.getElementById("cry");
    music.play();
  } else if (input.value === "") {
    eyebrowleft.classList.remove("sad-eyebrow-left");
    eyebrowright.classList.remove("sad-eyebrow-right");
    lips.classList.remove("sad");
    var a = Array.from(eye);
    a.forEach((elem) => {
      elem.classList.remove("visible");
    });
  } else if (input.value === "No one can") {
    eyebrowleft.classList.add("soch");
    var music = document.getElementById("hmmm");
    music.play();
  } else if (input.value === "No one can stop thanos!") {
    eyebrowleft.classList.remove("soch");
    eyebrowleft.classList.add("happy-eyebrow-left");
    eyebrowright.classList.add("happy-eyebrow-right");
    lips.classList.add("smile");
    var music = document.getElementById("aah");
    music.play();
    input.disabled = true;
    button.addEventListener("click", () => {
      handright.classList.add("done");
      thumb.classList.add("thumb-finger-done");
      ringfinger.style.display = "none";
      var music = document.getElementById("ding");
      music.play();
      mainglove.classList.add("main-glove-setting");
      setTimeout(() => {
        thumb.classList.add("visible");
      }, 300);
    });
  }
});
