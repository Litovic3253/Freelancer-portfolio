const nav = document.querySelector('nav');
const navBth = document.querySelector('#nav-bth');
const navBthImg = document.querySelector('#nav-bth-img');

navBth.onclick = () => {
    if (nav.classList.toggle('open')){
        navBthImg.scr = "./img/nav-close";
    } else {
        navBthImg.scr = './img/NAV.svg';
    }
}

AOS.init();






