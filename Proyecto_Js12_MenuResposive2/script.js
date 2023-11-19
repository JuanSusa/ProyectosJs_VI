document.querySelector('.logo-menu').addEventListener('click', animationMenu);//al evento click se va agregar la funcion de la animacion


let barra1 = document.querySelector('.row-1');
let barra2 = document.querySelector('.row-2');
let barra3 = document.querySelector('.row-3');

function animationMenu(){

    //.toggle permite realizar cambios al DOM, por defecto esta en flase, cuando responde al llamado se vuelve true
    barra1.classList.toggle('row-1-animate');
    barra3.classList.toggle('row-3-animate');
    barra2.classList.toggle('row-2-animate');

}