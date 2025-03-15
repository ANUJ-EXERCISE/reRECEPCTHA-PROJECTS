var input = document.querySelector("#input");
var button = document.querySelector("#btn");
var white = document.querySelectorAll("#white");
var lips = document.querySelector("#smile");
var handright = document.querySelector("#hand-right");

input.addEventListener("input", () => {
  if (input.value === "Where did your") {
    var a = Array.from(white);
    a.forEach((elem) => {
      elem.classList.add("soch");
    });
    var music = document.getElementById("hmmm");
    music.play();
  } else if (input.value === "Where did your teeth go?") {
    lips.classList.add("sad");
    var music = document.getElementById("cry");
    music.play();
    var a = Array.from(white);
    a.forEach((elem) => {
      elem.classList.add("visible");
    });
  } else if (input.value === "") {
    var a = Array.from(white);
    a.forEach((elem) => {
      elem.classList.remove("soch");
      elem.classList.remove("visible");
      lips.classList.remove("sad");
    });
  } else if (input.value === "Why do you") {
    var a = Array.from(white);
    a.forEach((elem) => {
      elem.classList.add("soch");
    });
    var music = document.getElementById("hmmm");
    music.play();
  } else if (input.value === "Why do you look so sweet?") {
    setTimeout(() => {
      var a = Array.from(white);
      a.forEach((elem) => {
        elem.classList.remove("soch");
      });
    lips.classList.add('smile');
    },200);
    var music = document.getElementById('aah');
    music.play();
    button.addEventListener('click',()=>{
        handright.classList.add('done');
        setTimeout(()=>{
            handright.classList.add('visible');
        },500)
        var music = document.getElementById('ding');
        music.play();
    })
  }
});
