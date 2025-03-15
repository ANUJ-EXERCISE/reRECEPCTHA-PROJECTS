var input = document.querySelector("#input");
var button = document.querySelector("#btn");
var handleft = document.querySelector("#hand-left");
var handright = document.querySelector("#hand-right");
var eye = document.querySelectorAll("#black");
var eyebrowleft = document.querySelector("#eyebrow-left");
var eyebrowright = document.querySelector("#eyebrow-right");
var bearleft = document.querySelector("#bear-left");
var bearright = document.querySelector("#bear-right");

input.addEventListener("input", () => {
  if (input.value === "Why are your") {
    eyebrowleft.classList.add("soch");
    var music = document.getElementById("background-music-question");
    music.play();
    handleft.classList.add("uper");
    handright.classList.add("uper");
    setTimeout(() => {
      handleft.classList.remove("uper");
      handright.classList.remove("uper");
    }, 500);
  } else if (input.value === "Why are your hair still here?") {
    eyebrowleft.classList.remove("soch");
    eyebrowleft.classList.add("left-eyebrow-sad");
    eyebrowright.classList.add("right-eyebrow-sad");
    bearleft.classList.add("bear-left-sad");
    bearright.classList.add("bear-right-sad");
    var a = Array.from(black);
    a.forEach((elem) => {
      elem.classList.add("visible");
    });
    var music = document.getElementById("background-music-cry");
    music.play();
  } else if (input.value === "") {
    eyebrowleft.classList.remove("left-eyebrow-sad");
    eyebrowright.classList.remove("right-eyebrow-sad");
    bearleft.classList.remove("bear-left-sad");
    bearright.classList.remove("bear-right-sad");
    var a = Array.from(black);
    a.forEach((elem) => {
      elem.classList.remove("visible");
    });
  }else if(input.value === 'Where did you'){
    eyebrowleft.classList.add('soch');
    var music = document.getElementById("background-music-question");
    music.play();
  }else if(input.value === 'Where did you get that haircut?'){
   setTimeout(()=>{
    eyebrowright.classList.add('soch');
    document.querySelector('#smile').classList.add('opacity');
   },200);
   var music = document.getElementById('background-music-aah');
   music.play();
   input.disabled = true;
   handright.style.transition = 'none';
   button.addEventListener('click',()=>{
    handright.classList.add('done')
    setTimeout(()=>{
    handright.classList.add('visible');
    },500);
    var music = document.getElementById('background-music-ding');
            music.play();
   })
  }
});
