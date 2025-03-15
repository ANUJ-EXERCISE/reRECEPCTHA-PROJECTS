var input = document.querySelector("#input");
var button = document.querySelector("#btn");
var handright = document.querySelector("#hand-right");
var legs = document.querySelector("#legs");
var shoes = document.querySelector("#shoes");
var face = document.querySelector("#face");
var lips = document.querySelector("#smile");
var white = document.querySelectorAll("#white");

input.addEventListener("input", () => {
  if (input.value === "Why do you") {
    face.classList.add("soch");
    var music = document.getElementById("hmmm");
    music.play();
  } else if (input.value === "Why do you look like an alien?") {
    face.classList.remove("soch");
    var a = Array.from(white);
    a.forEach((elem) => {
      elem.classList.add("visible");
    });
    lips.classList.add("sad");
    var music = document.getElementById("cry");
    music.play();
  } else if (input.value === "") {
    var a = Array.from(white);
    a.forEach((elem) => {
      elem.classList.remove("visible");
    });
    lips.classList.remove("sad");
  } else if (input.value === "You are looking") {
    face.classList.add("soch");
    var music = document.getElementById("hmmm");
    music.play();
  } else if (input.value === "You are looking so cute?") {
    setTimeout(() => {
      face.classList.remove("soch");
      lips.classList.add("smile");
    }, 200);
    input.disabled = true;
    var music = document.getElementById("aah");
    music.play();
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

// var tl = gsap.timeline();

// tl.to(legs, {
//   y: "0%",
//   duration: 1,
// });

// tl.to(legs, {
//   opacity: 1,
//   delay: -0.6,
// });

// tl.to(shoes, {
//   opacity: 1,
//   delay: -0.2,
//   duration: 1,
// });

// tl.to(face, {
//   opacity: 1,
// });
