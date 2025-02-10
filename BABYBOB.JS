var bubblefirst = document.querySelector('#bubble-first');
var bubblesecond = document.querySelector('#bubble-second');
var bubblethird = document.querySelector('#bubble-third');
var handright = document.querySelector('#hand-right');
var main = document.querySelector('#main');
var fluid = document.querySelector('#fluid')
var polioma = document.querySelector('#nipal');




var tl = gsap.timeline();
tl.to(bubblefirst, {
    delay: 3,
    duration: 1,
    opacity: 1
});

tl.to(bubblesecond, {
    opacity: 0, // Initially set opacity to 0

});

tl.to(bubblethird, {
    opacity: 0, // Initially set opacity to 0

});


bubblefirst.addEventListener('click', () => {
    if (gsap.getProperty(bubblefirst, 'opacity') === 1) {
        gsap.to(bubblesecond, { opacity: 1, duration: 1 });
        gsap.to(bubblefirst, { opacity: 0, });
    };
    fluid.classList.add('one-hand-half');
    polioma.classList.add('border');
    var music = document.getElementById('haha');
    music.play();
    main.style.animation = 'shake 1s infinite';
});

bubblesecond.addEventListener('click', () => {
    if (gsap.getProperty(bubblesecond, 'opacity') === 1) {
        gsap.to(bubblesecond, { opacity: 0, duration: 1 });
        gsap.to(bubblethird, { opacity: 1, });
    };
    fluid.classList.add('half');
    var music = document.getElementById('haha');
    music.play();
    main.style.animation = 'shake 1s infinite';
});

bubblethird.addEventListener('click', () => {
    if (gsap.getProperty(bubblethird, 'opacity') === 1) {
        gsap.to(bubblethird, { opacity: 0, });
    };
    handright.classList.add('done');
    setTimeout(() => {
        handright.classList.add('visible');
    }, 300)
    fluid.classList.add('full');
    var music = document.getElementById('ding');
    music.play();
    var music = document.getElementById('haha');
    music.play();
    main.style.animation = 'shake 1s infinite';
    setTimeout(()=>{
        main.style.animation = 'none';
    },200);
    setTimeout(()=>{
        var music = document.getElementById('fart');
        music.play();
    },1500);
});

setTimeout(() => {
    var music = document.getElementById('background-music-aah')
    music.play();
}, 1000)