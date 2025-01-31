var board = document.querySelector('#board');
var input = document.querySelector('#input');
var hi = document.querySelector('#hi');
var face = document.querySelector('#face');
var answer = document.querySelector('#answer')
var loading = document.querySelector('#loading');
var question = document.querySelector('#question');
var button = document.querySelector('#button');
setTimeout(() => {
    hi.style.opacity = '1'
}, 1500)
button.addEventListener('click', () => {
    input.value = '';
    var tl = gsap.timeline();
    tl.to(question, {
        opacity: 1,
        delay: 0.2
    })
    tl.to(loading, {
        opacity: 1,
        delay: 0.5
    })
    setTimeout(() => {
        gsap.to(board, {
            background: "radial-gradient(circle, #e8c5d8 40%, #becce9 100%)",
            duration: 2,
            delay: 1,
            ease: "power2.inOut"
        });

        gsap.to(board, {
            background: "transparent",
            duration: 2,
            delay: 5,
            ease: "power2.inOut"
        });
    }, 1000)
    tl.to(loading, {
        display: 'none',
        delay: 5.5
    })
    tl.to(answer, {
        display: 'initial'
    })

    setTimeout(() => {
        document.getElementById("badal").innerHTML = `
        Was this answer helpful? 
        <a href="#" id="yes">Yes</a> 
        or 
        <a href="#" id="no">No</a>
    `;

    document.querySelector('#no').addEventListener('mouseenter',()=>{
        face.style.background = '#d68465';
    })

    document.querySelector('#no').addEventListener('mouseleave',()=>{
        face.style.background = '#d5b18e';
    })

    }, 9000);

    
})

