// animation: handTadap 0.2s infinite ease-in-out;

var input = document.querySelector('#input');
var button = document.querySelector('#btn');
var eyebrowleft = document.querySelector('#eyebrow-left');
var eyebrowright = document.querySelector('#eyebrow-right');
var black = document.querySelectorAll('#black');
var smile = document.querySelector('#big-smile');
var handleft = document.querySelector('#hand-left');
var handright = document.querySelector('#hand-right');

input.addEventListener('input',()=>{
    if(input.value === 'Why do you'){
        eyebrowright.classList.add('soch');
        var music = document.getElementById('background-music-question');
        music.play();
    }else if(input.value === 'Why do you have hotdog arms?'){
        eyebrowright.classList.remove('soch');
        eyebrowright.classList.add('right-eyebrow-sad');
        eyebrowleft.classList.add('left-eyebrow-sad');
        handleft.style.animation = ' handTadap 0.2s infinite ease-in-out'
        handright.style.animation = ' handTadap 0.2s infinite ease-in-out'
        var a = Array.from(black);
        a.forEach((elem)=>{
            elem.classList.add('visible');
        });
        smile.classList.add('sad');
        var music = document.getElementById('background-music-cry');
        music.play();
    }else if(input.value === ''){
        eyebrowleft.classList.remove('left-eyebrow-sad');
        eyebrowright.classList.remove('right-eyebrow-sad');
        smile.classList.remove('sad');
         handleft.style.animation = 'none'
        handright.style.animation = 'none'
        var a = Array.from(black);
        a.forEach((elem)=>{
            elem.classList.remove('visible')
        });
    }else if(input.value === 'Where did you'){
        var music = document.getElementById('background-music-question');
        music.play();
        eyebrowright.classList.add('soch');
    }
    else if(input.value === 'Where did you get that cool hat?'){
        setTimeout(() => {
            eyebrowleft.classList.add('soch');
            eyebrowright.classList.add('soch');
            smile.classList.add('smile');
            input.disabled = true;
        }, 200);
        var music = document.getElementById('background-music-aah');
        music.play();
        button.addEventListener('click',()=>{
            handright.classList.add('done');
            setTimeout(()=>{
                handright.classList.add('visible')
            },500)
            var music = document.getElementById('background-music-ding');
            music.play();
        })
    }
})