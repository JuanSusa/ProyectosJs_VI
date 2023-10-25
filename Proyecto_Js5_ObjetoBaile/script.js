let img = 'off';

let imgStop = document.getElementById('imgEstatica');

btnSonido = new Audio ('../Proyecto_Js5_ObjetoBaile/media/botonbailar.mp3')//Objeto audio convierte la variable en tipo de media
btnBaile = new Audio ('../Proyecto_Js5_ObjetoBaile/media/audio.mp3')

function bailar(){

    if (img == 'off'){
        
        img = 'on'
        imgStop.classList.add('on');//classList, permite agregar una clase
        imgStop.addEventListener('click', ()=>{
            btnSonido.play();
            btnBaile.play();
        })
        console.log('On');      
    }else{
        img = 'off'
        imgStop.classList.remove('on');
        imgStop.addEventListener('click', ()=>{
            btnBaile.pause();
        })
        console.log('Off');
    }   
}
