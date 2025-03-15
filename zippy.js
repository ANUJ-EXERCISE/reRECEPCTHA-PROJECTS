var input = document.querySelector('#input');
var button = document.querySelector('#btn');
var handright = document.querySelector('#hand-right');
var one = document.querySelectorAll('.ek');
var lips = document.querySelector('#smile');

input.addEventListener('input',()=>{
    if(input.value === 'Why are your'){
        var a = Array.from(one);
        a.forEach((elem)=>{
            elem.classList.add('soch');
        });
        var music = document.getElementById('hmmm');
        music.play();
    }else if(input.value === 'Why are your ears so big?'){
        var a = Array.from(one);
        a.forEach((elem)=>{
            elem.classList.add('visible');
        });   
        lips.classList.add('sad');
        var music = document.getElementById('cry');
        music.play();
    }else if(input.value === ''){
        lips.classList.remove('sad')
        var a = Array.from(one);
        a.forEach((elem)=>{
            elem.classList.remove('visible');
        });
    }else if(input.value === 'Your dress sense is good!'){
        input.disabled = true;
        setTimeout(()=>{
            var a = Array.from(one);
        a.forEach((elem)=>{
            elem.classList.remove('soch');
        });
        lips.classList.add('smile');
        },200)
        var music = document.getElementById('aah');
        music.play();
        button.addEventListener('click',()=>{
            handright.classList.add('done');
            setTimeout(()=>{
                handright.classList.add('visible');
            },500)
            var music = document.getElementById('ding');
            music.play();
        })
    }
})