var input = document.querySelector('#input');
var black = document.querySelectorAll('#black');
var smile = document.querySelector('#smile');
var button = document.querySelector('#btn');
var eyebrowleft = document.querySelector('#eyebrow-left');
var eyebrowright = document.querySelector('#eyebrow-right');
var handright = document.querySelector('#hand-right');

input.addEventListener('input',()=>{
    if(input.value === 'Why does your hair'){
        eyebrowleft.classList.add('soch');
        var music = document.getElementById('hmmm');
        music.play();
    }else if(input.value === 'Why does your hair look like dog poop?'){
        eyebrowleft.classList.remove('soch');
        eyebrowleft.classList.add('left-eyebrow-sad');
        eyebrowright.classList.add('right-eyebrow-sad');
        smile.classList.add('sad');
        var music = document.getElementById('cry');
        music.play();
        var a = Array.from(black);
        a.forEach((elem)=>{
            elem.classList.add('visible')
        });
    }else if(input.value === ''){
        eyebrowleft.classList.remove('left-eyebrow-sad');
        eyebrowright.classList.remove('right-eyebrow-sad');
        var a = Array.from(black);
        a.forEach((elem)=>{
            elem.classList.remove('visible');
            smile.classList.remove('sad');
        });
    }else if(input.value === 'Where did you'){
        eyebrowleft.classList.add('soch');
        var music = document.getElementById('hmmm');
    }else if(input.value === 'Where did you get this cool dress?'){
        setTimeout(() => {
            eyebrowright.classList.add('soch');
            smile.classList.add('smile');
            input.disabled = true;
        }, 200)
        var music = document.getElementById('aah');
        music.play();
        button.addEventListener('click',()=>{
            handright.classList.add('done');
            setTimeout(()=>{
                handright.classList.add('visible');
            },300);
            var music = document.getElementById('ding');
            music.play();
            
        })
    }
})