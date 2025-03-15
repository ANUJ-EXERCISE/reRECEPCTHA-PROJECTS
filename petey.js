var input = document.querySelector("#input");
var button = document.querySelector("#btn");
var handright = document.querySelector("#hand-right");
var smile = document.querySelector("#smile");
var black = document.querySelectorAll("#black");
var eyebrowleft = document.querySelector("#eyebrow-left");
var eyebrowright = document.querySelector("#eyebrow-right");

input.addEventListener("input", () => {
  if (input.value === "Where did your") {
    eyebrowright.classList.add("soch");
    var music = document.getElementById("background-music-question");
    music.play();
  } else if (input.value === "Where did your mom go?") {
    eyebrowright.classList.remove("soch");
    eyebrowright.classList.add("eyebrow-right-sad");
    eyebrowleft.classList.add("eyebrow-left-sad");
    var a = Array.from(black);
    a.forEach((elem) => {
      elem.classList.add("visible");
    });
    smile.classList.add("sad");
    var music = document.getElementById("background-music-cry");
    music.play();
  } else if (input.value === "") {
    eyebrowright.classList.remove("eyebrow-right-sad");
    eyebrowleft.classList.remove("eyebrow-left-sad");
    var a = Array.from(black);
    a.forEach((elem) => {
      elem.classList.remove("visible");
    });
    smile.classList.add("sad");
  } else if (input.value === "You are so cool!") {
    setTimeout(() => {
      eyebrowleft.classList.add("soch");
      eyebrowright.classList.add("soch");
      smile.classList.add("smile");
    },200);
    var music = document.getElementById('background-music-aah');
    music.play();
    input.disabled = true;
    button.addEventListener('click',()=>{
        handright.classList.add('done');
        setTimeout(()=>{
            handright.classList.add('visible');
        },500)
        var music = document.getElementById('background-music-ding');
        music.play();
    })
  }
});

