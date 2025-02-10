var input = document.querySelector('#input');
var button = document.querySelector('#btn');
var eyebrowleft = document.querySelector('#eyebrow-left');
var eyebrowright = document.querySelector('#eyebrow-right');
var lips = document.querySelector('#lips');
var handright = document.querySelector('#hand-right');
var fingerright = document.querySelector('#finger-right');
var white = document.querySelectorAll('#white');

input.addEventListener('input', () => {
    // Reset all classes before adding new ones
    eyebrowleft.classList.remove('left-eyebrow-sad', 'both-eyebrow-happy');
    eyebrowright.classList.remove('right-eyebrow-sad', 'both-eyebrow-happy', 'soch');
    lips.classList.remove('sad', 'smile');
    var a = Array.from(white);
    a.forEach((elem) => {
        elem.classList.remove('visible');
    });

    // Now add the relevant classes based on the input value
    var count = input.value.length;
    if (count > 7) {
        eyebrowright.classList.add('soch');
    }
    if (input.value === 'Why you look like minecraft character?') {
        eyebrowright.classList.remove('soch');
        eyebrowleft.classList.add('left-eyebrow-sad');
        eyebrowright.classList.add('right-eyebrow-sad');
        a.forEach((elem) => {
            elem.classList.add('visible');
        });
        lips.classList.add('sad');
    }
    if (input.value === 'Why you look like modern art?') {
        eyebrowleft.classList.add('both-eyebrow-happy');
        eyebrowright.classList.add('both-eyebrow-happy');
        lips.classList.add('smile');
        input.disabled = true;
        button.addEventListener('click',()=>{
            fingerright.classList.add('done-2');
            fingerright.classList.add('visible');
            handright.classList.add('done')
        })
    }
    // When the input is empty, remove all the classes
    if (input.value === '') {
        eyebrowleft.classList.remove('left-eyebrow-sad');
        eyebrowright.classList.remove('right-eyebrow-sad');
        lips.classList.remove('sad');
        a.forEach((elem) => {
            elem.classList.remove('visible');
        });
    }
});
