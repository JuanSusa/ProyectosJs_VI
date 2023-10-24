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

function actualizarRelojDigital() {
    const horaDigital = document.getElementById("horaDigital");
    const minutoDigital = document.getElementById("minutoDigital");
    const ampmDigital = document.getElementById("am_pm");

    const ahora = new Date();
    let horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const ampm = horas >= 12 ? "PM" : "AM";

    if (horas > 12) {
        horas -= 12;
    }

    horaDigital.textContent = horas < 10 ? "0" + horas : horas;
    minutoDigital.textContent = minutos < 10 ? "0" + minutos : minutos;
    ampmDigital.textContent = ampm;
}

// Actualiza el reloj digital cada segundo
setInterval(actualizarRelojDigital, 1000);

// Llama a la función para mostrar la hora actual al cargar la página
actualizarRelojDigital();
