// DOM Elements Object
const elements = {
    maindiv: document.querySelector('#main'),
    mouse: document.querySelector('#mousefollower'),
    headtext: document.querySelector('#ha h1'),
    headtext2: document.querySelector('#hb h1'),
    headtext3: document.querySelector('#hc h5'),
    chotiheading1: document.querySelector('#cha h5'),
    chotiheading2: document.querySelector('#chi h5'),
    bottom: document.querySelector('#bottom'),
    allelement: document.querySelectorAll('#hoverbox'),
    paddingdiv: document.querySelector('#secondpart #padding'),
    nav: document.querySelector('#nav'),
    rightb: document.querySelector('#navrightb'),
    righta: document.querySelectorAll('#navrighta ul li'),
    rightalink: document.querySelector('#navrighta ul #contact'),
    logo: document.querySelector('#navleft h4'),
    menu: document.querySelector('#navrightb h4'),
    menuinner: document.querySelectorAll('#navrighta ul li h4'),
    bottoma: document.querySelector('#bottom #a'),
    bottomb: document.querySelector('#bottom #b'),
    body: document.querySelector('body'),
    responsive: document.querySelector('#responsivemenu'),
    closemenu: document.querySelector('#responsnavinner #clos'),
    wapisnav: document.querySelectorAll('#responsnavinner span h3'),
    linkswapis: document.querySelectorAll('#responslastsecondinner ul li'),
    copyrightwapis: document.querySelectorAll('#menubottom h5'),
    centerrespons: document.querySelectorAll('#responscenter span h1')
};



// Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: elements.maindiv,
    smooth: true
});

let timeout;
let xprev = 0;
let yprev = 0;

// Animations


function headinganimation() {
    gsap.to(elements.headtext, {
        y: "0%",
        duration: 1,
        delay: 1,
    });
    gsap.to(elements.headtext2, {
        y: '0%',
        duration: 0.7,
        delay: 1.5,
    });
    gsap.to(elements.headtext3, {
        y: '0%',
        duration: 1,
        delay: 0.8,
    });
}

function chotiheadinganimation() {
    gsap.to(elements.chotiheading1, {
        y: 0,
        duration: 1,
        delay: 0.9
    });
    gsap.to(elements.chotiheading2, {
        y: 0,
        duration: 1,
        delay: 1
    });
}

function bottomanimation() {
    gsap.from(elements.bottom, {
        opacity: 0,
        duration: 1,
        delay: 1.5
    });
}

// Image Hover Effect
function imagehover() {
    if (window.innerWidth > 600) {
        elements.allelement.forEach(function (elem) {
            let previousvalue = 0;
            let difference = 0;
            elem.addEventListener('mousemove', function (e) {

                var diff = e.clientY - elem.querySelector('img').getBoundingClientRect().top;
                difference = e.clientX - previousvalue;
                previousvalue = e.clientX;
                gsap.to(elem.querySelector('img'), {
                    top: diff,
                    left: e.clientX,
                    rotate: gsap.utils.clamp(-20, 20, difference)
                });
            });
            elem.addEventListener('mouseenter', function () {
                gsap.to(elem.querySelector('img'), {
                    opacity: 1,
                });
            });
            elem.addEventListener('mouseleave', function () {
                gsap.to(elem.querySelector('img'), {
                    opacity: 0
                });
            });
        });
    }
}

// Heading Shift Animation
function headingshift() {
    elements.allelement.forEach(function (element) {
        element.addEventListener('mouseenter', function () {
            var entered = element.querySelector('h1');
            var entered1 = element.querySelector('h5');
            entered.classList.add("left");
            entered1.classList.add('opacity');
        });
        element.addEventListener('mouseleave', function () {
            var entered = element.querySelector('h1');
            var entered1 = element.querySelector('h5');
            entered.classList.remove("left");
            entered1.classList.remove('opacity');
        });
    });
}

