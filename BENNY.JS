// animation: flyBenny 2s ease-in-out infinite;

var input = document.querySelector('#input');
var eyeleft = document.querySelector('#eye-left');
var eyeright = document.querySelector('#eye-right');
var nose = document.querySelector('#nose');
var indicator = document.querySelector('#indicator');
var benny = document.querySelector('#benny');
var button = document.querySelector('#btn');
var righthand = document.querySelector('#right-hand');


input.addEventListener('input',()=>{
    var count = input.value.length;
    if(count > 8){
        nose.classList.add('smallsmile')
    } else{
            nose.classList.remove('smallsmile')
    }

    if(input.value === 'Your face is like a wheel!'){
        eyeleft.style.overflow = 'visible';
        eyeright.style.overflow = 'visible';
        nose.classList.add('sad');
        nose.classList.remove('smallsmile');
    } else{
        nose.classList.remove('sad');
        eyeleft.style.overflow = 'hidden';
        eyeright.style.overflow = 'hidden';
    }

    if(input.value === 'Your round face is cute!'){
        nose.classList.add('smile');
        input.disabled = true;
        benny.style.animation = 'flyBenny 2s ease-in-out infinite'
        indicator.style.animation = 'helmetGlowFast 1s ease-in-out infinite';
        button.addEventListener('click',()=>{
            righthand.classList.add('done');
        })
    }
})