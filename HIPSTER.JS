var eyewhite = document.querySelectorAll('#eye');
var input = document.querySelector('#input');
var eye = document.querySelectorAll('#eye');
var smile = document.querySelector('#bottom');
var thumb = document.querySelector('#thumb');
var tell = document.querySelector('#tell');
var eyebrowleft = document.querySelector('#eyebrow-left');
var eyebrowright = document.querySelector('#eyebrow-right');

input.addEventListener('input', () => {
    var count = input.value.length;
    var value = input.value.trim();
    if (count === 10) {
        var arr = Array.from(eyewhite);
        arr.forEach((elem) => {
            elem.style.height = '30%'
        })
        var music = document.getElementById('background-music-question');
        music.play();
    } else {
        if (count < 10) {
            var arr = Array.from(eyewhite);
            arr.forEach((elem) => {
                elem.style.height = '40%'
            })
        }
    }

    if (value === 'Why does your hair look weird?') {
        eyebrowleft.classList.add('cry1');
        eyebrowright.classList.add('cry2');
        smile.classList.add('sad');
        var music = document.getElementById('background-music-cry');
        music.play();
        var a = Array.from(eye);
        a.forEach((elem) => {
            elem.classList.add('visible')
        })
    } else {
        if (value !== 'Why does your hair look weird?') {
            eyebrowleft.classList.remove('cry1');
            eyebrowright.classList.remove('cry2');
            smile.classList.remove('sad');
            var a = Array.from(eye);
            a.forEach((elem) => {
                elem.classList.remove('visible')
            })
        }
    }

    if (value === 'Why do you look so classy?') {
        eyebrowleft.classList.add('happy1');
        eyebrowright.classList.add('happy1');
        smile.classList.add('happy');
        tell.addEventListener('click', () => {
            thumb.classList.add('done')
            setTimeout(() => {
                thumb.classList.add('visible')
            }, 400)
            var music = document.getElementById('background-music-bellding');
            music.play();
        })
        input.disabled = true;

        var arr = Array.from(eyewhite);
        arr.forEach((elem) => {
            elem.style.height = '40%'
        })
        var music = document.getElementById('background-music');
        music.play();
    }

})

