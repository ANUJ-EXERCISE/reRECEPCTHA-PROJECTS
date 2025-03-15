var input = document.querySelector('#input');
var button = document.querySelector('#btn');
var eyebrowleft = document.querySelector('#eyebrow-left');
var eyebrowright = document.querySelector('#eyebrow-right');
var lips = document.querySelector('#smile');
var handright = document.querySelector('#hand-right');
var white = document.querySelectorAll('.tear')

input.addEventListener('input',()=>{
    if(input.value === 'Did you'){
        eyebrowright.classList.add('soch');
        var music = document.getElementById('background-music-question');
        music.play();
    }else if(input.value === 'Did you skip brain day?'){
        eyebrowright.classList.remove('soch');
        eyebrowright.classList.add('right-eyebrow-sad');
        eyebrowleft.classList.add('left-eyebrow-sad');
        lips.classList.add('sad');
        var a = Array.from(white);
        a.forEach((elem)=>{
            elem.classList.add('visible')
        })
        var music = document.getElementById('background-music-cry');
        music.play();
    }else if(input.value === ''){
        eyebrowright.classList.remove('right-eyebrow-sad');
        eyebrowleft.classList.remove('left-eyebrow-sad');
        lips.classList.remove('sad');
        var a = Array.from(white);
        a.forEach((elem)=>{
            elem.classList.remove('visible')
        })
    }else if(input.value === `I bet you're`){
        eyebrowright.classList.add('soch');
        var music = document.getElementById('background-music-question');
        music.play();
    }else if(input.value === `Your dress sense is good!`){
        input.disabled = true;
        setTimeout(()=>{
        eyebrowright.classList.remove('soch');
        lips.classList.add('smile');
        eyebrowleft.classList.add('happy');
        eyebrowright.classList.add('happy');
        },200)
        var music = document.getElementById('background-music-aah');
        music.play();
        button.addEventListener('click',()=>{
            handright.classList.add('done');
            setTimeout(()=>{
                handright.classList.add('visible');
            },500);
            var music = document.getElementById('background-music-ding');
            music.play();
        })
    }
})