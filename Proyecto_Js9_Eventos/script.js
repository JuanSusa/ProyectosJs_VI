let events = [];
let arrayLocalStorage = [];

const nameEvent = document.querySelector("#nameEvent");
const dateEvent = document.querySelector("#dateEvent");
const insertEvent = document.querySelector("#insertEvent");
const listEvents = document.querySelector("#arrayEvents");

const json = upload();

try {
  arrayLocalStorage = JSON.parse(json);
} catch (error) {
  arrayLocalStorage = [];
}

events = arrayLocalStorage ? [...arrayLocalStorage] : []; //si hat eventos agregar al arreglo, si no, dejar arreglo vacio
eventShow();

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault(); //deja el input vacio

  eventInsert();
});

//  ******* FUNCION AGREGAR EVENTO ******
function eventInsert() {
  if (nameEvent.value === "" || dateEvent.value === "") {
    return;
  }
  if (dateDifference(dateEvent.value) < 0) {
    return;
  }

  const newEvent = {
    id: (Math.random() * 100).toString(36).slice(3), //Crear id random y establece 3 cifras del id
    name: nameEvent.value,
    date: dateEvent.value,
  };

  events.unshift(newEvent); //carga a la variable lo que se envia en el parametro
  saveData(JSON.stringify(events)); //guarda eventos en localStorage

  nameEvent.value = "";

  eventShow();
}

// ******* FUNCION DIFERENCIA DE DIAS ******
function dateDifference(destination) {
  let dateDestination = new Date(destination);
  let dateCurrent = new Date();
  let differenceDate = dateDestination.getTime() - dateCurrent.getTime();

  let days = Math.ceil(differenceDate / (1000 * 3600 * 24)); //ceil, aproxima el numero al entero mas cercano
  return days;
}

// ******* FUNCION MOSTRAR EVENTOS ******
function eventShow() {
  const arrayEventsHTML = events.map((event) => {
    return `
    <div class="event">
        <div class="days">
            <span class="missingDays">${dateDifference(event.date)}</span>
            <span class="text">dias para</span> 
        </div>
        <div class="nameEvent">${event.name}</div>
        <div class="dateEvent">${event.date}</div>
        <div class="actions">
            <button data-id="${event.id}" class="delete">Eliminar</button>
        </div>
    </div>`;
  });

  listEvents.innerHTML = arrayEventsHTML.join("");

  // ***** logica para eliminar eventos *****
  document.querySelectorAll(".delete").forEach((button) => {
    button.addEventListener("click", (e) => {
      const idEvent = button.getAttribute("data-id");
      events = events.filter((event) => event.id !== idEvent);

      saveData(JSON.stringify(events)); //guarda eventos en localStorage

      eventShow();
    });
  });
}

function saveData(data) {
  localStorage.setItem("list", data); //Guardar los eventos
}

function upload() {
  return localStorage.getItem("list");
}
