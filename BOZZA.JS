var input = document.querySelector('#input');
var button = document.querySelector('#btn');
var handleft = document.querySelector('#hand-left');
var handright = document.querySelector('#hand-right');
var white = document.querySelectorAll('#white');
var eyebrowleft = document.querySelector('#eyebrow-left');
var eyebrowright = document.querySelector('#eyebrow-right');
var lips = document.querySelector('#smile');

input.addEventListener('input', () => {
    if (input.value === 'Why do you') {
        var music = document.getElementById('background-music-question');
        music.play();
        eyebrowright.classList.add('soch');
    } else if (input.value === 'Why do you look like a gorilla?') {
        eyebrowright.classList.remove('soch');
        eyebrowleft.classList.add('left-eyebrow-sad');
        eyebrowright.classList.add('right-eyebrow-sad');
        var a = Array.from(white);
        a.forEach((elem) => {
            elem.classList.add('visible')
        });
        lips.classList.add('sad');
        var music = document.getElementById('background-music-cry');
        music.play();
    } else if (input.value === '') {
        lips.classList.remove('sad');
        eyebrowleft.classList.remove('left-eyebrow-sad');
        eyebrowright.classList.remove('right-eyebrow-sad');
        var a = Array.from(white)
        a.forEach((elem) => {
            elem.classList.remove('visible')
        });
    }else if(input.value === 'What a unique'){
        var music = document.getElementById('background-music-question');
        music.play();
        eyebrowright.classList.add('soch');
    } else if (input.value === 'What a unique tie you have!') {
        setTimeout(() => {
            eyebrowleft.classList.add('soch');
            eyebrowright.classList.add('soch');
            lips.classList.add('smile');
        },200)
        input.disabled = true;
        var music = document.getElementById('background-music-aah');
        music.play();
        
        button.addEventListener('click',()=>{
            var music = document.getElementById('background-music-ding');
            music.play();
            handright.classList.add('done');
            setTimeout(()=>{
                handright.classList.add('visible')
            },200)
        })
    }
})