var input = document.querySelector('#input');
var button = document.querySelector('#btn');
var face = document.querySelector('#face');
var handright = document.querySelector('#hand-right');
var eyeleft = document.querySelector('#eye-left');
var eyeright = document.querySelector('#eye-right');
var lips = document.querySelector('#smile');

input.addEventListener('input',()=>{
    if(input.value === 'Why is your'){
        face.classList.add('soch');
        var music = document.getElementById('background-music-question');
        music.play();
    }else if(input.value === 'Why is your face so weird?'){
        face.classList.remove('soch');
        eyeleft.classList.add('visible');
        eyeright.classList.add('visible');
        lips.classList.add('sad');
        var music = document.getElementById('background-music-cry');
        music.play();
    }else if(input.value === ''){
        eyeleft.classList.remove('visible');
        eyeright.classList.remove('visible');
        lips.classList.remove('sad');
    }else if(input.value === 'Your three eyes are cool!'){
     setTimeout(()=>{
        lips.classList.add('smile');
     },200)
     var music = document.getElementById('background-music-aah');
     music.play();
     input.disabled = true;
     button.addEventListener('click',()=>{
        handright.classList.add('done');
        setTimeout(()=>{
            handright.classList.add('visible');
        },500);
        var music = document.getElementById('background-music-ding');
        music.play();
     })
    }
})