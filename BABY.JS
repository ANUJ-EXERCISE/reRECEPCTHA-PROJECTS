var input = document.querySelector('#input');
var honey = document.querySelector('#honey');
var cryone = document.querySelector('#cry1');
var crysecond = document.querySelector('#cry2');
var btn = document.querySelector('#btn');
var handf = document.querySelector('#handfirst');
var hands = document.querySelector('#handsecond');
var eyebrowleft = document.querySelector('#eye-brow-left');
var eyebrow = document.querySelector('#eye-brow-right');


input.addEventListener('input', () => {
    const count = input.value.length;
    // const value = input.value.trim();
    if (count > 10) {
        eyebrow.classList.add('soch');
    } else {
        eyebrow.classList.remove('soch');
    }

    if (input.value === 'googoo ga ga') {
        honey.classList.add('initial');
        input.disabled = true;
        eyebrow.classList.remove('soch');
        btn.addEventListener('click',()=>{
            handf.style.transform = 'translateX(60%)';
            hands.style.transform = 'translateX(-60%)';
        })
    } 
    if (input.value === "you can't read this") {
        eyebrow.classList.add('cry2');
        eyebrowleft.classList.add('cry1');
        cryone.classList.add('tear1');
        crysecond.classList.add('tear2')
    } else{
        eyebrowleft.classList.remove('cry1');
        eyebrow.classList.remove('cry2');
        cryone.classList.remove('tear1');
        crysecond.classList.remove('tear2')
    }
})