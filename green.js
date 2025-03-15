var input = document.querySelector("#input");
var button = document.querySelector("#btn");
var eyeleft = document.querySelector("#eye-left");
var eyeright = document.querySelector("#eye-right");
var handright = document.querySelector("#hand-right");
var finger = document.querySelector("#finger-right");
var lips = document.querySelector("#smile");
var one = document.querySelectorAll(".ek");

input.addEventListener("input", () => {
  if (input.value === "Why mismatch") {
    eyeright.classList.add("soch");
    var music = document.getElementById("hmmm");
    music.play();
  } else if (input.value == "Why mismatch hair and costume?") {
    eyeright.classList.remove("soch");
    eyeleft.classList.add("eye-left-sad");
    eyeright.classList.add("eye-right-sad");
    lips.classList.add("sad");
    var music = document.getElementById("baby");
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
    eyeleft.classList.remove("eye-left-sad");
    eyeright.classList.remove("eye-right-sad");
    lips.classList.remove("sad");
  } else if (input.value === `You're bad news for enemies!`) {
    setTimeout(() => {
      eyeleft.classList.add("eye-left-happy");
      eyeright.classList.add("eye-right-happy");
      lips.classList.add("smile");
    },200);
    var music = document.getElementById('aah');
    music.play();
    button.addEventListener('click',()=>{
        handright.classList.add('done');
        finger.classList.add('finger-right-done');
        setTimeout(()=>{
            finger.classList.add('visible');
        },500);
        var music = document.getElementById('ding');
        music.play();
    })
    input.disabled = true;
  }
});
