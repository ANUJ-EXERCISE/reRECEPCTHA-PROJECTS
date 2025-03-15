var input = document.querySelector('#input');
var button = document.querySelector('#btn');
var white = document.querySelectorAll('#white');
var lips = document.querySelector('#smile');
var handright = document.querySelector('#hand-right');


input.addEventListener('input',()=>{
    if(input.value === 'What happened'){
        var a = Array.from(white);
        a.forEach((elem)=>{
            elem.classList.add('soch');
        })
        var music = document.getElementById('background-music-question');
        music.play();
    }else if(input.value === 'What happened to your weird head?'){
        var a = Array.from(white);
        a.forEach((elem)=>{
            elem.classList.remove('soch');
            elem.classList.add('visible');
        });
        lips.classList.add('sad');
        var music = document.getElementById('background-music-cry');
        music.play();
    }else if(input.value === ''){
        var a = Array.from(white);
        a.forEach((elem)=>{
            elem.classList.remove('visible');
        });
        lips.classList.remove('sad')
    }else if(input.value === 'Why is your head'){
        var a = Array.from(white);
        a.forEach((elem)=>{
            elem.classList.add('soch');
        })
        var music = document.getElementById('background-music-question');
        music.play();
    }else if(input.value === 'Why is your head so shiny?'){
        setTimeout(()=>{
            var a = Array.from(white);
            a.forEach((elem)=>{
                elem.classList.remove('soch');
            });
            lips.classList.add('smile')
        },200)
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