function calcularTiempo(){
    let tiempo = new Date()//"Date", objeto de JS que nos traera la hora local del sistema

    //Metodos para obetener por separado la HH, los MM y los SS
    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundos = tiempo.getSeconds();

    //Ajuste del formato
    hora = hora < 10 ? "0" + hora : hora;
    minuto= minuto < 10 ? "0"+ minuto : minuto;
    segundos = segundos < 10 ? "0"+ segundos : segundos;

    //Concatenar datos para el reloj
    let pantalla = hora + ":" + minuto + ":" + segundos;
    let reloj = document.querySelector(".container");
    reloj.innerHTML=pantalla;//"innerHTML", devuelve el resulta a sintaxis de html

}


setInterval(calcularTiempo, 1000);
