var input = document.querySelector("#input");
var button = document.querySelector("#btn");
var one = document.querySelectorAll(".ek");
var lips = document.querySelector("#smile");
var head = document.querySelector("#head");
var white = document.querySelectorAll("#white");
var handright = document.querySelector("#hand-right");

input.addEventListener("input", () => {
  if (input.value === "Why you look") {
    head.classList.add("soch");
    var music = document.getElementById("hmmm");
    music.play();
  } else if (input.value === "Why you look like turnip?") {
    head.classList.remove("soch");
    var a = Array.from(one);
    a.forEach((elem) => {
      elem.classList.add("visible");
    });
    lips.classList.add("sad");
    var music = document.getElementById("cry");
    music.play();
    var music = document.getElementById("no");
    music.play();
    var b = Array.from(white);
    b.forEach((elem)=>{
        elem.classList.add('opacity')
    })
  } else if (input.value === "Why you look like cute turnip?") {
    setTimeout(() => {
      lips.classList.remove("sad");
      lips.classList.add("smile");
      var a = Array.from(one);
      a.forEach((elem) => {
        elem.classList.remove("visible");
      });
    });
    var music = document.getElementById("aah");
    music.play();
    input.disabled = true;
    button.addEventListener("click", () => {
      handright.classList.add("done");
      setTimeout(() => {
        handright.classList.add("visible");
      }, 500);
      var music = document.getElementById("ding");
      music.play();
    });
  }
});
