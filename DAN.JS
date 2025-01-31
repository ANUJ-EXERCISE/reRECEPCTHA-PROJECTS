var input = document.querySelector('#input');
var haut = document.querySelector('#haut');
var button = document.querySelector('#btn');
var cornealeft = document.querySelector('#cornea-left');
var cornearight = document.querySelector('#cornea-right');
var handleft = document.querySelector('#hand-left');
var eyelineleft = document.querySelector('#eye-line-left');
var eyelineright = document.querySelector('#eye-line-right');
var handright = document.querySelector('#hand-right');

input.addEventListener('input', () => {
    if (input.value === 'Why') {
        handleft.classList.add('uperjaon');
        handright.classList.add('uperjaon');
        setTimeout(() => {
            handleft.classList.remove('uperjaon');
            handright.classList.remove('uperjaon');
        },700)
    }else if
     (input.value === 'Why are you') {
        handleft.style.transition = 'none';
        handright.style.transition = 'none';
        cornealeft.classList.add('eyes-choti');
        cornearight.classList.add('eyes-choti');
        handleft.classList.add('left-hand-bottom-eyes');
        handright.classList.add('right-hand-bottom-eyes');
    } else if(input.value === 'Why are you so'){
        handleft.classList.remove('left-hand-bottom-eyes');
        handright.classList.remove('right-hand-bottom-eyes');
        handleft.classList.add('left-hand-on-eyes');
        handright.classList.add('right-hand-on-eyes');
    } else if(input.value === 'Why are you so sensitive?'){
        cornealeft.classList.add('visible');
        cornearight.classList.add('visible');
        haut.classList.add('sad');handleft.classList.remove('left-hand-on-eyes')
        haut.classList.add('sad');handright.classList.remove('right-hand-on-eyes')
        handleft.style.animation = 'shake-hand 0.1s infinite ease-in-out'
        handright.style.animation = 'shake-right-hand 0.1s infinite ease-in-out'
        eyelineleft.classList.add('eyebrow-left-rotate');
        eyelineright.classList.add('eyebrow-right-rotate')
    }else if (input.value === "") {
        // 🧹 Saare classes remove karo
        handleft.classList.remove("uperjaon", "left-hand-bottom-eyes", "left-hand-on-eyes");
        handright.classList.remove("uperjaon", "right-hand-bottom-eyes", "right-hand-on-eyes");
        cornealeft.classList.remove("eyes-choti", "visible");
        cornearight.classList.remove("eyes-choti", "visible");
        haut.classList.remove("sad");
        eyelineleft.classList.remove("eyebrow-left-rotate");
        eyelineright.classList.remove("eyebrow-right-rotate");

        // 🛑 Animation Stop Karo
        handleft.style.animation = "none";
        handright.style.animation = "none";
    }else if(input.value === 'I like your hat'){
        haut.classList.add('smile');
        eyelineleft.classList.add('eyebrow-left-rotate-happy');
        eyelineright.classList.add('eyebrow-right-rotate-happy');
        input.disabled = true;
        button.addEventListener('click',()=>{
            handright.style.transition = 'none'
            handright.classList.add('hand-right-done');
            setTimeout(()=>{
                handright.classList.add('visible')
            },400)
        })
    }  

})
