var input = document.querySelector('#input');
var button = document.querySelector('#btn');
var eyebrowleft = document.querySelector('#eyebrow-left');
var eyebrowright = document.querySelector('#eyebrow-right');
var handright = document.querySelector('#hand-right');
var lips = document.querySelector('#smile');
var eye = document.querySelectorAll('#eye');

input.addEventListener('input',()=>{
    if(input.value === 'Why is your'){
        eyebrowleft.classList.add('soch');
        var music = document.getElementById('background-music-question');
        music.play();
    }else if(input.value === 'Why is your hand bigger?'){
        eyebrowleft.classList.remove('soch');
        eyebrowleft.classList.add('sad-eyebrow-left');
        eyebrowright.classList.add('sad-eyebrow-right');
        var music = document.getElementById('background-music-cry');
        music.play();
        lips.classList.add('sad');
        var a = Array.from(eye);
        a.forEach((elem)=>{
            elem.classList.add('visible')
        });
    }else if(input.value === ''){
        var a = Array.from(eye);
        a.forEach((elem)=>{
            elem.classList.remove('visible')
        });
        eyebrowleft.classList.remove('sad-eyebrow-left')
        eyebrowright.classList.remove('sad-eyebrow-right');
        lips.classList.remove('sad')
    }else if(input.value === 'You look'){
        eyebrowleft.classList.add('soch');
        var music = document.getElementById('background-music-question');
        music.play();
    }else if(input.value === 'You look like a real rapper!'){
        eyebrowright.classList.add('soch');
        lips.classList.add('smile');
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
})