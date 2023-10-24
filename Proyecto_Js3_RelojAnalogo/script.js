const deg = 6;

const hora = document.querySelector('.hora');
const minuto = document.querySelector('.minuto');
const segundo = document.querySelector('.segundo');

setInterval(() => {

    let tiempo = new Date();
    
    // los valores de 30 y deg corresponden a los grados de la circunferencia 
    let hr = tiempo.getHours() * 30; 
    let min = tiempo.getMinutes() * deg;
    let sgdo = tiempo.getSeconds() * deg;

    hora.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minuto.style.transform = `rotate(${min}deg)`;
    segundo.style.transform = `rotate(${sgdo}deg)`;

})