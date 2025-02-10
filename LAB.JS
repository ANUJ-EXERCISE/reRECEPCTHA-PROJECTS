var input = document.querySelector('#input');
var button = document.querySelector('#btn');
var eye = document.querySelectorAll('#eye');
var handleft = document.querySelector('#hand-left');
var handright = document.querySelector('#hand-right');
var lips = document.querySelector('#smile');
var eyebrowleft = document.querySelector('#eyebrow-left');
var eyebrowright = document.querySelector('#eyebrow-right');
var face = document.querySelector('#face');

input.addEventListener('input',()=>{
    if(input.value === 'Why are you'){
        face.classList.add('niche');

        eyebrowleft.classList.add('soch');
        var music = document.getElementById('background-music-question');
            music.play();
    }if(input.value === 'Why are you so shy?'){
        eyebrowleft.classList.remove('soch');
        eyebrowleft.classList.add('left-eyebrow-sad');
        eyebrowright.classList.add('right-eyebrow-sad');
        lips.classList.add('sad')
        var music = document.getElementById('background-music-cry');
        music.play();
        var a = Array.from(eye);
        a.forEach((elem)=>{
            elem.classList.add('visible');
        });
        face.style.animation = 'tadapana-shake 0.1s linear infinite';
    }else if(input.value === ''){
        setTimeout(()=>{
        face.classList.remove('niche');
        },400)
        var a = Array.from(eye);
        a.forEach((elem)=>{
            elem.classList.remove('visible')
        });
        eyebrowleft.classList.remove('left-eyebrow-sad');
        eyebrowright.classList.remove('right-eyebrow-sad');
        lips.classList.remove('sad');
        face.style.animation = 'none';
    }else if(input.value === 'Were you born'){
        eyebrowleft.classList.add('soch');
    }else if(input.value === 'Were you born this confident?'){
        eyebrowright.classList.add('soch');
        input.disabled = true;
        lips.classList.add('smile');
        var music = document.getElementById('background-music-aah');
        music.play();
        button.addEventListener('click',()=>{
            handright.classList.add('done');
            var music = document.getElementById('background-music-ding');
            music.play();
            setTimeout(()=>{
                handright.classList.add('visible')
            },300)
        })
    }
})