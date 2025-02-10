var input = document.querySelector('#input');
var button = document.querySelector('#btn');
var handleft = document.querySelector('#hand-left');
var handright = document.querySelector('#hand-right');
var sadlips = document.querySelector('#sad');
var biglips = document.querySelector('#big-smile');
var eyebrowleft = document.querySelector('#eyebrow-left');
var eyebrowright = document.querySelector('#eyebrow-right');
var black = document.querySelectorAll('#black');


input.addEventListener('input', () => {
    if (input.value === 'Where did') {
        var music = document.getElementById('background-music-question');
        music.play();
        handleft.classList.add('uper');
        handright.classList.add('uper');
        setTimeout(() => {
            handleft.classList.remove('uper');
            handright.classList.remove('uper');
        }, 600)
        eyebrowright.classList.add('soch')
    } if (input.value === 'Where did your hair go?') {
        eyebrowright.classList.remove('soch');
        eyebrowleft.classList.add('sad-eyebrow-left');
        eyebrowright.classList.add('sad-eyebrow-right');
        var music = document.getElementById('background-music-cry');
        music.play();
        var a = Array.from(black);
        a.forEach((elem) => {
            elem.classList.add('visible')
        });
        sadlips.classList.add('sad-lips');
    } if (input.value === '') {
        eyebrowleft.classList.remove('sad-eyebrow-left');
        eyebrowright.classList.remove('sad-eyebrow-right');
        var a = Array.from(black);
        a.forEach((elem) => {
            elem.classList.remove('visible')
        });
        sadlips.classList.remove('sad-lips');
    } if (input.value === 'Your confidence') {
        eyebrowright.classList.add('soch');
    } if (input.value === 'Your confidence is so strong!') {
        setTimeout(() => {
            eyebrowleft.classList.add('soch-2');
            sadlips.style.display = 'none';
            biglips.classList.add('display');
        }, 200)
        var music = document.getElementById('background-music-aah');
        music.play();
        button.addEventListener('click', () => {
            handright.classList.add('done');
            setTimeout(() => {
                handright.classList.add('visible');
            }, 500)
            var music = document.getElementById('background-music-ding');
            music.play();
        });
    }
})