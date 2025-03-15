var input = document.querySelector("#input");
var btn = document.querySelector("#btn");
var handright = document.querySelector("#hand-right");
var cover = document.querySelector("#palak");
var lips = document.querySelector("#smile");

input.addEventListener("input", () => {
  if (input.value === "Why you look") {
    cover.classList.add("cry");
    var music = document.getElementById("hmmm");
    music.play();
  } else if (input.value === "Why you look to small?") {
    lips.classList.add("sad");
    var music = document.getElementById("cry");
    music.play();
  } else if (input.value === "") {
    lips.classList.remove("sad");
  } else if (input.value === "Why you always so cute?") {
    setTimeout(() => {
      cover.classList.remove("cry");
      lips.classList.add("smile");
      input.disabled = true;
    }, 200);
    var music = document.getElementById("aah");
    music.play();
    btn.addEventListener("click", () => {
      handright.classList.add("done");
      setTimeout(() => {
        handright.classList.add("visible");
      }, 500);
      var music = document.getElementById("ding");
      music.play();
    });
  }
});
