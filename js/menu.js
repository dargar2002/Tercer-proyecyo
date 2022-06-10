const bton = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu-navegacion');

bton.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
        && e.target != menu && e.target != bton){
        menu.classList.toggle("spread")

    }
})