// Mouse Follow Size Effect
function mousefollowsize() {
    elements.allelement.forEach(function (elem) {
        elem.addEventListener('mouseenter', function () {
            elements.mouse.classList.add('size');
            elements.mouse.querySelector('h5').style.opacity = '1';
        });
        elem.addEventListener('mouseleave', function () {
            elements.mouse.classList.remove('size');
            elements.mouse.querySelector('h5').style.opacity = '0';
        });
    });
}

// Mouse Follower Animation
function mousefollower() {
    elements.maindiv.addEventListener('mousemove', function (details) {
        var x = details.clientX;
        var y = details.clientY;
        const followerWidth = elements.mouse.offsetWidth;
        const followerHeight = elements.mouse.offsetHeight;
        elements.mouse.style.transform = `translate(${x - followerWidth / 2}px, ${y - followerHeight / 2}px)`;
    });

    elements.maindiv.addEventListener('mouseenter', function () {
        elements.mouse.style.opacity = '1';
    });

    elements.maindiv.addEventListener('mouseleave', function () {
        elements.mouse.style.opacity = '0';
    });
}

function navanimation() {
    gsap.from(elements.nav, {
        opacity: 0,
        duration: 1,
        delay: 1
    })
}

var button = document.querySelector('#secondpart button')
function hover(elem) {
    elem.addEventListener('mouseenter', function () {
        elements.mouse.classList.add('smallsize');
        gsap.to(button, {
            backgroundColor: "white",
            color: "black",
            duration: .7,
            cursor: "pointer"
        })
    })
    elem.addEventListener('mouseleave', function () {
        elements.mouse.classList.remove('smallsize');
        gsap.to(button, {
            backgroundColor: "black",
            color: "white",
            duration: .7
        })
    })
}

var button2 = document.querySelector('#right button')
function hover2(elem) {
    elem.addEventListener('mouseenter', function () {
        elements.mouse.classList.add('smallsize');
        gsap.to(button2, {
            backgroundColor: "white",
            color: "black",
            duration: .7,
            cursor: "pointer"
        })
    })
    elem.addEventListener('mouseleave', function () {
        elements.mouse.classList.remove('smallsize');
        gsap.to(button2, {
            backgroundColor: "black",
            color: "white",
            duration: .7
        })
    })
}

function stagger() {
    elements.rightb.addEventListener('click', function () {
        if (window.innerWidth > 600) {
            elements.rightb.style.transform = 'translateY(120%)';
            gsap.to(elements.righta, {
                y: '240%',
                stagger: 0.1
            })
        }
    })

}

function wapis() {
    elements.rightalink.addEventListener('click', function () {
        if (window.innerWidth > 600) {
            setTimeout(() => {
                elements.rightb.style.transform = 'translateY(0%)';
            }, 200)
            gsap.to(elements.righta, {
                y: '-100%',
                stagger: 0.1
            })
        }
    })

}

function logohover() {
    elements.logo.addEventListener('mouseenter', function () {
        elements.mouse.style.height = '20px';
        elements.mouse.style.width = '20px';
        elements.mouse.style.mixBlendMode = 'difference';
    })
    elements.logo.addEventListener('mouseleave', function () {
        elements.mouse.style.height = '10px';
        elements.mouse.style.width = '10px';
        elements.mouse.style.mixBlendMode = 'normal';
    })
    elements.menu.addEventListener('mouseenter', function () {
        elements.mouse.style.height = '20px';
        elements.mouse.style.width = '20px';
        elements.mouse.style.mixBlendMode = 'difference';
    })
    elements.menu.addEventListener('mouseleave', function () {
        elements.mouse.style.height = '10px';
        elements.mouse.style.width = '10px';
        elements.mouse.style.mixBlendMode = 'normal';
    })
    elements.menuinner.forEach((elem) => {
        elem.addEventListener('mouseenter', () => {
            elements.mouse.style.height = '20px';
            elements.mouse.style.width = '20px';
            elements.mouse.style.mixBlendMode = 'difference';
        })
        elem.addEventListener('mouseleave', function () {
            elements.mouse.style.height = '10px';
            elements.mouse.style.width = '10px';
            elements.mouse.style.mixBlendMode = 'normal';
        })
    })
    elements.bottoma.addEventListener('mouseenter', () => {
        elements.mouse.style.height = '20px';
        elements.mouse.style.width = '20px';
        elements.mouse.style.mixBlendMode = 'difference';
    })
    elements.bottoma.addEventListener('mouseleave', function () {
        elements.mouse.style.height = '10px';
        elements.mouse.style.width = '10px';
        elements.mouse.style.mixBlendMode = 'normal';
    })
    elements.bottomb.addEventListener('mouseenter', () => {
        elements.mouse.style.height = '20px';
        elements.mouse.style.width = '20px';
        elements.mouse.style.mixBlendMode = 'difference';
    })
    elements.bottomb.addEventListener('mouseleave', function () {
        elements.mouse.style.height = '10px';
        elements.mouse.style.width = '10px';
        elements.mouse.style.mixBlendMode = 'normal';
    })
}
logohover()






