const inputNumTarjeta = document.getElementById("numTarjeta");
const inputFecha = document.getElementById("fechaTarjeta");
const inputCvv = document.getElementById("codeCvv");

//define formato input
const maskNumber = "#### #### #### ####";
const maskDate = "##/##";
const maskCvv = "###";

//Arreglo de los input
let numberTarjet = [];
let dateTarjet = [];
let codeTarjet = [];

//eventos de los inputs
//Evento al oprimir una tecla campo numero tarjeta
inputNumTarjeta.addEventListener("keydown", (e) => {
  //VALIDACION TECLA TAB
  if (e.key === "Tab" && numberTarjet.length < 16)  {
    alert('completa el campo');
    return;
  }

  e.preventDefault(); //detiene un comportamiento por defecto del navegador
  ingresoDatos(maskNumber, e.key, numberTarjet);
  inputNumTarjeta.value = numberTarjet.join(""); //el valor ingresado en el input va para el arreglo
});

//Evento al oprimir una tecla campo fecha
inputFecha.addEventListener("keydown", (e) => {
  //VALIDACION TECLA TAB
  if (e.key === "Tab") {
    alert('completa la fecha');
    return;
  }

  e.preventDefault(); //detiene un comportamiento por defecto del navegador
  ingresoDatos(maskDate, e.key, dateTarjet);
  inputFecha.value = dateTarjet.join(""); //el valor ingresado en el input va para el arreglo
});

//Evento al oprimir una tecla campo codigoCvv
inputCvv.addEventListener("keydown", (e) => {
  //VALIDACION TECLA TAB
  if (e.key === "Tab") {
    return;
  }

  e.preventDefault(); //detiene un comportamiento por defecto del navegador
  ingresoDatos(maskCvv, e.key, codeTarjet);
  inputCvv.value = codeTarjet.join(""); //el valor ingresado en el input va para el arreglo
});


function ingresoDatos(mask, key, arreglo){

    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];//Valores permitidos en los inputs

    //Validacion cuando este borrando
    if(key === "Backspace" && arreglo.length > 0){
        arreglo.pop();//elimina la ultima posicion del array
        return;
    }

    //Validacion escritura numerica
    //key, teclado
    if(numbers.includes(key) && arreglo.length + 1 <= mask.length){
        if(mask[arreglo.length] === " " || mask[arreglo.length] === "/"){
            arreglo.push(mask[arreglo.length], key);//agrega el - al arreglo o el /
        } else{
            arreglo.push(key);//agrega el numero a la posicion correspondiente
        }
    }



};