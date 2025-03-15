var input = document.querySelector("#input");
var button = document.querySelector("#btn");
var handleft = document.querySelector("#hand-left");
var handright = document.querySelector("#hand-right");
var top = document.querySelector('#top');
var overlay = document.querySelector('#overlay');

input.addEventListener('input',()=>{
    if(input.value === 'Where is your'){
        var music = document.getElementById('background-music-question');
        music.play();
    }else if(input.value === 'Where is your second eye?'){
        overlay.style.opacity = 1;
        var music = document.getElementById('background-music-cry');
        music.play();
    }else if(input.value === ''){
        overlay.style.opacity = 0;
    }else if(input.value === 'You look really cool!'){
        var music = document.getElementById('background-music-aah');
        music.play();
        button.addEventListener('click',()=>{
            handleft.classList.add('smile-left');
            handright.classList.add('smile-right');
            setTimeout(()=>{
                handleft.classList.add('visible')
                handright.classList.add('visible')
            },500)
            var music = document.getElementById('background-music-ding');
            music.play();
        })
    }
})
