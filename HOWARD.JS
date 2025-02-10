var input = document.querySelector('#input');
var hau = document.querySelector('#haut');
var whiteleft = document.querySelector('#white-left');
var whiteright = document.querySelector('#white-right');
var eyebrowleft = document.querySelector('#eyebrow-left');
var eyebrowright = document.querySelector('#eyebrow-right');
var button = document.querySelector('#btn');
var handright = document.querySelector('#hand-right');
var colar = document.querySelector('#colar-right');

input.addEventListener('input',()=>{
    if(input.value === 'Where did'){
        eyebrowright.classList.add('soch')
    }else if(input.value === 'Where did your hair go?'){
        eyebrowright.classList.remove('soch');
        eyebrowright.classList.add('eyebrow-right-cry');
        eyebrowleft.classList.add('eyebrow-left-cry');
        whiteleft.classList.add('visible');
        whiteright.classList.add('visible');
    }else if(input.value === ''){
        eyebrowleft.classList.remove('eyebrow-left-cry');
        eyebrowright.classList.remove('eyebrow-right-cry');
        whiteleft.classList.remove('visible');
        whiteright.classList.remove('visible');
    }else if(input.value === 'You are looking Intelligent!'){
        eyebrowleft.classList.add('eyebrow-left-happy');
        eyebrowright.classList.add('eyebrow-right-happy');
        hau.classList.add('smile');
        input.disabled = true;
        button.addEventListener('click',()=>{
           handright.classList.add('done'); 
           setTimeout(()=>{
            colar.classList.add('visible')
           },500)
        })
    }
})