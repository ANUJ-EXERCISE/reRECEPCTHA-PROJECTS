var input = document.querySelector('#input');
var button = document.querySelector('#btn');
var eyes = document.querySelectorAll('.eye');
var smile = document.querySelectorAll('.smile')
var sad = document.querySelectorAll('.sad');
var handright = document.querySelector('#hand-right');

input.addEventListener('input',()=>{
    if(input.value === `You're not as`){
        var a = Array.from(eyes);
        a.forEach((elem)=>{
            elem.style.opacity = 0;
        });
    }else if(input.value === `You're not as funny as you think`){
        var a = Array.from(eyes);
        a.forEach((elem)=>{
            elem.style.opacity = 1;
            elem.classList.add('visible');
        });
        var b = Array.from(sad);
        b.forEach((elem)=>{
            elem.style.opacity = 1;
        });
        var music = document.getElementById("background-music-cry");
        music.play();
    }else if(input.value === ''){
        var a = Array.from(eyes);
        a.forEach((elem)=>{
            elem.classList.remove('visible');
        });
        var b = Array.from(sad);
        b.forEach((elem)=>{
            elem.style.opacity = 0;
        });
    }else if(input.value === 'Your jokes are pun-derful!'){
        var b = Array.from(smile);
        b.forEach((elem)=>{
            elem.style.opacity = 1;
        });
        var music = document.getElementById("background-music-sans");
        music.play();
        button.addEventListener('click',()=>{
            handright.classList.add('done');
            setTimeout(()=>{
                handright.classList.add('visible');
            },500)
            var music = document.getElementById("background-music-ding");
            music.play();
        })
    }
})