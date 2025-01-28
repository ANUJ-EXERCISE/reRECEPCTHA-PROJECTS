var input = document.querySelector('#input');
var eyebrow = document.querySelector('#eyebrowright');
var eyebrowleft = document.querySelector('#eyebrowleft');
var haut = document.querySelector('#haut');
var cornealeft = document.querySelector('#cornea-left');
var cornearight = document.querySelector('#cornea-right')
var crying1 = document.querySelector('#cry1');
var crying2 = document.querySelector('#cry2');
var btn = document.querySelector('#tell');
var manhand = document.querySelector('#hand');
var manhand2 = document.querySelector('#hand2');

btn.disabled = true;

input.addEventListener('input', () => {
    const count = input.value.length;
    const value = input.value.trim();
    if (count > 10) {
        eyebrow.classList.add('soch');
    } else {
        eyebrow.classList.remove('soch');
        eyebrow.classList.remove('cry2');
    }

    if (value === 'you are looking cool') {
        haut.classList.add('haut');
        eyebrow.classList.remove('soch');
        eyebrow.classList.add('happy2');
        eyebrowleft.classList.add('happy1');
        btn.disabled = false;
        btn.classList.add('apply');
        input.disabled = true;
        input.style.border = '5px solid green';
        btn.addEventListener('click',()=>{
            manhand.style.left = '56%';
            manhand2.style.left = '33%';
            setInterval(()=>{
                manhand.style.transform = 'rotate(-40deg)';
                manhand2.style.transform = 'rotate(40deg)';
            },500)
        })
    } else {
        haut.classList.remove('haut');
        eyebrow.classList.remove('happy2');
        eyebrowleft.classList.remove('happy1')
        btn.disabled = true;
        btn.classList.remove('apply');
    }

    if (value === 'you are looking funny') {
        eyebrow.classList.add('cry2');
        eyebrow.classList.remove('soch')
        eyebrowleft.classList.add('cry1');
        crying1.style.display = 'initial';
        crying2.style.display = 'initial';
        haut.classList.add('hautsad');
    } else {
        eyebrowleft.classList.remove('cry1');
        crying1.style.display = 'none';
        crying2.style.display = 'none';
        haut.classList.remove('hautsad');
    }

});


