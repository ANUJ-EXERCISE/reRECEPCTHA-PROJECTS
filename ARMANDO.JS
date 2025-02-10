var input = document.querySelector('#input');
var btn = document.querySelector('#btn');
var cornealeft = document.querySelector('#cornea-left');
var eyebrowleft = document.querySelector('#eyebrow-left');
var eyebrowright = document.querySelector('#eyebrow-right');
var cornearight = document.querySelector('#cornea-right');
var lips = document.querySelector('#lips');

input.addEventListener('input',()=>{
    if(input.value === 'Why are you'){
        eyebrowright.classList.add('soch')
    }else if(input.value === 'Why are you looking boring?'){
        eyebrowright.classList.remove('soch');
        eyebrowleft.classList.add('sad-eyebrow-left');
        eyebrowright.classList.add('sad-eyebrow-right');
        cornealeft.classList.add('visible');
        cornearight.classList.add('visible');
        lips.classList.add('sad')
    }else if(input.value === ''){
        cornealeft.classList.remove('visible');
        cornearight.classList.remove('visible');
        eyebrowleft.classList.remove('sad-eyebrow-left');
        eyebrowright.classList.remove('sad-eyebrow-right');
        lips.classList.remove('sad')
    }else if(input.value === 'I like'){
        eyebrowright.classList.add('soch')
    }else if(input.value === 'I like your clean head!'){
        eyebrowleft.classList.add('soch');
        eyebrowright.classList.add('soch');
        lips.classList.add('smile');
        input.disabled = true;
        btn.addEventListener('click',()=>{
            document.querySelector('#hand-right').classList.add('done');
            setTimeout(()=>{
                document.querySelector('#hand-right').classList.add('visible')
            },400)
        })
    }
})