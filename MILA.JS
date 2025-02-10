var input = document.querySelector('#input');
var white = document.querySelectorAll('#white');
var smile = document.querySelector('#smile');
var button = document.querySelector('#btn');
var handright = document.querySelector('#hand-right');
var handleft = document.querySelector('#hand-left');
var eyebrowleft = document.querySelector('#eye-brow-left');
var eyebrowright = document.querySelector('#eye-brow-right');


input.addEventListener('input', () => {


    if (input.value === 'Why do') {
        eyebrowleft.classList.add('eyebrow-left-sad');
        eyebrowright.classList.add('eyebrow-right-sad');
    } else if (input.value === 'Why do your bow') {
        handleft.classList.add('uper-jaon-left');
        handright.classList.add('uper-jaon-right');
    } else if (input.value === 'Why do your bow looks like candy!') {
        handleft.classList.remove('uper-jaon-left');
        handright.classList.remove('uper-jaon-right');
        handleft.style.animation = 'shake-left 0.2s infinite linear';
        handright.style.animation = 'shake 0.2s infinite linear';
        smile.classList.add('sad');
        var a = Array.from(white);
        a.forEach((elem) => {
            elem.classList.add('visible')
        })
    }else if(input.value === ''){
        smile.classList.remove('sad');
        var a = Array.from(white);
        a.forEach((elem) => {
            elem.classList.remove('visible')
        })
        handleft.style.animation = 'none';
        handright.style.animation = 'none';
        eyebrowleft.classList.remove('eyebrow-left-sad');
        eyebrowright.classList.remove('eyebrow-right-sad');
    }else{
        
        
       
    }


    if (input.value === 'Where do you get such cool glasses!') {
        eyebrowleft.classList.add('nice');
        eyebrowright.classList.add('nice');
        smile.classList.add('smile');
        input.disabled = true;
        button.addEventListener('click', () => {
            handright.classList.add('done');
            setTimeout(() => {
                handright.classList.add('visible')
            }, 500)
        })
    }
})

// left --animation: shake-left 0.2s infinite linear;
// right --animation: shake 0.2s infinite linear;


// Why do your bow looks like candy!

// var count = input.value.length;
// if (count > 6) {
//     eyebrowleft.classList.add('soch');
//     eyebrowright.classList.add('soch');
//     var a = Array.from(white);
//     a.forEach((elem) => {
//         elem.classList.add('ankh')
//     })
// } if (input.value === 'Why is your face big than hand!') {
//     var a = Array.from(white);
//     a.forEach((elem) => {
//         elem.classList.remove('ankh');
//         elem.classList.add('visible');
//     });
//     smile.classList.add('sad')
//     eyebrowleft.classList.remove('soch');
//     eyebrowright.classList.remove('soch');
//     eyebrowleft.classList.add('eyebrow-left-sad');
//     eyebrowright.classList.add('eyebrow-right-sad');
// }else {
//     eyebrowleft.classList.remove('eyebrow-left-sad');
//     eyebrowright.classList.remove('eyebrow-right-sad');
//     var a = Array.from(white);
//     a.forEach((elem) => {
//         elem.classList.remove('visible');
//     });
//     smile.classList.remove('sad');
// }
//
// }