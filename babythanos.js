var input = document.querySelector("#input");
var button = document.querySelector("#btn");
var eyeleft = document.querySelector("#purple-left");
var eyeright = document.querySelector("#purple-right");
var handright = document.querySelector("#hand-right");
var shoulder = document.querySelector("#shoulder");
var teeth = document.querySelectorAll("#teeth");
var smile = document.querySelector("#smile");
var one = document.querySelectorAll(".ek");

input.addEventListener("input", () => {
  if (input.value === "Your dad has died") {
    eyeleft.classList.add("soch");
    var music = document.getElementById("hmmm");
    music.play();
  } else if (input.value === "Your dad has died from fork") {
    eyeleft.classList.remove("soch");
    eyeleft.classList.remove("purple-left-sad");
    eyeright.classList.remove("purple-right-sad");
    var music = document.getElementById("cry");
    music.play();
    var a = Array.from(one);
    a.forEach((elem) => {
      elem.classList.add("visible");
    });
  } else if (input.value === "") {
    var a = Array.from(one);
    a.forEach((elem) => {
      elem.classList.remove("visible");
    });
    smile.classList.remove("sad");
  } else if (input.value === "Your voice matches your dad!") {
    setTimeout(() => {
      eyeleft.classList.add("happy-purple-left");
      eyeright.classList.add("happy-purple-right");
      smile.classList.add("smile");
      var b = Array.from(teeth);
      b.forEach((elem) => {
        elem.style.opacity = 1;
      });
    }, 200);
    var music = document.getElementById("aah");
    music.play();
    input.disabled = true;
    button.addEventListener("click", () => {
      let music = document.getElementById("ding");
      music.play();
      handright.classList.add("done");
      setTimeout(() => {
        handright.classList.add("visible");
      }, 300);
      shoulder.style.opacity = 1;
    });
  }
});
