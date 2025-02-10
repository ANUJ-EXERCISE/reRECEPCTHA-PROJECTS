var input = document.queryselector('#input');
var input = document.queryselector('#btn');
var eyebrowleft = document.querySelector('#eyebrow-left');
var eyebrowright = document.querySelector('#eyebrow-right');
var lips = document.querySelector('#bottom');
var handright = document.querySelector('#thumb');
var finger = document.querySelector('#finger');


input.addeventlistner('input',()=>{
    if(input.value === 'Where did your'){
        var music = document.getElementById('background-music-question');
        music.play();
    }
})