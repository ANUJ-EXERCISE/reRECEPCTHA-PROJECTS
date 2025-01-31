var input = document.querySelector('#input');
var white = document.querySelectorAll('#white');
var smile = document.querySelector('#smile');
var button = document.querySelector('#btn');
var handright = document.querySelector('#hand-right');
var eyebrowleft = document.querySelector('#eye-brow-left');
var eyebrowright = document.querySelector('#eye-brow-right');


input.addEventListener('input', () => {
    var count = input.value.length;
    if (count > 6) {
        eyebrowleft.classList.add('soch');
        eyebrowright.classList.add('soch');
        var a = Array.from(white);
        a.forEach((elem) => {
            elem.classList.add('ankh')
        })
    } if (input.value === 'Why is your face big than hand!') {
        var a = Array.from(white);
        a.forEach((elem) => {
            elem.classList.remove('ankh');
            elem.classList.add('visible');
        });
        smile.classList.add('sad')
        eyebrowleft.classList.remove('soch');
        eyebrowright.classList.remove('soch');
        eyebrowleft.classList.add('eyebrow-left-sad');
        eyebrowright.classList.add('eyebrow-right-sad');
    }else {
        eyebrowleft.classList.remove('eyebrow-left-sad');
        eyebrowright.classList.remove('eyebrow-right-sad');
        var a = Array.from(white);
        a.forEach((elem) => {
            elem.classList.remove('visible');
        });
        smile.classList.remove('sad');
    }
    if(input.value === 'Why are you so sweet?'){
        eyebrowleft.classList.add('nice');
        eyebrowright.classList.add('nice');
        smile.classList.add('smile');
        input.disabled = true;
        button.addEventListener('click',()=>{
            handright.classList.add('done');
            setTimeout(()=>{
                handright.classList.add('visible')
            },500)
        })
    }
})