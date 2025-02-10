var input = document.querySelector('#input');
var btn = document.querySelector('#btn');
var white = document.querySelectorAll('#white');
var handright = document.querySelector('#hand-right');
var lips = document.querySelector('#smile');

input.addEventListener('input',()=>{
    if(input.value === 'Why are the arms'){
        var a = Array.from(white);
        a.forEach((elem)=>{
            elem.classList.add('choti')
        });
        var music = document.getElementById('background-music-question');
        music.play();
    }else if(input.value === 'Why are the arms so long do they fly?'){
        var a = Array.from(white);
        a.forEach((elem)=>{
            elem.classList.remove('choti');
            elem.classList.add('visible');
        })
        lips.classList.add('sad');
        var music = document.getElementById('background-music-cry');
        music.play();
    }else if(input.value === ''){
        var a = Array.from(white);
        a.forEach((elem)=>{
            elem.classList.remove('choti');
            elem.classList.remove('visible');
        })
        lips.classList.remove('sad');
    }else if(input.value === 'Where did you'){
        var a = Array.from(white);
        a.forEach((elem)=>{
            elem.classList.add('choti')
        });
        var music = document.getElementById('background-music-question');
        music.play();
    }else if(input.value === 'Where did you get this outfit idea?'){
        var a = Array.from(white);
        a.forEach((elem)=>{
            elem.classList.remove('choti')
        });
        setTimeout(() => {
        lips.classList.add('smile');
        }, 200)
        var music = document.getElementById('background-music-aah');
        music.play();
        btn.addEventListener('click',()=>{
            handright.classList.add('done');
            setTimeout(()=>{
                handright.classList.add('visible')
            },500)
            var music = document.getElementById('background-music-ding');
            music.play();
        })
    }
})