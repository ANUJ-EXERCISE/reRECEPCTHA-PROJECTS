var input = document.querySelector('#input');
var button = document.querySelector('#btn');
var one = document.querySelectorAll('.ek');
var handright = document.querySelector('#hand-right');
var smile = document.querySelector('#smile');
var face = document.querySelector('#face');

input.addEventListener('input',()=>{
    if(input.value === 'Your hair looks like'){
        face.classList.add('soch')
        var music = document.getElementById('hmmm');
        music.play();
    }
    else if(input.value === 'Your hair looks like a mess'){
        face.classList.remove('soch')
        var music = document.getElementById('cry');
        music.play();
        var a = Array.from(one);
        a.forEach((elem)=>{
            elem.classList.add('visible')
        })
        smile.classList.add('sad');
    }
    else if(input.value === 'Your rainbow'){
        var a = Array.from(one);
        a.forEach((elem)=>{
            elem.classList.remove('visible')
        })
        smile.classList.remove('sad');
    }
    else if(input.value === 'Your rainbow hair looks stunning!'){
        setTimeout(()=>{
        smile.classList.add('smile');
        },200)
        var music = document.getElementById('aah');
        music.play();
        btn.addEventListener('click',()=>{
            handright.classList.add('done');
            var music = document.getElementById('ding');
            music.play();
            setTimeout(()=>{
                handright.classList.add('visible');
            },500)
        })
    }
})