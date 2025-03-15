var input = document.querySelector('#input');
var button = document.querySelector('#btn');
var handright = document.querySelector('#hand-right');
var white = document.querySelectorAll('#white');
var lips = document.querySelector('#smile');
var eyebrowleft = document.querySelector('#eyebrow-left')
var eyebrowright = document.querySelector('#eyebrow-right');

input.addEventListener('input',()=>{
    if(input.value === 'Why do you'){
        eyebrowleft.classList.add('soch');
        var a = Array.from(white);
        a.forEach((elem)=>{
            elem.classList.add('small')
        });
        var music = document.getElementById('background-music-question');
        music.play();
    }else if(input.value === 'Why do you look like shrek?'){
        eyebrowleft.classList.remove('soch');
        eyebrowleft.classList.add('sad-eyebrow-left');
        eyebrowright.classList.add('sad-eyebrow-right');
        var a = Array.from(white);
        a.forEach((elem)=>{
            elem.classList.remove('small');
            elem.classList.add('visible');
        });
        lips.classList.add('sad');
        var music = document.getElementById('background-music-cry');
        music.play();
    }else if(input.value === ''){
        eyebrowleft.classList.remove('sad-eyebrow-left');
        eyebrowright.classList.remove('sad-eyebrow-right');
        var a = Array.from(white);
        a.forEach((elem)=>{
            elem.classList.remove('visible');
        });
        lips.classList.remove('sad');
    }else if(input.value === 'All kids'){
        eyebrowleft.classList.add('soch');
        var a = Array.from(white);
        a.forEach((elem)=>{
            elem.classList.add('small')
        });
        eyebrowleft.classList.add('soch')
        var music = document.getElementById('background-music-question');
        music.play();
    }else if(input.value === 'All kids are afraid to you!'){
        setTimeout(()=>{
            lips.classList.add('smile');
            eyebrowright.classList.add('soch');
            var a = Array.from(white);
        a.forEach((elem)=>{
            elem.classList.remove('small')
        });
        },200)
        input.disabled = true;
        var music = document.getElementById('background-music-aah');
        music.play();
        button.addEventListener('click',()=>{
            handright.classList.add('done');
            setTimeout(()=>{
                handright.classList.add('visible');
            },500)
            var music = document.getElementById('background-music-ding');
            music.play();
        })
    }
})