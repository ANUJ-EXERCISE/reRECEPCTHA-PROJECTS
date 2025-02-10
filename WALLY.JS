var input = document.querySelector('#input');
var button = document.querySelector('#tell');
var eyebrowleft = document.querySelector('#eye-brow-left');
var eyebrowright = document.querySelector('#eye-brow-right');
var whiteleft = document.querySelector('#white-left');
var whiteright = document.querySelector('#white-right');
var haut = document.querySelector('#haut');

input.addEventListener('input', () => {
    if (input.value === 'Why do your') {
        eyebrowleft.classList.add('soch-left');
        eyebrowright.classList.add('soch-right');
    } else if (input.value === 'Why do your ears looks so out?') {
        eyebrowleft.classList.remove('soch-left');
        eyebrowright.classList.remove('soch-right');
        eyebrowleft.classList.add('sad-eyebrow-left');
        eyebrowright.classList.add('sad-eyebrow-right');
        whiteleft.classList.add('visible')
        whiteright.classList.add('visible');
        haut.classList.add('sad')
    }else if(input.value === ''){
        whiteleft.classList.remove('visible');
        eyebrowleft.classList.remove('sad-eyebrow-left');
        eyebrowright.classList.remove('sad-eyebrow-right');
        whiteright.classList.remove('visible');
        haut.classList.remove('sad')   
    }else if(input.value === 'Why do you so cool?'){
        eyebrowleft.classList.add('happy')
        eyebrowright.classList.add('happy');
        input.disabled = true;
        haut.classList.add('smile');
        button.addEventListener('click',()=>{
            document.querySelector('#hand').classList.add('done');
            setTimeout(()=>{
                document.querySelector('#hand').classList.add('visible')
            },300)
        })
    }
})