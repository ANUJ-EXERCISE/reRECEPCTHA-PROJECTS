var eyebrowleft = document.querySelectorAll("#eyebrow-left");
var eyebrowright = document.querySelectorAll("#eyebrow-right");
var one = document.querySelectorAll("#white");
var button = document.querySelector("button");

button.addEventListener("mouseenter", () => {
  var a = Array.from(eyebrowleft);
  a.forEach((elem) => {
    elem.classList.add("sad-left");
  });
  var b = Array.from(eyebrowright);
  b.forEach((elem) => {
    elem.classList.add("sad-right");
  });
  var c = Array.from(one);
  c.forEach((elem)=>{
    elem.classList.add('visible')
  })
  var music = document.querySelector("#background-music-cry");
  music.play();
});

button.addEventListener("mouseleave", () => {
  var a = Array.from(eyebrowleft);
  a.forEach((elem) => {
    elem.classList.remove("sad-left");
  });
  var b = Array.from(eyebrowright);
  b.forEach((elem) => {
    elem.classList.remove("sad-right");
  });
  var c = Array.from(one);
  c.forEach((elem)=>{
    elem.classList.remove('visible')
  })
//   let music = document.getElementById("background-music-cry");
//   music.pause();
});
