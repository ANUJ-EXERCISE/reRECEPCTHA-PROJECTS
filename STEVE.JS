var input = document.querySelector("#input");
var button = document.querySelector("#btn");
var handright = document.querySelector("#hand-right");
var one = document.querySelectorAll(".ek");
var lips = document.querySelector("#smile");
var lipleft = document.querySelector("#lip-left");
var lipright = document.querySelector("#lip-right");
var eyes = document.querySelector("#top");

input.addEventListener("input", () => {
  if (input.value === "There is a") {
    eyes.classList.add("soch");
    var music = document.getElementById("background-music-question");
    music.play();
  } else if (input.value === "There is a CREEPER behind you") {
    var a = Array.from(one);
    a.forEach((elem) => {
      elem.classList.add("visible");
    });
    var music = document.getElementById("background-music-cry");
    music.play();
  } else if (input.value === "There is a cute sheep behind you") {
    var a = Array.from(one);
    a.forEach((elem) => {
      setTimeout(() => {
        lipleft.classList.add("opacity");
        elem.classList.remove("visible");
        lipright.classList.add("opacity");
        eyes.classList.remove("soch");
      }, 200);
      var music = document.getElementById("background-music-aah");
      music.play();
      button.addEventListener('click',()=>{
        handright.classList.add('done');
        setTimeout(()=>{
            handright.classList.add('visible')
        },500)
        var music = document.getElementById('background-music-ding');
        music.play();
      })
    });
  }
});
