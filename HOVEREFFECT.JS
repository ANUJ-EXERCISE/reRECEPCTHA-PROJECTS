var maindiv = document.querySelector('#main');

maindiv.addEventListener('mousemove', (e) => {
    if (e.target.id === 'bubble') {
        e.target.style.height = '20px';
        e.target.style.width = '20px';
        setTimeout(() => {
            e.target.style.height = '5px';
            e.target.style.width = '5px';
        }, 400)
    }
})