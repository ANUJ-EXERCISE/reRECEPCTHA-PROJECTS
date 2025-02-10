var input = document.querySelector('#input');
var button = document.querySelector('#btn');
var handright = document.querySelector('#hand-right');
var lips = document.querySelector('#smile');
var eyebrowleft = document.querySelector('#eyebrow-left');
var eyebrowright = document.querySelector('#eyebrow-right');
var tounge = document.querySelector('#tounge');
var white = document.querySelectorAll('#white');

input.addEventListener('input', () => {
    if (input.value === 'Where did your') {
        eyebrowright.classList.add('soch');
        var music = document.getElementById('background-music-question');
        music.play();
    } else if (input.value === 'Where did your hair go?') {
        eyebrowright.classList.remove('soch');
        eyebrowleft.classList.add('left-eyebrow-sad');
        eyebrowright.classList.add('right-eyebrow-sad');
        lips.classList.add('sad');
        var a = Array.from(white);
        a.forEach((elem) => {
            elem.classList.add('visible');
        });
        var music = document.getElementById('background-music-cry');
        music.play();
    } else if (input.value === '') {
        eyebrowleft.classList.remove('left-eyebrow-sad');
        eyebrowright.classList.remove('right-eyebrow-sad');
        lips.classList.remove('sad');
        eyebrowright.classList.remove('soch');
        var a = Array.from(white);
        a.forEach((elem) => {
            elem.classList.remove('visible');
        });
    }else if(input.value === 'Why is your'){
        eyebrowright.classList.add('soch');
        var music = document.getElementById('background-music-question');
        music.play();
    } else if (input.value === 'Why is your beard so cool?') {
        setTimeout(() => {
            eyebrowleft.classList.add('soch');
            eyebrowright.classList.add('soch');
            lips.classList.add('smile');
        }, 200)
        var music = document.getElementById('background-music-aah');
        music.play();
        input.disabled = true;
        button.addEventListener('click',()=>{
            handright.classList.add('done');
            var music = document.getElementById('background-music-ding');
            music.play();
            setTimeout(()=>{
                handright.classList.add('visible')
            },300)
        })
    }
})