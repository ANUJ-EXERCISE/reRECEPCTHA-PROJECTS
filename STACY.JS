var eyewhite = document.querySelectorAll('#eye');
var input = document.querySelector('#input');
var tear = document.querySelectorAll('#tear');
var smile = document.querySelector('#bottom');
var thumb = document.querySelector('#thumb');
var tell = document.querySelector('#tell');
var eyebrowleft = document.querySelector('#eyebrow-left');
var eyebrowright = document.querySelector('#eyebrow-right');

input.addEventListener('input', () => {
    var count = input.value.length;
    var value = input.value.trim();
    if (count === 10) {
        var arr = Array.from(eyewhite);
        arr.forEach((elem) => {
            elem.style.height = '50%'
        })
    } else {
        if (count < 10) {
            var arr = Array.from(eyewhite);
            arr.forEach((elem) => {
                elem.style.height = '80%'
            })
        }
    }

    if (value === 'Where did you get that haircut?') {
        eyebrowleft.classList.add('cry1');
        eyebrowright.classList.add('cry2');
        smile.classList.add('sad');
        var a = Array.from(tear);
        a.forEach((elem) => {
            elem.style.display = 'initial';
        })
    } else {
        if (value !== 'Where did your hair go?') {
            eyebrowleft.classList.remove('cry1');
            eyebrowright.classList.remove('cry2');
            smile.classList.remove('sad');
            var a = Array.from(tear);
            a.forEach((elem) => {
                elem.style.display = 'none';
            })
        }
    }

    if (value === 'Where did you get such a pretty bow?') {
        eyebrowleft.classList.add('happy1');
        eyebrowright.classList.add('happy1');
        smile.classList.add('happy');
        tell.addEventListener('click',()=>{
            thumb.classList.add('done');
            setTimeout(()=>{
                thumb.classList.add('visible');
            },500)
        })
        input.disabled = true;
        var arr = Array.from(eyewhite);
        arr.forEach((elem) => {
            elem.style.height = '80%'
        })
    }

})