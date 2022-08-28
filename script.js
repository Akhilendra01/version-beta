// Parallax Code
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);


const nav = document.querySelector('#navbar');
window.onscroll = () => {
    if (window.scrollY > 30) {
        nav.style.backgroundColor ="rgba(9, 15, 46, 1)";
    }
    else {
        nav.style.backgroundColor ="rgba(9, 15, 46, 0.9)"
    }
}