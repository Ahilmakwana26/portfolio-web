// menu icon
let menu = document.querySelector('.menu-icon');
let mobilenav = document.querySelector('.mobile-nav');
menu.addEventListener("click",()=>{
    mobilenav.classList.toggle('active');
})
document.addEventListener("click",(e)=>{
    let isClickInsideMenu = mobilenav.contains(e.target);
    let isClickOnbutton = menu.contains(e.target);
    if(!isClickInsideMenu && !isClickOnbutton){
        mobilenav.classList.remove('active');
    }
})