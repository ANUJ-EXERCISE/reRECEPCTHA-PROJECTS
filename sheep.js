var head = document.querySelector("#head");
var first = document.querySelector("#foot-first ");
var second = document.querySelector("#foot-second ");
var third = document.querySelector("#foot-third ");
var fourth = document.querySelector("#foot-fourth ");
var earleft = document.querySelector("#ear-left");
var earright = document.querySelector("#ear-right");
var button = document.querySelector('#button');
function animation(){
    var tl = gsap.timeline();
tl.to(first, {
  y: "100%",
});
tl.to(second, {
  y: "100%",
});
tl.to(third, {
  y: "100%",
});
tl.to(fourth, {
  y: "100%",
});
tl.to(head, {
  y: "-100%",
});
tl.to(earleft, {
    delay:1,
  onStart: () => {
    earleft.style.display = "initial";
  },
});
tl.to(earright, {
    delay:-0.5,
  onStart: () => {
    earright.style.display = "initial";
  },
});
tl.to(button,{
    x:'-400%',
    duration:10
})
}
button.addEventListener('click',()=>{
    var ok = document.getElementById("wawa");
    setTimeout(()=>{
    ok.play()
    },200)
    var click = document.getElementById("click");
    click.play();
    animation();
})