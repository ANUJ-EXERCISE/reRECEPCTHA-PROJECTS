var input = document.querySelector("#input");
var dumyhandright = document.querySelector("#hand-r");
var handright = document.querySelector("#hand-right");
var eyebrowleft = document.querySelector("#eyebrow-left");
var eyebrowright = document.querySelector("#eyebrow-right");
var white = document.querySelectorAll("#white");
var lips = document.querySelector("#smile");
var button = document.querySelector("#btn");

input.addEventListener("input", () => {
  if (input.value === "Why does your hair") {
    eyebrowright.classList.add("soch");
    var music = document.getElementById("hmmm");
    music.play();
  } else if (input.value === "Why does your hair look like dog poop?") {
    eyebrowright.classList.remove("soch");
    eyebrowleft.classList.add("sad-eyebrow-left");
    eyebrowright.classList.add("sad-eyebrow-right");
    lips.classList.add("sad");
    var a = Array.from(white);
    a.forEach((elem) => {
      elem.classList.add("visible");
    });
    var music = document.getElementById("cry");
    music.play();
  } else if (input.value === "") {
    eyebrowleft.classList.remove("sad-eyebrow-left");
    eyebrowright.classList.remove("sad-eyebrow-right");
    lips.classList.remove("sad");
    var a = Array.from(white);
    a.forEach((elem) => {
      elem.classList.remove("visible");
    });
  } else if (input.value === "Where did you") {
    eyebrowright.classList.add("soch");
    var music = document.getElementById("hmmm");
    music.play();
  } else if (input.value === "Where did you get that sweater?") {
    setTimeout(() => {
      eyebrowleft.classList.add("soch");
      lips.classList.add("smile");
    }, 200);
    var music = document.getElementById("aah");
    music.play();
    input.disabled = true;
    button.addEventListener("click", () => {
      dumyhandright.classList.add("opacity");
      handright.classList.add("done");
      setTimeout(() => {
        handright.classList.add("visible");
      }, 500);
      var music = document.getElementById("ding");
      music.play();
    });
  }
});
