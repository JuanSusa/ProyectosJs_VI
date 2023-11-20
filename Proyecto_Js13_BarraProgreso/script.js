let progress = document.querySelector(".progress");
let percentage = document.querySelector(".percentage");
let celebration = document.querySelector("body");
let avance = 0;

let time = setInterval(() => {
  avance += 1;
  progress.style.width = `${avance}%` //se agrega estilo a la clase progress

  if (avance === 100) {
    clearInterval(time);
    celebration.classList.add("celebration");
  }

  percentage.textContent = `${avance}%`
}, 75);
