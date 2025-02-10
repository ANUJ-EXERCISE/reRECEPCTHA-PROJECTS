var input = document.querySelector('#input');
var button = document.querySelector('#btn');
var handright = document.querySelector('#hand-right');
var handleft = document.querySelector('#hand-left');
var white = document.querySelectorAll('#white');
var lips = document.querySelector('#haut');
var eyebrowleft = document.querySelector('#eyebrow-left');
var eyebrowright = document.querySelector('#eyebrow-right');

input.addEventListener('input',()=>{
    if(input.value === 'Why are you'){
        eyebrowleft.classList.add('up')
    }else if(input.value === 'Why are you looking strange?'){
        eyebrowleft.classList.remove('up')
        eyebrowleft.classList.add('eyebrow-left-sad');
        eyebrowright.classList.add('eyebrow-right-sad');
        var a = Array.from(white);
        a.forEach((elem)=>{
            elem.classList.add('visible')
        });
        handright.style.animation = 'right-shake 0.1s infinite ease-in-out'
        handleft.style.animation = 'bottom-shake 0.1s infinite ease-in-out'
        lips.classList.add('sad')
    } else if(input.value === ''){
        var a = Array.from(white);
        a.forEach((elem)=>{
            elem.classList.remove('visible')
        });
        lips.classList.remove('sad');
        handleft.style.animation = 'none'
        handright.style.animation = 'none'
        eyebrowleft.classList.remove('eyebrow-left-sad');
        eyebrowright.classList.remove('eyebrow-right-sad');
    } else if(input.value === 'Your dress'){
        eyebrowleft.classList.add('up')
    } else if(input.value === 'Your dress sense is Good!'){
        lips.classList.add('smile');
        eyebrowleft.classList.remove('up');
        input.disabled = true;
        eyebrowleft.classList.add('smile-eyebrow');
        eyebrowright.classList.add('smile-eyebrow');
        document.querySelector('#red').classList.add('display')
        button.addEventListener('click',()=>{
            handright.classList.add('done');
            setTimeout(()=>{
                handright.classList.add('visible')
            },400)
        })
    }
})