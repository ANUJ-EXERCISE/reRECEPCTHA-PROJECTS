var input = document.querySelector('#input');
var button = document.querySelector('#btn');
var handleft = document.querySelector('#hand-left');
var handright = document.querySelector('#hand-right');
var white = document.querySelectorAll('#white');
var brown = document.querySelectorAll('#brown');
var lips = document.querySelector('#lips');

input.addEventListener('input',()=>{
    if(input.value === `You can't read`){
        handleft.classList.add('clever');
        handright.classList.add('clever');
        var music = document.getElementById('hmmm');
        music.play();
        setTimeout(()=>{
            handleft.classList.remove('clever');
            handright.classList.remove('clever');
        },300)
    }if(input.value === `You can't read this!`){
        var a = Array.from(white);
        lips.classList.add('sad');
        var music = document.getElementById('baby');
        music.play();
        a.forEach((elem)=>{
            elem.classList.add('visible')
        })
    }if(input.value === ''){
        lips.classList.remove('sad');
        handleft.classList.remove('clever');
        handright.classList.remove('clever');
        var a = Array.from(white);
        a.forEach((elem)=>{
            elem.classList.remove('visible')
        })
    }if(input.value === 'Chiki chiki boom boom!'){
        var a = Array.from(brown);
        a.forEach((elem)=>{
            elem.classList.add('initial')
        })
        var music = document.getElementById('aah');
        music.play();
        lips.classList.add('smile');
        input.disabled = true;
        button.addEventListener('click',()=>{
            handright.classList.add('done');
            var music = document.getElementById('ding');
            music.play();
            setTimeout(()=>{
                handright.classList.add('visible')
            },300)
        })
    }
})