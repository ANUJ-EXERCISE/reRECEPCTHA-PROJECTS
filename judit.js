// animation:;
var input = document.querySelector("#input");
var button = document.querySelector("#btn");
var handright = document.querySelector("#hand-right");
var shake = document.querySelector("#hand");
var white = document.querySelectorAll("#white");
var face = document.querySelector("#face");
var hairs = document.querySelector("#hairs");
var lips = document.querySelector("#smile");

input.addEventListener("input", () => {
  if (input.value === "Are you really") {
    face.classList.add("soch");
    hairs.classList.add("soch");
    var music = document.getElementById("hmmm");
    music.play();
  } else if (input.value === "Are you really doing Yoga?") {
    face.classList.remove("soch");
    hairs.classList.remove("soch");
    var a = Array.from(white);
    a.forEach((elem) => {
      elem.classList.add("visible");
    });
    lips.classList.add("sad");
    shake.style.animation = " shakeHand 0.3s ease-in-out infinite";
    var music = document.getElementById("cry");
    music.play();
  } else if (input.value === "") {
    lips.classList.remove("sad");
    shake.style.animation = "none";
    var a = Array.from(white);
    a.forEach((elem) => {
      elem.classList.remove("visible");
    });
  } else if (input.value === "This is") {
    face.classList.add("soch");
    hairs.classList.add("soch");
    var music = document.getElementById("hmmm");
    music.play();
  } else if (input.value === "This is a nice Yoga move!") {
    input.disabled = true;
    face.classList.remove("soch");
    hairs.classList.remove("soch");
    setTimeout(() => {
      lips.classList.add("smile");
    }, 200);
    var music = document.getElementById("aah");
    music.play();
    button.addEventListener('click',()=>{
        handright.classList.add('done');
        setTimeout(()=>{
            handright.classList.add('visible');
            handright.classList.add('opacity')
        },500)
        var music = document.getElementById('ding');
        music.play();
    })
  }
});
