var input = document.querySelector('#input');
var button = document.querySelector('#btn');
var handleft = document.querySelector('#hand-left');
var handright = document.querySelector('#hand-right');
var white = document.querySelectorAll('#white');
var lips = document.querySelector('#lips');
var face = document.querySelector('#face');
var akad = document.querySelectorAll('#band');
var text = document.querySelector('#text');
input.addEventListener('input', () => {
    if (input.value === 'Your hair looks') {
        var music = document.getElementById('hmmm');
        music.play();
    } else if (input.value === 'Your hair looks like dog poop!') {
        face.style.animation = 'move-left-right 1s ease-in-out forwards';
        var a = Array.from(akad);
        a.forEach((elem) => {
            elem.classList.add('initial')
        });
        lips.classList.add('gussa');
        var music = document.getElementById('really');
        music.play();
        text.classList.add('opacity');
        setTimeout(() => {
            text.classList.remove('opacity')
        }, 500);
    } else if (input.value === 'Your hair looks like dog poop! yeah') {
        var a = Array.from(akad);
        a.forEach((elem) => {
            elem.classList.remove('initial');
        });
        lips.classList.remove('gussa');
        lips.classList.add('sad');
        var a = Array.from(white);
        a.forEach((elem) => {
            elem.classList.add('visible')
        });
        var music = document.getElementById('baby');
        music.play();
        handleft.style.animation = 'handshakeleft 0.2s ease-in-out infinite';
        handright.style.animation = 'handshakeRight 0.2s ease-in-out infinite';
    } else if (input.value === '') {
        lips.classList.remove('sad');
        var a = Array.from(white);
        a.forEach((elem) => {
            elem.classList.remove('visible')
        });
        handleft.style.animation = 'none';
        handright.style.animation = 'none';
    } else if (input.value === `You're little but really smart!`) {
        lips.classList.add('smile');
        var music = document.getElementById('aah');
        music.play();
        input.disabled = true;
        button.addEventListener('click', () => {
            var music = document.getElementById('ding');
            music.play();

            handright.classList.add('done');
            setTimeout(() => {
                handright.classList.add('visible')
            }, 300)
        })
    }
})