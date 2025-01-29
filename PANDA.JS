var clickdiv = document.querySelector('#dino');
clickdiv.addEventListener('click', () => {
    setTimeout(() => {
        document.querySelector('#eye-right').style.opacity = '1';
        document.querySelector('#eye-right').style.transform = 'translateY(-80%)';
    }, 500)
    setTimeout(() => {
        document.querySelector('#eye-left').style.opacity = '1';
        document.querySelector('#eye-left').style.transform = 'translateY(-80%)';
    }, 2000)
    setTimeout(() => {
        document.querySelector('#leg-left').style.bottom = '-80%';
        document.querySelector('#leg-right').style.bottom = '-80%';
    }, 2500)
    setTimeout(()=>{
        clickdiv.style.transform = 'translateX(300%)'
    },3000)
})