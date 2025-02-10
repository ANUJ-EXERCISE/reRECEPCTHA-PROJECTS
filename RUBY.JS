var input = document.querySelector('#input');
var white = document.querySelectorAll('#white');
var smile = document.querySelector('#smile');
var button = document.querySelector('#btn');
var handright = document.querySelector('#hand-right');
var handleft = document.querySelector('#hand-left');
var eyebrowleft = document.querySelector('#eye-brow-left');
var eyebrowright = document.querySelector('#eye-brow-right');

input.addEventListener('input', () => {
    if (input.value === 'Why are you') {
        var music = document.getElementById('hmmm');
        music.play();
        eyebrowleft.classList.add('eyebrow-left-sad');
        eyebrowright.classList.add('eyebrow-right-sad');
    } else if (input.value === 'Why are you looking') {
        handleft.classList.add('uper-jaon-left');
        handright.classList.add('uper-jaon-right');
    } else if (input.value === 'Why are you looking a lady strange?') {
        handleft.classList.remove('uper-jaon-left');
        handright.classList.remove('uper-jaon-right');
        handleft.style.animation = 'shake-left 0.2s infinite linear';
        handright.style.animation = 'shake 0.2s infinite linear';
        smile.classList.add('sad');
        var music = document.getElementById('cry');
        music.play();
        eyebrowleft.classList.add('eyebrow-left-sad');
        eyebrowright.classList.add('eyebrow-right-sad');
        var a = Array.from(white);
        a.forEach((elem) => {
            elem.classList.add('visible');
        })
    } else if (input.value === '') {
        smile.classList.remove('sad');
        var a = Array.from(white);
        a.forEach((elem) => {
            elem.classList.remove('visible');
        })
        handleft.style.animation = 'none';
        handright.style.animation = 'none';
        eyebrowleft.classList.remove('eyebrow-left-sad');
        eyebrowright.classList.remove('eyebrow-right-sad');
    }
    if (input.value === 'Your dress sense is Good!') {
        setTimeout(() => {
            eyebrowleft.classList.add('nice');
            eyebrowright.classList.add('nice');
            input.disabled = true;
            smile.classList.add('smile')
        }, 200)
        var music = document.getElementById('aah');
        music.play();
        button.addEventListener('click', () => {
            handright.classList.add('done');
            var music = document.getElementById('ding');
            music.play();
            setTimeout(() => {
                handright.classList.add('visible');
            }, 500)
        })
    }
})