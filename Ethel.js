var input = document.querySelector("#input");
var button = document.querySelector("#btn");
var eyebrowleft = document.querySelector("#eyebrow-left");
var eyebrowright = document.querySelector("#eyebrow-right");
var lips = document.querySelector("#smile");
var dumyhand = document.querySelector("#hand-right-dumy");
var handright = document.querySelector("#hand-right");
var white = document.querySelectorAll("#white");

input.addEventListener("input", () => {
  if (input.value === "Where did your") {
    eyebrowright.classList.add("soch");
    var music = document.getElementById("hmmm");
    music.play();
  } else if (input.value === "Where did your teeth go?") {
    eyebrowright.classList.remove("soch");
    eyebrowright.classList.add("right-eyebrow-sad");
    eyebrowleft.classList.add("left-eyebrow-sad");
    lips.classList.add("sad");
    var a = Array.from(white);
    a.forEach((elem) => {
      elem.classList.add("visible");
    });
    var music = document.getElementById("cry");
    music.play();
  } else if (input.value === "") {
    eyebrowright.classList.remove("right-eyebrow-sad");
    eyebrowleft.classList.remove("left-eyebrow-sad");
    lips.classList.remove("sad");
    var a = Array.from(white);
    a.forEach((elem) => {
      elem.classList.remove("visible");
    });
  } else if (input.value === "Why do you") {
    eyebrowright.classList.add("soch");
    var music = document.getElementById("hmmm");
    music.play();
  } else if (input.value === "Why do you look so wise?") {
    setTimeout(() => {
      eyebrowright.classList.remove("soch");
      eyebrowleft.classList.add("soch");
      eyebrowright.classList.add("soch");
    }, 200);
    input.disabled = true;
    lips.classList.add("smile");
    var music = document.getElementById("aah");
    music.play();
    button.addEventListener("click", () => {
      dumyhand.classList.add("opacity");
      handright.classList.add("done");
      var music = document.getElementById("ding");
      music.play();
      setTimeout(()=>{
        handright.classList.add('visible')
      },300)
    });
  }
});
