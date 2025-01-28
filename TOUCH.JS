document.addEventListener("mousemove", (event) => {
    const eyeLeft = document.querySelector("#eye-left");
    const eyeRight = document.querySelector("#eye-right");
    const corneaLeft = document.querySelector("#cornea-left");
    const corneaRight = document.querySelector("#cornea-right");

    function moveCornea(eye, cornea) {
        const eyeRect = eye.getBoundingClientRect(); // Get eye boundaries
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;
        const deltaX = event.clientX - eyeCenterX;
        const deltaY = event.clientY - eyeCenterY;
        const angle = Math.atan2(deltaY, deltaX); // Angle to mouse
        const maxDistance = Math.min(eyeRect.width, eyeRect.height) / 4; // Limit movement

        const offsetX = Math.cos(angle) * maxDistance;
        const offsetY = Math.sin(angle) * maxDistance;
        var cornea = document.querySelectorAll('#cornea');
        var arr = Array.from(cornea);
        arr.forEach((elem) => {
            elem.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        })

    }

    moveCornea(eyeLeft, corneaLeft);
    moveCornea(eyeRight, corneaRight);
});

var frame = document.querySelector('#frame');
var eyebrowleft = document.querySelector('#eyebrow-left');
var eyebrowright = document.querySelector('#eyebrow-right');


frame.addEventListener('mouseenter',()=>{
    eyebrowleft.style.transform = 'rotate(20deg) translateY(-60%)';
    eyebrowright.style.  transform = 'translateY(-60%) rotate(-20deg)';
})

frame.addEventListener('mouseleave',()=>{
    eyebrowleft.style.transform = 'rotate(0deg) translateY(0%)';
    eyebrowright.style.  transform = 'translateY(0%) rotate(0deg)';
})