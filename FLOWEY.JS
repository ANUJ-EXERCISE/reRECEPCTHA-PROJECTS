// background-image: url(yeyeyeyee.png)

var input = document.querySelector("#input");
var button = document.querySelector("#btn");
var smile = document.querySelectorAll(".smile");
var sad = document.querySelectorAll(".sad");
var body = document.querySelector("body");
var eye = document.querySelectorAll(".eye");
var danger = document.querySelector("img");
var flowey = document.querySelector("#flowey");

input.addEventListener("input", () => {
  if (input.value === `You'll never feel`) {
    var a = Array.from(eye);
    a.forEach((elem) => {
      elem.classList.add("soch");
    });
  } else if (input.value === `You'll never feel real love or friendship`) {
    var c = Array.from(sad);
    c.forEach((elem) => {
      elem.style.opacity = 1;
    });
    var a = Array.from(eye);
    a.forEach((elem) => {
      elem.classList.remove("soch");
    });
  } else if (input.value === `You don't need a soul to be important`) {
    var b = Array.from(smile);
    b.forEach((elem) => {
      elem.style.opacity = 1;
    });
    var c = Array.from(sad);
    c.forEach((elem) => {
      elem.style.opacity = 0;
    });
    button.addEventListener('click',()=>{
        flowey.style.opacity = 0;
        document.querySelector('#main img').style.display = 'initial'
    })
  }
});
