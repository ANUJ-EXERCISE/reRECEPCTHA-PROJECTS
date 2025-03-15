var input = document.querySelector("#input");
var button = document.querySelector("#btn");
var handright = document.querySelector("#hand-right");
var eyebrowleft = document.querySelector("#eyebrow-left");
var eyebrowright = document.querySelector("#eyebrow-right");
var one = document.querySelectorAll("#white");
var head = document.querySelector("#head");
var lips = document.querySelector("#smile");

input.addEventListener("input", () => {
  if (input.value === "Where did your") {
    eyebrowleft.classList.add("soch");
    var music = document.getElementById("background-music-question");
    music.play();
  } else if (input.value === "Where did your hair go?") {
    eyebrowright.classList.remove("soch");
    eyebrowleft.classList.add("eyebrow-left-sad");
    eyebrowright.classList.add("eyebrow-right-sad");
    lips.classList.add("sad");
    var a = Array.from(one);
    a.forEach((elem) => {
      elem.classList.add("visible");
    });
    head.classList.add("opacity");
    var music = document.getElementById("background-music-cry");
    music.play();
  } else if (input.value === "") {
    eyebrowleft.classList.remove("eyebrow-left-sad");
    eyebrowright.classList.remove("eyebrow-right-sad");
    lips.classList.remove("sad");
    var a = Array.from(one);
    a.forEach((elem) => {
      elem.classList.remove("visible");
    });
    head.classList.remove("opacity");
  } else if (input.value === "Your dress") {
    eyebrowleft.classList.add("soch");
    var music = document.getElementById("background-music-question");
    music.play();
  } else if (input.value === "Your dress sense is good!") {
    setTimeout(() => {
      eyebrowright.classList.add("soch");
      lips.classList.add("smile");
    }, 200);
    var music = document.getElementById("background-music-aah");
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
