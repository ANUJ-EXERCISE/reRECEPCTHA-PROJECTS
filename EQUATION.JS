var input = document.querySelector('#input');
var button = document.querySelector('#btn');
var handright = document.querySelector('#hand-right');
var eyebrowleft = document.querySelector('#eyebrow-left');
var eyebrowright = document.querySelector('#eyebrow-right');
var reddot = document.querySelector('#dot');
var numberbox = document.querySelector('#numbering');
var lips = document.querySelector('#bottom');
var question = document.querySelector('#question');
var thumb = document.querySelector('#thumb')
input.addEventListener('input', () => {
    if (input.value === '404') {
        eyebrowright.classList.add('soch');
        var music = document.getElementById('hmm');
        music.play();
    } else if (input.value === '404 Brain Not Found') {
        lips.classList.add('smile');
        var music = document.getElementById('ah');
        music.play();
        eyebrowright.classList.remove('soch')
        eyebrowleft.classList.add('happy-left')
        eyebrowright.classList.add('happy-right');
        input.disabled = true;
        button.addEventListener('click', () => {
            handright.classList.add('done');
            setTimeout(() => {
                var music = document.getElementById('wrong');
                music.play();
                thumb.classList.add('wrong');
                thumb.classList.add('visible');
                lips.classList.remove('smile');
                eyebrowleft.classList.remove('happy-left')
                eyebrowright.classList.remove('happy-right');
            }, 1000)
        })
    }
})
var tl = gsap.timeline();

tl.to(question, {
    opacity: 1,
    delay: 3
})
tl.to(reddot, {
    opacity: 1,
    duration: 1,
})
tl.to(numberbox, {
    opacity: 1,
    duration: 1
});

let interval;

input.addEventListener("focus", function () {
    let currentNumber = parseInt(numberbox.innerText);

    if (interval) clearInterval(interval);

    interval = setInterval(() => {
        if (currentNumber > 0) {
            currentNumber--;
            numberbox.innerText = currentNumber;

            if (currentNumber === 0) {
                numberbox.style.opacity = "0";
                clearInterval(interval);
            }
        }
    }, 1000);
});

