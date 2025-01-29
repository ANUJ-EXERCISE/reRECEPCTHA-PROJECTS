var input = document.querySelector('#input');
var button = document.querySelector('#btn');
var much = document.querySelector('#much');
var haut = document.querySelector('#haut');
var pant = document.querySelector('#pant');
var hair = document.querySelector('#hair');
var ganja = document.querySelector('#ganja')
var legheight = document.querySelector('#legs');
var lefthand = document.querySelector('.partial-bottom-border')
var righthand = document.querySelector('.partial-bottom-border2')
var indicator = document.querySelector('#indicator');


input.addEventListener('input', () => {
    if (input.value === 'Password123') {
        indicator.classList.add('red')
    } else if (input.value === 'Password12345!') {
        indicator.classList.add('yellow');
        pant.classList.add('pant-height');
        legheight.classList.add('leg-height')
        haut.classList.add('smile');
        lefthand.classList.add('left-hand-body');
        righthand.classList.add('right-hand-body')
        setTimeout(() => {
            much.classList.add('muchiya');
        }, 1000)
    } else if (input.value === 'Password12345!?!?') {
        indicator.classList.add('green');
        hair.classList.add('hair-gayab');
        ganja.classList.add('ganja-aaya');
        haut.classList.remove('smile')
    }

})

