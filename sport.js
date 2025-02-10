var input = document.querySelector('#input');
var btn = document.querySelector('#btn');
var handright = document.querySelector('#hand-right');
var white = document.querySelectorAll('#white');
var lips = document.querySelector('#smile');
var eyebrowleft = document.querySelector('#eyebrow-left');
var eyebrowright = document.querySelector('#eyebrow-right');
var teeth = document.querySelector('#teeth');
var tounge = document.querySelector('#tounge');

input.addEventListener('input', () => {
    if (input.value === 'Why your hair') {
        eyebrowright.classList.add('soch');
        var music = document.getElementById('background-music-question');
        music.play();
    } else if (input.value === 'Why your hair a cotton ball?') {
        eyebrowright.classList.remove('soch');
        eyebrowleft.classList.add('left-eyebrow-sad')
        eyebrowright.classList.add('right-eyebrow-sad');
        lips.classList.add('sad');
        var a = Array.from(white);
        a.forEach((elem) => {
            elem.classList.add('visible')
        });
        var music = document.getElementById('background-music-cry');
        music.play();
    } else if (input.value === '') {
        eyebrowleft.classList.remove('left-eyebrow-sad')
        eyebrowright.classList.remove('right-eyebrow-sad');
        lips.classList.remove('sad');
        var a = Array.from(white);
        a.forEach((elem) => {
            elem.classList.remove('visible')
        });
    } else if (input.value === 'Where did you') {
        eyebrowright.classList.add('soch');
        var music = document.getElementById('background-music-question');
        music.play();
    } else if (input.value === 'Where did you get that sweater?') {
        setTimeout(() => {
            eyebrowleft.classList.remove('soch')
            eyebrowleft.classList.remove('happy');
            lips.classList.add('smile');
            teeth.classList.add('opacity')
            tounge.classList.add('opacity')
        }, 200)
        var music = document.getElementById('background-music-aah');
        music.play();
        input.disabled = true;
        btn.addEventListener('click',()=>{
            handright.classList.add('done');
            setTimeout(()=>{
                handright.classList.add('visible');
            },500)
            var music = document.getElementById('background-music-ding');
            music.play();
        })
    }
})