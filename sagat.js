var input = document.querySelector('#input');
var eyebrowright = document.querySelector('#eyebrow-right');
var handright = document.querySelector('#hand-right');
var lips = document.querySelector('#smile');
var thumb = document.querySelector('#thumb-right');
var finger = document.querySelector('#finger-right');
var white = document.querySelectorAll('#white');
var button = document.querySelector('#btn')

input.addEventListener('input', () => {
    if (input.value === 'Why do you') {
        eyebrowright.classList.add('soch');
        var music = document.getElementById('hmmm');
        music.play();
    } else if (input.value === 'Why do you skip leg day?') {
        eyebrowright.classList.remove('soch');
        eyebrowright.classList.add('cry');
        var music = document.getElementById('cry');
        music.play();
        var a = Array.from(white);
        a.forEach((elem) => {
            elem.classList.add('visible')
        });
        lips.classList.add('sad')
    } else if (input.value === '') {
        var a = Array.from(white);
        a.forEach((elem) => {
            elem.classList.remove('visible')
        });
        lips.classList.remove('sad');
        eyebrowright.classList.remove('cry');
    } else if (input.value === 'Why are your') {
        eyebrowright.classList.add('soch');
        var music = document.getElementById('hmmm');
        music.play();
    } else if (input.value === 'Why are your biceps so huge?') {
        eyebrowright.classList.remove('soch');
        eyebrowright.classList.add('happy');
        setTimeout(() => {
            lips.classList.add('smile');
        },300)
        input.disabled = true;
        var music = document.getElementById('aah');
        music.play();
        button.addEventListener('click',()=>{
            thumb.style.opacity = 0;
            handright.classList.add('done');
            finger.classList.add('opacity');
            var music = document.getElementById('ding');
            music.play();
            setTimeout(()=>{
            thumb.style.opacity = 1;
            thumb.classList.add('right');
            thumb.classList.add('visible');
            },300)
        })
    }
})