var firstpage = document.querySelector('#startingpage');

var lastelem = document.querySelector('#startingpage h1');

setTimeout(() => {
    lastelem.classList.add('opacity')
}, 500)


function startingpageanimation() {
    setTimeout(() => {
        elements.body.classList.add('hidden')
    }, 10)
    setTimeout(() => {
        gsap.to(firstpage, {
            y: '-100%',
            duraiton: 1,
        })
    }, 1200)
    setTimeout(() => {
        elements.body.classList.remove('hidden')
    }, 3000)

}

startingpageanimation()

function responsivemenuanimation() {
    if (window.innerWidth < 700) {
        elements.menu.addEventListener('click', () => {
            elements.responsive.classList.add('rem');
            elements.responsive.style.transform = 'translateY(0%)';
            elements.responsive.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
            elements.body.classList.add('bodyscroll');
            elements.wapisnav.forEach((elem) => {
                elem.style.transform = 'translateY(0%)';
            });
            elements.linkswapis.forEach((elem) => {
                gsap.to(elements.linkswapis, {
                    y: '0%',
                    duration: 0.5,
                    stagger: 0.1
                })
            })
            elements.copyrightwapis.forEach((elem) => {
                gsap.to(elements.copyrightwapis, {
                    y: '0%',
                    delay: 0.5,
                    stagger: 0.1,
                    duraiton: 1
                })
            })
            elements.centerrespons.forEach((elem) => {
                gsap.to(elements.centerrespons, {
                    y: '0%',
                    delay: 0.2
                })
            })
        })
        elements.closemenu.addEventListener('click', () => {
            elements.wapisnav.forEach((elem) => {
                elem.style.transform = 'translateY(-100%)';
            });
            setTimeout(() => {
                elements.responsive.style.transform = 'translateY(-100%)';
            }, 500)
            setTimeout(() => {
                elements.body.classList.remove('bodyscroll');
            }, 0.5)
            elements.linkswapis.forEach((elem) => {
                gsap.to(elements.linkswapis, {
                    y: '100%',
                    duration: 1
                })
            })
            elements.copyrightwapis.forEach((elem) => {
                gsap.to(elements.copyrightwapis, {
                    y: '100%',
                    duraiton: 1
                })
            })
            elements.centerrespons.forEach((elem) => {
                gsap.to(elements.centerrespons, {
                    y: '-100%',
                    delay: 0.4,
                    duration: 1
                })
            })
            setTimeout(() => {
                elements.responsive.classList.remove('rem');
            }, 1000)
        })

    }
}

responsivemenuanimation();

setTimeout(() => {

    headinganimation();
    chotiheadinganimation();
    bottomanimation();
    navanimation();
}, 500)





var position = elements.headtext3.getBoundingClientRect().top;

elements.body.addEventListener('scroll', () => {
    if (window.innerWidth < 600) {
        var navposition = elements.nav.getBoundingClientRect().top;

        if (navposition <= 0) {
            elements.nav.classList.add('sticky')
        }
    }
})




// Execute all functions

wapis();
stagger()
hover(button);
hover2(button2);
imagehover();
headingshift();
mousefollower();
mousefollowsize();



