var input = document.querySelector('#input');
var haut = document.querySelector('#smile');
var hand = document.querySelector('#hand')
var cornea = document.querySelectorAll('#white')
var button = document.querySelector('#btn')


input.addEventListener('input',()=>{
    if(input.value === `You can't`){
        haut.classList.add('serious');
    }else if(input.value === `You can't read this!`){
       var a = Array.from(cornea);
       a.forEach((elem)=>{
        elem.classList.add('visible')
       });
       haut.classList.remove('serious');
       haut.classList.add('sad')
    }

    if(input.value === ''){
       haut.classList.remove('serious');
       var a = Array.from(cornea);
       a.forEach((elem)=>{
        elem.classList.remove('visible')
       });
       haut.classList.remove('sad')
    }

    if(input.value === 'boo boo bee bee'){
        haut.classList.add('smile');
        input.disabled = true;
        button.addEventListener('click',()=>{
        hand.classList.add('done');
        setTimeout(()=>{
            hand.classList.add('visible')
        },500)
        })
    }
})