window.addEventListener("scroll",()=>{

document.querySelector("header").style.background=
window.scrollY>100 ? "#111":"#000";

});