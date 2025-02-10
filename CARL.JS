var input = document.querySelector('#input');
var white = document.querySelectorAll('#white');
var smile = document.querySelector('#smile');
var main = document.querySelector('#main');
var button = document.querySelector('#btn');
var handright = document.querySelector('#hand-right');
var eyebrowleft = document.querySelector('#eye-brow-left');
var eyebrowright = document.querySelector('#eye-brow-right');
input.addEventListener('input', () => {
    if (input.value === `Aren't you too`) {
        var music = document.getElementById('background-music-question');
        music.play();
        eyebrowleft.classList.add('soch');
        eyebrowright.classList.add('soch');
        var a = Array.from(white);
        a.forEach((elem) => {
            elem.classList.add('ankh')
        })
    } if (input.value === `Aren't you too old to wear a cape?`) {
        var a = Array.from(white);
        var music = document.getElementById('background-music-cry');
        music.play();
        a.forEach((elem) => {
            elem.classList.remove('ankh');
            elem.classList.add('visible');
        });
        smile.classList.add('sad')
        eyebrowleft.classList.remove('soch');
        eyebrowright.classList.remove('soch');
        eyebrowleft.classList.add('eyebrow-left-sad');
        eyebrowright.classList.add('eyebrow-right-sad');
    } else {
        eyebrowleft.classList.remove('eyebrow-left-sad');
        eyebrowright.classList.remove('eyebrow-right-sad');
        var a = Array.from(white);
        a.forEach((elem) => {
            elem.classList.remove('visible');
        });
        smile.classList.remove('sad');
    }
    if (input.value === `Aren't you going to show off the cape?`) {
        setTimeout(() => {
            eyebrowleft.classList.add('nice');
            eyebrowright.classList.add('nice');
            smile.classList.add('smile');
            input.disabled = true;
        }, 300)
        var music = document.getElementById('background-music-aah');
        music.play();
        button.addEventListener('click', () => {
            handright.classList.add('done');
            setTimeout(() => {
                handright.classList.add('visible')
            }, 500);
            setTimeout(() => {
                var music = document.getElementById('background-music-launch');
                music.play();
                main.style.animation = 'launch 0.6s ease-out forwards'
            }, 800)
            var music = document.getElementById('background-music-ding');
            music.play();
        })
    }
})