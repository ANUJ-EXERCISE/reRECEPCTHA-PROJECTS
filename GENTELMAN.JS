var tearfirst = document.querySelector('#tear');
var tearsecond = document.querySelector('#tea');
var input = document.querySelector('#input');
var btn = document.querySelector('#tell');
var haut = document.querySelector('#haut');
var hath = document.querySelector('#thumb');
var white = document.querySelectorAll('#white');


input.addEventListener('input', () => {
     count = input.value.length;

    if(count > 4){
        var a = Array.from(white);
        a.forEach((elem)=>{
            elem.classList.add('shrink')
        })
    } else{
        var a = Array.from(white);
        a.forEach((elem)=>{
            elem.classList.remove('shrink')
        })
    }


    if (input.value === 'Did your tie write the exam?') {
        tearfirst.style.display = 'initial';
        var a = Array.from(white);
        a.forEach((elem)=>{
            elem.classList.remove('shrink')
        })
        tearsecond.style.display = 'initial';
        haut.classList.add('haut')
    } else{
        tearfirst.style.display = 'none';
        tearsecond.style.display = 'none';
        haut.classList.remove('haut')
    }

    if(input.value === 'That tie deserves an award!'){
        var a = Array.from(white);
        a.forEach((elem)=>{
            elem.classList.remove('shrink')
        })
        haut.classList.add('smile');
        input.disabled = true;
        btn.addEventListener('click',()=>{
            hath.classList.add('last')
        })
    } else{
        haut.classList.remove('smile');
    }

})