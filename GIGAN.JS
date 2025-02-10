var input = document.querySelector('#input');
var btn = document.querySelector('#btn');
var handright = document.querySelector('#hand-right');
var eyebrowleft = document.querySelector('#eyebrow-left')
var eyebrowright = document.querySelector('#eyebrow-right');
var black = document.querySelectorAll('#black');
var lips = document.querySelector('#smile');

input.addEventListener('input', () => {
    if (input.value === 'Why do you') {
        eyebrowleft.classList.add('soch');
        var music = document.getElementById('background-music-question');
        music.play();
    } else if (input.value === 'Why do you skip leg day?') {
        eyebrowleft.classList.remove('soch')
        eyebrowleft.classList.add('left-eyebrow-sad');
        eyebrowright.classList.add('right-eyebrow-sad');
        lips.classList.add('sad');
        var a = Array.from(black);
        a.forEach((elem) => {
            elem.classList.add('visible')
        });
        var music = document.getElementById('background-music-cry');
        music.play();
    } else if (input.value === '') {
        eyebrowleft.classList.remove('left-eyebrow-sad');
        eyebrowright.classList.remove('right-eyebrow-sad');
        lips.classList.remove('sad');
        var a = Array.from(black);
        a.forEach((elem) => {
            elem.classList.remove('visible')
        });
    }
    else if (input.value === 'Your chest looks') {
        eyebrowleft.classList.add('soch');
        var music = document.getElementById('background-music-question');
        music.play();
    } else if (input.value === 'Your chest looks powerfull!') {
        setTimeout(() => {
            eyebrowright.classList.add('soch');
            lips.classList.add('smile');
            input.disabled = true;
        },300);
        var music = document.getElementById('background-music-aah');
        music.play();
        btn.addEventListener('click',()=>{
            handright.classList.add('done');
            var music = document.getElementById('background-music-ding');
            music.play();
            setTimeout(()=>{
                handright.classList.add('visible');
            },400)
        })
    }
})