var input = document.querySelector('#input');
var button = document.querySelector('#btn');
var handright = document.querySelector('#hand-right');
var one = document.querySelectorAll('#eye');
var finger = document.querySelector('#finger');

input.addEventListener('input',()=>{
    if(input.value === 'I heard'){
        var a = Array.from(one);
        a.forEach((elem)=>{
            elem.classList.add('soch');
        })
        var music = document.getElementById('background-music-question');
        music.play();
    }else if(input.value === 'I heard Chara was nearby'){
        var a = Array.from(one);
        a.forEach((elem)=>{
            elem.classList.add('visible');
        })
        var music = document.getElementById('background-music-cry');
        music.play();
    }else if (input.value === ''){
        var a = Array.from(one);
        a.forEach((elem)=>{
            elem.classList.remove('visible');
        })
    }else if(input.value === 'Papyrus said you are a good friend'){
        var music = document.getElementById('background-music-aah');
        music.play();
        input.disabled = true;
        button.addEventListener('click',()=>{
            handright.classList.add('done');
            setTimeout(()=>{
                finger.classList.add('visible');
            },500)
            var music = document.getElementById('background-music-ding');
            music.play();
        })
    }
})