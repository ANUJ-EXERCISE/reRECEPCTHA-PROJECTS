var input = document.querySelector('#input');
var btn = document.querySelector('#btn');
var white = document.querySelectorAll('#white');
var eyebrowleft = document.querySelector('#eyebrow-left');
var eyebrowright = document.querySelector('#eyebrow-right');
var handright = document.querySelector('#hand-right');
var lips = document.querySelector('#smile');


input.addEventListener('input', () => {
    if (input.value === 'Why are you') {
        var music = document.getElementById('hmmm');
        music.play();
        eyebrowright.classList.add('soch');
    } else if (input.value === 'Why are you look bored?') {
        eyebrowright.classList.remove('soch')
        eyebrowleft.classList.add('left-eyebrow-sad');
        eyebrowright.classList.add('right-eyebrow-sad');
        var a = Array.from(white);
        a.forEach((elem) => {
            elem.classList.add('visible');
        });
        lips.classList.add('sad');
        var music = document.getElementById('cry');
        music.play();
    } else if (input.value === '') {
        var a = Array.from(white);
        a.forEach((elem) => {
            elem.classList.remove('visible')
        });
        eyebrowleft.classList.remove('left-eyebrow-sad');
        eyebrowright.classList.remove('right-eyebrow-sad');
        lips.classList.remove('sad');
    } else if (input.value === 'I like') {
        eyebrowright.classList.add('soch');
        var music = document.getElementById('hmmm');
        music.play();
    } else if (input.value === 'I like your clean haircut!') {
        eyebrowleft.classList.add('soch');
        lips.classList.add('smile');
        var music = document.getElementById('aah');
        music.play();
        input.disabled = true;
        btn.addEventListener('click', () => {
            var music = document.getElementById('ding');
            music.play();
            handright.classList.add('done');
            setTimeout(() => {
                document.querySelector('#finger-right')
                    .classList.add('visible');
            },300)
        });
    }


})