const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () =>{

    toggle.classList.toggle('toggleWhite');
    body.classList.toggle('toggleWhite');
})